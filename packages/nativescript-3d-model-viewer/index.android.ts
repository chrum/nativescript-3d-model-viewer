import { ModelViewerCommon, bgColorProperty, modelPathProperty } from './common';
import { AndroidApplication, Application } from '@nativescript/core';

declare const com: any;
declare const it: any;

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
            this._setSceneviewBackgroungColor(this._bgColor)
        }
    }

    set modelPath(value: string) {
        if (value && this._modelPath !== value) {
            this._modelPath = value;
            this._setSceneviewBackgroungColor(this._modelPath)
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
        this._setSceneviewBackgroungColor(this._bgColor);
        // const white = android.graphics.Color.parseColor('#009a9e');

        this._sceneView.resume();

        this._loadModel();
    }

    private _loadModel() {
        if (!this._modelPath) {
            console.log('No model to load');
            return;
        }
        const modelName = 'chrum.glb';
        const modelSrc = android.net.Uri.parse(modelName);

        com.google.ar.sceneform.rendering.ModelRenderable.builder()
            .setSource(this._context, modelSrc)
            .setRegistryId(modelName)
            /* @ts-ignore:line */
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
                    console.error('failed loading \'' + modelName + '\': ' + error);
                }
            }));
    }

    private _setSceneviewBackgroungColor(color: string) {
        if (this._sceneView) {
            const parsed = android.graphics.Color.parseColor(color);
            const colorToSet = new com.google.ar.sceneform.rendering.Color(parsed);
            this._sceneView
                .getRenderer()
                .setClearColor(colorToSet);
        }
    }

    private _onModelLoaded(renderable) {
        const transformationSystem = this._makeTranformationSystem();


        const node = new it.chrum.sceneview.nodes.DragTransformableNode(1, transformationSystem);

        this._sceneView.getScene().addChild(node);
        node.setRenderable(renderable);
        node.select();

        const listener = new com.google.ar.sceneform.Scene.OnPeekTouchListener({
            /* @ts-ignore:line */
            onPeekTouch: (hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: android.view.MotionEvent) => {
                transformationSystem.onTouch(
                    hitTestResult,
                    motionEvent
                );
            }
        });


        this._sceneView.getScene().addOnPeekTouchListener(listener);


    }

    private _makeTranformationSystem() {
        const footprintSelectionVisualizer = new com.google.ar.sceneform.ux.FootprintSelectionVisualizer();
        const androidApp: AndroidApplication = Application.android;
        const displayMetrics = androidApp.foregroundActivity.getResources().getDisplayMetrics();

        return new com.google.ar.sceneform.ux.TransformationSystem(displayMetrics, footprintSelectionVisualizer);
    }
}
