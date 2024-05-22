import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: '3D',
        link: 'nativescript-3d-model-viewer'
	},
	{
		name: 'AR',
        link: 'nativescript-ar-model-viewer'
	}
];
}
