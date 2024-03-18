/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class ArFragment extends com.google.ar.sceneform.ux.BaseArFragment {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.ArFragment>;
						public constructor();
						public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
						public static newInstance(fullscreen: boolean): com.google.ar.sceneform.ux.ArFragment;
						public setOnTapPlaneGlbModel(glbSource: string, listener: com.google.ar.sceneform.ux.ArFragment.OnTapModelListener): void;
						public isArRequired(): boolean;
						public setOnViewCreatedListener(onViewCreatedListener: com.google.ar.sceneform.ux.ArFragment.OnViewCreatedListener): void;
						public setOnArUnavailableListener(onArUnavailableListener: com.google.ar.sceneform.ux.ArFragment.OnArUnavailableListener): void;
						public setOnTapPlaneGlbModel(glbSource: string): void;
						public onArUnavailableException(message: com.google.ar.core.exceptions.UnavailableException): void;
					}
					export module ArFragment {
						export class OnArUnavailableListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.ArFragment.OnArUnavailableListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.ArFragment$OnArUnavailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onArUnavailableException(param0: com.google.ar.core.exceptions.UnavailableException): void;
							});
							public constructor();
							public onArUnavailableException(param0: com.google.ar.core.exceptions.UnavailableException): void;
						}
						export class OnTapModelListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.ArFragment.OnTapModelListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.ArFragment$OnTapModelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onModelAdded(param0: com.google.ar.sceneform.rendering.RenderableInstance): void;
								onModelError(param0: java.lang.Throwable): void;
							});
							public constructor();
							public onModelAdded(param0: com.google.ar.sceneform.rendering.RenderableInstance): void;
							public onModelError(param0: java.lang.Throwable): void;
						}
						export class OnViewCreatedListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.ArFragment.OnViewCreatedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.ArFragment$OnViewCreatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onViewCreated(param0: com.google.ar.sceneform.ArSceneView): void;
							});
							public constructor();
							public onViewCreated(param0: com.google.ar.sceneform.ArSceneView): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class ArFrontFacingFragment extends com.google.ar.sceneform.ux.ArFragment {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.ArFrontFacingFragment>;
						public constructor();
						public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
						public onCreateSessionConfig(session: com.google.ar.core.Session): com.google.ar.core.Config;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class AugmentedFaceNode {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.AugmentedFaceNode>;
						public setFaceRegionsRenderable(renderable: com.google.ar.sceneform.rendering.ModelRenderable): com.google.ar.sceneform.rendering.RenderableInstance;
						public getAugmentedFace(): com.google.ar.core.AugmentedFace;
						public onUpdate(frameTime: com.google.ar.sceneform.FrameTime): void;
						public constructor();
						public onActivate(): void;
						public constructor(augmentedFace: com.google.ar.core.AugmentedFace);
						public setAugmentedFace(face: com.google.ar.core.AugmentedFace): void;
						public getFaceMeshTexture(): com.google.ar.sceneform.rendering.Texture;
						public setFaceMeshTexture(texture: com.google.ar.sceneform.rendering.Texture): void;
						public setFaceMeshMaterialOverride(material: com.google.ar.sceneform.rendering.Material): void;
						public getFaceMeshMaterialOverride(): com.google.ar.sceneform.rendering.Material;
						public getFaceRegionsRenderable(): com.google.ar.sceneform.rendering.ModelRenderable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export abstract class BaseArFragment {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseArFragment>;
						public static ARGUMENT_FULLSCREEN: string = "fullscreen";
						public setCanRequestDangerousPermissions(canRequestDangerousPermissions: java.lang.Boolean): void;
						public setSessionConfig(config: com.google.ar.core.Config, configureSession: boolean): void;
						public makeTransformationSystem(): com.google.ar.sceneform.ux.TransformationSystem;
						public requestInstall(): boolean;
						public setOnSessionConfigurationListener(onSessionConfigurationListener: com.google.ar.sceneform.ux.BaseArFragment.OnSessionConfigurationListener): void;
						public pause(): void;
						public destroy(): void;
						public onArUnavailableException(param0: com.google.ar.core.exceptions.UnavailableException): void;
						public onPause(): void;
						public resume(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public getInstructionsController(): com.google.ar.sceneform.ux.InstructionsController;
						public getTransformationSystem(): com.google.ar.sceneform.ux.TransformationSystem;
						public isArRequired(): boolean;
						public setOnAugmentedImageUpdateListener(listener: com.google.ar.sceneform.ux.BaseArFragment.OnAugmentedImageUpdateListener): void;
						public onPeekTouch(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public getAdditionalPermissions(): androidNative.Array<string>;
						public onUpdate(showAugmentedImageInstructions: com.google.ar.sceneform.FrameTime): void;
						public onCreateSessionConfig(session: com.google.ar.core.Session): com.google.ar.core.Config;
						public constructor();
						public onViewCreated(view: globalAndroid.view.View, savedInstanceState: globalAndroid.os.Bundle): void;
						public setSession(session: com.google.ar.core.Session): void;
						public initializeSession(): void;
						public onResume(): void;
						public setupSelectionRenderable(selectionVisualizer: com.google.ar.sceneform.ux.FootprintSelectionVisualizer): void;
						public onWindowFocusChanged(this_: boolean): void;
						public getCanRequestDangerousPermissions(): java.lang.Boolean;
						public getArSceneView(): com.google.ar.sceneform.ArSceneView;
						public setOnAugmentedFaceUpdateListener(listener: com.google.ar.sceneform.ux.BaseArFragment.OnAugmentedFaceUpdateListener): void;
						public setOnTapArPlaneListener(onTapArPlaneListener: com.google.ar.sceneform.ux.BaseArFragment.OnTapArPlaneListener): void;
						public requestDangerousPermissions(): void;
						public setInstructionsController(instructionsController: com.google.ar.sceneform.ux.InstructionsController): void;
						public destroySession(): void;
						public onSessionConfigChanged(this_: com.google.ar.core.Config): void;
						public onCreateView(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.view.ViewGroup, savedInstanceState: globalAndroid.os.Bundle): globalAndroid.view.View;
					}
					export module BaseArFragment {
						export class OnAugmentedFaceUpdateListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseArFragment.OnAugmentedFaceUpdateListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseArFragment$OnAugmentedFaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAugmentedFaceTrackingUpdate(param0: com.google.ar.core.AugmentedFace): void;
							});
							public constructor();
							public onAugmentedFaceTrackingUpdate(param0: com.google.ar.core.AugmentedFace): void;
						}
						export class OnAugmentedImageUpdateListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseArFragment.OnAugmentedImageUpdateListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseArFragment$OnAugmentedImageUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAugmentedImageTrackingUpdate(param0: com.google.ar.core.AugmentedImage): void;
							});
							public constructor();
							public onAugmentedImageTrackingUpdate(param0: com.google.ar.core.AugmentedImage): void;
						}
						export class OnSessionConfigurationListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseArFragment.OnSessionConfigurationListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseArFragment$OnSessionConfigurationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSessionConfiguration(param0: com.google.ar.core.Session, param1: com.google.ar.core.Config): void;
							});
							public constructor();
							public onSessionConfiguration(param0: com.google.ar.core.Session, param1: com.google.ar.core.Config): void;
						}
						export class OnTapArPlaneListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseArFragment.OnTapArPlaneListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseArFragment$OnTapArPlaneListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTapPlane(param0: com.google.ar.core.HitResult, param1: com.google.ar.core.Plane, param2: globalAndroid.view.MotionEvent): void;
							});
							public constructor();
							public onTapPlane(param0: com.google.ar.core.HitResult, param1: com.google.ar.core.Plane, param2: globalAndroid.view.MotionEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export abstract class BaseGesture<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseGesture<any>>;
						public gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility;
						public targetNode: com.google.ar.sceneform.Node;
						public complete(): void;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public hasStarted(): boolean;
						public onStart(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
						public cancel(): void;
						public onCancel(): void;
						public onFinish(): void;
						public canStart(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
						public justStarted(): boolean;
						public pixelsToInches(pixels: number): number;
						public setGestureEventListener(listener: com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener<T>): void;
						public onTouch(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public hasFinished(): boolean;
						public updateGesture(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
						public getTargetNode(): com.google.ar.sceneform.Node;
						public inchesToPixels(inches: number): number;
						public wasCancelled(): boolean;
						public getSelf(): T;
					}
					export module BaseGesture {
						export class OnGestureEventListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener<any>>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseGesture$OnGestureEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdated(param0: T): void;
								onFinished(param0: T): void;
							});
							public constructor();
							public onFinished(param0: T): void;
							public onUpdated(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export abstract class BaseGestureRecognizer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseGestureRecognizer<any>>;
						public gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility;
						public gestures: java.util.ArrayList<T>;
						public addOnGestureStartedListener(listener: com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<T>): void;
						public onTouch(i: com.google.ar.sceneform.HitTestResult, this_: globalAndroid.view.MotionEvent): void;
						public removeOnGestureStartedListener(listener: com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<T>): void;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public tryCreateGestures(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
					}
					export module BaseGestureRecognizer {
						export class OnGestureStartedListener<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.BaseGestureRecognizer$OnGestureStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGestureStarted(param0: T): void;
							});
							public constructor();
							public onGestureStarted(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export abstract class BaseTransformableNode {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseTransformableNode>;
						public isTransforming(): boolean;
						public constructor(transformationSystem: com.google.ar.sceneform.ux.TransformationSystem);
						public onTap(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public isSelected(): boolean;
						public getTransformationSystem(): com.google.ar.sceneform.ux.TransformationSystem;
						public removeTransformationController(transformationController: com.google.ar.sceneform.ux.BaseTransformationController<any>): void;
						public select(): boolean;
						public addTransformationController(transformationController: com.google.ar.sceneform.ux.BaseTransformationController<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export abstract class BaseTransformationController<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BaseTransformationController<any>>;
						public onEndTransformation(param0: T): void;
						public onContinueTransformation(param0: T): void;
						public onUpdated(gesture: T): void;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.BaseGestureRecognizer<T>);
						public canStartTransformation(param0: T): boolean;
						public onActivated(node: com.google.ar.sceneform.Node): void;
						public onGestureStarted(param0: T): void;
						public isEnabled(): boolean;
						public onFinished(param0: T): void;
						public onUpdated(node: com.google.ar.sceneform.Node, frameTime: com.google.ar.sceneform.FrameTime): void;
						public setEnabled(enabled: boolean): void;
						public isTransforming(): boolean;
						public getActiveGesture(): T;
						public onDeactivated(node: com.google.ar.sceneform.Node): void;
						public onUpdated(param0: T): void;
						public onGestureStarted(gesture: T): void;
						public getTransformableNode(): com.google.ar.sceneform.ux.BaseTransformableNode;
						public onFinished(gesture: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.BuildConfig>;
						public static DEBUG: boolean = 0;
						public static LIBRARY_PACKAGE_NAME: string = "com.google.ar.sceneform.ux";
						public static BUILD_TYPE: string = "release";
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class DragGesture extends com.google.ar.sceneform.ux.BaseGesture<com.google.ar.sceneform.ux.DragGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.DragGesture>;
						public getSelf(): com.google.ar.sceneform.ux.DragGesture;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public canStart(i: com.google.ar.sceneform.HitTestResult, this_: globalAndroid.view.MotionEvent): boolean;
						public updateGesture(this_: com.google.ar.sceneform.HitTestResult, hitTestResult: globalAndroid.view.MotionEvent): boolean;
						public onCancel(): void;
						public getSelf(): any;
						public onFinish(): void;
						public onStart(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility, hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent);
						public getDelta(): com.google.ar.sceneform.math.Vector3;
						public getPosition(): com.google.ar.sceneform.math.Vector3;
					}
					export module DragGesture {
						export class OnGestureEventListener extends com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener<com.google.ar.sceneform.ux.DragGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.DragGesture.OnGestureEventListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.DragGesture$OnGestureEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdated(param0: any): void;
								onFinished(param0: any): void;
							});
							public constructor();
							public onUpdated(param0: any): void;
							public onFinished(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class DragGestureRecognizer extends com.google.ar.sceneform.ux.BaseGestureRecognizer<com.google.ar.sceneform.ux.DragGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.DragGestureRecognizer>;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public tryCreateGestures(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
					}
					export module DragGestureRecognizer {
						export class OnGestureStartedListener extends com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<com.google.ar.sceneform.ux.DragGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.DragGestureRecognizer.OnGestureStartedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.DragGestureRecognizer$OnGestureStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGestureStarted(param0: any): void;
							});
							public constructor();
							public onGestureStarted(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class FootprintSelectionVisualizer extends com.google.ar.sceneform.ux.SelectionVisualizer {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.FootprintSelectionVisualizer>;
						public applySelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						public constructor();
						public removeSelectionVisual(node: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						public applySelectionVisual(node: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						public setFootprintRenderable(renderable: com.google.ar.sceneform.rendering.ModelRenderable): void;
						public removeSelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						public getFootprintRenderable(): com.google.ar.sceneform.rendering.ModelRenderable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class GesturePointersUtility {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.GesturePointersUtility>;
						public static motionEventToPosition(me: globalAndroid.view.MotionEvent, pointerId: number): com.google.ar.sceneform.math.Vector3;
						public retainPointerId(pointerId: number): void;
						public constructor(displayMetrics: globalAndroid.util.DisplayMetrics);
						public releasePointerId(pointerId: number): void;
						public inchesToPixels(inches: number): number;
						public isPointerIdRetained(pointerId: number): boolean;
						public pixelsToInches(pixels: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class HandMotionAnimation {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.HandMotionAnimation>;
						public constructor(containerView: globalAndroid.view.View, handImageView: globalAndroid.view.View);
						public applyTransformation(interpolatedTime: number, transformation: globalAndroid.view.animation.Transformation): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class HandMotionView {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.HandMotionView>;
						public onAttachedToWindow(): void;
						public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
						public setVisibility(visibility: number): void;
						public constructor(context: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class InstructionsController {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.InstructionsController>;
						public static TYPE_PLANE_DISCOVERY: number = 0;
						public static TYPE_AUGMENTED_IMAGE_SCAN: number = 1;
						public inflater: globalAndroid.view.LayoutInflater;
						public container: globalAndroid.widget.FrameLayout;
						public setEnabled(enabled: boolean): void;
						public setEnabled(type: number, enable: boolean): void;
						public isVisible(type: number): boolean;
						public setVisible(type: number, visible: boolean): void;
						public setVisible(visible: boolean): void;
						public onCreateView(type: number): globalAndroid.view.View;
						public isVisible(): boolean;
						public constructor(inflater: globalAndroid.view.LayoutInflater, container: globalAndroid.widget.FrameLayout);
						public isEnabled(): boolean;
						public setView(type: number, view: globalAndroid.view.View): void;
						public isEnabled(type: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class PinchGesture extends com.google.ar.sceneform.ux.BaseGesture<com.google.ar.sceneform.ux.PinchGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.PinchGesture>;
						public gapDeltaInches(): number;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public cancel(): void;
						public onCancel(): void;
						public getSelf(): any;
						public getGapDelta(): number;
						public onFinish(): void;
						public canStart(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): boolean;
						public getGap(): number;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility, motionEvent: globalAndroid.view.MotionEvent, pointerId2: number);
						public gapInches(): number;
						public updateGesture(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): boolean;
						public onStart(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public getSelf(): com.google.ar.sceneform.ux.PinchGesture;
					}
					export module PinchGesture {
						export class OnGestureEventListener extends com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener<com.google.ar.sceneform.ux.PinchGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.PinchGesture.OnGestureEventListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.PinchGesture$OnGestureEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdated(param0: any): void;
								onFinished(param0: any): void;
							});
							public constructor();
							public onUpdated(param0: any): void;
							public onFinished(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class PinchGestureRecognizer extends com.google.ar.sceneform.ux.BaseGestureRecognizer<com.google.ar.sceneform.ux.PinchGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.PinchGestureRecognizer>;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public tryCreateGestures(i: com.google.ar.sceneform.HitTestResult, this_: globalAndroid.view.MotionEvent): void;
					}
					export module PinchGestureRecognizer {
						export class OnGestureStartedListener extends com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<com.google.ar.sceneform.ux.PinchGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.PinchGestureRecognizer.OnGestureStartedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.PinchGestureRecognizer$OnGestureStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGestureStarted(param0: any): void;
							});
							public constructor();
							public onGestureStarted(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class RotationController extends com.google.ar.sceneform.ux.BaseTransformationController<com.google.ar.sceneform.ux.TwistGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.RotationController>;
						public onGestureStarted(param0: any): void;
						public onFinished(param0: any): void;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.TwistGestureRecognizer);
						public onEndTransformation(param0: any): void;
						public setRotationRateDegrees(rotationRateDegrees: number): void;
						public onUpdated(node: com.google.ar.sceneform.Node, frameTime: com.google.ar.sceneform.FrameTime): void;
						public canStartTransformation(gesture: com.google.ar.sceneform.ux.TwistGesture): boolean;
						public onContinueTransformation(gesture: com.google.ar.sceneform.ux.TwistGesture): void;
						public onEndTransformation(gesture: com.google.ar.sceneform.ux.TwistGesture): void;
						public onContinueTransformation(param0: any): void;
						public getRotationRateDegrees(): number;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.BaseGestureRecognizer<any>);
						public onUpdated(param0: any): void;
						public canStartTransformation(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class ScaleController extends com.google.ar.sceneform.ux.BaseTransformationController<com.google.ar.sceneform.ux.PinchGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.ScaleController>;
						public static DEFAULT_MIN_SCALE: number = 0.75;
						public static DEFAULT_MAX_SCALE: number = 1.75;
						public static DEFAULT_SENSITIVITY: number = 0.75;
						public static DEFAULT_ELASTICITY: number = 0.15;
						public onGestureStarted(param0: any): void;
						public onFinished(param0: any): void;
						public getMaxScale(): number;
						public onActivated(node: com.google.ar.sceneform.Node): void;
						public canStartTransformation(gesture: com.google.ar.sceneform.ux.PinchGesture): boolean;
						public getMinScale(): number;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.PinchGestureRecognizer);
						public getElasticity(): number;
						public onEndTransformation(param0: any): void;
						public onUpdated(node: com.google.ar.sceneform.Node, frameTime: com.google.ar.sceneform.FrameTime): void;
						public onContinueTransformation(gesture: com.google.ar.sceneform.ux.PinchGesture): void;
						public onUpdated(gesture: any): void;
						public onContinueTransformation(param0: any): void;
						public setMinScale(minScale: number): void;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.BaseGestureRecognizer<any>);
						public setMaxScale(maxScale: number): void;
						public getSensitivity(): number;
						public onEndTransformation(gesture: com.google.ar.sceneform.ux.PinchGesture): void;
						public onUpdated(param0: any): void;
						public setSensitivity(sensitivity: number): void;
						public setElasticity(elasticity: number): void;
						public canStartTransformation(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class SelectionVisualizer {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.SelectionVisualizer>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.ux.SelectionVisualizer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applySelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
							removeSelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						});
						public constructor();
						public applySelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
						public removeSelectionVisual(param0: com.google.ar.sceneform.ux.BaseTransformableNode): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class TransformableNode extends com.google.ar.sceneform.ux.BaseTransformableNode {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.TransformableNode>;
						public constructor(transformationSystem: com.google.ar.sceneform.ux.TransformationSystem);
						public getTranslationController(): com.google.ar.sceneform.ux.TranslationController;
						public getScaleController(): com.google.ar.sceneform.ux.ScaleController;
						public getRotationController(): com.google.ar.sceneform.ux.RotationController;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class TransformationSystem {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.TransformationSystem>;
						public getSelectionVisualizer(): com.google.ar.sceneform.ux.SelectionVisualizer;
						public getTwistRecognizer(): com.google.ar.sceneform.ux.TwistGestureRecognizer;
						public getSelectedNode(): com.google.ar.sceneform.ux.BaseTransformableNode;
						public setSelectionVisualizer(selectionVisualizer: com.google.ar.sceneform.ux.SelectionVisualizer): void;
						public onTouch(this_: com.google.ar.sceneform.HitTestResult, hitTestResult: globalAndroid.view.MotionEvent): void;
						public getDragRecognizer(): com.google.ar.sceneform.ux.DragGestureRecognizer;
						public constructor(displayMetrics: globalAndroid.util.DisplayMetrics, selectionVisualizer: com.google.ar.sceneform.ux.SelectionVisualizer);
						public getGesturePointersUtility(): com.google.ar.sceneform.ux.GesturePointersUtility;
						public addGestureRecognizer(gestureRecognizer: com.google.ar.sceneform.ux.BaseGestureRecognizer<any>): void;
						public selectNode(node: com.google.ar.sceneform.ux.BaseTransformableNode): boolean;
						public getPinchRecognizer(): com.google.ar.sceneform.ux.PinchGestureRecognizer;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class TranslationController extends com.google.ar.sceneform.ux.BaseTransformationController<com.google.ar.sceneform.ux.DragGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.TranslationController>;
						public onEndTransformation(oldAnchor: com.google.ar.sceneform.ux.DragGesture): void;
						public onContinueTransformation(plane: com.google.ar.sceneform.ux.DragGesture): void;
						public onGestureStarted(param0: any): void;
						public setAllowedPlaneTypes(allowedPlaneTypes: java.util.EnumSet<com.google.ar.core.Plane.Type>): void;
						public onFinished(param0: any): void;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.DragGestureRecognizer);
						public onEndTransformation(param0: any): void;
						public onUpdated(node: com.google.ar.sceneform.Node, frameTime: com.google.ar.sceneform.FrameTime): void;
						public onUpdated(gesture: any): void;
						public isTransforming(): boolean;
						public getAllowedPlaneTypes(): java.util.EnumSet<com.google.ar.core.Plane.Type>;
						public canStartTransformation(gesture: com.google.ar.sceneform.ux.DragGesture): boolean;
						public onContinueTransformation(param0: any): void;
						public constructor(transformableNode: com.google.ar.sceneform.ux.BaseTransformableNode, gestureRecognizer: com.google.ar.sceneform.ux.BaseGestureRecognizer<any>);
						public onUpdated(param0: any): void;
						public canStartTransformation(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class TwistGesture extends com.google.ar.sceneform.ux.BaseGesture<com.google.ar.sceneform.ux.TwistGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.TwistGesture>;
						public getSelf(): com.google.ar.sceneform.ux.TwistGesture;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public getDeltaRotationDegrees(): number;
						public onCancel(): void;
						public updateGesture(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): boolean;
						public getSelf(): any;
						public onFinish(): void;
						public onStart(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): void;
						public canStart(hitTestResult: com.google.ar.sceneform.HitTestResult, motionEvent: globalAndroid.view.MotionEvent): boolean;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility, motionEvent: globalAndroid.view.MotionEvent, pointerId2: number);
					}
					export module TwistGesture {
						export class OnGestureEventListener extends com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener<com.google.ar.sceneform.ux.TwistGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.TwistGesture.OnGestureEventListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.TwistGesture$OnGestureEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdated(param0: any): void;
								onFinished(param0: any): void;
							});
							public constructor();
							public onUpdated(param0: any): void;
							public onFinished(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class TwistGestureRecognizer extends com.google.ar.sceneform.ux.BaseGestureRecognizer<com.google.ar.sceneform.ux.TwistGesture> {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.TwistGestureRecognizer>;
						public constructor(gesturePointersUtility: com.google.ar.sceneform.ux.GesturePointersUtility);
						public tryCreateGestures(i: com.google.ar.sceneform.HitTestResult, this_: globalAndroid.view.MotionEvent): void;
					}
					export module TwistGestureRecognizer {
						export class OnGestureStartedListener extends com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener<com.google.ar.sceneform.ux.TwistGesture> {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.TwistGestureRecognizer.OnGestureStartedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.TwistGestureRecognizer$OnGestureStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGestureStarted(param0: any): void;
							});
							public constructor();
							public onGestureStarted(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module ux {
					export class VideoNode {
						public static class: java.lang.Class<com.google.ar.sceneform.ux.VideoNode>;
						public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, texture: com.google.ar.sceneform.rendering.ExternalTexture, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
						public getTexture(): com.google.ar.sceneform.rendering.ExternalTexture;
						public isRotateAlwaysToCamera(): boolean;
						public setRotateAlwaysToCamera(rotateAlwaysToCamera: boolean): void;
						public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
						public createModel(y: globalAndroid.media.MediaPlayer, this_: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.Renderable;
						public getChromaKeyColor(): com.google.ar.sceneform.rendering.Color;
						public makePlane(width: number, height: number, material: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.Renderable;
						public onUpdate(cardPosition: com.google.ar.sceneform.FrameTime): void;
						public getPlayer(): globalAndroid.media.MediaPlayer;
						public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
					}
					export module VideoNode {
						export class Horizontal extends com.google.ar.sceneform.ux.VideoNode {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.VideoNode.Horizontal>;
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, texture: com.google.ar.sceneform.rendering.ExternalTexture, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public makePlane(width: number, height: number, material: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.Renderable;
						}
						export class Listener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.VideoNode.Listener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.VideoNode$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCreated(param0: com.google.ar.sceneform.ux.VideoNode): void;
								onError(param0: java.lang.Throwable): void;
							});
							public constructor();
							public onError(param0: java.lang.Throwable): void;
							public onCreated(param0: com.google.ar.sceneform.ux.VideoNode): void;
						}
						export class OnCreateListener {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.VideoNode.OnCreateListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.ux.VideoNode$OnCreateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onError(param0: java.lang.Throwable): void;
							});
							public constructor();
							public onError(param0: java.lang.Throwable): void;
						}
						export class Vertical extends com.google.ar.sceneform.ux.VideoNode {
							public static class: java.lang.Class<com.google.ar.sceneform.ux.VideoNode.Vertical>;
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, chromaKeyColor: com.google.ar.sceneform.rendering.Color, texture: com.google.ar.sceneform.rendering.ExternalTexture, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public constructor(context: globalAndroid.content.Context, player: globalAndroid.media.MediaPlayer, listener: com.google.ar.sceneform.ux.VideoNode.Listener);
							public makePlane(width: number, height: number, material: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.Renderable;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.ar.sceneform.ux.BaseGesture:1
//com.google.ar.sceneform.ux.BaseGesture.OnGestureEventListener:1
//com.google.ar.sceneform.ux.BaseGestureRecognizer:1
//com.google.ar.sceneform.ux.BaseGestureRecognizer.OnGestureStartedListener:1
//com.google.ar.sceneform.ux.BaseTransformationController:1

