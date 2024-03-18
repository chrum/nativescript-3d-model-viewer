import { ModelViewerCommon, bgColorProperty, modelPathProperty } from './common';
import { AndroidApplication, Application } from '@nativescript/core';

export class ModelViewer extends ModelViewerCommon {
    private _sceneView;
    private _modelPath: string;

    private _bgColor = '#FFFFFFFF';
    get bgColor(): string {
        return this._bgColor;
    }

    set bgColor(value: string) {
        if (value) {
            this._bgColor = value;
            this._setSceneviewBackgroundColor();
        }
    }

    set modelPath(value: string) {
        if (value && this._modelPath !== value) {
            this._modelPath = value;
            this._loadModel();
        }
    }

    [bgColorProperty.setNative](value: any) {
        this.bgColor = value;
    }

    [bgColorProperty.getDefault]() {
        return this.bgColor;
    }

    [modelPathProperty.setNative](value: any) {
        this._modelPath = value;
    }

    [modelPathProperty.getDefault]() {
        return this._modelPath;
    }

    createNativeView() {
        this._sceneView = new com.google.ar.sceneform.SceneView(this._context);
        this._sceneView.setLayoutParams(
            new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT
            ));

        return this._sceneView;
    }

    onLoaded() {
        super.onLoaded();
        this._setSceneviewBackgroundColor();
        // const white = android.graphics.Color.parseColor('#009a9e');

        this._sceneView.resume();

        this._loadModel();
    }

    disposeNativeView() {
        super.disposeNativeView();
        if (this._sceneView) {
            this._sceneView.destroy();
        }
    }

    private _loadModel() {
        if (!this._modelPath || !this._sceneView) {
            return;
        }

        const modelSrc = android.net.Uri.parse(this._modelPath);

        com.google.ar.sceneform.rendering.ModelRenderable.builder()
            .setSource(this._context, modelSrc)
            .setRegistryId(this._modelPath)
            .setIsFilamentGltf(true)
            .build()
            /* @ts-ignore:line */
            .thenAccept(new java.util.function.Consumer({
                accept: renderable => {
                    this._onModelLoaded(renderable);
                }
            }))
            /* @ts-ignore:line */
            .exceptionally(new java.util.function.Function({
                apply: error => {
                    console.error('failed loading \'' + this._modelPath + '\': ' + error);
                }
            }));
    }

    private _setSceneviewBackgroundColor() {
        if (this._sceneView) {
            try {
                const parsed = android.graphics.Color.parseColor(this._bgColor);
                const colorToSet = new com.google.ar.sceneform.rendering.Color(parsed);
                this._sceneView
                    .getRenderer()
                    .setClearColor(colorToSet);

            } catch(e) {
                console.error('Problem with color', this._bgColor);
            }
        }
    }

    private _onModelLoaded(renderable: com.google.ar.sceneform.rendering.Renderable) {
        const transformationSystem = this._makeTransformationSystem();
        const node = new it.chrum.sceneview.nodes.DragTransformableNode(1, transformationSystem);

        this._sceneView.getScene()
            .addChild(node);

        node.setRenderable(renderable);
        node.select();

        const listener = new com.google.ar.sceneform.Scene.OnPeekTouchListener({
            onPeekTouch: (hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: android.view.MotionEvent) => {
                transformationSystem.onTouch(
                    hitTestResult,
                    motionEvent
                );
            }
        });


        this._sceneView.getScene()
            .addOnPeekTouchListener(listener);
    }

    private _makeTransformationSystem() {
        const footprintSelectionVisualizer = new com.google.ar.sceneform.ux.FootprintSelectionVisualizer();
        const androidApp: AndroidApplication = Application.android;
        const displayMetrics = androidApp.foregroundActivity.getResources().getDisplayMetrics();

        return new com.google.ar.sceneform.ux.TransformationSystem(displayMetrics, footprintSelectionVisualizer);
    }
}
