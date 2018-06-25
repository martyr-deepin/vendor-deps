/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { stringify } from '../util';
import { ComponentFactory } from './component_factory';
export function noComponentFactoryError(component) {
    var error = Error("No component factory found for " + stringify(component) + ". Did you add it to @NgModule.entryComponents?");
    error[ERROR_COMPONENT] = component;
    return error;
}
var ERROR_COMPONENT = 'ngComponent';
export function getComponent(error) {
    return error[ERROR_COMPONENT];
}
var _NullComponentFactoryResolver = /** @class */ (function () {
    function _NullComponentFactoryResolver() {
    }
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        throw noComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
}());
/**
 *
 */
var ComponentFactoryResolver = /** @class */ (function () {
    function ComponentFactoryResolver() {
    }
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
}());
export { ComponentFactoryResolver };
var CodegenComponentFactoryResolver = /** @class */ (function () {
    function CodegenComponentFactoryResolver(factories, _parent, _ngModule) {
        this._parent = _parent;
        this._ngModule = _ngModule;
        this._factories = new Map();
        for (var i = 0; i < factories.length; i++) {
            var factory = factories[i];
            this._factories.set(factory.componentType, factory);
        }
    }
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        var factory = this._factories.get(component);
        if (!factory && this._parent) {
            factory = this._parent.resolveComponentFactory(component);
        }
        if (!factory) {
            throw noComponentFactoryError(component);
        }
        return new ComponentFactoryBoundToModule(factory, this._ngModule);
    };
    return CodegenComponentFactoryResolver;
}());
export { CodegenComponentFactoryResolver };
var ComponentFactoryBoundToModule = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentFactoryBoundToModule, _super);
    function ComponentFactoryBoundToModule(factory, ngModule) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.ngModule = ngModule;
        _this.selector = factory.selector;
        _this.componentType = factory.componentType;
        _this.ngContentSelectors = factory.ngContentSelectors;
        _this.inputs = factory.inputs;
        _this.outputs = factory.outputs;
        return _this;
    }
    ComponentFactoryBoundToModule.prototype.create = function (injector, projectableNodes, rootSelectorOrNode, ngModule) {
        return this.factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule || this.ngModule);
    };
    return ComponentFactoryBoundToModule;
}(ComponentFactory));
export { ComponentFactoryBoundToModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRWxDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBZSxNQUFNLHFCQUFxQixDQUFDO0FBR25FLE1BQU0sa0NBQWtDLFNBQW1CO0lBQ3pELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FDZixvQ0FBa0MsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtREFBZ0QsQ0FBQyxDQUFDO0lBQzNHLEtBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNkO0FBRUQsSUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDO0FBRXRDLE1BQU0sdUJBQXVCLEtBQVk7SUFDdkMsTUFBTSxDQUFFLEtBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztDQUN4QztBQUdELElBQUE7OztJQUNFLCtEQUF1QixHQUF2QixVQUEyQixTQUFvQztRQUM3RCxNQUFNLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFDO3dDQWhDSDtJQWlDQyxDQUFBOzs7Ozs7O29DQU15QyxJQUFJLDZCQUE2QixFQUFFO21DQXZDN0U7O1NBc0NzQix3QkFBd0I7QUFLOUMsSUFBQTtJQUdFLHlDQUNJLFNBQWtDLEVBQVUsT0FBaUMsRUFDckUsU0FBMkI7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUEwQjtRQUNyRSxjQUFTLEdBQVQsU0FBUyxDQUFrQjswQkFKbEIsSUFBSSxHQUFHLEVBQThCO1FBS3hELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JEO0tBQ0Y7SUFFRCxpRUFBdUIsR0FBdkIsVUFBMkIsU0FBb0M7UUFDN0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsTUFBTSxDQUFDLElBQUksNkJBQTZCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNuRTswQ0FoRUg7SUFpRUMsQ0FBQTtBQXRCRCwyQ0FzQkM7QUFFRCxJQUFBO0lBQXNELHlEQUFtQjtJQU92RSx1Q0FBb0IsT0FBNEIsRUFBVSxRQUEwQjtRQUFwRixZQUNFLGlCQUFPLFNBTVI7UUFQbUIsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUVsRixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7S0FDaEM7SUFFRCw4Q0FBTSxHQUFOLFVBQ0ksUUFBa0IsRUFBRSxnQkFBMEIsRUFBRSxrQkFBK0IsRUFDL0UsUUFBMkI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUN0QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNoRjt3Q0F4Rkg7RUFtRXNELGdCQUFnQixFQXNCckUsQ0FBQTtBQXRCRCx5Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmfSBmcm9tICcuL2NvbXBvbmVudF9mYWN0b3J5JztcbmltcG9ydCB7TmdNb2R1bGVSZWZ9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9Db21wb25lbnRGYWN0b3J5RXJyb3IoY29tcG9uZW50OiBGdW5jdGlvbikge1xuICBjb25zdCBlcnJvciA9IEVycm9yKFxuICAgICAgYE5vIGNvbXBvbmVudCBmYWN0b3J5IGZvdW5kIGZvciAke3N0cmluZ2lmeShjb21wb25lbnQpfS4gRGlkIHlvdSBhZGQgaXQgdG8gQE5nTW9kdWxlLmVudHJ5Q29tcG9uZW50cz9gKTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfQ09NUE9ORU5UXSA9IGNvbXBvbmVudDtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCBFUlJPUl9DT01QT05FTlQgPSAnbmdDb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KGVycm9yOiBFcnJvcik6IFR5cGU8YW55PiB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9DT01QT05FTlRdO1xufVxuXG5cbmNsYXNzIF9OdWxsQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIGltcGxlbWVudHMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHtcbiAgcmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiB7bmV3ICguLi5hcmdzOiBhbnlbXSk6IFR9KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgdGhyb3cgbm9Db21wb25lbnRGYWN0b3J5RXJyb3IoY29tcG9uZW50KTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xuICBzdGF0aWMgTlVMTDogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyID0gbmV3IF9OdWxsQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKCk7XG4gIGFic3RyYWN0IHJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDogVHlwZTxUPik6IENvbXBvbmVudEZhY3Rvcnk8VD47XG59XG5cbmV4cG9ydCBjbGFzcyBDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIGltcGxlbWVudHMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHtcbiAgcHJpdmF0ZSBfZmFjdG9yaWVzID0gbmV3IE1hcDxhbnksIENvbXBvbmVudEZhY3Rvcnk8YW55Pj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGZhY3RvcmllczogQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sIHByaXZhdGUgX3BhcmVudDogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBfbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY3Rvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZmFjdG9yeSA9IGZhY3Rvcmllc1tpXTtcbiAgICAgIHRoaXMuX2ZhY3Rvcmllcy5zZXQoZmFjdG9yeS5jb21wb25lbnRUeXBlLCBmYWN0b3J5KTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wb25lbnQ6IHtuZXcgKC4uLmFyZ3M6IGFueVtdKTogVH0pOiBDb21wb25lbnRGYWN0b3J5PFQ+IHtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMuX2ZhY3Rvcmllcy5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIWZhY3RvcnkgJiYgdGhpcy5fcGFyZW50KSB7XG4gICAgICBmYWN0b3J5ID0gdGhpcy5fcGFyZW50LnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgdGhyb3cgbm9Db21wb25lbnRGYWN0b3J5RXJyb3IoY29tcG9uZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRGYWN0b3J5Qm91bmRUb01vZHVsZShmYWN0b3J5LCB0aGlzLl9uZ01vZHVsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZhY3RvcnlCb3VuZFRvTW9kdWxlPEM+IGV4dGVuZHMgQ29tcG9uZW50RmFjdG9yeTxDPiB7XG4gIHJlYWRvbmx5IHNlbGVjdG9yOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PjtcbiAgcmVhZG9ubHkgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXTtcbiAgcmVhZG9ubHkgaW5wdXRzOiB7cHJvcE5hbWU6IHN0cmluZywgdGVtcGxhdGVOYW1lOiBzdHJpbmd9W107XG4gIHJlYWRvbmx5IG91dHB1dHM6IHtwcm9wTmFtZTogc3RyaW5nLCB0ZW1wbGF0ZU5hbWU6IHN0cmluZ31bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8Qz4sIHByaXZhdGUgbmdNb2R1bGU6IE5nTW9kdWxlUmVmPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VsZWN0b3IgPSBmYWN0b3J5LnNlbGVjdG9yO1xuICAgIHRoaXMuY29tcG9uZW50VHlwZSA9IGZhY3RvcnkuY29tcG9uZW50VHlwZTtcbiAgICB0aGlzLm5nQ29udGVudFNlbGVjdG9ycyA9IGZhY3RvcnkubmdDb250ZW50U2VsZWN0b3JzO1xuICAgIHRoaXMuaW5wdXRzID0gZmFjdG9yeS5pbnB1dHM7XG4gICAgdGhpcy5vdXRwdXRzID0gZmFjdG9yeS5vdXRwdXRzO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzPzogYW55W11bXSwgcm9vdFNlbGVjdG9yT3JOb2RlPzogc3RyaW5nfGFueSxcbiAgICAgIG5nTW9kdWxlPzogTmdNb2R1bGVSZWY8YW55Pik6IENvbXBvbmVudFJlZjxDPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5jcmVhdGUoXG4gICAgICAgIGluamVjdG9yLCBwcm9qZWN0YWJsZU5vZGVzLCByb290U2VsZWN0b3JPck5vZGUsIG5nTW9kdWxlIHx8IHRoaXMubmdNb2R1bGUpO1xuICB9XG59XG4iXX0=