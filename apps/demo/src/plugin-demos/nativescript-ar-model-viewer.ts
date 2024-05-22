import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptArModelViewer } from '@demo/shared';
import { } from '@chrum/nativescript-ar-model-viewer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptArModelViewer {
	
}
