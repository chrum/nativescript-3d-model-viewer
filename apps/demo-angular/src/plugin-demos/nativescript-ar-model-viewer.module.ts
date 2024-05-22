import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptArModelViewerComponent } from './nativescript-ar-model-viewer.component';

import { registerElement } from '@nativescript/angular';
import { ArModelViewer } from '@chrum/nativescript-ar-model-viewer';
registerElement('ArModelViewer', () => ArModelViewer);

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptArModelViewerComponent }])],
  declarations: [NativescriptArModelViewerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptArModelViewerModule {}
