import { ModelViewerCommon } from './common';

export class ModelViewer extends ModelViewerCommon {
    private _scene;
    private _sceneView;

    createNativeView() {
        this._sceneView = SCNView.alloc()
            .initWithFrame(CGRectMake(0, 0, 200, 200));

        this._sceneView.allowsCameraControl = true;
        this._sceneView.autoenablesDefaultLighting = true

        return this._sceneView;
    }
    initNativeView() {
        // optional
    }
    disposeNativeView() {
        // this._sceneView.
    }


    public onLoaded(): void {
        super.onLoaded();
        this._scene = SCNScene.alloc().init();

        const boxGeometry = SCNBox.boxWithWidthHeightLengthChamferRadius(10, 10, 10, 1)
        const boxNode = SCNNode.nodeWithGeometry(boxGeometry);
        this._scene.rootNode.addChildNode(boxNode);

        const model = SCNScene.sceneNamed('Models.scnassets/chrum.dae');
        this._sceneView.scene = model;
    }
}
