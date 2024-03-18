/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class AnchorNode extends com.google.ar.sceneform.Node {
					public static class: java.lang.Class<com.google.ar.sceneform.AnchorNode>;
					public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
					public setWorldPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public setAnchor(anchor: com.google.ar.core.Anchor): void;
					public isTracking(): boolean;
					public onUpdate(frameTime: com.google.ar.sceneform.FrameTime): void;
					public getAnchor(): com.google.ar.core.Anchor;
					public constructor();
					public setSmoothed(smoothed: boolean): void;
					public setLocalPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public setLocalRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public setWorldRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public isSmoothed(): boolean;
					public constructor(anchor: com.google.ar.core.Anchor);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class ArHelpers {
					public static class: java.lang.Class<com.google.ar.sceneform.ArHelpers>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class ArSceneView extends com.google.ar.sceneform.SceneView {
					public static class: java.lang.Class<com.google.ar.sceneform.ArSceneView>;
					public cameraTextureId: number;
					public _lightEstimationConfig: com.gorisse.thomas.sceneform.light.LightEstimationConfig;
					public _estimatedEnvironmentLights: com.gorisse.thomas.sceneform.light.EnvironmentLightsEstimate;
					public hasTrackedPlane(): boolean;
					public getAllAugmentedImages(): java.util.Collection<com.google.ar.core.AugmentedImage>;
					public getUpdatedPlanes(trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.Collection<com.google.ar.core.Plane>;
					public getPlaneRenderer(): com.google.ar.sceneform.rendering.PlaneRenderer;
					public getArFrame(): com.google.ar.core.Frame;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public onBeginFrame(e: number): boolean;
					public destroySession(): void;
					public pauseAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
					public getUpdatedAugmentedImages(trackingState: com.google.ar.core.TrackingState, trackingMethod: com.google.ar.core.AugmentedImage.TrackingMethod): java.util.Collection<com.google.ar.core.AugmentedImage>;
					public destroy(): void;
					public getSession(): com.google.ar.core.Session;
					public pause(): void;
					public isTrackingPlane(): boolean;
					public getCameraStream(): com.google.ar.sceneform.rendering.CameraStream;
					public getAllAugmentedFaces(trackingState: com.google.ar.core.TrackingState): java.util.Collection<com.google.ar.core.AugmentedFace>;
					public setSession(session: com.google.ar.core.Session): void;
					public isTrackingAugmentedFaces(): boolean;
					public hasTrackedAugmentedImage(): boolean;
					public onLayout(height: boolean, this_: number, changed: number, left: number, top: number): void;
					public getAllPlanes(): java.util.Collection<com.google.ar.core.Plane>;
					public getUpdatedPlanes(): java.util.Collection<com.google.ar.core.Plane>;
					public isTrackingAugmentedImage(): boolean;
					public setOnSessionConfigChangeListener(listener: com.google.ar.sceneform.ArSceneView.OnSessionConfigChangeListener): void;
					public hasTrackedAugmentedFaces(): boolean;
					public doFrame(frameTimeNanos: number): void;
					public getAllAugmentedImages(trackingState: com.google.ar.core.TrackingState, trackingMethod: com.google.ar.core.AugmentedImage.TrackingMethod): java.util.Collection<com.google.ar.core.AugmentedImage>;
					public getUpdatedAugmentedFaces(): java.util.Collection<com.google.ar.core.AugmentedFace>;
					public setSessionConfig(config: com.google.ar.core.Config, configureSession: boolean): void;
					public getSessionConfig(): com.google.ar.core.Config;
					public resume(): void;
					public pauseSession(): void;
					public getAllAugmentedFaces(): java.util.Collection<com.google.ar.core.AugmentedFace>;
					public constructor(context: globalAndroid.content.Context);
					public resumeAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
					public getUpdatedAugmentedFaces(trackingState: com.google.ar.core.TrackingState): java.util.Collection<com.google.ar.core.AugmentedFace>;
					public resumeSession(): void;
					public getUpdatedAugmentedImages(): java.util.Collection<com.google.ar.core.AugmentedImage>;
					public initialize(): void;
					public setCameraStreamRenderPriority(priority: number): void;
					public getAllPlanes(trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.Collection<com.google.ar.core.Plane>;
				}
				export module ArSceneView {
					export class OnSessionConfigChangeListener {
						public static class: java.lang.Class<com.google.ar.sceneform.ArSceneView.OnSessionConfigChangeListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.ArSceneView$OnSessionConfigChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSessionConfigChange(param0: com.google.ar.core.Config): void;
						});
						public constructor();
						public onSessionConfigChange(param0: com.google.ar.core.Config): void;
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
				export class BuildConfig {
					public static class: java.lang.Class<com.google.ar.sceneform.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = "com.google.ar.sceneform";
					public static BUILD_TYPE: string = "release";
					public static VERSION_NAME: string = "1.23.0";
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class Camera extends com.google.ar.sceneform.Node implements com.google.ar.sceneform.rendering.CameraProvider {
					public static class: java.lang.Class<com.google.ar.sceneform.Camera>;
					public getVerticalFovDegrees(): number;
					public getFarClipPlane(): number;
					public updateTrackedPose(param0: com.google.ar.core.Camera): void;
					public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
					public screenPointToRay(x: number, y: number): com.google.ar.sceneform.collision.Ray;
					public setProjectionMatrix(matrix: com.google.ar.sceneform.math.Matrix): void;
					public setVerticalFovDegrees(verticalFov: number): void;
					public setParent(parent: com.google.ar.sceneform.NodeParent): void;
					public getProjectionMatrix(): com.google.ar.sceneform.math.Matrix;
					public worldToScreenPoint(point: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
					public getNearClipPlane(): number;
					public setWorldPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public isActive(): boolean;
					public getViewMatrix(): com.google.ar.sceneform.math.Matrix;
					public setFarClipPlane(farPlane: number): void;
					public setLocalPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public setLocalRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public setWorldRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public updateTrackedPose(camera: com.google.ar.core.Camera): void;
					public setNearClipPlane(nearPlane: number): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class FrameTime {
					public static class: java.lang.Class<com.google.ar.sceneform.FrameTime>;
					public getDeltaTime(unit: java.util.concurrent.TimeUnit): number;
					public getStartSeconds(): number;
					public getStartTime(unit: java.util.concurrent.TimeUnit): number;
					public getDeltaSeconds(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class HitTestResult extends com.google.ar.sceneform.collision.RayHit {
					public static class: java.lang.Class<com.google.ar.sceneform.HitTestResult>;
					public set(other: com.google.ar.sceneform.HitTestResult): void;
					public reset(): void;
					public constructor();
					public set(other: com.google.ar.sceneform.collision.RayHit): void;
					public getNode(): com.google.ar.sceneform.Node;
					public setNode(node: com.google.ar.sceneform.Node): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class Node extends com.google.ar.sceneform.NodeParent implements com.google.ar.sceneform.common.TransformProvider {
					public static class: java.lang.Class<com.google.ar.sceneform.Node>;
					public worldToLocalPoint(point: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
					public getDown(): com.google.ar.sceneform.math.Vector3;
					public getLight(): com.google.ar.sceneform.rendering.Light;
					public setWorldScale(localModelMatrix: com.google.ar.sceneform.math.Vector3): void;
					public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
					public removeLifecycleListener(lifecycleListener: com.google.ar.sceneform.Node.LifecycleListener): void;
					public localToWorldPoint(point: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
					public constructor();
					public getLeft(): com.google.ar.sceneform.math.Vector3;
					public getRenderableInstance(): com.google.ar.sceneform.rendering.RenderableInstance;
					public setOnTouchListener(onTouchListener: com.google.ar.sceneform.Node.OnTouchListener): void;
					public setLocalRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public setWorldRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
					public setRenderable(this_: com.google.ar.sceneform.rendering.Renderable): com.google.ar.sceneform.rendering.RenderableInstance;
					public isEnabled(): boolean;
					public getRight(): com.google.ar.sceneform.math.Vector3;
					public addTransformChangedListener(transformChangedListener: com.google.ar.sceneform.Node.TransformChangedListener): void;
					public removeTransformChangedListener(transformChangedListener: com.google.ar.sceneform.Node.TransformChangedListener): void;
					public getWorldRotation(): com.google.ar.sceneform.math.Quaternion;
					public setWorldPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public getForward(): com.google.ar.sceneform.math.Vector3;
					public setEnabled(enabled: boolean): void;
					public onUpdate(frameTime: com.google.ar.sceneform.FrameTime): void;
					public isActive(): boolean;
					public setName(name: string): void;
					public getParent(): com.google.ar.sceneform.NodeParent;
					public getUp(): com.google.ar.sceneform.math.Vector3;
					public isTopLevel(): boolean;
					public setSelectable(selectable: boolean): void;
					public setLookDirection(lookDirection: com.google.ar.sceneform.math.Vector3): void;
					public canAddChild(child: com.google.ar.sceneform.Node, failureReason: java.lang.StringBuilder): boolean;
					public onRemoveChild(child: com.google.ar.sceneform.Node): void;
					public getWorldPosition(): com.google.ar.sceneform.math.Vector3;
					public getRenderable(): com.google.ar.sceneform.rendering.Renderable;
					public setCollisionShape(collisionShape: com.google.ar.sceneform.collision.CollisionShape): void;
					public findInHierarchy(condition: any /* any*/): com.google.ar.sceneform.Node;
					public onDeactivate(): void;
					public setLocalScale(scale: com.google.ar.sceneform.math.Vector3): void;
					public isSelectable(): boolean;
					public toString(): string;
					public getParentNode(): com.google.ar.sceneform.Node;
					public getWorldScale(): com.google.ar.sceneform.math.Vector3;
					public onAddChild(child: com.google.ar.sceneform.Node): void;
					public getScene(): com.google.ar.sceneform.Scene;
					public isDescendantOf(ancestor: com.google.ar.sceneform.NodeParent): boolean;
					public setOnTapListener(onTapListener: com.google.ar.sceneform.Node.OnTapListener): void;
					public getLocalRotation(): com.google.ar.sceneform.math.Quaternion;
					public getLocalScale(): com.google.ar.sceneform.math.Vector3;
					public getCollisionShape(): com.google.ar.sceneform.collision.CollisionShape;
					public onTransformChange(originatingNode: com.google.ar.sceneform.Node): void;
					public setParent(parent: com.google.ar.sceneform.NodeParent): void;
					public localToWorldDirection(direction: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
					public onTouchEvent(downPosition: com.google.ar.sceneform.HitTestResult, hitNode: globalAndroid.view.MotionEvent): boolean;
					public onActivate(): void;
					public addLifecycleListener(lifecycleListener: com.google.ar.sceneform.Node.LifecycleListener): void;
					public worldToLocalDirection(direction: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
					public getName(): string;
					public setLookDirection(lookDirection: com.google.ar.sceneform.math.Vector3, upDirection: com.google.ar.sceneform.math.Vector3): void;
					public callOnHierarchy(consumer: any /* any*/): void;
					public setLocalPosition(position: com.google.ar.sceneform.math.Vector3): void;
					public setLight(light: com.google.ar.sceneform.rendering.Light): void;
					public getBack(): com.google.ar.sceneform.math.Vector3;
					public getLocalPosition(): com.google.ar.sceneform.math.Vector3;
				}
				export module Node {
					export class LifecycleListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Node.LifecycleListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Node$LifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onActivated(param0: com.google.ar.sceneform.Node): void;
							onUpdated(param0: com.google.ar.sceneform.Node, param1: com.google.ar.sceneform.FrameTime): void;
							onDeactivated(param0: com.google.ar.sceneform.Node): void;
						});
						public constructor();
						public onUpdated(param0: com.google.ar.sceneform.Node, param1: com.google.ar.sceneform.FrameTime): void;
						public onDeactivated(param0: com.google.ar.sceneform.Node): void;
						public onActivated(param0: com.google.ar.sceneform.Node): void;
					}
					export class OnTapListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Node.OnTapListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Node$OnTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTap(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
						});
						public constructor();
						public onTap(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
					}
					export class OnTouchListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Node.OnTouchListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Node$OnTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
						});
						public constructor();
						public onTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
					}
					export class TapTrackingData {
						public static class: java.lang.Class<com.google.ar.sceneform.Node.TapTrackingData>;
					}
					export class TransformChangedListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Node.TransformChangedListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Node$TransformChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTransformChanged(param0: com.google.ar.sceneform.Node, param1: com.google.ar.sceneform.Node): void;
						});
						public constructor();
						public onTransformChanged(param0: com.google.ar.sceneform.Node, param1: com.google.ar.sceneform.Node): void;
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
				export abstract class NodeParent {
					public static class: java.lang.Class<com.google.ar.sceneform.NodeParent>;
					public callOnHierarchy(i: any /* any*/): void;
					public findByName(name: string): com.google.ar.sceneform.Node;
					public canAddChild(child: com.google.ar.sceneform.Node, failureReason: java.lang.StringBuilder): boolean;
					public onRemoveChild(child: com.google.ar.sceneform.Node): void;
					public constructor();
					public onAddChild(child: com.google.ar.sceneform.Node): void;
					public addChild(child: com.google.ar.sceneform.Node): void;
					public getChildren(): java.util.List<com.google.ar.sceneform.Node>;
					public findInHierarchy(i: any /* any*/): com.google.ar.sceneform.Node;
					public removeChild(child: com.google.ar.sceneform.Node): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class Scene extends com.google.ar.sceneform.NodeParent {
					public static class: java.lang.Class<com.google.ar.sceneform.Scene>;
					public hitTest(ray: com.google.ar.sceneform.collision.Ray, onlySelectableNodes: boolean): com.google.ar.sceneform.HitTestResult;
					public onRemoveChild(child: com.google.ar.sceneform.Node): void;
					public hitTestAll(motionEvent: globalAndroid.view.MotionEvent): java.util.ArrayList<com.google.ar.sceneform.HitTestResult>;
					public addOnPeekTouchListener(onPeekTouchListener: com.google.ar.sceneform.Scene.OnPeekTouchListener): void;
					public hitTestAll(ray: com.google.ar.sceneform.collision.Ray): java.util.ArrayList<com.google.ar.sceneform.HitTestResult>;
					public getRenderer(): com.google.ar.sceneform.rendering.Renderer;
					public getView(): com.google.ar.sceneform.SceneView;
					public addOnUpdateListener(onUpdateListener: com.google.ar.sceneform.Scene.OnUpdateListener): void;
					public removeOnPeekTouchListener(onPeekTouchListener: com.google.ar.sceneform.Scene.OnPeekTouchListener): void;
					public overlapTest(node: com.google.ar.sceneform.Node): com.google.ar.sceneform.Node;
					public overlapTestAll(node: com.google.ar.sceneform.Node): java.util.ArrayList<com.google.ar.sceneform.Node>;
					public destroy(): void;
					public constructor();
					public onAddChild(child: com.google.ar.sceneform.Node): void;
					public constructor(view: com.google.ar.sceneform.SceneView);
					public getCamera(): com.google.ar.sceneform.Camera;
					public removeOnUpdateListener(onUpdateListener: com.google.ar.sceneform.Scene.OnUpdateListener): void;
					public setOnTouchListener(onTouchListener: com.google.ar.sceneform.Scene.OnTouchListener): void;
					public hitTest(motionEvent: globalAndroid.view.MotionEvent, onlySelectableNodes: boolean): com.google.ar.sceneform.HitTestResult;
				}
				export module Scene {
					export class OnPeekTouchListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Scene.OnPeekTouchListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Scene$OnPeekTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPeekTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
						});
						public constructor();
						public onPeekTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): void;
					}
					export class OnTouchListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Scene.OnTouchListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Scene$OnTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSceneTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
						});
						public constructor();
						public onSceneTouch(param0: com.google.ar.sceneform.HitTestResult, param1: globalAndroid.view.MotionEvent): boolean;
					}
					export class OnUpdateListener {
						public static class: java.lang.Class<com.google.ar.sceneform.Scene.OnUpdateListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.Scene$OnUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onUpdate(param0: com.google.ar.sceneform.FrameTime): void;
						});
						public constructor();
						public onUpdate(param0: com.google.ar.sceneform.FrameTime): void;
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
				export class SceneView {
					public static class: java.lang.Class<com.google.ar.sceneform.SceneView>;
					public static DEFAULT_IBL_LOCATION: string = "environments/default_environment_ibl.ktx";
					public static DEFAULT_SKYBOX_LOCATION: string = "environments/default_environment_skybox.ktx";
					public _environment: com.gorisse.thomas.sceneform.environment.Environment;
					public _mainLight: java.lang.Integer;
					public setBackground(this_: globalAndroid.graphics.drawable.Drawable): void;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public isDebugEnabled(): boolean;
					public getRenderer(): com.google.ar.sceneform.rendering.Renderer;
					public stopMirroringToSurface(surface: globalAndroid.view.Surface): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public doFrameNoRepost(frameTimeNanos: number): void;
					public destroy(): void;
					public pause(): void;
					public startMirroringToSurface(surface: globalAndroid.view.Surface, left: number, bottom: number, width: number, height: number): void;
					public onTouchEvent(motionEvent: globalAndroid.view.MotionEvent): boolean;
					public setTransparent(transparent: boolean): void;
					public getScene(): com.google.ar.sceneform.Scene;
					public setFrameRateFactor(frameRateFactor: com.google.ar.sceneform.SceneView.FrameRate): void;
					public static reclaimReleasedResources(): number;
					public pauseScene(): void;
					public onBeginFrame(frameTimeNanos: number): boolean;
					public destroyScene(): void;
					public enableDebug(enable: boolean): void;
					public doFrame(frameTimeNanos: number): void;
					public static destroyAllResources(): void;
					public resumeScene(): void;
					public resume(): void;
					public constructor(context: globalAndroid.content.Context);
					public setMaxFramesPerSeconds(maxFramesPerSeconds: number): void;
					public initialize(): void;
				}
				export module SceneView {
					export class FrameRate {
						public static class: java.lang.Class<com.google.ar.sceneform.SceneView.FrameRate>;
						public static FULL: com.google.ar.sceneform.SceneView.FrameRate;
						public static HALF: com.google.ar.sceneform.SceneView.FrameRate;
						public static THIRD: com.google.ar.sceneform.SceneView.FrameRate;
						public static values(): androidNative.Array<com.google.ar.sceneform.SceneView.FrameRate>;
						public static valueOf(name: string): com.google.ar.sceneform.SceneView.FrameRate;
						public factor(): number;
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
				export class Sceneform {
					public static class: java.lang.Class<com.google.ar.sceneform.Sceneform>;
					public static isSupported(context: globalAndroid.content.Context): boolean;
					public constructor();
					public static versionName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class SequentialTask {
					public static class: java.lang.Class<com.google.ar.sceneform.SequentialTask>;
					public isDone(): boolean;
					public appendRunnable(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class TouchEventSystem {
					public static class: java.lang.Class<com.google.ar.sceneform.TouchEventSystem>;
					public addOnPeekTouchListener(onPeekTouchListener: com.google.ar.sceneform.Scene.OnPeekTouchListener): void;
					public getOnTouchListener(): com.google.ar.sceneform.Scene.OnTouchListener;
					public constructor();
					public onTouchEvent(handlingNode: com.google.ar.sceneform.HitTestResult, actionIndex: globalAndroid.view.MotionEvent): void;
					public removeOnPeekTouchListener(onPeekTouchListener: com.google.ar.sceneform.Scene.OnPeekTouchListener): void;
					public setOnTouchListener(onTouchListener: com.google.ar.sceneform.Scene.OnTouchListener): void;
				}
				export module TouchEventSystem {
					export class TouchTarget {
						public static class: java.lang.Class<com.google.ar.sceneform.TouchEventSystem.TouchTarget>;
						public static ALL_POINTER_IDS: number = -1;
						public node: com.google.ar.sceneform.Node;
						public pointerIdBits: number;
						public next: com.google.ar.sceneform.TouchEventSystem.TouchTarget;
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
				export class Trackables {
					public static class: java.lang.Class<com.google.ar.sceneform.Trackables>;
					public static getAugmentedImages(trackables: java.util.Collection<any>, trackingState: com.google.ar.core.TrackingState, trackingMethod: com.google.ar.core.AugmentedImage.TrackingMethod): java.util.Collection<any>;
					public static getAugmentedImages(trackables: java.util.Collection<any>): java.util.Collection<any>;
					public constructor();
					public static filterPlanes(trackables: java.util.stream.Stream, trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.stream.Stream;
					public static filterAugmentedImages(trackables: java.util.stream.Stream, trackingState: com.google.ar.core.TrackingState, trackingMethod: com.google.ar.core.AugmentedImage.TrackingMethod): java.util.stream.Stream;
					public static filterAugmentedFaces(trackables: java.util.stream.Stream, trackingState: com.google.ar.core.TrackingState): java.util.stream.Stream;
					public static filterTrackables(trackables: java.util.stream.Stream, type: java.lang.Class<any>, trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.stream.Stream;
					public static getPlanes(trackables: java.util.Collection<any>, trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.Collection<any>;
					public static getAugmentedFaces(trackables: java.util.Collection<any>): java.util.Collection<any>;
					public static getPlanes(trackables: java.util.Collection<any>): java.util.Collection<any>;
					public static filterTrackables(trackables: java.util.stream.Stream, trackingStates: androidNative.Array<com.google.ar.core.TrackingState>): java.util.stream.Stream;
					public static getAugmentedFaces(trackables: java.util.Collection<any>, trackingState: com.google.ar.core.TrackingState): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export class ViewTouchHelpers {
					public static class: java.lang.Class<com.google.ar.sceneform.ViewTouchHelpers>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module ar {
			export module sceneform {
				export module animation {
					export class AnimatableModel {
						public static class: java.lang.Class<com.google.ar.sceneform.animation.AnimatableModel>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.animation.AnimatableModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAnimation(param0: number): com.google.ar.sceneform.animation.ModelAnimation;
							getAnimationCount(): number;
							onModelAnimationChanged(animation: com.google.ar.sceneform.animation.ModelAnimation): void;
							applyAnimationChange(param0: com.google.ar.sceneform.animation.ModelAnimation): boolean;
							getAnimation(name: string): com.google.ar.sceneform.animation.ModelAnimation;
							getAnimationOrThrow(name: string): com.google.ar.sceneform.animation.ModelAnimation;
							getAnimationIndex(this_: string): number;
							getAnimationName(animationIndex: number): string;
							getAnimationNames(): java.util.List<string>;
							hasAnimations(): boolean;
							setAnimationsTimePosition(this_: number): void;
							setAnimationsFramePosition(this_: number): void;
							animate(repeat: boolean): globalAndroid.animation.ObjectAnimator;
							animate(animationNames: androidNative.Array<string>): globalAndroid.animation.ObjectAnimator;
							animate(animationIndexes: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
							animate(animations: androidNative.Array<com.google.ar.sceneform.animation.ModelAnimation>): globalAndroid.animation.ObjectAnimator;
						});
						public constructor();
						public getAnimationIndex(this_: string): number;
						public getAnimationNames(): java.util.List<string>;
						public hasAnimations(): boolean;
						public animate(repeat: boolean): globalAndroid.animation.ObjectAnimator;
						public animate(animationNames: androidNative.Array<string>): globalAndroid.animation.ObjectAnimator;
						public onModelAnimationChanged(animation: com.google.ar.sceneform.animation.ModelAnimation): void;
						public getAnimation(name: string): com.google.ar.sceneform.animation.ModelAnimation;
						public animate(animationIndexes: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public getAnimation(param0: number): com.google.ar.sceneform.animation.ModelAnimation;
						public getAnimationOrThrow(name: string): com.google.ar.sceneform.animation.ModelAnimation;
						public setAnimationsTimePosition(this_: number): void;
						public getAnimationCount(): number;
						public getAnimationName(animationIndex: number): string;
						public animate(animations: androidNative.Array<com.google.ar.sceneform.animation.ModelAnimation>): globalAndroid.animation.ObjectAnimator;
						public setAnimationsFramePosition(this_: number): void;
						public applyAnimationChange(param0: com.google.ar.sceneform.animation.ModelAnimation): boolean;
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
				export module animation {
					export class ModelAnimation {
						public static class: java.lang.Class<com.google.ar.sceneform.animation.ModelAnimation>;
						public static TIME_POSITION: globalAndroid.util.FloatProperty<com.google.ar.sceneform.animation.ModelAnimation>;
						public static FRAME_POSITION: globalAndroid.util.Property<com.google.ar.sceneform.animation.ModelAnimation,java.lang.Integer>;
						public static FRACTION_POSITION: globalAndroid.util.Property<com.google.ar.sceneform.animation.ModelAnimation,java.lang.Float>;
						public getFrameAtTime(time: number): number;
						public getFractionAtTime(time: number): number;
						public getDuration(): number;
						public getTimeAtFrame(frame: number): number;
						public getTimeAtFraction(fraction: number): number;
						public static frameToTime(frame: number, frameRate: number): number;
						public isDirty(): boolean;
						public getFrameCount(): number;
						public static timeToFraction(time: number, duration: number): number;
						public getName(): string;
						public static fractionToTime(fraction: number, duration: number): number;
						public getFrameRate(): number;
						public getFramePosition(): number;
						public setFractionPosition(fractionPosition: number): void;
						public geIndex(): number;
						public getDurationMillis(): number;
						public setFramePosition(frameNumber: number): void;
						public setDirty(isDirty: boolean): void;
						public getTimePosition(): number;
						public constructor(model: com.google.ar.sceneform.animation.AnimatableModel, name: string, index: number, duration: number, frameRate: number);
						public getFractionPosition(): number;
						public static timeToFrame(time: number, frameRate: number): number;
						public setTimePosition(timePosition: number): void;
						public static secondsToMillis(time: number): number;
					}
					export module ModelAnimation {
						export class PropertyValuesHolder {
							public static class: java.lang.Class<com.google.ar.sceneform.animation.ModelAnimation.PropertyValuesHolder>;
							public constructor();
							public static ofFrame(frames: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofTime(times: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofFraction(fractions: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
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
				export module animation {
					export class ModelAnimator {
						public static class: java.lang.Class<com.google.ar.sceneform.animation.ModelAnimator>;
						public constructor();
						public static ofAnimation(i: com.google.ar.sceneform.animation.AnimatableModel, model: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofPropertyValuesHolder(model: com.google.ar.sceneform.animation.AnimatableModel, values: androidNative.Array<globalAndroid.animation.PropertyValuesHolder>): globalAndroid.animation.ObjectAnimator;
						public static ofAllAnimations(i: com.google.ar.sceneform.animation.AnimatableModel): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationTime(model: com.google.ar.sceneform.animation.AnimatableModel, animation: com.google.ar.sceneform.animation.ModelAnimation, times: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationTime(model: com.google.ar.sceneform.animation.AnimatableModel, animationIndex: number, times: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFrame(model: com.google.ar.sceneform.animation.AnimatableModel, animationName: string, frames: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimation(i: com.google.ar.sceneform.animation.AnimatableModel, model: androidNative.Array<com.google.ar.sceneform.animation.ModelAnimation>): globalAndroid.animation.ObjectAnimator;
						public static ofMultipleAnimations(i: com.google.ar.sceneform.animation.AnimatableModel, model: androidNative.Array<string>): java.util.List<globalAndroid.animation.ObjectAnimator>;
						public static ofAnimation(i: com.google.ar.sceneform.animation.AnimatableModel, model: androidNative.Array<string>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFraction(model: com.google.ar.sceneform.animation.AnimatableModel, animationName: string, fractions: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFraction(model: com.google.ar.sceneform.animation.AnimatableModel, animation: com.google.ar.sceneform.animation.ModelAnimation, fractions: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFrame(model: com.google.ar.sceneform.animation.AnimatableModel, animationIndex: number, frames: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFrame(model: com.google.ar.sceneform.animation.AnimatableModel, animation: com.google.ar.sceneform.animation.ModelAnimation, frames: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationFraction(model: com.google.ar.sceneform.animation.AnimatableModel, animationIndex: number, fractions: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public static ofAnimationTime(model: com.google.ar.sceneform.animation.AnimatableModel, animationName: string, times: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
					}
					export module ModelAnimator {
						export class PropertyValuesHolder {
							public static class: java.lang.Class<com.google.ar.sceneform.animation.ModelAnimator.PropertyValuesHolder>;
							public constructor();
							public static ofAnimation(animation: com.google.ar.sceneform.animation.ModelAnimation): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationFrame(animationName: string, frames: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationTime(animation: com.google.ar.sceneform.animation.ModelAnimation, times: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationFrame(animation: com.google.ar.sceneform.animation.ModelAnimation, frames: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationFraction(animationName: string, fractions: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationFraction(animation: com.google.ar.sceneform.animation.ModelAnimation, fractions: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
							public static ofAnimationTime(animationName: string, times: androidNative.Array<number>): globalAndroid.animation.PropertyValuesHolder;
						}
						export module PropertyValuesHolder {
							export class AnimationProperty<T>  extends globalAndroid.util.Property<com.google.ar.sceneform.animation.AnimatableModel,any> {
								public static class: java.lang.Class<com.google.ar.sceneform.animation.ModelAnimator.PropertyValuesHolder.AnimationProperty<any>>;
								public constructor(animation: com.google.ar.sceneform.animation.ModelAnimation, property: globalAndroid.util.Property<com.google.ar.sceneform.animation.ModelAnimation,any>);
								public constructor(animationName: string, property: globalAndroid.util.Property<com.google.ar.sceneform.animation.ModelAnimation,any>);
								public set(object: com.google.ar.sceneform.animation.AnimatableModel, value: any): void;
								public get(object: com.google.ar.sceneform.animation.AnimatableModel): any;
							}
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
				export module collision {
					export class Box extends com.google.ar.sceneform.collision.CollisionShape {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Box>;
						public constructor();
						public getRotation(): com.google.ar.sceneform.math.Quaternion;
						public shapeIntersection(shape: com.google.ar.sceneform.collision.CollisionShape): boolean;
						public boxIntersection(box: com.google.ar.sceneform.collision.Box): boolean;
						public constructor(size: com.google.ar.sceneform.math.Vector3, center: com.google.ar.sceneform.math.Vector3);
						public makeCopy(): com.google.ar.sceneform.collision.CollisionShape;
						public constructor(size: com.google.ar.sceneform.math.Vector3);
						public getCenter(): com.google.ar.sceneform.math.Vector3;
						public getSize(): com.google.ar.sceneform.math.Vector3;
						public setSize(size: com.google.ar.sceneform.math.Vector3): void;
						public sphereIntersection(sphere: com.google.ar.sceneform.collision.Sphere): boolean;
						public makeCopy(): com.google.ar.sceneform.collision.Box;
						public setCenter(center: com.google.ar.sceneform.math.Vector3): void;
						public rayIntersection(t1: com.google.ar.sceneform.collision.Ray, t2: com.google.ar.sceneform.collision.RayHit): boolean;
						public setRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
						public getExtents(): com.google.ar.sceneform.math.Vector3;
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
				export module collision {
					export class Collider {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Collider>;
						public setShape(localCollisionShape: com.google.ar.sceneform.collision.CollisionShape): void;
						public setAttachedCollisionSystem(collisionSystem: com.google.ar.sceneform.collision.CollisionSystem): void;
						public constructor(transformProvider: com.google.ar.sceneform.common.TransformProvider, localCollisionShape: com.google.ar.sceneform.collision.CollisionShape);
						public getTransformProvider(): com.google.ar.sceneform.common.TransformProvider;
						public getTransformedShape(): com.google.ar.sceneform.collision.CollisionShape;
						public getShape(): com.google.ar.sceneform.collision.CollisionShape;
						public markWorldShapeDirty(): void;
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
				export module collision {
					export abstract class CollisionShape {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.CollisionShape>;
						public boxIntersection(param0: com.google.ar.sceneform.collision.Box): boolean;
						public onChanged(): void;
						public makeCopy(): com.google.ar.sceneform.collision.CollisionShape;
						public shapeIntersection(param0: com.google.ar.sceneform.collision.CollisionShape): boolean;
						public rayIntersection(param0: com.google.ar.sceneform.collision.Ray, param1: com.google.ar.sceneform.collision.RayHit): boolean;
						public sphereIntersection(param0: com.google.ar.sceneform.collision.Sphere): boolean;
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
				export module collision {
					export class CollisionSystem {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.CollisionSystem>;
						public addCollider(collider: com.google.ar.sceneform.collision.Collider): void;
						public intersects(otherCollider: com.google.ar.sceneform.collision.Collider): com.google.ar.sceneform.collision.Collider;
						public constructor();
						public removeCollider(collider: com.google.ar.sceneform.collision.Collider): void;
						public raycast(collisionShape: com.google.ar.sceneform.collision.Ray, collider: com.google.ar.sceneform.collision.RayHit, this_: boolean): com.google.ar.sceneform.collision.Collider;
						public raycastAll(collisionShape: com.google.ar.sceneform.collision.Ray, collider: java.util.ArrayList<any>, i: any /* any*/, this_: any /* any*/): number;
						public intersectsAll(otherCollider: com.google.ar.sceneform.collision.Collider, this_: any /* any*/): void;
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
				export module collision {
					export class Intersections {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Intersections>;
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
				export module collision {
					export class Plane {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Plane>;
						public setNormal(normal: com.google.ar.sceneform.math.Vector3): void;
						public constructor(center: com.google.ar.sceneform.math.Vector3, normal: com.google.ar.sceneform.math.Vector3);
						public setCenter(center: com.google.ar.sceneform.math.Vector3): void;
						public rayIntersection(distance: com.google.ar.sceneform.collision.Ray, this_: com.google.ar.sceneform.collision.RayHit): boolean;
						public getCenter(): com.google.ar.sceneform.math.Vector3;
						public getNormal(): com.google.ar.sceneform.math.Vector3;
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
				export module collision {
					export class Ray {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Ray>;
						public constructor();
						public setDirection(direction: com.google.ar.sceneform.math.Vector3): void;
						public getDirection(): com.google.ar.sceneform.math.Vector3;
						public getPoint(distance: number): com.google.ar.sceneform.math.Vector3;
						public getOrigin(): com.google.ar.sceneform.math.Vector3;
						public constructor(origin: com.google.ar.sceneform.math.Vector3, direction: com.google.ar.sceneform.math.Vector3);
						public toString(): string;
						public setOrigin(origin: com.google.ar.sceneform.math.Vector3): void;
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
				export module collision {
					export class RayHit {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.RayHit>;
						public getPoint(): com.google.ar.sceneform.math.Vector3;
						public constructor();
						public set(other: com.google.ar.sceneform.collision.RayHit): void;
						public setPoint(point: com.google.ar.sceneform.math.Vector3): void;
						public setDistance(distance: number): void;
						public getDistance(): number;
						public reset(): void;
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
				export module collision {
					export class Sphere extends com.google.ar.sceneform.collision.CollisionShape {
						public static class: java.lang.Class<com.google.ar.sceneform.collision.Sphere>;
						public constructor();
						public shapeIntersection(shape: com.google.ar.sceneform.collision.CollisionShape): boolean;
						public boxIntersection(box: com.google.ar.sceneform.collision.Box): boolean;
						public constructor(radius: number, center: com.google.ar.sceneform.math.Vector3);
						public getRadius(): number;
						public makeCopy(): com.google.ar.sceneform.collision.CollisionShape;
						public makeCopy(): com.google.ar.sceneform.collision.Sphere;
						public getCenter(): com.google.ar.sceneform.math.Vector3;
						public setRadius(radius: number): void;
						public rayIntersection(ray: com.google.ar.sceneform.collision.Ray, result: com.google.ar.sceneform.collision.RayHit): boolean;
						public sphereIntersection(sphere: com.google.ar.sceneform.collision.Sphere): boolean;
						public setCenter(center: com.google.ar.sceneform.math.Vector3): void;
						public constructor(radius: number);
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
				export module common {
					export class TransformProvider {
						public static class: java.lang.Class<com.google.ar.sceneform.common.TransformProvider>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.common.TransformProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
						});
						public constructor();
						public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
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
				export module lullmodel {
					export class AabbDef extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.AabbDef>;
						public max(obj: com.google.ar.sceneform.lullmodel.Vec3): com.google.ar.sceneform.lullmodel.Vec3;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.AabbDef;
						public constructor();
						public min(): com.google.ar.sceneform.lullmodel.Vec3;
						public max(): com.google.ar.sceneform.lullmodel.Vec3;
						public static createAabbDef(builder: com.google.flatbuffers.FlatBufferBuilder, min_x: number, min_y: number, min_z: number, max_x: number, max_y: number, max_z: number): number;
						public min(obj: com.google.ar.sceneform.lullmodel.Vec3): com.google.ar.sceneform.lullmodel.Vec3;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class ArcDef extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ArcDef>;
						public constructor();
						public angleSize(): number;
						public outerRadius(): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ArcDef;
						public numSamples(): number;
						public static createArcDef(builder: com.google.flatbuffers.FlatBufferBuilder, startAngle: number, angleSize: number, innerRadius: number, outerRadius: number, numSamples: number): number;
						public startAngle(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public innerRadius(): number;
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
				export module lullmodel {
					export class AxisSystem {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.AxisSystem>;
						public static Unspecified: number = -1;
						public static XUp_YFront_ZLeft: number = 0;
						public static XUp_YFront_ZRight: number = 1;
						public static XUp_YBack_ZLeft: number = 2;
						public static XUp_YBack_ZRight: number = 3;
						public static XUp_ZFront_YLeft: number = 4;
						public static XUp_ZFront_YRight: number = 5;
						public static XUp_ZBack_YLeft: number = 6;
						public static XUp_ZBack_YRight: number = 7;
						public static YUp_XFront_ZLeft: number = 8;
						public static YUp_XFront_ZRight: number = 9;
						public static YUp_XBack_ZLeft: number = 10;
						public static YUp_XBack_ZRight: number = 11;
						public static YUp_ZFront_XLeft: number = 12;
						public static YUp_ZFront_XRight: number = 13;
						public static YUp_ZBack_XLeft: number = 14;
						public static YUp_ZBack_XRight: number = 15;
						public static ZUp_XFront_YLeft: number = 16;
						public static ZUp_XFront_YRight: number = 17;
						public static ZUp_XBack_YLeft: number = 18;
						public static ZUp_XBack_YRight: number = 19;
						public static ZUp_YFront_XLeft: number = 20;
						public static ZUp_YFront_XRight: number = 21;
						public static ZUp_YBack_XLeft: number = 22;
						public static ZUp_YBack_XRight: number = 23;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class BlendShape extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.BlendShape>;
						public vertexIndices32InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public vertexIndices32Length(): number;
						public tangentDataAsByteBuffer(): java.nio.ByteBuffer;
						public static startVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public tangentIndices32AsByteBuffer(): java.nio.ByteBuffer;
						public static endBlendShape(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public vertexDataInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static addVertexIndices16(builder: com.google.flatbuffers.FlatBufferBuilder, vertexIndices16Offset: number): void;
						public static startBlendShape(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static startTangentIndices16Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public vertexIndices16Length(): number;
						public static createVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public static createVertexIndices32Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static createVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public static addVertexIndices32(builder: com.google.flatbuffers.FlatBufferBuilder, vertexIndices32Offset: number): void;
						public static createTangentIndices32Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public constructor();
						public static startTangentIndices32Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public tangentDataLength(): number;
						public vertexIndices32AsByteBuffer(): java.nio.ByteBuffer;
						public vertexIndices16InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public vertexIndices16(j: number): number;
						public tangentIndices32InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public tangentIndices16Length(): number;
						public vertexDataLength(): number;
						public static createVertexIndices16Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static createTangentIndices16Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public tangentData(j: number): number;
						public static startTangentDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static startVertexIndices16Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static addTangentIndices16(builder: com.google.flatbuffers.FlatBufferBuilder, tangentIndices16Offset: number): void;
						public static getRootAsBlendShape(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.BlendShape;
						public tangentIndices16InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public tangentDataInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static addTangentData(builder: com.google.flatbuffers.FlatBufferBuilder, tangentDataOffset: number): void;
						public static createTangentDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public tangentIndices32Length(): number;
						public tangentIndices16AsByteBuffer(): java.nio.ByteBuffer;
						public static createTangentDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public tangentIndices32(j: number): number;
						public static startVertexIndices32Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static addName(builder: com.google.flatbuffers.FlatBufferBuilder, name: number): void;
						public static addVertexData(builder: com.google.flatbuffers.FlatBufferBuilder, vertexDataOffset: number): void;
						public tangentIndices16(j: number): number;
						public static createBlendShape(builder: com.google.flatbuffers.FlatBufferBuilder, name: number, vertex_dataOffset: number, vertex_indices32Offset: number, vertex_indices16Offset: number, tangent_dataOffset: number, tangent_indices32Offset: number, tangent_indices16Offset: number): number;
						public vertexIndices16AsByteBuffer(): java.nio.ByteBuffer;
						public vertexIndices32(j: number): number;
						public static addTangentIndices32(builder: com.google.flatbuffers.FlatBufferBuilder, tangentIndices32Offset: number): void;
						public vertexDataAsByteBuffer(): java.nio.ByteBuffer;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.BlendShape;
						public vertexData(j: number): number;
						public name(): number;
						public static getRootAsBlendShape(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.BlendShape): com.google.ar.sceneform.lullmodel.BlendShape;
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
				export module lullmodel {
					export class Color extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Color>;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Color;
						public constructor();
						public r(): number;
						public a(): number;
						public b(): number;
						public g(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createColor(builder: com.google.flatbuffers.FlatBufferBuilder, r: number, g: number, b: number, a: number): number;
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
				export module lullmodel {
					export class DataBool extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataBool>;
						public static getRootAsDataBool(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataBool;
						public value(): boolean;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataBool;
						public static createDataBool(builder: com.google.flatbuffers.FlatBufferBuilder, value: boolean): number;
						public static startDataBool(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static endDataBool(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static getRootAsDataBool(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataBool): com.google.ar.sceneform.lullmodel.DataBool;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, value: boolean): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataBytes extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataBytes>;
						public constructor();
						public value(j: number): number;
						public static createValueVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public static createDataBytes(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataBytes;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public valueInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static getRootAsDataBytes(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataBytes): com.google.ar.sceneform.lullmodel.DataBytes;
						public static createValueVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public static startValueVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static endDataBytes(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static startDataBytes(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public valueLength(): number;
						public valueAsByteBuffer(): java.nio.ByteBuffer;
						public static getRootAsDataBytes(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataBytes;
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
				export module lullmodel {
					export class DataFloat extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataFloat>;
						public static getRootAsDataFloat(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataFloat): com.google.ar.sceneform.lullmodel.DataFloat;
						public static startDataFloat(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public constructor();
						public static endDataFloat(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public value(): number;
						public static getRootAsDataFloat(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataFloat;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataFloat;
						public static createDataFloat(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): number;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataHashValue extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataHashValue>;
						public static endDataHashValue(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public constructor();
						public static getRootAsDataHashValue(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataHashValue;
						public static startDataHashValue(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public value(): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataHashValue;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): void;
						public static createDataHashValue(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): number;
						public static getRootAsDataHashValue(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataHashValue): com.google.ar.sceneform.lullmodel.DataHashValue;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataInt extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataInt>;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataInt;
						public constructor();
						public static endDataInt(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public value(): number;
						public static startDataInt(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static getRootAsDataInt(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataInt): com.google.ar.sceneform.lullmodel.DataInt;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): void;
						public static getRootAsDataInt(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataInt;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createDataInt(builder: com.google.flatbuffers.FlatBufferBuilder, value: number): number;
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
				export module lullmodel {
					export class DataQuat extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataQuat>;
						public static endDataQuat(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataQuat;
						public static startDataQuat(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public value(obj: com.google.ar.sceneform.lullmodel.Quat): com.google.ar.sceneform.lullmodel.Quat;
						public value(): com.google.ar.sceneform.lullmodel.Quat;
						public static getRootAsDataQuat(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataQuat): com.google.ar.sceneform.lullmodel.DataQuat;
						public static getRootAsDataQuat(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataQuat;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataString extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataString>;
						public static getRootAsDataString(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataString): com.google.ar.sceneform.lullmodel.DataString;
						public value(): string;
						public constructor();
						public static endDataString(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataString;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public valueAsByteBuffer(): java.nio.ByteBuffer;
						public static getRootAsDataString(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataString;
						public static startDataString(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public valueInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static createDataString(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): number;
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
				export module lullmodel {
					export class DataVec2 extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataVec2>;
						public constructor();
						public static endDataVec2(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec2;
						public static startDataVec2(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public value(): com.google.ar.sceneform.lullmodel.Vec2;
						public static getRootAsDataVec2(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataVec2): com.google.ar.sceneform.lullmodel.DataVec2;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public static getRootAsDataVec2(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec2;
						public value(obj: com.google.ar.sceneform.lullmodel.Vec2): com.google.ar.sceneform.lullmodel.Vec2;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataVec3 extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataVec3>;
						public static getRootAsDataVec3(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec3;
						public static startDataVec3(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public constructor();
						public static getRootAsDataVec3(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataVec3): com.google.ar.sceneform.lullmodel.DataVec3;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec3;
						public static endDataVec3(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public value(): com.google.ar.sceneform.lullmodel.Vec3;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public value(obj: com.google.ar.sceneform.lullmodel.Vec3): com.google.ar.sceneform.lullmodel.Vec3;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DataVec4 extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DataVec4>;
						public constructor();
						public static getRootAsDataVec4(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.DataVec4): com.google.ar.sceneform.lullmodel.DataVec4;
						public value(obj: com.google.ar.sceneform.lullmodel.Vec4): com.google.ar.sceneform.lullmodel.Vec4;
						public value(): com.google.ar.sceneform.lullmodel.Vec4;
						public static startDataVec4(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec4;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public static endDataVec4(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static getRootAsDataVec4(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.DataVec4;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class DeviceType {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.DeviceType>;
						public static Hmd: number = 0;
						public static Mouse: number = 1;
						public static Keyboard: number = 2;
						public static Controller: number = 3;
						public static Controller2: number = 4;
						public static Hand: number = 5;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class KeyVariantPairDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.KeyVariantPairDef>;
						public constructor();
						public valueType(): number;
						public static addHashKey(builder: com.google.flatbuffers.FlatBufferBuilder, hashKey: number): void;
						public keyAsByteBuffer(): java.nio.ByteBuffer;
						public value(obj: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public static getRootAsKeyVariantPairDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.KeyVariantPairDef;
						public key(): string;
						public hashKey(): number;
						public static getRootAsKeyVariantPairDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.KeyVariantPairDef): com.google.ar.sceneform.lullmodel.KeyVariantPairDef;
						public static createKeyVariantPairDef(builder: com.google.flatbuffers.FlatBufferBuilder, keyOffset: number, hash_key: number, value_type: number, valueOffset: number): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public keyInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.KeyVariantPairDef;
						public static startKeyVariantPairDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static addValueType(builder: com.google.flatbuffers.FlatBufferBuilder, valueType: number): void;
						public static endKeyVariantPairDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static addKey(builder: com.google.flatbuffers.FlatBufferBuilder, keyOffset: number): void;
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
				export module lullmodel {
					export class LayoutFillOrder {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.LayoutFillOrder>;
						public static RightDown: number = 0;
						public static LeftDown: number = 1;
						public static DownRight: number = 2;
						public static DownLeft: number = 3;
						public static RightUp: number = 4;
						public static LeftUp: number = 5;
						public static UpRight: number = 6;
						public static UpLeft: number = 7;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class LayoutHorizontalAlignment {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.LayoutHorizontalAlignment>;
						public static Left: number = 0;
						public static Center: number = 1;
						public static Right: number = 2;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class LayoutVerticalAlignment {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.LayoutVerticalAlignment>;
						public static Top: number = 0;
						public static Center: number = 1;
						public static Bottom: number = 2;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class Mat4x3 extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Mat4x3>;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Mat4x3;
						public static createMat4x3(builder: com.google.flatbuffers.FlatBufferBuilder, c0_x: number, c0_y: number, c0_z: number, c0_w: number, c1_x: number, c1_y: number, c1_z: number, c1_w: number, c2_x: number, c2_y: number, c2_z: number, c2_w: number): number;
						public c1(obj: com.google.ar.sceneform.lullmodel.Vec4): com.google.ar.sceneform.lullmodel.Vec4;
						public c0(): com.google.ar.sceneform.lullmodel.Vec4;
						public c1(): com.google.ar.sceneform.lullmodel.Vec4;
						public c0(obj: com.google.ar.sceneform.lullmodel.Vec4): com.google.ar.sceneform.lullmodel.Vec4;
						public c2(obj: com.google.ar.sceneform.lullmodel.Vec4): com.google.ar.sceneform.lullmodel.Vec4;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public c2(): com.google.ar.sceneform.lullmodel.Vec4;
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
				export module lullmodel {
					export class MaterialDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.MaterialDef>;
						public textures(obj: com.google.ar.sceneform.lullmodel.MaterialTextureDef, j: number): com.google.ar.sceneform.lullmodel.MaterialTextureDef;
						public constructor();
						public name(): string;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.MaterialDef;
						public static createMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number, propertiesOffset: number, texturesOffset: number): number;
						public static addName(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number): void;
						public static addProperties(builder: com.google.flatbuffers.FlatBufferBuilder, propertiesOffset: number): void;
						public static endMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public properties(): com.google.ar.sceneform.lullmodel.VariantMapDef;
						public static getRootAsMaterialDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.MaterialDef): com.google.ar.sceneform.lullmodel.MaterialDef;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static addTextures(builder: com.google.flatbuffers.FlatBufferBuilder, texturesOffset: number): void;
						public static getRootAsMaterialDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.MaterialDef;
						public static startMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public nameAsByteBuffer(): java.nio.ByteBuffer;
						public nameInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public textures(j: number): com.google.ar.sceneform.lullmodel.MaterialTextureDef;
						public properties(obj: com.google.ar.sceneform.lullmodel.VariantMapDef): com.google.ar.sceneform.lullmodel.VariantMapDef;
						public texturesLength(): number;
						public static createTexturesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static startTexturesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
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
				export module lullmodel {
					export class MaterialTextureDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.MaterialTextureDef>;
						public static createUsagePerChannelVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.MaterialTextureDef;
						public usagePerChannelLength(): number;
						public static addUsagePerChannel(builder: com.google.flatbuffers.FlatBufferBuilder, usagePerChannelOffset: number): void;
						public static endMaterialTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static getRootAsMaterialTextureDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.MaterialTextureDef): com.google.ar.sceneform.lullmodel.MaterialTextureDef;
						public name(): string;
						public static startMaterialTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static getRootAsMaterialTextureDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.MaterialTextureDef;
						public usagePerChannel(j: number): number;
						public static addName(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number): void;
						public usage(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createMaterialTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number, usage: number, usage_per_channelOffset: number): number;
						public static addUsage(builder: com.google.flatbuffers.FlatBufferBuilder, usage: number): void;
						public usagePerChannelInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static startUsagePerChannelVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public nameAsByteBuffer(): java.nio.ByteBuffer;
						public nameInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public usagePerChannelAsByteBuffer(): java.nio.ByteBuffer;
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
				export module lullmodel {
					export class MaterialTextureUsage {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.MaterialTextureUsage>;
						public static BaseColor: number = 0;
						public static Metallic: number = 1;
						public static Normal: number = 2;
						public static Bump: number = 3;
						public static Height: number = 4;
						public static Specular: number = 5;
						public static Ambient: number = 6;
						public static Emissive: number = 7;
						public static Light: number = 8;
						public static Shadow: number = 9;
						public static Reflection: number = 10;
						public static Opacity: number = 11;
						public static Roughness: number = 12;
						public static Occlusion: number = 13;
						public static Shininess: number = 14;
						public static BrdfLookupTable: number = 15;
						public static DiffuseEnvironment: number = 16;
						public static SpecularEnvironment: number = 17;
						public static DiffuseColor: number = 18;
						public static Unused: number = 255;
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
				export module lullmodel {
					export class ModelDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelDef>;
						public static startLodsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static createLodsVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static addSkeleton(builder: com.google.flatbuffers.FlatBufferBuilder, skeletonOffset: number): void;
						public static addBoundingBox(builder: com.google.flatbuffers.FlatBufferBuilder, boundingBoxOffset: number): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelDef;
						public static addTextures(builder: com.google.flatbuffers.FlatBufferBuilder, texturesOffset: number): void;
						public lodsLength(): number;
						public lods(obj: com.google.ar.sceneform.lullmodel.ModelInstanceDef, j: number): com.google.ar.sceneform.lullmodel.ModelInstanceDef;
						public static finishModelDefBuffer(builder: com.google.flatbuffers.FlatBufferBuilder, offset: number): void;
						public boundingBox(obj: com.google.ar.sceneform.lullmodel.AabbDef): com.google.ar.sceneform.lullmodel.AabbDef;
						public textures(obj: com.google.ar.sceneform.lullmodel.TextureDef, j: number): com.google.ar.sceneform.lullmodel.TextureDef;
						public textures(j: number): com.google.ar.sceneform.lullmodel.TextureDef;
						public static addLods(builder: com.google.flatbuffers.FlatBufferBuilder, lodsOffset: number): void;
						public texturesLength(): number;
						public static startTexturesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static finishSizePrefixedModelDefBuffer(builder: com.google.flatbuffers.FlatBufferBuilder, offset: number): void;
						public constructor();
						public skeleton(obj: com.google.ar.sceneform.lullmodel.SkeletonDef): com.google.ar.sceneform.lullmodel.SkeletonDef;
						public static startModelDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static getRootAsModelDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelDef): com.google.ar.sceneform.lullmodel.ModelDef;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public boundingBox(): com.google.ar.sceneform.lullmodel.AabbDef;
						public skeleton(): com.google.ar.sceneform.lullmodel.SkeletonDef;
						public static endModelDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static getRootAsModelDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelDef;
						public version(): number;
						public lods(j: number): com.google.ar.sceneform.lullmodel.ModelInstanceDef;
						public static addVersion(builder: com.google.flatbuffers.FlatBufferBuilder, version: number): void;
						public static createTexturesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
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
				export module lullmodel {
					export class ModelIndexRange extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelIndexRange>;
						public start(): number;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelIndexRange;
						public end(): number;
						public static createModelIndexRange(builder: com.google.flatbuffers.FlatBufferBuilder, start: number, end: number): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class ModelInstanceDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelInstanceDef>;
						public aabbs(j: number): com.google.ar.sceneform.lullmodel.SubmeshAabb;
						public static addRanges(builder: com.google.flatbuffers.FlatBufferBuilder, rangesOffset: number): void;
						public static addIndices32(builder: com.google.flatbuffers.FlatBufferBuilder, indices32Offset: number): void;
						public static addMaterials(builder: com.google.flatbuffers.FlatBufferBuilder, materialsOffset: number): void;
						public static addVertexAttributes(builder: com.google.flatbuffers.FlatBufferBuilder, vertexAttributesOffset: number): void;
						public static startVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public shaderToMeshBonesLength(): number;
						public blendAttributes(j: number): com.google.ar.sceneform.lullmodel.VertexAttribute;
						public vertexDataInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public numVertices(): number;
						public static startIndices16Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public rangesLength(): number;
						public materials(j: number): com.google.ar.sceneform.lullmodel.MaterialDef;
						public static addInterleaved(builder: com.google.flatbuffers.FlatBufferBuilder, interleaved: boolean): void;
						public shaderToMeshBonesAsByteBuffer(): java.nio.ByteBuffer;
						public static createVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public static createIndices16Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static startIndices32Vector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static createVertexDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public vertexAttributes(obj: com.google.ar.sceneform.lullmodel.VertexAttribute, j: number): com.google.ar.sceneform.lullmodel.VertexAttribute;
						public static addIndices16(builder: com.google.flatbuffers.FlatBufferBuilder, indices16Offset: number): void;
						public constructor();
						public static startRangesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public materials(obj: com.google.ar.sceneform.lullmodel.MaterialDef, j: number): com.google.ar.sceneform.lullmodel.MaterialDef;
						public ranges(j: number): com.google.ar.sceneform.lullmodel.ModelIndexRange;
						public static startBlendAttributesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public indices32InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static addAabbs(builder: com.google.flatbuffers.FlatBufferBuilder, aabbsOffset: number): void;
						public vertexDataLength(): number;
						public static addBlendShapes(builder: com.google.flatbuffers.FlatBufferBuilder, blendShapesOffset: number): void;
						public static createIndices32Vector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public indices16AsByteBuffer(): java.nio.ByteBuffer;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelInstanceDef;
						public static startBlendShapesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static createModelInstanceDef(builder: com.google.flatbuffers.FlatBufferBuilder, vertex_dataOffset: number, indices16Offset: number, indices32Offset: number, rangesOffset: number, materialsOffset: number, vertex_attributesOffset: number, num_vertices: number, interleaved: boolean, shader_to_mesh_bonesOffset: number, blend_shapesOffset: number, blend_attributesOffset: number, aabbsOffset: number): number;
						public blendShapesLength(): number;
						public static addShaderToMeshBones(builder: com.google.flatbuffers.FlatBufferBuilder, shaderToMeshBonesOffset: number): void;
						public indices16InByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public blendShapes(obj: com.google.ar.sceneform.lullmodel.BlendShape, j: number): com.google.ar.sceneform.lullmodel.BlendShape;
						public blendAttributesLength(): number;
						public shaderToMeshBones(j: number): number;
						public blendAttributes(obj: com.google.ar.sceneform.lullmodel.VertexAttribute, j: number): com.google.ar.sceneform.lullmodel.VertexAttribute;
						public aabbsLength(): number;
						public static endModelInstanceDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public vertexAttributes(j: number): com.google.ar.sceneform.lullmodel.VertexAttribute;
						public interleaved(): boolean;
						public static startShaderToMeshBonesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static createShaderToMeshBonesVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public static addNumVertices(builder: com.google.flatbuffers.FlatBufferBuilder, numVertices: number): void;
						public static createBlendShapesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public indices32(j: number): number;
						public aabbs(obj: com.google.ar.sceneform.lullmodel.SubmeshAabb, j: number): com.google.ar.sceneform.lullmodel.SubmeshAabb;
						public indices32Length(): number;
						public static createShaderToMeshBonesVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public static startModelInstanceDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static createAabbsVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static startMaterialsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static addVertexData(builder: com.google.flatbuffers.FlatBufferBuilder, vertexDataOffset: number): void;
						public vertexAttributesLength(): number;
						public static startVertexAttributesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public shaderToMeshBonesInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public vertexDataAsByteBuffer(): java.nio.ByteBuffer;
						public indices16Length(): number;
						public blendShapes(j: number): com.google.ar.sceneform.lullmodel.BlendShape;
						public materialsLength(): number;
						public static getRootAsModelInstanceDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelInstanceDef;
						public static getRootAsModelInstanceDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelInstanceDef): com.google.ar.sceneform.lullmodel.ModelInstanceDef;
						public static createMaterialsVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public indices32AsByteBuffer(): java.nio.ByteBuffer;
						public static startAabbsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static addBlendAttributes(builder: com.google.flatbuffers.FlatBufferBuilder, blendAttributesOffset: number): void;
						public vertexData(j: number): number;
						public indices16(j: number): number;
						public ranges(obj: com.google.ar.sceneform.lullmodel.ModelIndexRange, j: number): com.google.ar.sceneform.lullmodel.ModelIndexRange;
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
				export module lullmodel {
					export class ModelPipelineCollidableDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef>;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef;
						public source(): string;
						public sourceAsByteBuffer(): java.nio.ByteBuffer;
						public static addSource(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number): void;
						public static getRootAsModelPipelineCollidableDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef): com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef;
						public static getRootAsModelPipelineCollidableDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef;
						public sourceInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static createModelPipelineCollidableDef(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number): number;
						public static startModelPipelineCollidableDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static endModelPipelineCollidableDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
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
				export module lullmodel {
					export class ModelPipelineDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineDef>;
						public collidable(): com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef;
						public static addCollidable(builder: com.google.flatbuffers.FlatBufferBuilder, collidableOffset: number): void;
						public static addSkeleton(builder: com.google.flatbuffers.FlatBufferBuilder, skeletonOffset: number): void;
						public collidable(obj: com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef): com.google.ar.sceneform.lullmodel.ModelPipelineCollidableDef;
						public static addTextures(builder: com.google.flatbuffers.FlatBufferBuilder, texturesOffset: number): void;
						public textures(obj: com.google.ar.sceneform.lullmodel.TextureDef, j: number): com.google.ar.sceneform.lullmodel.TextureDef;
						public static getRootAsModelPipelineDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineDef): com.google.ar.sceneform.lullmodel.ModelPipelineDef;
						public textures(j: number): com.google.ar.sceneform.lullmodel.TextureDef;
						public static createModelPipelineDef(builder: com.google.flatbuffers.FlatBufferBuilder, sourcesOffset: number, renderablesOffset: number, collidableOffset: number, skeletonOffset: number, texturesOffset: number): number;
						public static getRootAsModelPipelineDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineDef;
						public texturesLength(): number;
						public static createRenderablesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public renderables(j: number): com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef;
						public static startTexturesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public constructor();
						public renderablesLength(): number;
						public static startSourcesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public renderables(obj: com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef, j: number): com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef;
						public static startRenderablesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public sources(obj: com.google.ar.sceneform.lullmodel.ModelPipelineImportDef, j: number): com.google.ar.sceneform.lullmodel.ModelPipelineImportDef;
						public static addRenderables(builder: com.google.flatbuffers.FlatBufferBuilder, renderablesOffset: number): void;
						public skeleton(): com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public skeleton(obj: com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef): com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef;
						public static addSources(builder: com.google.flatbuffers.FlatBufferBuilder, sourcesOffset: number): void;
						public sourcesLength(): number;
						public static endModelPipelineDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineDef;
						public static startModelPipelineDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static createTexturesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public sources(j: number): com.google.ar.sceneform.lullmodel.ModelPipelineImportDef;
						public static createSourcesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
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
				export module lullmodel {
					export class ModelPipelineImportDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineImportDef>;
						public maxBoneWeights(): number;
						public static addFlattenHierarchyAndTransformVerticesToRootSpace(builder: com.google.flatbuffers.FlatBufferBuilder, flattenHierarchyAndTransformVerticesToRootSpace: boolean): void;
						public name(): string;
						public fixInfacingNormals(): boolean;
						public targetMeshesLength(): number;
						public static startModelPipelineImportDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static addScale(builder: com.google.flatbuffers.FlatBufferBuilder, scale: number): void;
						public static addAxisSystem(builder: com.google.flatbuffers.FlatBufferBuilder, axisSystem: number): void;
						public static addMaxBoneWeights(builder: com.google.flatbuffers.FlatBufferBuilder, maxBoneWeights: number): void;
						public static addName(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number): void;
						public ensureVertexOrientationWNotZero(): boolean;
						public static addCmPerUnit(builder: com.google.flatbuffers.FlatBufferBuilder, cmPerUnit: number): void;
						public static addEnsureVertexOrientationWNotZero(builder: com.google.flatbuffers.FlatBufferBuilder, ensureVertexOrientationWNotZero: boolean): void;
						public static addReportErrorsToStdout(builder: com.google.flatbuffers.FlatBufferBuilder, reportErrorsToStdout: boolean): void;
						public static addRecenter(builder: com.google.flatbuffers.FlatBufferBuilder, recenter: boolean): void;
						public static addFlipTextureCoordinates(builder: com.google.flatbuffers.FlatBufferBuilder, flipTextureCoordinates: boolean): void;
						public recenter(): boolean;
						public static addFixInfacingNormals(builder: com.google.flatbuffers.FlatBufferBuilder, fixInfacingNormals: boolean): void;
						public nameInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public axisSystem(): number;
						public static addMergeMaterials(builder: com.google.flatbuffers.FlatBufferBuilder, mergeMaterials: boolean): void;
						public smoothingAngle(): number;
						public flipTextureCoordinates(): boolean;
						public constructor();
						public static addTargetMeshes(builder: com.google.flatbuffers.FlatBufferBuilder, targetMeshesOffset: number): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineImportDef;
						public flattenHierarchyAndTransformVerticesToRootSpace(): boolean;
						public file(): string;
						public cmPerUnit(): number;
						public reportErrorsToStdout(): boolean;
						public targetMeshes(j: number): string;
						public static getRootAsModelPipelineImportDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineImportDef;
						public static addFile(builder: com.google.flatbuffers.FlatBufferBuilder, fileOffset: number): void;
						public useSpecularGlossinessTexturesIfPresent(): boolean;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public fileAsByteBuffer(): java.nio.ByteBuffer;
						public static endModelPipelineImportDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static createTargetMeshesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static getRootAsModelPipelineImportDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineImportDef): com.google.ar.sceneform.lullmodel.ModelPipelineImportDef;
						public static startTargetMeshesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public mergeMaterials(): boolean;
						public static addSmoothingAngle(builder: com.google.flatbuffers.FlatBufferBuilder, smoothingAngle: number): void;
						public static createModelPipelineImportDef(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number, fileOffset: number, recenter: boolean, scale: number, axis_system: number, smoothing_angle: number, max_bone_weights: number, report_errors_to_stdout: boolean, flip_texture_coordinates: boolean, flatten_hierarchy_and_transform_vertices_to_root_space: boolean, use_specular_glossiness_textures_if_present: boolean, fix_infacing_normals: boolean, ensure_vertex_orientation_w_not_zero: boolean, cm_per_unit: number, target_meshesOffset: number, merge_materials: boolean): number;
						public nameAsByteBuffer(): java.nio.ByteBuffer;
						public scale(): number;
						public static addUseSpecularGlossinessTexturesIfPresent(builder: com.google.flatbuffers.FlatBufferBuilder, useSpecularGlossinessTexturesIfPresent: boolean): void;
						public fileInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
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
				export module lullmodel {
					export class ModelPipelineMaterialDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef>;
						public nameOverrideInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public constructor();
						public static getRootAsModelPipelineMaterialDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef): com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef;
						public nameOverrideAsByteBuffer(): java.nio.ByteBuffer;
						public static startModelPipelineMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static addNameOverride(builder: com.google.flatbuffers.FlatBufferBuilder, nameOverrideOffset: number): void;
						public static endModelPipelineMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public nameOverride(): string;
						public static addMaterial(builder: com.google.flatbuffers.FlatBufferBuilder, materialOffset: number): void;
						public material(): com.google.ar.sceneform.lullmodel.MaterialDef;
						public static getRootAsModelPipelineMaterialDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef;
						public static createModelPipelineMaterialDef(builder: com.google.flatbuffers.FlatBufferBuilder, materialOffset: number, name_overrideOffset: number): number;
						public material(obj: com.google.ar.sceneform.lullmodel.MaterialDef): com.google.ar.sceneform.lullmodel.MaterialDef;
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
				export module lullmodel {
					export class ModelPipelineRenderableDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef>;
						public static endModelPipelineRenderableDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static createModelPipelineRenderableDef(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number, materialsOffset: number, attributesOffset: number): number;
						public attributesAsByteBuffer(): java.nio.ByteBuffer;
						public sourceAsByteBuffer(): java.nio.ByteBuffer;
						public static startAttributesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef;
						public static getRootAsModelPipelineRenderableDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef): com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef;
						public attributes(j: number): number;
						public attributesLength(): number;
						public static addMaterials(builder: com.google.flatbuffers.FlatBufferBuilder, materialsOffset: number): void;
						public static getRootAsModelPipelineRenderableDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineRenderableDef;
						public static addAttributes(builder: com.google.flatbuffers.FlatBufferBuilder, attributesOffset: number): void;
						public static createAttributesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public static addSource(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number): void;
						public attributesInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static startMaterialsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public constructor();
						public source(): string;
						public static startModelPipelineRenderableDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public materials(obj: com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef, j: number): com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef;
						public sourceInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public materialsLength(): number;
						public static createMaterialsVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public materials(j: number): com.google.ar.sceneform.lullmodel.ModelPipelineMaterialDef;
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
				export module lullmodel {
					export class ModelPipelineSkeletonDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef>;
						public static getRootAsModelPipelineSkeletonDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef;
						public constructor();
						public static getRootAsModelPipelineSkeletonDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef): com.google.ar.sceneform.lullmodel.ModelPipelineSkeletonDef;
						public static startModelPipelineSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public source(): string;
						public sourceAsByteBuffer(): java.nio.ByteBuffer;
						public static addSource(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number): void;
						public static endModelPipelineSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public sourceInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createModelPipelineSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder, sourceOffset: number): number;
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
				export module lullmodel {
					export class OptionalBool {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.OptionalBool>;
						public static Unset: number = 0;
						public static True: number = 1;
						public static False: number = 2;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class Quat extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Quat>;
						public constructor();
						public static createQuat(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number, z: number, w: number): number;
						public y(): number;
						public x(): number;
						public w(): number;
						public z(): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Quat;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class Rect extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Rect>;
						public constructor();
						public y(): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Rect;
						public x(): number;
						public w(): number;
						public static createRect(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number, w: number, h: number): number;
						public h(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class Recti extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Recti>;
						public static createRecti(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number, w: number, h: number): number;
						public constructor();
						public y(): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Recti;
						public x(): number;
						public w(): number;
						public h(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class SkeletonDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.SkeletonDef>;
						public boneNamesLength(): number;
						public static createBoneParentsVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public static startSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static getRootAsSkeletonDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.SkeletonDef): com.google.ar.sceneform.lullmodel.SkeletonDef;
						public static createBoneNamesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public boneParentsAsByteBuffer(): java.nio.ByteBuffer;
						public static getRootAsSkeletonDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.SkeletonDef;
						public static createBoneParentsVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public static startBoneParentsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public boneTransforms(obj: com.google.ar.sceneform.lullmodel.Mat4x3, j: number): com.google.ar.sceneform.lullmodel.Mat4x3;
						public boneTransformsLength(): number;
						public boneParentsInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public constructor();
						public static startBoneNamesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.SkeletonDef;
						public static startBoneTransformsVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public boneNames(j: number): string;
						public boneParentsLength(): number;
						public boneTransforms(j: number): com.google.ar.sceneform.lullmodel.Mat4x3;
						public boneParents(j: number): number;
						public static addBoneNames(builder: com.google.flatbuffers.FlatBufferBuilder, boneNamesOffset: number): void;
						public static endSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static addBoneParents(builder: com.google.flatbuffers.FlatBufferBuilder, boneParentsOffset: number): void;
						public static createSkeletonDef(builder: com.google.flatbuffers.FlatBufferBuilder, bone_namesOffset: number, bone_parentsOffset: number, bone_transformsOffset: number): number;
						public static addBoneTransforms(builder: com.google.flatbuffers.FlatBufferBuilder, boneTransformsOffset: number): void;
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
				export module lullmodel {
					export class SubmeshAabb extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.SubmeshAabb>;
						public constructor();
						public static getRootAsSubmeshAabb(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.SubmeshAabb;
						public minPosition(obj: com.google.ar.sceneform.lullmodel.Vec3): com.google.ar.sceneform.lullmodel.Vec3;
						public static getRootAsSubmeshAabb(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.SubmeshAabb): com.google.ar.sceneform.lullmodel.SubmeshAabb;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.SubmeshAabb;
						public maxPosition(obj: com.google.ar.sceneform.lullmodel.Vec3): com.google.ar.sceneform.lullmodel.Vec3;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static startSubmeshAabb(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public minPosition(): com.google.ar.sceneform.lullmodel.Vec3;
						public static addMaxPosition(builder: com.google.flatbuffers.FlatBufferBuilder, maxPositionOffset: number): void;
						public static addMinPosition(builder: com.google.flatbuffers.FlatBufferBuilder, minPositionOffset: number): void;
						public static endSubmeshAabb(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public maxPosition(): com.google.ar.sceneform.lullmodel.Vec3;
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
				export module lullmodel {
					export class TextureDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.TextureDef>;
						public static createDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: androidNative.Array<number>): number;
						public premultiplyAlpha(): boolean;
						public name(): string;
						public static addWrapR(builder: com.google.flatbuffers.FlatBufferBuilder, wrapR: number): void;
						public dataLength(): number;
						public data(j: number): number;
						public minFilter(): number;
						public static addName(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number): void;
						public static addMagFilter(builder: com.google.flatbuffers.FlatBufferBuilder, magFilter: number): void;
						public dataAsByteBuffer(): java.nio.ByteBuffer;
						public generateMipmaps(): boolean;
						public static getRootAsTextureDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.TextureDef): com.google.ar.sceneform.lullmodel.TextureDef;
						public static addTargetType(builder: com.google.flatbuffers.FlatBufferBuilder, targetType: number): void;
						public static addWrapT(builder: com.google.flatbuffers.FlatBufferBuilder, wrapT: number): void;
						public static endTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static addWrapS(builder: com.google.flatbuffers.FlatBufferBuilder, wrapS: number): void;
						public static createTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder, nameOffset: number, fileOffset: number, dataOffset: number, generate_mipmaps: boolean, premultiply_alpha: boolean, min_filter: number, mag_filter: number, wrap_s: number, wrap_t: number, wrap_r: number, target_type: number, is_rgbm: boolean): number;
						public static createDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, data: java.nio.ByteBuffer): number;
						public nameInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static addPremultiplyAlpha(builder: com.google.flatbuffers.FlatBufferBuilder, premultiplyAlpha: boolean): void;
						public wrapT(): number;
						public constructor();
						public file(): string;
						public static addData(builder: com.google.flatbuffers.FlatBufferBuilder, dataOffset: number): void;
						public static addMinFilter(builder: com.google.flatbuffers.FlatBufferBuilder, minFilter: number): void;
						public wrapS(): number;
						public targetType(): number;
						public static addFile(builder: com.google.flatbuffers.FlatBufferBuilder, fileOffset: number): void;
						public static getRootAsTextureDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.TextureDef;
						public dataInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static addIsRgbm(builder: com.google.flatbuffers.FlatBufferBuilder, isRgbm: boolean): void;
						public fileAsByteBuffer(): java.nio.ByteBuffer;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.TextureDef;
						public magFilter(): number;
						public static startDataVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static startTextureDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public wrapR(): number;
						public static addGenerateMipmaps(builder: com.google.flatbuffers.FlatBufferBuilder, generateMipmaps: boolean): void;
						public nameAsByteBuffer(): java.nio.ByteBuffer;
						public isRgbm(): boolean;
						public fileInByteBuffer(_bb: java.nio.ByteBuffer): java.nio.ByteBuffer;
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
				export module lullmodel {
					export class TextureFiltering {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.TextureFiltering>;
						public static Nearest: number = 0;
						public static Linear: number = 1;
						public static NearestMipmapNearest: number = 2;
						public static LinearMipmapNearest: number = 3;
						public static NearestMipmapLinear: number = 4;
						public static LinearMipmapLinear: number = 5;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class TextureTargetType {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.TextureTargetType>;
						public static Standard2d: number = 0;
						public static CubeMap: number = 1;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class TextureWrap {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.TextureWrap>;
						public static ClampToBorder: number = 0;
						public static ClampToEdge: number = 1;
						public static MirroredRepeat: number = 2;
						public static MirrorClampToEdge: number = 3;
						public static Repeat: number = 4;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class VariantArrayDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VariantArrayDef>;
						public static endVariantArrayDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public static startVariantArrayDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public constructor();
						public valuesLength(): number;
						public static createValuesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public values(j: number): com.google.ar.sceneform.lullmodel.VariantArrayDefImpl;
						public static getRootAsVariantArrayDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantArrayDef;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantArrayDef;
						public static addValues(builder: com.google.flatbuffers.FlatBufferBuilder, valuesOffset: number): void;
						public static startValuesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createVariantArrayDef(builder: com.google.flatbuffers.FlatBufferBuilder, valuesOffset: number): number;
						public values(obj: com.google.ar.sceneform.lullmodel.VariantArrayDefImpl, j: number): com.google.ar.sceneform.lullmodel.VariantArrayDefImpl;
						public static getRootAsVariantArrayDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.VariantArrayDef): com.google.ar.sceneform.lullmodel.VariantArrayDef;
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
				export module lullmodel {
					export class VariantArrayDefImpl extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VariantArrayDefImpl>;
						public constructor();
						public valueType(): number;
						public static addValueType(builder: com.google.flatbuffers.FlatBufferBuilder, valueType: number): void;
						public static getRootAsVariantArrayDefImpl(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantArrayDefImpl;
						public value(obj: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
						public static createVariantArrayDefImpl(builder: com.google.flatbuffers.FlatBufferBuilder, value_type: number, valueOffset: number): number;
						public static addValue(builder: com.google.flatbuffers.FlatBufferBuilder, valueOffset: number): void;
						public static endVariantArrayDefImpl(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantArrayDefImpl;
						public static getRootAsVariantArrayDefImpl(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.VariantArrayDefImpl): com.google.ar.sceneform.lullmodel.VariantArrayDefImpl;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static startVariantArrayDefImpl(builder: com.google.flatbuffers.FlatBufferBuilder): void;
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
				export module lullmodel {
					export class VariantDef {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VariantDef>;
						public static NONE: number = 0;
						public static DataBool: number = 1;
						public static DataInt: number = 2;
						public static DataFloat: number = 3;
						public static DataString: number = 4;
						public static DataHashValue: number = 5;
						public static DataVec2: number = 6;
						public static DataVec3: number = 7;
						public static DataVec4: number = 8;
						public static DataQuat: number = 9;
						public static DataBytes: number = 10;
						public static VariantArrayDef: number = 11;
						public static VariantMapDef: number = 12;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class VariantMapDef extends com.google.flatbuffers.Table {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VariantMapDef>;
						public constructor();
						public valuesLength(): number;
						public static createValuesVector(i: com.google.flatbuffers.FlatBufferBuilder, builder: androidNative.Array<number>): number;
						public values(j: number): com.google.ar.sceneform.lullmodel.KeyVariantPairDef;
						public static endVariantMapDef(builder: com.google.flatbuffers.FlatBufferBuilder): number;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantMapDef;
						public static addValues(builder: com.google.flatbuffers.FlatBufferBuilder, valuesOffset: number): void;
						public static startValuesVector(builder: com.google.flatbuffers.FlatBufferBuilder, numElems: number): void;
						public static getRootAsVariantMapDef(_bb: java.nio.ByteBuffer, obj: com.google.ar.sceneform.lullmodel.VariantMapDef): com.google.ar.sceneform.lullmodel.VariantMapDef;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static startVariantMapDef(builder: com.google.flatbuffers.FlatBufferBuilder): void;
						public static createVariantMapDef(builder: com.google.flatbuffers.FlatBufferBuilder, valuesOffset: number): number;
						public values(obj: com.google.ar.sceneform.lullmodel.KeyVariantPairDef, j: number): com.google.ar.sceneform.lullmodel.KeyVariantPairDef;
						public static getRootAsVariantMapDef(_bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VariantMapDef;
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
				export module lullmodel {
					export class Vec2 extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Vec2>;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Vec2;
						public y(): number;
						public x(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public static createVec2(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number): number;
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
				export module lullmodel {
					export class Vec2i extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Vec2i>;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Vec2i;
						public y(): number;
						public x(): number;
						public static createVec2i(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class Vec3 extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Vec3>;
						public static createVec3(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number, z: number): number;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Vec3;
						public y(): number;
						public x(): number;
						public z(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class Vec4 extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.Vec4>;
						public constructor();
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.Vec4;
						public y(): number;
						public x(): number;
						public w(): number;
						public z(): number;
						public static createVec4(builder: com.google.flatbuffers.FlatBufferBuilder, x: number, y: number, z: number, w: number): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
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
				export module lullmodel {
					export class VertexAttribute extends com.google.flatbuffers.Struct {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VertexAttribute>;
						public constructor();
						public type(): number;
						public static createVertexAttribute(builder: com.google.flatbuffers.FlatBufferBuilder, usage: number, type: number): number;
						public usage(): number;
						public __init(_i: number, _bb: java.nio.ByteBuffer): void;
						public __assign(_i: number, _bb: java.nio.ByteBuffer): com.google.ar.sceneform.lullmodel.VertexAttribute;
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
				export module lullmodel {
					export class VertexAttributeType {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VertexAttributeType>;
						public static Empty: number = 0;
						public static Scalar1f: number = 1;
						public static Vec2f: number = 2;
						public static Vec3f: number = 3;
						public static Vec4f: number = 4;
						public static Vec2us: number = 5;
						public static Vec4us: number = 6;
						public static Vec4ub: number = 7;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module lullmodel {
					export class VertexAttributeUsage {
						public static class: java.lang.Class<com.google.ar.sceneform.lullmodel.VertexAttributeUsage>;
						public static Invalid: number = 0;
						public static Position: number = 1;
						public static Color: number = 2;
						public static TexCoord: number = 3;
						public static Normal: number = 4;
						public static Tangent: number = 5;
						public static Orientation: number = 6;
						public static BoneIndices: number = 7;
						public static BoneWeights: number = 8;
						public static names: androidNative.Array<string>;
						public static name(e: number): string;
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
				export module math {
					export class MathHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.math.MathHelper>;
						public static almostEqualRelativeAndAbs(a: number, b: number): boolean;
						public constructor();
						public static lerp(a: number, b: number, t: number): number;
						public static clamp(value: number, min: number, max: number): number;
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
				export module math {
					export class Matrix {
						public static class: java.lang.Class<com.google.ar.sceneform.math.Matrix>;
						public static IDENTITY_DATA: androidNative.Array<number>;
						public data: androidNative.Array<number>;
						public constructor();
						public static multiply(lhs0: com.google.ar.sceneform.math.Matrix, lhs1: com.google.ar.sceneform.math.Matrix, lhs2: com.google.ar.sceneform.math.Matrix): void;
						public static invert(i: com.google.ar.sceneform.math.Matrix, matrix: com.google.ar.sceneform.math.Matrix): boolean;
						public transformDirection(vector: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public decomposeScale(destScale: com.google.ar.sceneform.math.Vector3): void;
						public makeRotation(rotation: com.google.ar.sceneform.math.Quaternion): void;
						public setTranslation(translation: com.google.ar.sceneform.math.Vector3): void;
						public decomposeTranslation(destTranslation: com.google.ar.sceneform.math.Vector3): void;
						public decomposeRotation(decomposedScale: com.google.ar.sceneform.math.Vector3, destRotation: com.google.ar.sceneform.math.Quaternion): void;
						public static equals(i: com.google.ar.sceneform.math.Matrix, lhs: com.google.ar.sceneform.math.Matrix): boolean;
						public makeScale(scale: com.google.ar.sceneform.math.Vector3): void;
						public makeScale(scale: number): void;
						public set(this_: androidNative.Array<number>): void;
						public extractQuaternion(s: com.google.ar.sceneform.math.Quaternion): void;
						public makeTranslation(translation: com.google.ar.sceneform.math.Vector3): void;
						public decomposeRotation(i: com.google.ar.sceneform.math.Vector3, i: com.google.ar.sceneform.math.Matrix): void;
						public makeTrs(translation: com.google.ar.sceneform.math.Vector3, rotation: com.google.ar.sceneform.math.Quaternion, scale: com.google.ar.sceneform.math.Vector3): void;
						public constructor(data: androidNative.Array<number>);
						public set(m: com.google.ar.sceneform.math.Matrix): void;
						public transformPoint(vector: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
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
				export module math {
					export class Quaternion {
						public static class: java.lang.Class<com.google.ar.sceneform.math.Quaternion>;
						public x: number;
						public y: number;
						public z: number;
						public w: number;
						public static lookRotation(forwardInWorld: com.google.ar.sceneform.math.Vector3, desiredUpInWorld: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Quaternion;
						public static slerp(start: com.google.ar.sceneform.math.Quaternion, end: com.google.ar.sceneform.math.Quaternion, t: number): com.google.ar.sceneform.math.Quaternion;
						public equals(other: any): boolean;
						public static identity(): com.google.ar.sceneform.math.Quaternion;
						public set(q: com.google.ar.sceneform.math.Quaternion): void;
						public hashCode(): number;
						public inverted(): com.google.ar.sceneform.math.Quaternion;
						public static rotationBetweenVectors(rotationAxis: com.google.ar.sceneform.math.Vector3, start: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Quaternion;
						public normalize(): boolean;
						public constructor(x: number, y: number, z: number, w: number);
						public static multiply(lhs: com.google.ar.sceneform.math.Quaternion, rhs: com.google.ar.sceneform.math.Quaternion): com.google.ar.sceneform.math.Quaternion;
						public set(axis: com.google.ar.sceneform.math.Vector3, angle: number): void;
						public constructor();
						public static rotateVector(q: com.google.ar.sceneform.math.Quaternion, src: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public constructor(axis: com.google.ar.sceneform.math.Vector3, angle: number);
						public normalized(): com.google.ar.sceneform.math.Quaternion;
						public static eulerAngles(eulerAngles: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Quaternion;
						public toString(): string;
						public constructor(eulerAngles: com.google.ar.sceneform.math.Vector3);
						public static inverseRotateVector(q: com.google.ar.sceneform.math.Quaternion, src: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public static equals(lhs: com.google.ar.sceneform.math.Quaternion, rhs: com.google.ar.sceneform.math.Quaternion): boolean;
						public constructor(q: com.google.ar.sceneform.math.Quaternion);
						public static axisAngle(axis: com.google.ar.sceneform.math.Vector3, degrees: number): com.google.ar.sceneform.math.Quaternion;
						public setIdentity(): void;
						public set(qx: number, qy: number, qz: number, qw: number): void;
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
				export module math {
					export class QuaternionEvaluator extends globalAndroid.animation.TypeEvaluator<com.google.ar.sceneform.math.Quaternion> {
						public static class: java.lang.Class<com.google.ar.sceneform.math.QuaternionEvaluator>;
						public constructor();
						public evaluate(fraction: number, startValue: com.google.ar.sceneform.math.Quaternion, endValue: com.google.ar.sceneform.math.Quaternion): com.google.ar.sceneform.math.Quaternion;
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
				export module math {
					export class Vector3 {
						public static class: java.lang.Class<com.google.ar.sceneform.math.Vector3>;
						public x: number;
						public y: number;
						public z: number;
						public static add(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public static max(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public static cross(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public equals(other: any): boolean;
						public static dot(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): number;
						public scaled(a: number): com.google.ar.sceneform.math.Vector3;
						public constructor(v: com.google.ar.sceneform.math.Vector3);
						public hashCode(): number;
						public static down(): com.google.ar.sceneform.math.Vector3;
						public set(v: com.google.ar.sceneform.math.Vector3): void;
						public set(vx: number, vy: number, vz: number): void;
						public static zero(): com.google.ar.sceneform.math.Vector3;
						public static angleBetweenVectors(a: com.google.ar.sceneform.math.Vector3, b: com.google.ar.sceneform.math.Vector3): number;
						public normalized(): com.google.ar.sceneform.math.Vector3;
						public static forward(): com.google.ar.sceneform.math.Vector3;
						public lengthSquared(): number;
						public static back(): com.google.ar.sceneform.math.Vector3;
						public constructor();
						public length(): number;
						public static min(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public static lerp(a: com.google.ar.sceneform.math.Vector3, b: com.google.ar.sceneform.math.Vector3, t: number): com.google.ar.sceneform.math.Vector3;
						public toString(): string;
						public static equals(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): boolean;
						public constructor(x: number, y: number, z: number);
						public static left(): com.google.ar.sceneform.math.Vector3;
						public static up(): com.google.ar.sceneform.math.Vector3;
						public negated(): com.google.ar.sceneform.math.Vector3;
						public static subtract(lhs: com.google.ar.sceneform.math.Vector3, rhs: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
						public static one(): com.google.ar.sceneform.math.Vector3;
						public static right(): com.google.ar.sceneform.math.Vector3;
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
				export module math {
					export class Vector3Evaluator extends globalAndroid.animation.TypeEvaluator<com.google.ar.sceneform.math.Vector3> {
						public static class: java.lang.Class<com.google.ar.sceneform.math.Vector3Evaluator>;
						public constructor();
						public evaluate(fraction: number, startValue: com.google.ar.sceneform.math.Vector3, endValue: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.math.Vector3;
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
				export module rendering {
					export class CameraProvider extends com.google.ar.sceneform.common.TransformProvider {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.CameraProvider>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.rendering.CameraProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isActive(): boolean;
							getNearClipPlane(): number;
							getFarClipPlane(): number;
							getViewMatrix(): com.google.ar.sceneform.math.Matrix;
							getProjectionMatrix(): com.google.ar.sceneform.math.Matrix;
							updateTrackedPose(param0: com.google.ar.core.Camera): void;
							getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
						});
						public constructor();
						public getNearClipPlane(): number;
						public getViewMatrix(): com.google.ar.sceneform.math.Matrix;
						public getProjectionMatrix(): com.google.ar.sceneform.math.Matrix;
						public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
						public isActive(): boolean;
						public getFarClipPlane(): number;
						public updateTrackedPose(param0: com.google.ar.core.Camera): void;
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
				export module rendering {
					export class CameraStream {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.CameraStream>;
						public static MATERIAL_CAMERA_TEXTURE: string = "cameraTexture";
						public static MATERIAL_DEPTH_TEXTURE: string = "depthTexture";
						public cameraStreamRenderable: number;
						public recalculateCameraUvs(frame: com.google.ar.core.Frame): void;
						public getDepthOcclusionMode(): com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode;
						public setRenderPriority(renderableInstance: number): void;
						public isDepthOcclusionModeSupported(depthOcclusionMode: com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode): boolean;
						public recalculateOcclusion(depthImage: globalAndroid.media.Image): void;
						public getDepthMode(): com.google.ar.sceneform.rendering.CameraStream.DepthMode;
						public isTextureInitialized(): boolean;
						public checkIfDepthIsEnabled(session: com.google.ar.core.Session, config: com.google.ar.core.Config): void;
						public initializeTexture(intrinsics: com.google.ar.core.Frame): void;
						public setDepthOcclusionMode(depthOcclusionMode: com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode): void;
						public constructor(cameraTextureId: number, renderer: com.google.ar.sceneform.rendering.Renderer);
						public getRenderPriority(): number;
					}
					export module CameraStream {
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.CameraStream.CleanupCallback>;
							public run(): void;
						}
						export class DepthMode {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.CameraStream.DepthMode>;
							public static NO_DEPTH: com.google.ar.sceneform.rendering.CameraStream.DepthMode;
							public static DEPTH: com.google.ar.sceneform.rendering.CameraStream.DepthMode;
							public static RAW_DEPTH: com.google.ar.sceneform.rendering.CameraStream.DepthMode;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.CameraStream.DepthMode>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.CameraStream.DepthMode;
						}
						export class DepthOcclusionMode {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode>;
							public static DEPTH_OCCLUSION_ENABLED: com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode;
							public static DEPTH_OCCLUSION_DISABLED: com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.CameraStream.DepthOcclusionMode>;
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
				export module rendering {
					export class CleanupItem<T>  extends java.lang.ref.PhantomReference<any> {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.CleanupItem<any>>;
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
				export module rendering {
					export class CleanupRegistry<T>  extends com.google.ar.sceneform.resources.ResourceHolder {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.CleanupRegistry<any>>;
						public constructor();
						public reclaimReleasedResources(): number;
						public constructor(cleanupItemHashSet: java.util.HashSet<com.google.ar.sceneform.rendering.CleanupItem<any>>, referenceQueue: java.lang.ref.ReferenceQueue<any>);
						public destroyAllResources(): void;
						public register(trackedObject: any, cleanupCallback: java.lang.Runnable): void;
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
				export module rendering {
					export class Color {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Color>;
						public r: number;
						public g: number;
						public b: number;
						public a: number;
						public constructor(r: number, g: number, b: number);
						public set(argb: number): void;
						public constructor();
						public set(r: number, g: number, b: number, a: number): void;
						public constructor(color: com.google.ar.sceneform.rendering.Color);
						public constructor(r: number, g: number, b: number, a: number);
						public constructor(argb: number);
						public set(color: com.google.ar.sceneform.rendering.Color): void;
						public inverseTonemap(): com.google.ar.sceneform.rendering.Color;
						public set(r: number, g: number, b: number): void;
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
				export module rendering {
					export class DepthTexture {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.DepthTexture>;
						public constructor(width: number, height: number);
						public getFilamentTexture(): com.google.android.filament.Texture;
						public updateDepthTexture(depthImage: globalAndroid.media.Image): void;
					}
					export module DepthTexture {
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.DepthTexture.CleanupCallback>;
							public run(): void;
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
				export module rendering {
					export class DpToMetersViewSizer extends com.google.ar.sceneform.rendering.ViewSizer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.DpToMetersViewSizer>;
						public getDpPerMeters(): number;
						public getSize(param0: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public getSize(view: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public constructor(dpPerMeters: number);
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
				export module rendering {
					export class EngineInstance {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.EngineInstance>;
						public static disableHeadlessEngine(): void;
						public constructor();
						public static enableHeadlessEngine(): void;
						public static isHeadlessMode(): boolean;
						public static isEngineDestroyed(): boolean;
						public static getEngine(): com.google.ar.sceneform.rendering.IEngine;
						public static destroyEngine(): void;
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
				export module rendering {
					export class ExternalTexture {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ExternalTexture>;
						public constructor(textureId: number, width: number, height: number);
						public constructor();
						public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
						public getFilamentStream(): com.google.android.filament.Stream;
						public getFilamentTexture(): com.google.android.filament.Texture;
						public getSurface(): globalAndroid.view.Surface;
					}
					export module ExternalTexture {
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.ExternalTexture.CleanupCallback>;
							public run(): void;
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
				export module rendering {
					export class FilamentEngineWrapper extends com.google.ar.sceneform.rendering.IEngine {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.FilamentEngineWrapper>;
						public destroyTexture(param0: com.google.android.filament.Texture): void;
						public destroyStream(stream: com.google.android.filament.Stream): void;
						public destroyFence(fence: com.google.android.filament.Fence): void;
						public destroy(): void;
						public flushAndWait(): void;
						public destroyView(param0: com.google.android.filament.View): void;
						public createSwapChain(param0: any): com.google.android.filament.SwapChain;
						public destroyMaterial(param0: com.google.android.filament.Material): void;
						public destroyFence(param0: com.google.android.filament.Fence): void;
						public destroyEntity(entity: number): void;
						public getLightManager(): com.google.android.filament.LightManager;
						public destroyScene(scene: com.google.android.filament.Scene): void;
						public destroyIndexBuffer(indexBuffer: com.google.android.filament.IndexBuffer): void;
						public destroyStream(param0: com.google.android.filament.Stream): void;
						public getFilamentEngine(): com.google.android.filament.Engine;
						public destroyTexture(texture: com.google.android.filament.Texture): void;
						public createSwapChain(param0: any, param1: number): com.google.android.filament.SwapChain;
						public destroyIndirectLight(ibl: com.google.android.filament.IndirectLight): void;
						public destroyScene(param0: com.google.android.filament.Scene): void;
						public createSwapChain(surface: any, flags: number): com.google.android.filament.SwapChain;
						public destroyVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public createSwapChainFromNativeSurface(param0: com.google.android.filament.NativeSurface, param1: number): com.google.android.filament.SwapChain;
						public createCamera(): com.google.android.filament.Camera;
						public getTransformManager(): com.google.android.filament.TransformManager;
						public destroyRenderer(renderer: com.google.android.filament.Renderer): void;
						public destroyMaterialInstance(param0: com.google.android.filament.MaterialInstance): void;
						public destroySkybox(param0: com.google.android.filament.Skybox): void;
						public destroyMaterialInstance(materialInstance: com.google.android.filament.MaterialInstance): void;
						public destroySwapChain(param0: com.google.android.filament.SwapChain): void;
						public destroyMaterial(material: com.google.android.filament.Material): void;
						public destroySwapChain(swapChain: com.google.android.filament.SwapChain): void;
						public createFence(): com.google.android.filament.Fence;
						public createCamera(param0: number): com.google.android.filament.Camera;
						public createSwapChainFromNativeSurface(surface: com.google.android.filament.NativeSurface, flags: number): com.google.android.filament.SwapChain;
						public destroyRenderer(param0: com.google.android.filament.Renderer): void;
						public destroyEntity(param0: number): void;
						public destroyVertexBuffer(vertexBuffer: com.google.android.filament.VertexBuffer): void;
						public createView(): com.google.android.filament.View;
						public createRenderer(): com.google.android.filament.Renderer;
						public isValid(): boolean;
						public destroyIndirectLight(param0: com.google.android.filament.IndirectLight): void;
						public getRenderableManager(): com.google.android.filament.RenderableManager;
						public constructor(engine: com.google.android.filament.Engine);
						public createSwapChain(surface: any): com.google.android.filament.SwapChain;
						public destroyView(view: com.google.android.filament.View): void;
						public createScene(): com.google.android.filament.Scene;
						public destroySkybox(skybox: com.google.android.filament.Skybox): void;
						public destroyIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public createCamera(entity: number): com.google.android.filament.Camera;
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
				export module rendering {
					export class FixedHeightViewSizer extends com.google.ar.sceneform.rendering.ViewSizer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.FixedHeightViewSizer>;
						public getSize(param0: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public getSize(view: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public constructor(heightMeters: number);
						public getHeight(): number;
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
				export module rendering {
					export class FixedWidthViewSizer extends com.google.ar.sceneform.rendering.ViewSizer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.FixedWidthViewSizer>;
						public getSize(param0: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public getWidth(): number;
						public getSize(view: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						public constructor(widthMeters: number);
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
				export module rendering {
					export class FutureHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.FutureHelper>;
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
				export module rendering {
					export class GLHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.GLHelper>;
						public constructor();
						public static makeContext(shareContext: globalAndroid.opengl.EGLContext): globalAndroid.opengl.EGLContext;
						public static makeContext(): globalAndroid.opengl.EGLContext;
						public static destroyContext(context: globalAndroid.opengl.EGLContext): void;
						public static createCameraTexture(): number;
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
				export module rendering {
					export class HeadlessEngineWrapper extends com.google.ar.sceneform.rendering.FilamentEngineWrapper {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.HeadlessEngineWrapper>;
						public static TAG: string;
						public createSwapChainFromNativeSurface(fakeSurface: com.google.android.filament.NativeSurface, e: number): com.google.android.filament.SwapChain;
						public destroyTexture(param0: com.google.android.filament.Texture): void;
						public destroyMaterialInstance(param0: com.google.android.filament.MaterialInstance): void;
						public destroy(): void;
						public destroySkybox(param0: com.google.android.filament.Skybox): void;
						public destroySwapChain(param0: com.google.android.filament.SwapChain): void;
						public flushAndWait(): void;
						public destroyView(param0: com.google.android.filament.View): void;
						public createSwapChain(param0: any): com.google.android.filament.SwapChain;
						public destroyMaterial(param0: com.google.android.filament.Material): void;
						public destroyFence(param0: com.google.android.filament.Fence): void;
						public getLightManager(): com.google.android.filament.LightManager;
						public destroyStream(param0: com.google.android.filament.Stream): void;
						public createFence(): com.google.android.filament.Fence;
						public createSwapChain(fakeSurface: any, e: number): com.google.android.filament.SwapChain;
						public getFilamentEngine(): com.google.android.filament.Engine;
						public createCamera(param0: number): com.google.android.filament.Camera;
						public createSwapChain(param0: any, param1: number): com.google.android.filament.SwapChain;
						public destroyRenderer(param0: com.google.android.filament.Renderer): void;
						public constructor();
						public destroyEntity(param0: number): void;
						public destroySwapChain(swapChainHandle: com.google.android.filament.SwapChain): void;
						public createView(): com.google.android.filament.View;
						public createRenderer(): com.google.android.filament.Renderer;
						public isValid(): boolean;
						public destroyScene(param0: com.google.android.filament.Scene): void;
						public destroyIndirectLight(param0: com.google.android.filament.IndirectLight): void;
						public createSwapChain(surface: any, flags: number): com.google.android.filament.SwapChain;
						public getRenderableManager(): com.google.android.filament.RenderableManager;
						public constructor(engine: com.google.android.filament.Engine);
						public createSwapChain(fakeSurface: any): com.google.android.filament.SwapChain;
						public createScene(): com.google.android.filament.Scene;
						public destroyIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public destroyVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public createSwapChainFromNativeSurface(param0: com.google.android.filament.NativeSurface, param1: number): com.google.android.filament.SwapChain;
						public createCamera(): com.google.android.filament.Camera;
						public createCamera(entity: number): com.google.android.filament.Camera;
						public getTransformManager(): com.google.android.filament.TransformManager;
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
				export module rendering {
					export class IEngine {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.IEngine>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.rendering.IEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFilamentEngine(): com.google.android.filament.Engine;
							isValid(): boolean;
							destroy(): void;
							createSwapChain(param0: any): com.google.android.filament.SwapChain;
							createSwapChain(param0: any, param1: number): com.google.android.filament.SwapChain;
							createSwapChainFromNativeSurface(param0: com.google.android.filament.NativeSurface, param1: number): com.google.android.filament.SwapChain;
							destroySwapChain(param0: com.google.android.filament.SwapChain): void;
							createView(): com.google.android.filament.View;
							destroyView(param0: com.google.android.filament.View): void;
							createRenderer(): com.google.android.filament.Renderer;
							destroyRenderer(param0: com.google.android.filament.Renderer): void;
							createCamera(): com.google.android.filament.Camera;
							createCamera(param0: number): com.google.android.filament.Camera;
							createScene(): com.google.android.filament.Scene;
							destroyScene(param0: com.google.android.filament.Scene): void;
							destroyStream(param0: com.google.android.filament.Stream): void;
							createFence(): com.google.android.filament.Fence;
							destroyFence(param0: com.google.android.filament.Fence): void;
							destroyIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
							destroyVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
							destroyIndirectLight(param0: com.google.android.filament.IndirectLight): void;
							destroyMaterial(param0: com.google.android.filament.Material): void;
							destroyMaterialInstance(param0: com.google.android.filament.MaterialInstance): void;
							destroySkybox(param0: com.google.android.filament.Skybox): void;
							destroyTexture(param0: com.google.android.filament.Texture): void;
							destroyEntity(param0: number): void;
							getTransformManager(): com.google.android.filament.TransformManager;
							getLightManager(): com.google.android.filament.LightManager;
							getRenderableManager(): com.google.android.filament.RenderableManager;
							flushAndWait(): void;
						});
						public constructor();
						public destroyTexture(param0: com.google.android.filament.Texture): void;
						public destroyMaterialInstance(param0: com.google.android.filament.MaterialInstance): void;
						public destroy(): void;
						public destroySkybox(param0: com.google.android.filament.Skybox): void;
						public destroySwapChain(param0: com.google.android.filament.SwapChain): void;
						public flushAndWait(): void;
						public destroyView(param0: com.google.android.filament.View): void;
						public createSwapChain(param0: any): com.google.android.filament.SwapChain;
						public destroyMaterial(param0: com.google.android.filament.Material): void;
						public destroyFence(param0: com.google.android.filament.Fence): void;
						public getLightManager(): com.google.android.filament.LightManager;
						public destroyStream(param0: com.google.android.filament.Stream): void;
						public createFence(): com.google.android.filament.Fence;
						public getFilamentEngine(): com.google.android.filament.Engine;
						public createCamera(param0: number): com.google.android.filament.Camera;
						public createSwapChain(param0: any, param1: number): com.google.android.filament.SwapChain;
						public destroyRenderer(param0: com.google.android.filament.Renderer): void;
						public destroyEntity(param0: number): void;
						public createView(): com.google.android.filament.View;
						public createRenderer(): com.google.android.filament.Renderer;
						public isValid(): boolean;
						public destroyScene(param0: com.google.android.filament.Scene): void;
						public destroyIndirectLight(param0: com.google.android.filament.IndirectLight): void;
						public getRenderableManager(): com.google.android.filament.RenderableManager;
						public createScene(): com.google.android.filament.Scene;
						public destroyIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public destroyVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public createSwapChainFromNativeSurface(param0: com.google.android.filament.NativeSurface, param1: number): com.google.android.filament.SwapChain;
						public createCamera(): com.google.android.filament.Camera;
						public getTransformManager(): com.google.android.filament.TransformManager;
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
				export module rendering {
					export class IRenderableInternalData {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.IRenderableInternalData>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.rendering.IRenderableInternalData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setCenterAabb(param0: com.google.ar.sceneform.math.Vector3): void;
							getCenterAabb(): com.google.ar.sceneform.math.Vector3;
							setExtentsAabb(param0: com.google.ar.sceneform.math.Vector3): void;
							getExtentsAabb(): com.google.ar.sceneform.math.Vector3;
							getSizeAabb(): com.google.ar.sceneform.math.Vector3;
							setTransformScale(param0: number): void;
							getTransformScale(): number;
							setTransformOffset(param0: com.google.ar.sceneform.math.Vector3): void;
							getTransformOffset(): com.google.ar.sceneform.math.Vector3;
							getMeshes(): java.util.ArrayList<com.google.ar.sceneform.rendering.RenderableInternalData.MeshData>;
							setIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
							getIndexBuffer(): com.google.android.filament.IndexBuffer;
							setVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
							getVertexBuffer(): com.google.android.filament.VertexBuffer;
							setRawIndexBuffer(param0: java.nio.IntBuffer): void;
							getRawIndexBuffer(): java.nio.IntBuffer;
							setRawPositionBuffer(param0: java.nio.FloatBuffer): void;
							getRawPositionBuffer(): java.nio.FloatBuffer;
							setRawTangentsBuffer(param0: java.nio.FloatBuffer): void;
							getRawTangentsBuffer(): java.nio.FloatBuffer;
							setRawUvBuffer(param0: java.nio.FloatBuffer): void;
							getRawUvBuffer(): java.nio.FloatBuffer;
							setRawColorBuffer(param0: java.nio.FloatBuffer): void;
							getRawColorBuffer(): java.nio.FloatBuffer;
							setAnimationNames(param0: java.util.List<string>): void;
							getAnimationNames(): java.util.List<string>;
							buildInstanceData(param0: com.google.ar.sceneform.rendering.RenderableInstance, param1: number): void;
							dispose(): void;
						});
						public constructor();
						public setTransformOffset(param0: com.google.ar.sceneform.math.Vector3): void;
						public setVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public setRawUvBuffer(param0: java.nio.FloatBuffer): void;
						public getMeshes(): java.util.ArrayList<com.google.ar.sceneform.rendering.RenderableInternalData.MeshData>;
						public setIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public getIndexBuffer(): com.google.android.filament.IndexBuffer;
						public setRawTangentsBuffer(param0: java.nio.FloatBuffer): void;
						public getRawUvBuffer(): java.nio.FloatBuffer;
						public getAnimationNames(): java.util.List<string>;
						public getRawColorBuffer(): java.nio.FloatBuffer;
						public getExtentsAabb(): com.google.ar.sceneform.math.Vector3;
						public setCenterAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public setRawColorBuffer(param0: java.nio.FloatBuffer): void;
						public setRawPositionBuffer(param0: java.nio.FloatBuffer): void;
						public getSizeAabb(): com.google.ar.sceneform.math.Vector3;
						public getCenterAabb(): com.google.ar.sceneform.math.Vector3;
						public setRawIndexBuffer(param0: java.nio.IntBuffer): void;
						public setTransformScale(param0: number): void;
						public setExtentsAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public setAnimationNames(param0: java.util.List<string>): void;
						public getRawIndexBuffer(): java.nio.IntBuffer;
						public getRawPositionBuffer(): java.nio.FloatBuffer;
						public dispose(): void;
						public getRawTangentsBuffer(): java.nio.FloatBuffer;
						public getTransformOffset(): com.google.ar.sceneform.math.Vector3;
						public buildInstanceData(param0: com.google.ar.sceneform.rendering.RenderableInstance, param1: number): void;
						public getVertexBuffer(): com.google.android.filament.VertexBuffer;
						public getTransformScale(): number;
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
				export module rendering {
					export class Light {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Light>;
						public setInnerConeAngle(coneInner: number): void;
						public getLocalDirection(): com.google.ar.sceneform.math.Vector3;
						public getInnerConeAngle(): number;
						public setColor(color: com.google.ar.sceneform.rendering.Color): void;
						public getColor(): com.google.ar.sceneform.rendering.Color;
						public getType(): com.google.ar.sceneform.rendering.Light.Type;
						public setFalloffRadius(falloffRadius: number): void;
						public getFalloffRadius(): number;
						public getLocalPosition(): com.google.ar.sceneform.math.Vector3;
						public setOuterConeAngle(coneOuter: number): void;
						public setIntensity(intensity: number): void;
						public createInstance(transformProvider: com.google.ar.sceneform.common.TransformProvider): com.google.ar.sceneform.rendering.LightInstance;
						public getOuterConeAngle(): number;
						public getIntensity(): number;
						public static builder(type: com.google.ar.sceneform.rendering.Light.Type): com.google.ar.sceneform.rendering.Light.Builder;
						public isShadowCastingEnabled(): boolean;
						public setColorTemperature(temperature: number): void;
					}
					export module Light {
						export class Builder {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Light.Builder>;
							public setColorTemperature(temperature: number): com.google.ar.sceneform.rendering.Light.Builder;
							public setColor(color: com.google.ar.sceneform.rendering.Color): com.google.ar.sceneform.rendering.Light.Builder;
							public setFalloffRadius(falloffRadius: number): com.google.ar.sceneform.rendering.Light.Builder;
							public setInnerConeAngle(coneInner: number): com.google.ar.sceneform.rendering.Light.Builder;
							public setShadowCastingEnabled(enableShadows: boolean): com.google.ar.sceneform.rendering.Light.Builder;
							public setIntensity(intensity: number): com.google.ar.sceneform.rendering.Light.Builder;
							public build(): com.google.ar.sceneform.rendering.Light;
							public setOuterConeAngle(coneOuter: number): com.google.ar.sceneform.rendering.Light.Builder;
						}
						export class LightChangedListener {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Light.LightChangedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.rendering.Light$LightChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChange(): void;
							});
							public constructor();
							public onChange(): void;
						}
						export class Type {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Light.Type>;
							public static POINT: com.google.ar.sceneform.rendering.Light.Type;
							public static DIRECTIONAL: com.google.ar.sceneform.rendering.Light.Type;
							public static SPOTLIGHT: com.google.ar.sceneform.rendering.Light.Type;
							public static FOCUSED_SPOTLIGHT: com.google.ar.sceneform.rendering.Light.Type;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.Light.Type;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.Light.Type>;
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
				export module rendering {
					export class LightInstance {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.LightInstance>;
						public detachFromRenderer(): void;
						public attachToRenderer(renderer: com.google.ar.sceneform.rendering.Renderer): void;
						public updateTransform(): void;
						public getLight(): com.google.ar.sceneform.rendering.Light;
						public dispose(): void;
						public finalize(): void;
					}
					export module LightInstance {
						export class LightInstanceChangeListener extends com.google.ar.sceneform.rendering.Light.LightChangedListener {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.LightInstance.LightInstanceChangeListener>;
							public onChange(): void;
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
				export module rendering {
					export class LoadGltfListener {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.LoadGltfListener>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.rendering.LoadGltfListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setLoadingStage(param0: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage): void;
							reportBytesDownloaded(param0: number): void;
							onFinishedFetchingMaterials(): void;
							onFinishedLoadingModel(param0: number): void;
							onFinishedReadingFiles(param0: number): void;
							setModelSize(param0: number): void;
							onReadingFilesFailed(param0: java.lang.Exception): void;
						});
						public constructor();
						public onFinishedLoadingModel(param0: number): void;
						public setLoadingStage(param0: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage): void;
						public reportBytesDownloaded(param0: number): void;
						public onFinishedReadingFiles(param0: number): void;
						public setModelSize(param0: number): void;
						public onReadingFilesFailed(param0: java.lang.Exception): void;
						public onFinishedFetchingMaterials(): void;
					}
					export module LoadGltfListener {
						export class GltfLoadStage {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage>;
							public static LOAD_STAGE_NONE: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static FETCH_MATERIALS: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static DOWNLOAD_MODEL: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static CREATE_LOADER: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static ADD_MISSING_FILES: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static FINISHED_READING_FILES: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static CREATE_RENDERABLE: com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.LoadGltfListener.GltfLoadStage;
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
				export module rendering {
					export class LoadRenderableFromFilamentGltfTask<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.LoadRenderableFromFilamentGltfTask<any>>;
						public downloadAndProcessRenderable(inputStreamCreator: java.util.concurrent.Callable<java.io.InputStream>): java.util.concurrent.CompletableFuture<T>;
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
				export module rendering {
					export class LoadRenderableFromSfbTask<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.LoadRenderableFromSfbTask<any>>;
						public downloadAndProcessRenderable(inputStreamCreator: java.util.concurrent.Callable<java.io.InputStream>): java.util.concurrent.CompletableFuture<T>;
					}
					export module LoadRenderableFromSfbTask {
						export class ModelTexture {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.LoadRenderableFromSfbTask.ModelTexture>;
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
				export module rendering {
					export class LullModel {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.LullModel>;
						public static fromLullWrapMode: androidNative.Array<com.google.android.filament.TextureSampler.WrapMode>;
						public static isLullModel(buffer: java.nio.ByteBuffer): boolean;
						public constructor();
						public static fromLullToMagFilter(textureDef: com.google.ar.schemas.lull.TextureDef): com.google.android.filament.TextureSampler.MagFilter;
						public static fromLullToMinFilter(textureDef: com.google.ar.schemas.lull.TextureDef): com.google.android.filament.TextureSampler.MinFilter;
						public static getByteCountPerVertex(attribute: com.google.ar.schemas.lull.ModelInstanceDef): number;
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
				export module rendering {
					export class Material {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material>;
						public setFloat3(name: string, x: number, y: number, z: number): void;
						public setBoolean4(name: string, x: boolean, y: boolean, z: boolean, w: boolean): void;
						public setFloat2(name: string, x: number, y: number): void;
						public setInt2(name: string, x: number, y: number): void;
						public makeCopy(): com.google.ar.sceneform.rendering.Material;
						public static builder(): com.google.ar.sceneform.rendering.Material.Builder;
						public setFloat(name: string, x: number): void;
						public setInt(name: string, x: number): void;
						public setTexture(name: string, texture: com.google.ar.sceneform.rendering.Texture): void;
						public setBoolean3(name: string, x: boolean, y: boolean, z: boolean): void;
						public setFloat4(name: string, color: com.google.ar.sceneform.rendering.Color): void;
						public setFloat3(name: string, color: com.google.ar.sceneform.rendering.Color): void;
						public setInt3(name: string, x: number, y: number, z: number): void;
						public setDepthTexture(name: string, depthTexture: com.google.ar.sceneform.rendering.DepthTexture): void;
						public getExternalTexture(name: string): com.google.ar.sceneform.rendering.ExternalTexture;
						public setBoolean(name: string, x: boolean): void;
						public setFloat3(name: string, value: com.google.ar.sceneform.math.Vector3): void;
						public setInt4(name: string, x: number, y: number, z: number, w: number): void;
						public setFloat4(name: string, x: number, y: number, z: number, w: number): void;
						public setBoolean2(name: string, x: boolean, y: boolean): void;
						public setExternalTexture(name: string, externalTexture: com.google.ar.sceneform.rendering.ExternalTexture): void;
						public setBaseColorTexture(texture: com.google.ar.sceneform.rendering.Texture): void;
					}
					export module Material {
						export class Builder {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material.Builder>;
							public setSource(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri): com.google.ar.sceneform.rendering.Material.Builder;
							public setSource(context: globalAndroid.content.Context, resource: number): com.google.ar.sceneform.rendering.Material.Builder;
							public setSource(materialBuffer: java.nio.ByteBuffer): com.google.ar.sceneform.rendering.Material.Builder;
							public setRegistryId(registryId: any): com.google.ar.sceneform.rendering.Material.Builder;
							public setSource(inputStreamCreator: java.util.concurrent.Callable<java.io.InputStream>): com.google.ar.sceneform.rendering.Material.Builder;
							public build(): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
						}
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material.CleanupCallback>;
							public run(): void;
						}
						export class IMaterialInstance {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material.IMaterialInstance>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.rendering.Material$IMaterialInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInstance(): com.google.android.filament.MaterialInstance;
								isValidInstance(): boolean;
								dispose(): void;
							});
							public constructor();
							public getInstance(): com.google.android.filament.MaterialInstance;
							public dispose(): void;
							public isValidInstance(): boolean;
						}
						export class InternalGltfMaterialInstance extends com.google.ar.sceneform.rendering.Material.IMaterialInstance {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material.InternalGltfMaterialInstance>;
							public constructor();
							public getInstance(): com.google.android.filament.MaterialInstance;
							public dispose(): void;
							public isValidInstance(): boolean;
						}
						export class InternalMaterialInstance extends com.google.ar.sceneform.rendering.Material.IMaterialInstance {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Material.InternalMaterialInstance>;
							public getInstance(): com.google.android.filament.MaterialInstance;
							public dispose(): void;
							public constructor(instance: com.google.android.filament.MaterialInstance);
							public isValidInstance(): boolean;
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
				export module rendering {
					export class MaterialFactory {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialFactory>;
						public static MATERIAL_COLOR: string = "color";
						public static MATERIAL_TEXTURE: string = "texture";
						public static MATERIAL_METALLIC: string = "metallic";
						public static MATERIAL_ROUGHNESS: string = "roughness";
						public static MATERIAL_REFLECTANCE: string = "reflectance";
						public constructor();
						public static makeTransparentWithTexture(context: globalAndroid.content.Context, texture: com.google.ar.sceneform.rendering.Texture): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
						public static makeOpaqueWithTexture(context: globalAndroid.content.Context, texture: com.google.ar.sceneform.rendering.Texture): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
						public static makeOpaqueWithColor(context: globalAndroid.content.Context, color: com.google.ar.sceneform.rendering.Color): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
						public static makeTransparentWithColor(context: globalAndroid.content.Context, color: com.google.ar.sceneform.rendering.Color): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
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
				export module rendering {
					export abstract class MaterialInternalData extends com.google.ar.sceneform.resources.SharedReference {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialInternalData>;
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
				export module rendering {
					export class MaterialInternalDataGltfImpl extends com.google.ar.sceneform.rendering.MaterialInternalData {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialInternalDataGltfImpl>;
						public onDispose(): void;
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
				export module rendering {
					export class MaterialInternalDataImpl extends com.google.ar.sceneform.rendering.MaterialInternalData {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialInternalDataImpl>;
						public onDispose(): void;
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
				export module rendering {
					export class MaterialParameters {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters>;
					}
					export module MaterialParameters {
						export class Boolean2Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Boolean2Parameter>;
						}
						export class Boolean3Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Boolean3Parameter>;
						}
						export class Boolean4Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Boolean4Parameter>;
						}
						export class BooleanParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.BooleanParameter>;
						}
						export class DepthTextureParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.DepthTextureParameter>;
						}
						export class ExternalTextureParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.ExternalTextureParameter>;
							public clone(): com.google.ar.sceneform.rendering.MaterialParameters.Parameter;
						}
						export class Float2Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Float2Parameter>;
						}
						export class Float3Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Float3Parameter>;
						}
						export class Float4Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Float4Parameter>;
						}
						export class FloatParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.FloatParameter>;
						}
						export class Int2Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Int2Parameter>;
						}
						export class Int3Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Int3Parameter>;
						}
						export class Int4Parameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Int4Parameter>;
						}
						export class IntParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.IntParameter>;
						}
						export abstract class Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.Parameter>;
							public clone(): com.google.ar.sceneform.rendering.MaterialParameters.Parameter;
						}
						export class TextureParameter extends com.google.ar.sceneform.rendering.MaterialParameters.Parameter {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.MaterialParameters.TextureParameter>;
							public clone(): com.google.ar.sceneform.rendering.MaterialParameters.Parameter;
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
				export module rendering {
					export class ModelRenderable extends com.google.ar.sceneform.rendering.Renderable {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ModelRenderable>;
						public static builder(): com.google.ar.sceneform.rendering.ModelRenderable.Builder;
						public makeCopy(): com.google.ar.sceneform.rendering.ModelRenderable;
						public makeCopy(): com.google.ar.sceneform.rendering.Renderable;
					}
					export module ModelRenderable {
						export class Builder extends com.google.ar.sceneform.rendering.Renderable.Builder<com.google.ar.sceneform.rendering.ModelRenderable,com.google.ar.sceneform.rendering.ModelRenderable.Builder> {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.ModelRenderable.Builder>;
							public constructor();
							public getRenderableClass(): java.lang.Class<com.google.ar.sceneform.rendering.ModelRenderable>;
							public getSelf(): any;
							public makeRenderable(): com.google.ar.sceneform.rendering.ModelRenderable;
							public getSelf(): com.google.ar.sceneform.rendering.ModelRenderable.Builder;
							public makeRenderable(): any;
							public getRenderableRegistry(): com.google.ar.sceneform.resources.ResourceRegistry<com.google.ar.sceneform.rendering.ModelRenderable>;
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
				export module rendering {
					export class PlaneFactory {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.PlaneFactory>;
						public static makePlane(result: com.google.ar.sceneform.math.Vector3, ex: com.google.ar.sceneform.math.Vector3, size: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.ModelRenderable;
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
				export module rendering {
					export class PlaneRenderer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.PlaneRenderer>;
						public static MATERIAL_TEXTURE: string = "texture";
						public static MATERIAL_UV_SCALE: string = "uvScale";
						public static MATERIAL_COLOR: string = "color";
						public static MATERIAL_SPOTLIGHT_RADIUS: string = "radius";
						public getMaterial(): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Material>;
						public setPlaneRendererMode(planeRendererMode: com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode): void;
						public constructor(renderer: com.google.ar.sceneform.rendering.Renderer);
						public getPlaneRendererMode(): com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode;
						public isVisible(): boolean;
						public setVisible(this_: boolean): void;
						public update(this_: com.google.ar.core.Frame, frame: java.util.Collection<com.google.ar.core.Plane>, updatedPlanes: number, viewWidth: number): void;
						public setEnabled(this_: boolean): void;
						public isShadowReceiver(): boolean;
						public isEnabled(): boolean;
						public setShadowReceiver(this_: boolean): void;
					}
					export module PlaneRenderer {
						export class PlaneRendererMode {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode>;
							public static RENDER_ALL: com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode;
							public static RENDER_TOP_MOST: com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.PlaneRenderer.PlaneRendererMode;
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
				export module rendering {
					export class PlaneVisualizer extends com.google.ar.sceneform.common.TransformProvider {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.PlaneVisualizer>;
						public setEnabled(enabled: boolean): void;
						public setVisible(visible: boolean): void;
						public setShadowReceiver(shadowReceiver: boolean): void;
						public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
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
				export module rendering {
					export class RenderViewToExternalTexture {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderViewToExternalTexture>;
						public onSizeChanged(this_: number, width: number, height: number, oldWidth: number): void;
						public dispatchDraw(surfaceCanvas: globalAndroid.graphics.Canvas): void;
						public onAttachedToWindow(): void;
						public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
						public isViewTextureReady(): boolean;
					}
					export module RenderViewToExternalTexture {
						export class OnViewSizeChangedListener {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderViewToExternalTexture.OnViewSizeChangedListener>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.rendering.RenderViewToExternalTexture$OnViewSizeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onViewSizeChanged(param0: number, param1: number): void;
							});
							public constructor();
							public onViewSizeChanged(param0: number, param1: number): void;
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
				export module rendering {
					export abstract class Renderable {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Renderable>;
						public asyncLoadEnabled: boolean;
						public collisionShape: com.google.ar.sceneform.collision.CollisionShape;
						public static RENDER_PRIORITY_DEFAULT: number = 4;
						public static RENDER_PRIORITY_FIRST: number = 0;
						public static RENDER_PRIORITY_LAST: number = 7;
						public static DEFAULT_ANIMATION_FRAME_RATE: number = 24;
						public getId(): com.google.ar.sceneform.utilities.ChangeId;
						public getSubmeshCount(): number;
						public getAnimationFrameRate(): number;
						public constructor(i: com.google.ar.sceneform.rendering.Renderable);
						public getSubmeshName(submeshIndex: number): string;
						public isShadowReceiver(): boolean;
						public setCollisionShape(collisionShape: com.google.ar.sceneform.collision.CollisionShape): void;
						public setShadowCaster(isShadowCaster: boolean): void;
						public getFinalModelMatrix(originalMatrix: com.google.ar.sceneform.math.Matrix): com.google.ar.sceneform.math.Matrix;
						public getMaterial(submeshIndex: number): com.google.ar.sceneform.rendering.Material;
						public makeCopy(): com.google.ar.sceneform.rendering.Renderable;
						public constructor(builder: com.google.ar.sceneform.rendering.Renderable.Builder<any,any>);
						public isShadowCaster(): boolean;
						public setMaterial(material: com.google.ar.sceneform.rendering.Material): void;
						public createInstance(transformProvider: com.google.ar.sceneform.common.TransformProvider): com.google.ar.sceneform.rendering.RenderableInstance;
						public setMaterial(submeshIndex: number, material: com.google.ar.sceneform.rendering.Material): void;
						public setShadowReceiver(isShadowReceiver: boolean): void;
						public getMaterial(): com.google.ar.sceneform.rendering.Material;
						public setRenderPriority(renderPriority: number): void;
						public getCollisionShape(): com.google.ar.sceneform.collision.CollisionShape;
						public updateFromDefinition(definition: com.google.ar.sceneform.rendering.RenderableDefinition): void;
						public getRenderPriority(): number;
					}
					export module Renderable {
						export abstract class Builder<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Renderable.Builder<any,any>>;
							public registryId: any;
							public context: globalAndroid.content.Context;
							public constructor();
							public setSource(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri): B;
							public build(): java.util.concurrent.CompletableFuture<T>;
							public getRenderableClass(): java.lang.Class<T>;
							public setSource(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri, enableCaching: boolean): B;
							public getSelf(): B;
							public setSource(context: globalAndroid.content.Context, resource: number): B;
							public setSource(definition: com.google.ar.sceneform.rendering.RenderableDefinition): B;
							public setRegistryId(registryId: any): B;
							public getRenderableRegistry(): com.google.ar.sceneform.resources.ResourceRegistry<T>;
							public setAsyncLoadEnabled(asyncLoadEnabled: boolean): B;
							public makeRenderable(): T;
							public setSource(context: globalAndroid.content.Context, inputStreamCreator: java.util.concurrent.Callable<java.io.InputStream>): B;
							public setIsFilamentGltf(isFilamentGltf: boolean): B;
							public setAnimationFrameRate(frameRate: number): B;
							public hasSource(): java.lang.Boolean;
							public checkPreconditions(): void;
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
				export module rendering {
					export class RenderableDefinition {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableDefinition>;
						public static builder(): com.google.ar.sceneform.rendering.RenderableDefinition.Builder;
						public setSubmeshes(submeshes: java.util.List<com.google.ar.sceneform.rendering.RenderableDefinition.Submesh>): void;
						public setVertices(vertices: java.util.List<com.google.ar.sceneform.rendering.Vertex>): void;
					}
					export module RenderableDefinition {
						export class Builder {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableDefinition.Builder>;
							public constructor();
							public build(): com.google.ar.sceneform.rendering.RenderableDefinition;
							public setSubmeshes(submeshes: java.util.List<com.google.ar.sceneform.rendering.RenderableDefinition.Submesh>): com.google.ar.sceneform.rendering.RenderableDefinition.Builder;
							public setVertices(vertices: java.util.List<com.google.ar.sceneform.rendering.Vertex>): com.google.ar.sceneform.rendering.RenderableDefinition.Builder;
						}
						export class Submesh {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableDefinition.Submesh>;
							public getTriangleIndices(): java.util.List<java.lang.Integer>;
							public setMaterial(material: com.google.ar.sceneform.rendering.Material): void;
							public setName(name: string): void;
							public getMaterial(): com.google.ar.sceneform.rendering.Material;
							public getName(): string;
							public setTriangleIndices(triangleIndices: java.util.List<java.lang.Integer>): void;
							public static builder(): com.google.ar.sceneform.rendering.RenderableDefinition.Submesh.Builder;
						}
						export module Submesh {
							export class Builder {
								public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableDefinition.Submesh.Builder>;
								public setMaterial(material: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.RenderableDefinition.Submesh.Builder;
								public build(): com.google.ar.sceneform.rendering.RenderableDefinition.Submesh;
								public constructor();
								public setName(name: string): com.google.ar.sceneform.rendering.RenderableDefinition.Submesh.Builder;
								public setTriangleIndices(triangleIndices: java.util.List<java.lang.Integer>): com.google.ar.sceneform.rendering.RenderableDefinition.Submesh.Builder;
							}
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
				export module rendering {
					export class RenderableInstance extends com.google.ar.sceneform.animation.AnimatableModel {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInstance>;
						public getMaterial(index: number): com.google.ar.sceneform.rendering.Material;
						public updateAnimations(i: boolean): boolean;
						public getAnimationNames(): java.util.List<string>;
						public destroy(): void;
						public hasAnimations(): boolean;
						public animate(repeat: boolean): globalAndroid.animation.ObjectAnimator;
						public animate(animationNames: androidNative.Array<string>): globalAndroid.animation.ObjectAnimator;
						public onModelAnimationChanged(animation: com.google.ar.sceneform.animation.ModelAnimation): void;
						public getAnimation(name: string): com.google.ar.sceneform.animation.ModelAnimation;
						public getRelativeTransform(): com.google.ar.sceneform.math.Matrix;
						public getWorldModelMatrix(): com.google.ar.sceneform.math.Matrix;
						public animate(animationIndexes: androidNative.Array<number>): globalAndroid.animation.ObjectAnimator;
						public getRenderable(): com.google.ar.sceneform.rendering.Renderable;
						public detachFromRenderer(): void;
						public isShadowCaster(): boolean;
						public getAnimationOrThrow(name: string): com.google.ar.sceneform.animation.ModelAnimation;
						public setAnimationsTimePosition(this_: number): void;
						public setMaterial(material: com.google.ar.sceneform.rendering.Material): void;
						public setSkinningModifier(skinningModifier: com.google.ar.sceneform.rendering.RenderableInstance.SkinningModifier): void;
						public getAnimationCount(): number;
						public setShadowReceiver(isShadowReceiver: boolean): void;
						public getMaterial(this_: string): com.google.ar.sceneform.rendering.Material;
						public getAnimationName(animationIndex: number): string;
						public getAnimation(animationIndex: number): com.google.ar.sceneform.animation.ModelAnimation;
						public animate(animations: androidNative.Array<com.google.ar.sceneform.animation.ModelAnimation>): globalAndroid.animation.ObjectAnimator;
						public attachToRenderer(renderer: com.google.ar.sceneform.rendering.Renderer): void;
						public getEntity(): number;
						public getMaterialsCount(): number;
						public getRenderPriority(): number;
						public applyAnimationChange(param0: com.google.ar.sceneform.animation.ModelAnimation): boolean;
						public getAnimationIndex(this_: string): number;
						public isShadowReceiver(): boolean;
						public constructor(transformProvider: com.google.ar.sceneform.common.TransformProvider, renderable: com.google.ar.sceneform.rendering.Renderable);
						public setShadowCaster(isShadowCaster: boolean): void;
						public setMaterial(entityIndex: number, primitiveIndex: number, material: com.google.ar.sceneform.rendering.Material): void;
						public setMaterial(this_: number, primitiveIndex: com.google.ar.sceneform.rendering.Material): void;
						public getAnimation(param0: number): com.google.ar.sceneform.animation.ModelAnimation;
						public setRenderPriority(i: number): void;
						public setCulling(this_: boolean): void;
						public applyAnimationChange(animation: com.google.ar.sceneform.animation.ModelAnimation): boolean;
						public getMaterial(): com.google.ar.sceneform.rendering.Material;
						public getRenderedEntity(): number;
						public setAnimationsFramePosition(this_: number): void;
						public getFilamentAsset(): com.google.android.filament.gltfio.FilamentAsset;
						public getMaterialName(index: number): string;
						public prepareForDraw(): void;
						public getRelativeTransformInverse(): com.google.ar.sceneform.math.Matrix;
					}
					export module RenderableInstance {
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInstance.CleanupCallback>;
							public run(): void;
						}
						export class SkinningModifier {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInstance.SkinningModifier>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.rendering.RenderableInstance$SkinningModifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								modifyMaterialBoneTransformsBuffer(param0: java.nio.FloatBuffer): java.nio.FloatBuffer;
								isModifiedSinceLastRender(): boolean;
							});
							public constructor();
							public modifyMaterialBoneTransformsBuffer(param0: java.nio.FloatBuffer): java.nio.FloatBuffer;
							public isModifiedSinceLastRender(): boolean;
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
				export module rendering {
					export class RenderableInternalData extends com.google.ar.sceneform.rendering.IRenderableInternalData {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInternalData>;
						public setTransformOffset(param0: com.google.ar.sceneform.math.Vector3): void;
						public setRawPositionBuffer(rawPositionBuffer: java.nio.FloatBuffer): void;
						public setVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public setRawUvBuffer(param0: java.nio.FloatBuffer): void;
						public getMeshes(): java.util.ArrayList<com.google.ar.sceneform.rendering.RenderableInternalData.MeshData>;
						public setRawTangentsBuffer(rawTangentsBuffer: java.nio.FloatBuffer): void;
						public setIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public getIndexBuffer(): com.google.android.filament.IndexBuffer;
						public getRawUvBuffer(): java.nio.FloatBuffer;
						public getAnimationNames(): java.util.List<string>;
						public setRawTangentsBuffer(param0: java.nio.FloatBuffer): void;
						public getRawColorBuffer(): java.nio.FloatBuffer;
						public getExtentsAabb(): com.google.ar.sceneform.math.Vector3;
						public setTransformScale(scale: number): void;
						public setCenterAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public finalize(): void;
						public buildInstanceData(meshData: com.google.ar.sceneform.rendering.RenderableInstance, vertexBuffer: number): void;
						public setRawColorBuffer(param0: java.nio.FloatBuffer): void;
						public setVertexBuffer(vertexBuffer: com.google.android.filament.VertexBuffer): void;
						public setRawPositionBuffer(param0: java.nio.FloatBuffer): void;
						public setRawUvBuffer(rawUvBuffer: java.nio.FloatBuffer): void;
						public getSizeAabb(): com.google.ar.sceneform.math.Vector3;
						public getCenterAabb(): com.google.ar.sceneform.math.Vector3;
						public setIndexBuffer(indexBuffer: com.google.android.filament.IndexBuffer): void;
						public setRawIndexBuffer(param0: java.nio.IntBuffer): void;
						public setTransformOffset(offset: com.google.ar.sceneform.math.Vector3): void;
						public setTransformScale(param0: number): void;
						public setExtentsAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public setAnimationNames(param0: java.util.List<string>): void;
						public setExtentsAabb(maxAabb: com.google.ar.sceneform.math.Vector3): void;
						public setCenterAabb(minAabb: com.google.ar.sceneform.math.Vector3): void;
						public getRawIndexBuffer(): java.nio.IntBuffer;
						public getRawPositionBuffer(): java.nio.FloatBuffer;
						public setRawColorBuffer(rawColorBuffer: java.nio.FloatBuffer): void;
						public dispose(): void;
						public setAnimationNames(animationNames: java.util.List<string>): void;
						public getRawTangentsBuffer(): java.nio.FloatBuffer;
						public getTransformOffset(): com.google.ar.sceneform.math.Vector3;
						public buildInstanceData(param0: com.google.ar.sceneform.rendering.RenderableInstance, param1: number): void;
						public getVertexBuffer(): com.google.android.filament.VertexBuffer;
						public getTransformScale(): number;
						public setRawIndexBuffer(rawIndexBuffer: java.nio.IntBuffer): void;
					}
					export module RenderableInternalData {
						export class MeshData {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInternalData.MeshData>;
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
				export module rendering {
					export class RenderableInternalFilamentAssetData extends com.google.ar.sceneform.rendering.IRenderableInternalData {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderableInternalFilamentAssetData>;
						public setTransformOffset(param0: com.google.ar.sceneform.math.Vector3): void;
						public setRawPositionBuffer(rawPositionBuffer: java.nio.FloatBuffer): void;
						public setVertexBuffer(param0: com.google.android.filament.VertexBuffer): void;
						public setRawUvBuffer(param0: java.nio.FloatBuffer): void;
						public getMeshes(): java.util.ArrayList<com.google.ar.sceneform.rendering.RenderableInternalData.MeshData>;
						public setRawTangentsBuffer(rawTangentsBuffer: java.nio.FloatBuffer): void;
						public setIndexBuffer(param0: com.google.android.filament.IndexBuffer): void;
						public getIndexBuffer(): com.google.android.filament.IndexBuffer;
						public getRawUvBuffer(): java.nio.FloatBuffer;
						public getAnimationNames(): java.util.List<string>;
						public setRawTangentsBuffer(param0: java.nio.FloatBuffer): void;
						public getRawColorBuffer(): java.nio.FloatBuffer;
						public setExtentsAabb(halfExtents: com.google.ar.sceneform.math.Vector3): void;
						public getExtentsAabb(): com.google.ar.sceneform.math.Vector3;
						public setTransformScale(scale: number): void;
						public setCenterAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public buildInstanceData(instance: com.google.ar.sceneform.rendering.RenderableInstance, renderedEntity: number): void;
						public setRawColorBuffer(param0: java.nio.FloatBuffer): void;
						public setVertexBuffer(vertexBuffer: com.google.android.filament.VertexBuffer): void;
						public setRawPositionBuffer(param0: java.nio.FloatBuffer): void;
						public setRawUvBuffer(rawUvBuffer: java.nio.FloatBuffer): void;
						public getSizeAabb(): com.google.ar.sceneform.math.Vector3;
						public getCenterAabb(): com.google.ar.sceneform.math.Vector3;
						public setIndexBuffer(indexBuffer: com.google.android.filament.IndexBuffer): void;
						public constructor();
						public setRawIndexBuffer(param0: java.nio.IntBuffer): void;
						public setTransformOffset(offset: com.google.ar.sceneform.math.Vector3): void;
						public setTransformScale(param0: number): void;
						public setExtentsAabb(param0: com.google.ar.sceneform.math.Vector3): void;
						public setAnimationNames(param0: java.util.List<string>): void;
						public getRawIndexBuffer(): java.nio.IntBuffer;
						public getRawPositionBuffer(): java.nio.FloatBuffer;
						public setRawColorBuffer(rawColorBuffer: java.nio.FloatBuffer): void;
						public dispose(): void;
						public setAnimationNames(animationNames: java.util.List<string>): void;
						public setCenterAabb(center: com.google.ar.sceneform.math.Vector3): void;
						public getRawTangentsBuffer(): java.nio.FloatBuffer;
						public getTransformOffset(): com.google.ar.sceneform.math.Vector3;
						public getMaterialBindingIds(): java.util.ArrayList<java.lang.Integer>;
						public buildInstanceData(param0: com.google.ar.sceneform.rendering.RenderableInstance, param1: number): void;
						public getVertexBuffer(): com.google.android.filament.VertexBuffer;
						public getTransformScale(): number;
						public setRawIndexBuffer(rawIndexBuffer: java.nio.IntBuffer): void;
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
				export module rendering {
					export class Renderer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Renderer>;
						public environment: com.gorisse.thomas.sceneform.environment.Environment;
						public mainLight: java.lang.Integer;
						public getEnvironment(): com.gorisse.thomas.sceneform.environment.Environment;
						public getMainLight(): java.lang.Integer;
						public setEnvironment(environment: com.gorisse.thomas.sceneform.environment.Environment): void;
						public startMirroring(surface: globalAndroid.view.Surface, left: number, bottom: number, width: number, height: number): void;
						public onResized(width: number, height: number): void;
						public getFilamentScene(): com.google.android.filament.Scene;
						public static destroyAllResources(): void;
						public setCameraProvider(cameraProvider: com.google.ar.sceneform.rendering.CameraProvider): void;
						public enablePerformanceMode(): void;
						public isFrontFaceWindingInverted(): boolean;
						public onPause(): void;
						public setDesiredSize(this_: number, width: number): void;
						public render(projectionMatrixData: number, currentView: boolean): void;
						public setSkybox(skybox: com.google.android.filament.Skybox): void;
						public setRenderQuality(renderQuality: com.google.android.filament.View.RenderQuality): void;
						public setPostProcessingEnabled(enablePostProcessing: boolean): void;
						public getDesiredWidth(): number;
						public getDesiredHeight(): number;
						public removeEntity(entity: number): void;
						public getSurfaceView(): globalAndroid.view.SurfaceView;
						public setDefaultClearColor(): void;
						public getFilamentRenderer(): com.google.android.filament.Renderer;
						public setFrontFaceWindingInverted(inverted: java.lang.Boolean): void;
						public setIndirectLight(indirectLight: com.google.android.filament.IndirectLight): void;
						public getCamera(): com.google.android.filament.Camera;
						public stopMirroring(this_: globalAndroid.view.Surface): void;
						public setFrameRenderDebugCallback(onFrameRenderDebugCallback: java.lang.Runnable): void;
						public getContext(): globalAndroid.content.Context;
						public onResume(): void;
						public setDynamicResolutionEnabled(isEnabled: boolean): void;
						public addEntity(entity: number): void;
						public setPreRenderCallback(preRenderCallback: com.google.ar.sceneform.rendering.Renderer.PreRenderCallback): void;
						public constructor(view: globalAndroid.view.SurfaceView);
						public dispose(): void;
						public static reclaimReleasedResources(): number;
						public onNativeWindowChanged(surface: globalAndroid.view.Surface): void;
						public getFilamentView(): com.google.android.filament.View;
						public setClearColor(color: com.google.ar.sceneform.rendering.Color): void;
						public addLight(entity: number): void;
						public removeLight(entity: number): void;
						public setDithering(dithering: com.google.android.filament.View.Dithering): void;
						public setMainLight(light: java.lang.Integer): void;
						public setAntiAliasing(antiAliasing: com.google.android.filament.View.AntiAliasing): void;
						public onDetachedFromSurface(): void;
					}
					export module Renderer {
						export class Mirror {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Renderer.Mirror>;
						}
						export class PreRenderCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Renderer.PreRenderCallback>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.rendering.Renderer$PreRenderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								preRender(param0: com.google.android.filament.Renderer, param1: com.google.android.filament.SwapChain, param2: com.google.android.filament.Camera): void;
							});
							public constructor();
							public preRender(param0: com.google.android.filament.Renderer, param1: com.google.android.filament.SwapChain, param2: com.google.android.filament.Camera): void;
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
				export module rendering {
					export class RenderingResources {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderingResources>;
						public static GetSceneformResource(context: globalAndroid.content.Context, resource: com.google.ar.sceneform.rendering.RenderingResources.Resource): number;
					}
					export module RenderingResources {
						export class Resource {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.RenderingResources.Resource>;
							public static CAMERA_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static OCCLUSION_CAMERA_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static OCCLUSION_CAMERA_TEST_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static OPAQUE_COLORED_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static TRANSPARENT_COLORED_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static OPAQUE_TEXTURED_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static TRANSPARENT_TEXTURED_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static PLANE_SHADOW_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static PLANE_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static PLANE: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static VIEW_RENDERABLE_MATERIAL: com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.RenderingResources.Resource;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.RenderingResources.Resource>;
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
				export module rendering {
					export class ResourceHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ResourceHelper>;
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
				export module rendering {
					export class ResourceManager {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ResourceManager>;
						public getDepthTextureCleanupRegistry(): com.google.ar.sceneform.rendering.CleanupRegistry<com.google.ar.sceneform.rendering.DepthTexture>;
						public reclaimReleasedResources(): number;
						public static getInstance(): com.google.ar.sceneform.rendering.ResourceManager;
						public destroyAllResources(): void;
						public addResourceHolder(resource: com.google.ar.sceneform.resources.ResourceHolder): void;
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
				export module rendering {
					export class SceneformBundle {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.SceneformBundle>;
						public static RCB_MAJOR_VERSION: number = 0.54;
						public static RCB_MINOR_VERSION: number = 2;
						public constructor();
						public static readCollisionGeometry(box: com.google.ar.schemas.sceneform.SceneformBundleDef): com.google.ar.sceneform.collision.CollisionShape;
						public static tryLoadSceneformBundle(bundle: java.nio.ByteBuffer): com.google.ar.schemas.sceneform.SceneformBundleDef;
						public static isSceneformBundle(i: java.nio.ByteBuffer): boolean;
					}
					export module SceneformBundle {
						export class VersionException {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.SceneformBundle.VersionException>;
							public constructor(message: string);
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
				export module rendering {
					export class ShapeFactory {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ShapeFactory>;
						public constructor();
						public static makeCylinder(cosTheta: number, sinTheta: number, lowerPosition: com.google.ar.sceneform.math.Vector3, normal: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.ModelRenderable;
						public static makeCube(i: com.google.ar.sceneform.math.Vector3, result: com.google.ar.sceneform.math.Vector3, ex: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.ModelRenderable;
						public static makeSphere(theta: number, sinTheta: com.google.ar.sceneform.math.Vector3, cosTheta: com.google.ar.sceneform.rendering.Material): com.google.ar.sceneform.rendering.ModelRenderable;
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
				export module rendering {
					export class Texture {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture>;
						public static builder(): com.google.ar.sceneform.rendering.Texture.Builder;
					}
					export module Texture {
						export class Builder {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Builder>;
							public build(): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.Texture>;
							public setSource(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri): com.google.ar.sceneform.rendering.Texture.Builder;
							public setRegistryId(registryId: any): com.google.ar.sceneform.rendering.Texture.Builder;
							public setUsage(usage: com.google.ar.sceneform.rendering.Texture.Usage): com.google.ar.sceneform.rendering.Texture.Builder;
							public setSource(bitmap: globalAndroid.graphics.Bitmap): com.google.ar.sceneform.rendering.Texture.Builder;
							public setSource(inputStreamCreator: java.util.concurrent.Callable<java.io.InputStream>): com.google.ar.sceneform.rendering.Texture.Builder;
							public setSource(context: globalAndroid.content.Context, resource: number): com.google.ar.sceneform.rendering.Texture.Builder;
							public setData(textureInternalData: com.google.ar.sceneform.rendering.TextureInternalData): com.google.ar.sceneform.rendering.Texture.Builder;
							public setSampler(sampler: com.google.ar.sceneform.rendering.Texture.Sampler): com.google.ar.sceneform.rendering.Texture.Builder;
						}
						export class CleanupCallback {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.CleanupCallback>;
							public run(): void;
						}
						export class Sampler {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Sampler>;
							public getMagFilter(): com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter;
							public getMinFilter(): com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
							public static builder(): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
							public getWrapModeR(): com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
							public getWrapModeT(): com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
							public getWrapModeS(): com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
						}
						export module Sampler {
							export class Builder {
								public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Sampler.Builder>;
								public setMinMagFilter(minMagFilter: com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public build(): com.google.ar.sceneform.rendering.Texture.Sampler;
								public setWrapModeR(wrapMode: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public setWrapModeT(wrapMode: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public setMagFilter(magFilter: com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public setWrapModeS(wrapMode: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public setWrapMode(wrapMode: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
								public constructor();
								public setMinFilter(minFilter: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter): com.google.ar.sceneform.rendering.Texture.Sampler.Builder;
							}
							export class MagFilter {
								public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter>;
								public static NEAREST: com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter;
								public static LINEAR: com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter;
								public static values(): androidNative.Array<com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter>;
								public static valueOf(name: string): com.google.ar.sceneform.rendering.Texture.Sampler.MagFilter;
							}
							export class MinFilter {
								public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter>;
								public static NEAREST: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static LINEAR: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static NEAREST_MIPMAP_NEAREST: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static LINEAR_MIPMAP_NEAREST: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static NEAREST_MIPMAP_LINEAR: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static LINEAR_MIPMAP_LINEAR: com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static valueOf(name: string): com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter;
								public static values(): androidNative.Array<com.google.ar.sceneform.rendering.Texture.Sampler.MinFilter>;
							}
							export class WrapMode {
								public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode>;
								public static CLAMP_TO_EDGE: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
								public static REPEAT: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
								public static MIRRORED_REPEAT: com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
								public static values(): androidNative.Array<com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode>;
								public static valueOf(name: string): com.google.ar.sceneform.rendering.Texture.Sampler.WrapMode;
							}
						}
						export class Usage {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Texture.Usage>;
							public static COLOR_MAP: com.google.ar.sceneform.rendering.Texture.Usage;
							public static NORMAL_MAP: com.google.ar.sceneform.rendering.Texture.Usage;
							public static DATA: com.google.ar.sceneform.rendering.Texture.Usage;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.Texture.Usage>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.Texture.Usage;
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
				export module rendering {
					export class TextureInternalData extends com.google.ar.sceneform.resources.SharedReference {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.TextureInternalData>;
						public constructor();
						public constructor(filamentTexture: com.google.android.filament.Texture, sampler: com.google.ar.sceneform.rendering.Texture.Sampler);
						public onDispose(): void;
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
				export module rendering {
					export class ThreadPools {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ThreadPools>;
						public static setThreadPoolExecutor(executor: java.util.concurrent.Executor): void;
						public static setMainExecutor(executor: java.util.concurrent.Executor): void;
						public static getMainExecutor(): java.util.concurrent.Executor;
						public static getThreadPoolExecutor(): java.util.concurrent.Executor;
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
				export module rendering {
					export class Vertex {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.Vertex>;
						public setNormal(normal: com.google.ar.sceneform.math.Vector3): void;
						public getUvCoordinate(): com.google.ar.sceneform.rendering.Vertex.UvCoordinate;
						public setPosition(position: com.google.ar.sceneform.math.Vector3): void;
						public setColor(color: com.google.ar.sceneform.rendering.Color): void;
						public setUvCoordinate(uvCoordinate: com.google.ar.sceneform.rendering.Vertex.UvCoordinate): void;
						public static builder(): com.google.ar.sceneform.rendering.Vertex.Builder;
						public getColor(): com.google.ar.sceneform.rendering.Color;
						public getNormal(): com.google.ar.sceneform.math.Vector3;
						public getPosition(): com.google.ar.sceneform.math.Vector3;
					}
					export module Vertex {
						export class Builder {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Vertex.Builder>;
							public constructor();
							public setPosition(position: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.rendering.Vertex.Builder;
							public build(): com.google.ar.sceneform.rendering.Vertex;
							public setColor(color: com.google.ar.sceneform.rendering.Color): com.google.ar.sceneform.rendering.Vertex.Builder;
							public setUvCoordinate(uvCoordinate: com.google.ar.sceneform.rendering.Vertex.UvCoordinate): com.google.ar.sceneform.rendering.Vertex.Builder;
							public setNormal(normal: com.google.ar.sceneform.math.Vector3): com.google.ar.sceneform.rendering.Vertex.Builder;
						}
						export class UvCoordinate {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.Vertex.UvCoordinate>;
							public x: number;
							public y: number;
							public constructor(x: number, y: number);
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
				export module rendering {
					export class ViewAttachmentManager {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewAttachmentManager>;
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
				export module rendering {
					export class ViewRenderable extends com.google.ar.sceneform.rendering.Renderable {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderable>;
						public getHorizontalAlignment(): com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment;
						public getVerticalAlignment(): com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment;
						public getView(): globalAndroid.view.View;
						public setHorizontalAlignment(horizontalAlignment: com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment): void;
						public makeCopy(): com.google.ar.sceneform.rendering.ViewRenderable;
						public setVerticalAlignment(verticalAlignment: com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment): void;
						public setSizer(viewSizer: com.google.ar.sceneform.rendering.ViewSizer): void;
						public getFinalModelMatrix(originalMatrix: com.google.ar.sceneform.math.Matrix): com.google.ar.sceneform.math.Matrix;
						public getSizer(): com.google.ar.sceneform.rendering.ViewSizer;
						public static builder(): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
						public makeCopy(): com.google.ar.sceneform.rendering.Renderable;
						public finalize(): void;
					}
					export module ViewRenderable {
						export class Builder extends com.google.ar.sceneform.rendering.Renderable.Builder<com.google.ar.sceneform.rendering.ViewRenderable,com.google.ar.sceneform.rendering.ViewRenderable.Builder> {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderable.Builder>;
							public makeRenderable(): com.google.ar.sceneform.rendering.ViewRenderable;
							public setVerticalAlignment(verticalAlignment: com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public setSizer(viewSizer: com.google.ar.sceneform.rendering.ViewSizer): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public getRenderableRegistry(): com.google.ar.sceneform.resources.ResourceRegistry<com.google.ar.sceneform.rendering.ViewRenderable>;
							public getSelf(): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public build(): java.util.concurrent.CompletableFuture<com.google.ar.sceneform.rendering.ViewRenderable>;
							public setView(context: globalAndroid.content.Context, view: globalAndroid.view.View): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public getSelf(): any;
							public setView(context: globalAndroid.content.Context, resourceId: number): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public setHorizontalAlignment(horizontalAlignment: com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment): com.google.ar.sceneform.rendering.ViewRenderable.Builder;
							public checkPreconditions(): void;
							public getRenderableClass(): java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderable>;
							public makeRenderable(): any;
						}
						export class HorizontalAlignment {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment>;
							public static LEFT: com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment;
							public static CENTER: com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment;
							public static RIGHT: com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.ViewRenderable.HorizontalAlignment;
						}
						export class VerticalAlignment {
							public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment>;
							public static BOTTOM: com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment;
							public static CENTER: com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment;
							public static TOP: com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment;
							public static values(): androidNative.Array<com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment>;
							public static valueOf(name: string): com.google.ar.sceneform.rendering.ViewRenderable.VerticalAlignment;
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
				export module rendering {
					export class ViewRenderableHelpers {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderableHelpers>;
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
				export module rendering {
					export class ViewRenderableInternalData extends com.google.ar.sceneform.resources.SharedReference {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewRenderableInternalData>;
						public onDispose(): void;
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
				export module rendering {
					export class ViewSizer {
						public static class: java.lang.Class<com.google.ar.sceneform.rendering.ViewSizer>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.rendering.ViewSizer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getSize(param0: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
						});
						public constructor();
						public getSize(param0: globalAndroid.view.View): com.google.ar.sceneform.math.Vector3;
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
				export module resources {
					export class ResourceHolder {
						public static class: java.lang.Class<com.google.ar.sceneform.resources.ResourceHolder>;
						/**
						 * Constructs a new instance of the com.google.ar.sceneform.resources.ResourceHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							reclaimReleasedResources(): number;
							destroyAllResources(): void;
						});
						public constructor();
						public reclaimReleasedResources(): number;
						public destroyAllResources(): void;
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
				export module resources {
					export class ResourceRegistry<T>  extends com.google.ar.sceneform.resources.ResourceHolder {
						public static class: java.lang.Class<com.google.ar.sceneform.resources.ResourceRegistry<any>>;
						public constructor();
						public reclaimReleasedResources(): number;
						public get(reference: any): java.util.concurrent.CompletableFuture<any>;
						public register(this_: any, id: java.util.concurrent.CompletableFuture<any>): void;
						public destroyAllResources(): void;
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
				export module resources {
					export abstract class SharedReference {
						public static class: java.lang.Class<com.google.ar.sceneform.resources.SharedReference>;
						public constructor();
						public retain(): void;
						public release(): void;
						public onDispose(): void;
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
				export module utilities {
					export class AndroidPreconditions {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.AndroidPreconditions>;
						public static setUnderTesting(isUnderTesting: boolean): void;
						public constructor();
						public static isAndroidApiAvailable(): boolean;
						public static isMinAndroidApiLevel(): boolean;
						public static isUnderTesting(): boolean;
						public static checkUiThread(): void;
						public static checkMinAndroidApiLevel(): void;
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
				export module utilities {
					export class BufferHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.BufferHelper>;
						public constructor();
						public static cloneByteBuffer(original: java.nio.ByteBuffer): java.nio.ByteBuffer;
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
				export module utilities {
					export class ChangeId {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.ChangeId>;
						public static EMPTY_ID: number = 0;
						public constructor();
						public get(): number;
						public isEmpty(): boolean;
						public update(): void;
						public checkChanged(id: number): boolean;
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
				export module utilities {
					export class LoadHelper {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.LoadHelper>;
						public static INVALID_RESOURCE_IDENTIFIER: number = 0;
						public static resourceToUri(context: globalAndroid.content.Context, resID: number): globalAndroid.net.Uri;
						public static drawableResourceNameToIdentifier(context: globalAndroid.content.Context, name: string): number;
						public static isAndroidResource(sourceUri: globalAndroid.net.Uri): java.lang.Boolean;
						public static isContentResource(sourceUri: globalAndroid.net.Uri): java.lang.Boolean;
						public static enableCaching(httpCacheDir: number, e: java.io.File, cacheByteSize: string): void;
						public static getLastPathSegment(uriString: globalAndroid.net.Uri): string;
						public static resolveUri(unresolvedUri: globalAndroid.net.Uri, parentUri: globalAndroid.net.Uri): globalAndroid.net.Uri;
						public static fromResource(context: globalAndroid.content.Context, resId: number): java.util.concurrent.Callable<java.io.InputStream>;
						public static fromUri(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri, requestProperty: java.util.Map<string,string>): java.util.concurrent.Callable<java.io.InputStream>;
						public static isFileAsset(sourceUri: globalAndroid.net.Uri): java.lang.Boolean;
						public static isGltfDataUri(uri: globalAndroid.net.Uri): boolean;
						public static rawResourceNameToIdentifier(context: globalAndroid.content.Context, name: string): number;
						public static flushHttpCache(): void;
						public static fromUri(context: globalAndroid.content.Context, sourceUri: globalAndroid.net.Uri): java.util.concurrent.Callable<java.io.InputStream>;
						public static enableCaching(context: globalAndroid.content.Context): void;
						public static isDataUri(uri: globalAndroid.net.Uri): boolean;
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
				export module utilities {
					export class MovingAverage {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.MovingAverage>;
						public static DEFAULT_WEIGHT: number = 0.8999999761581421;
						public constructor(initialSample: number, weight: number);
						public constructor(initialSample: number);
						public addSample(sample: number): void;
						public getAverage(): number;
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
				export module utilities {
					export class MovingAverageMillisecondsTracker {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker>;
						public constructor(clock: com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker.Clock, weight: number);
						public constructor();
						public beginSample(): void;
						public constructor(weight: number);
						public endSample(): void;
						public constructor(clock: com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker.Clock);
						public getAverage(): number;
					}
					export module MovingAverageMillisecondsTracker {
						export class Clock {
							public static class: java.lang.Class<com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker.Clock>;
							/**
							 * Constructs a new instance of the com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker$Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getNanoseconds(): number;
							});
							public constructor();
							public getNanoseconds(): number;
						}
						export class DefaultClock extends com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker.Clock {
							public static class: java.lang.Class<com.google.ar.sceneform.utilities.MovingAverageMillisecondsTracker.DefaultClock>;
							public getNanoseconds(): number;
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
				export module utilities {
					export class Preconditions {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.Preconditions>;
						public constructor();
						public static checkNotNull(reference: any, errorMessage: any): any;
						public static checkState(expression: boolean): void;
						public static checkState(expression: boolean, errorMessage: any): void;
						public static checkElementIndex(index: number, size: number): void;
						public static checkNotNull(reference: any): any;
						public static checkElementIndex(index: number, size: number, desc: string): void;
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
				export module utilities {
					export class SceneformBufferUtils {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.SceneformBufferUtils>;
						public static copyByteBufferToArray(lastPosition: java.nio.ByteBuffer): androidNative.Array<number>;
						public static readFile(ex: globalAndroid.content.res.AssetManager, ex: string): java.nio.ByteBuffer;
						public static inputStreamToByteArray(input: java.io.InputStream): androidNative.Array<number>;
						public static readStream(bytes: java.io.InputStream): java.nio.ByteBuffer;
						public static inputStreamToByteBuffer(result: java.util.concurrent.Callable<java.io.InputStream>): java.nio.ByteBuffer;
						public static inputStreamCallableToByteArray(input: java.util.concurrent.Callable<java.io.InputStream>): androidNative.Array<number>;
						public static copyByteBuffer(in_: java.nio.ByteBuffer): java.nio.ByteBuffer;
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
				export module utilities {
					export class TimeAccumulator {
						public static class: java.lang.Class<com.google.ar.sceneform.utilities.TimeAccumulator>;
						public constructor();
						public beginSample(): void;
						public getElapsedTimeMs(): number;
						public endSample(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export class Constants {
				public static class: java.lang.Class<com.google.flatbuffers.Constants>;
				public static SIZE_PREFIX_LENGTH: number = 4;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export class FlatBufferBuilder {
				public static class: java.lang.Class<com.google.flatbuffers.FlatBufferBuilder>;
				public createByteVector(arr: androidNative.Array<number>): number;
				public forceDefaults(forceDefaults: boolean): com.google.flatbuffers.FlatBufferBuilder;
				public putByte(x: number): void;
				public createSortedVectorOfTables(obj: com.google.flatbuffers.Table, offsets: androidNative.Array<number>): number;
				public constructor();
				public addDouble(o: number, x: number, d: number): void;
				public addFloat(o: number, x: number, d: number): void;
				public createString(s: java.nio.ByteBuffer): number;
				public addByte(o: number, x: number, d: number): void;
				public constructor(initial_size: number, bb_factory: com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory);
				public prep(old: number, this_: number): void;
				public addStruct(voffset: number, x: number, d: number): void;
				public putBoolean(x: boolean): void;
				public startVector(elem_size: number, num_elems: number, alignment: number): void;
				public finishSizePrefixed(root_table: number, file_identifier: string): void;
				public init(existing_bb: java.nio.ByteBuffer, bb_factory: com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory): com.google.flatbuffers.FlatBufferBuilder;
				public addShort(x: number): void;
				public offset(): number;
				public addLong(o: number, x: number, d: number): void;
				public createUnintializedVector(elem_size: number, num_elems: number, alignment: number): java.nio.ByteBuffer;
				public putDouble(x: number): void;
				public putLong(x: number): void;
				public createVectorOfTables(this_: androidNative.Array<number>): number;
				public putFloat(x: number): void;
				public addInt(o: number, x: number, d: number): void;
				public addBoolean(x: boolean): void;
				public pad(this_: number): void;
				public Nested(obj: number): void;
				public sizedByteArray(): androidNative.Array<number>;
				public startObject(numfields: number): void;
				public finished(): void;
				public finish(this_: number, root_table: string, file_identifier: boolean): void;
				public createByteVector(arr: androidNative.Array<number>, offset: number, length: number): number;
				public addLong(x: number): void;
				public notNested(): void;
				public putInt(x: number): void;
				public finish(root_table: number, file_identifier: string): void;
				public createString(s: string): number;
				public dataBuffer(): java.nio.ByteBuffer;
				public required(table: number, field: number): void;
				public addBoolean(o: number, x: boolean, d: boolean): void;
				public clear(): void;
				public sizedByteArray(start: number, length: number): androidNative.Array<number>;
				public constructor(initial_size: number, bb_factory: com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory, existing_bb: java.nio.ByteBuffer, utf8: com.google.flatbuffers.Utf8);
				public constructor(existing_bb: java.nio.ByteBuffer);
				public addOffset(off: number): void;
				public finish(root_table: number): void;
				public createByteVector(byteBuffer: java.nio.ByteBuffer): number;
				public finish(root_table: number, size_prefix: boolean): void;
				public sizedInputStream(): java.io.InputStream;
				public putShort(x: number): void;
				public addShort(o: number, x: number, d: number): void;
				public addOffset(o: number, x: number, d: number): void;
				public addFloat(x: number): void;
				public slot(voffset: number): void;
				public addDouble(x: number): void;
				public endObject(): number;
				public static isFieldPresent(table: com.google.flatbuffers.Table, offset: number): boolean;
				public constructor(initial_size: number);
				public addInt(x: number): void;
				public endVector(): number;
				public addByte(x: number): void;
				public finishSizePrefixed(root_table: number): void;
				public constructor(existing_bb: java.nio.ByteBuffer, bb_factory: com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory);
			}
			export module FlatBufferBuilder {
				export class ByteBufferBackedInputStream {
					public static class: java.lang.Class<com.google.flatbuffers.FlatBufferBuilder.ByteBufferBackedInputStream>;
					public read(): number;
					public constructor(buf: java.nio.ByteBuffer);
				}
				export abstract class ByteBufferFactory {
					public static class: java.lang.Class<com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory>;
					public releaseByteBuffer(bb: java.nio.ByteBuffer): void;
					public constructor();
					public newByteBuffer(param0: number): java.nio.ByteBuffer;
				}
				export class HeapByteBufferFactory extends com.google.flatbuffers.FlatBufferBuilder.ByteBufferFactory {
					public static class: java.lang.Class<com.google.flatbuffers.FlatBufferBuilder.HeapByteBufferFactory>;
					public static INSTANCE: com.google.flatbuffers.FlatBufferBuilder.HeapByteBufferFactory;
					public constructor();
					public newByteBuffer(capacity: number): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export class Struct {
				public static class: java.lang.Class<com.google.flatbuffers.Struct>;
				public bb_pos: number;
				public bb: java.nio.ByteBuffer;
				public constructor();
				public __reset(): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export class Table {
				public static class: java.lang.Class<com.google.flatbuffers.Table>;
				public static UTF8_CHARSET: java.lang.ThreadLocal<java.nio.charset.Charset>;
				public bb_pos: number;
				public bb: java.nio.ByteBuffer;
				public vtable_start: number;
				public vtable_size: number;
				public __indirect(offset: number): number;
				public __vector_len(offset: number): number;
				public static __has_identifier(i: java.nio.ByteBuffer, bb: string): boolean;
				public getByteBuffer(): java.nio.ByteBuffer;
				public constructor();
				public __vector_in_bytebuffer(bb: java.nio.ByteBuffer, vector_offset: number, elem_size: number): java.nio.ByteBuffer;
				public sortTables(i: androidNative.Array<number>, this_: java.nio.ByteBuffer): void;
				public __vector(offset: number): number;
				public static __offset(vtable_offset: number, offset: number, bb: java.nio.ByteBuffer): number;
				public static compareStrings(i: number, offset_1: androidNative.Array<number>, key: java.nio.ByteBuffer): number;
				public __string(offset: number): string;
				public __offset(vtable_offset: number): number;
				public __union(t: com.google.flatbuffers.Table, offset: number): com.google.flatbuffers.Table;
				public __vector_as_bytebuffer(vector_offset: number, elem_size: number): java.nio.ByteBuffer;
				public static compareStrings(i: number, offset_1: number, offset_2: java.nio.ByteBuffer): number;
				public static __indirect(offset: number, bb: java.nio.ByteBuffer): number;
				public keysCompare(o1: java.lang.Integer, o2: java.lang.Integer, bb: java.nio.ByteBuffer): number;
				public __reset(): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export abstract class Utf8 {
				public static class: java.lang.Class<com.google.flatbuffers.Utf8>;
				public static getDefault(): com.google.flatbuffers.Utf8;
				public static setDefault(instance: com.google.flatbuffers.Utf8): void;
				public decodeUtf8(param0: java.nio.ByteBuffer, param1: number, param2: number): string;
				public encodedLength(param0: string): number;
				public encodeUtf8(param0: string, param1: java.nio.ByteBuffer): void;
				public constructor();
			}
			export module Utf8 {
				export class DecodeUtil {
					public static class: java.lang.Class<com.google.flatbuffers.Utf8.DecodeUtil>;
				}
				export class UnpairedSurrogateException {
					public static class: java.lang.Class<com.google.flatbuffers.Utf8.UnpairedSurrogateException>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module flatbuffers {
			export class Utf8Safe extends com.google.flatbuffers.Utf8 {
				public static class: java.lang.Class<com.google.flatbuffers.Utf8Safe>;
				public encodeUtf8(end: string, this_: java.nio.ByteBuffer): void;
				public decodeUtf8(buffer: java.nio.ByteBuffer, offset: number, length: number): string;
				public encodedLength(in_: string): number;
				public constructor();
			}
			export module Utf8Safe {
				export class UnpairedSurrogateException {
					public static class: java.lang.Class<com.google.flatbuffers.Utf8Safe.UnpairedSurrogateException>;
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module ArSceneViewKt {
					export class WhenMappings {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.ArSceneViewKt.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export class Filament {
					public static class: java.lang.Class<com.gorisse.thomas.sceneform.Filament>;
					public static INSTANCE: com.gorisse.thomas.sceneform.Filament;
					public getTransformManager(): com.google.android.filament.TransformManager;
					public getLightManager(): com.google.android.filament.LightManager;
					public static getEngine(): com.google.android.filament.Engine;
					public static getEntityManager(): com.google.android.filament.EntityManager;
					public getUberShaderLoader(): com.google.android.filament.gltfio.UbershaderLoader;
					public static getAssetLoader(): com.google.android.filament.gltfio.AssetLoader;
					public getIblPrefilter(): com.gorisse.thomas.sceneform.environment.IBLPrefilter;
					public getResourceLoader(): com.google.android.filament.gltfio.ResourceLoader;
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module environment {
					export class Environment {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.environment.Environment>;
						public getSkybox(): com.google.android.filament.Skybox;
						public constructor();
						public constructor(sphericalHarmonics: androidNative.Array<number>, indirectLight: com.google.android.filament.IndirectLight, skybox: com.google.android.filament.Skybox);
						public getSphericalHarmonics(): androidNative.Array<number>;
						public close(): void;
						public destroy(): void;
						public getIndirectLight(): com.google.android.filament.IndirectLight;
					}
					export module Environment {
						export class Companion {
							public static class: java.lang.Class<com.gorisse.thomas.sceneform.environment.Environment.Companion>;
							public getSPHERICAL_HARMONICS_IRRADIANCE_FACTORS$core_release(): java.util.List<java.lang.Float>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module environment {
					export class HDREnvironment extends com.gorisse.thomas.sceneform.environment.Environment {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.environment.HDREnvironment>;
						public constructor();
						public getSharedCubemap(): boolean;
						public constructor(sphericalHarmonics: androidNative.Array<number>, indirectLight: com.google.android.filament.IndirectLight, skybox: com.google.android.filament.Skybox);
						public getIntensity(): java.lang.Float;
						public getSkyboxEnvironment(): com.google.android.filament.Texture;
						public setCubemap(texture: com.google.android.filament.Texture): void;
						public destroy(): void;
						public setSharedCubemap(value: boolean): void;
						public constructor(param0: com.google.android.filament.Texture, param1: androidNative.Array<number>, param2: java.lang.Float, param3: com.google.android.filament.Texture, param4: boolean);
						public getCubemap(): com.google.android.filament.Texture;
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module environment {
					export class IBLPrefilter {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.environment.IBLPrefilter>;
						public getContext(): com.google.android.filament.utils.IBLPrefilterContext;
						public specularFilter(skybox: com.google.android.filament.Texture): com.google.android.filament.Texture;
						public constructor(engine: com.google.android.filament.Engine);
						public equirectangularToCubemap(equirect: com.google.android.filament.Texture): com.google.android.filament.Texture;
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module environment {
					export class KTXEnvironment extends com.gorisse.thomas.sceneform.environment.Environment {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.environment.KTXEnvironment>;
						public constructor();
						public constructor(sphericalHarmonics: androidNative.Array<number>, indirectLight: com.google.android.filament.IndirectLight, skybox: com.google.android.filament.Skybox);
						public constructor(indirectLight: com.google.android.filament.IndirectLight, sphericalHarmonics: androidNative.Array<number>, skybox: com.google.android.filament.Skybox);
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module light {
					export class EnvironmentLightsEstimate {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.light.EnvironmentLightsEstimate>;
						public getEnvironment(): com.gorisse.thomas.sceneform.environment.Environment;
						public getMainLight(): java.lang.Integer;
						public constructor(timestamp: number, environment: com.gorisse.thomas.sceneform.environment.Environment, mainLight: java.lang.Integer);
						public getTimestamp(): number;
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module light {
					export class LightEstimationConfig {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.light.LightEstimationConfig>;
						public static REALISTIC: com.gorisse.thomas.sceneform.light.LightEstimationConfig;
						public static SPECTACULAR: com.gorisse.thomas.sceneform.light.LightEstimationConfig;
						public static AMBIENT_INTENSITY: com.gorisse.thomas.sceneform.light.LightEstimationConfig;
						public static DISABLED: com.gorisse.thomas.sceneform.light.LightEstimationConfig;
						public component4(): boolean;
						public component3(): boolean;
						public component5(): boolean;
						public equals(other: any): boolean;
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean);
						public constructor();
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode);
						public component2(): boolean;
						public component6(): boolean;
						public copy(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean, environmentalHdrSphericalHarmonics: boolean, environmentalHdrSpecularFilter: boolean, environmentalHdrMainLightDirection: boolean, environmentalHdrMainLightIntensity: boolean): com.gorisse.thomas.sceneform.light.LightEstimationConfig;
						public hashCode(): number;
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean, environmentalHdrSphericalHarmonics: boolean, environmentalHdrSpecularFilter: boolean);
						public toString(): string;
						public getEnvironmentalHdrReflections(): boolean;
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean, environmentalHdrSphericalHarmonics: boolean, environmentalHdrSpecularFilter: boolean, environmentalHdrMainLightDirection: boolean);
						public component1(): com.google.ar.core.Config.LightEstimationMode;
						public getEnvironmentalHdrSpecularFilter(): boolean;
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean, environmentalHdrSphericalHarmonics: boolean, environmentalHdrSpecularFilter: boolean, environmentalHdrMainLightDirection: boolean, environmentalHdrMainLightIntensity: boolean);
						public getEnvironmentalHdrMainLightDirection(): boolean;
						public getEnvironmentalHdrMainLightIntensity(): boolean;
						public constructor(mode: com.google.ar.core.Config.LightEstimationMode, environmentalHdrReflections: boolean, environmentalHdrSphericalHarmonics: boolean);
						public getEnvironmentalHdrSphericalHarmonics(): boolean;
						public getMode(): com.google.ar.core.Config.LightEstimationMode;
					}
					export module LightEstimationConfig {
						export class Companion {
							public static class: java.lang.Class<com.gorisse.thomas.sceneform.light.LightEstimationConfig.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module light {
					export module LightEstimationKt {
                        export class WhenMappings {
                            public static class: java.lang.Class<com.gorisse.thomas.sceneform.light.LightEstimationKt.WhenMappings>;
                        }
					}
				}
			}
		}
	}
}

declare module com {
	export module gorisse {
		export module thomas {
			export module sceneform {
				export module util {
					export class ResourceLoader {
						public static class: java.lang.Class<com.gorisse.thomas.sceneform.util.ResourceLoader>;
						public static INSTANCE: com.gorisse.thomas.sceneform.util.ResourceLoader;
						public static fileBuffer(context: globalAndroid.content.Context, fileLocation: string, $completion: any): any;
						public static setFuelManager(manager: com.github.kittinunf.fuel.core.FuelManager): void;
						public static getFuelManager(): com.github.kittinunf.fuel.core.FuelManager;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.ar.sceneform.animation.ModelAnimator.PropertyValuesHolder.AnimationProperty:1
//com.google.ar.sceneform.rendering.CleanupItem:1
//com.google.ar.sceneform.rendering.CleanupRegistry:1
//com.google.ar.sceneform.rendering.LoadRenderableFromFilamentGltfTask:1
//com.google.ar.sceneform.rendering.LoadRenderableFromSfbTask:1
//com.google.ar.sceneform.rendering.Renderable.Builder:2
//com.google.ar.sceneform.resources.ResourceRegistry:1

