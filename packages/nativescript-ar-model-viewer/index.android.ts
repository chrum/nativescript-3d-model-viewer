import { ArModelViewerCommon } from './common';
import {Application} from '@nativescript/core';

export class ArModelViewer extends ArModelViewerCommon {
    private _sceneView;

    createNativeView() {
        this.nativeView.setId(android.view.View.generateViewId());

        const fragmentContainer = new androidx.fragment.app.FragmentContainerView(this._context);
        fragmentContainer.setLayoutParams(
            new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT
            ));

        const supportFragmentManager = (Application.android.foregroundActivity || Application.android.startActivity)
            .getSupportFragmentManager();

        const fragment = new NsArFragment();

        supportFragmentManager
            .beginTransaction()
            .add(this.nativeView.getId(), fragment as any)
            .commit();

        return fragmentContainer;
    }

    onLoaded() {
        super.onLoaded();

        // this._sceneView.resume();
    }
}

@NativeClass()
export class NsArFragment extends com.google.ar.sceneform.ux.ArFragment {
    constructor() {
        super();
        // necessary when extending TypeScript constructors
        return global.__native(this);
    }
}
