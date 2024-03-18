import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Nativescript3dModelViewerComponent } from './nativescript-3d-model-viewer.component';

import { registerElement } from '@nativescript/angular';
import { ModelViewer } from '@chrum/nativescript-3d-model-viewer';
registerElement('ModelViewer', () => ModelViewer);

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{
        path: '',
        component: Nativescript3dModelViewerComponent
    }])],
    declarations: [Nativescript3dModelViewerComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class Nativescript3dModelViewerModule {
}
