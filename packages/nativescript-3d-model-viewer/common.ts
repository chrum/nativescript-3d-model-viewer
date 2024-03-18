import { Property, View } from '@nativescript/core';

export class ModelViewerCommon extends View {
}

export const bgColorProperty = new Property<ModelViewerCommon, string>({
    name: 'bgColor',
})

export const modelPathProperty = new Property<ModelViewerCommon, string>({
    name: 'modelPath',
})

modelPathProperty.register(ModelViewerCommon);
bgColorProperty.register(ModelViewerCommon);
