import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'nativescript-3d-model-viewer', loadChildren: () => import('./plugin-demos/nativescript-3d-model-viewer.module').then(m => m.Nativescript3dModelViewerModule) },
	{ path: 'nativescript-ar-model-viewer', loadChildren: () => import('./plugin-demos/nativescript-ar-model-viewer.module').then(m => m.NativescriptArModelViewerModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
