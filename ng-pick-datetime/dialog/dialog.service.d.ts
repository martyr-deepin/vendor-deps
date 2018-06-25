import { InjectionToken, Injector, TemplateRef } from '@angular/core';
import { Location } from '@angular/common';
import { OwlDialogConfig } from './dialog-config.class';
import { OwlDialogRef } from './dialog-ref.class';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Overlay, OverlayContainer, ScrollStrategy } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
export declare const OWL_DIALOG_DATA: InjectionToken<any>;
export declare const OWL_DIALOG_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
export declare function OWL_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;
export declare const OWL_DIALOG_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: typeof Overlay[];
    useFactory: (overlay: Overlay) => () => ScrollStrategy;
};
export declare const OWL_DIALOG_DEFAULT_OPTIONS: InjectionToken<OwlDialogConfig>;
export declare class OwlDialogService {
    private overlay;
    private injector;
    private location;
    private scrollStrategy;
    private defaultOptions;
    private parentDialog;
    private overlayContainer;
    private ariaHiddenElements;
    private _openDialogsAtThisLevel;
    private _afterOpenAtThisLevel;
    private _afterAllClosedAtThisLevel;
    readonly openDialogs: OwlDialogRef<any>[];
    readonly afterOpen: Subject<OwlDialogRef<any>>;
    readonly _afterAllClosed: any;
    afterAllClosed: Observable<void>;
    constructor(overlay: Overlay, injector: Injector, location: Location, scrollStrategy: () => ScrollStrategy, defaultOptions: OwlDialogConfig, parentDialog: OwlDialogService, overlayContainer: OverlayContainer);
    open<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: OwlDialogConfig): OwlDialogRef<any>;
    closeAll(): void;
    getDialogById(id: string): OwlDialogRef<any> | undefined;
    private attachDialogContent<T>(componentOrTemplateRef, dialogContainer, overlayRef, config);
    private createInjector<T>(config, dialogRef, dialogContainer);
    private createOverlay(config);
    private attachDialogContainer(overlayRef, config);
    private getOverlayConfig(dialogConfig);
    private removeOpenDialog(dialogRef);
    private hideNonDialogContentFromAssistiveTechnology();
}