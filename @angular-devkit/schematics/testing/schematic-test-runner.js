"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tools_1 = require("@angular-devkit/schematics/tools");
const Observable_1 = require("rxjs/Observable");
class UnitTestTree extends schematics_1.DelegateTree {
    get files() {
        const result = [];
        this.visit(path => result.push(path));
        return result;
    }
}
exports.UnitTestTree = UnitTestTree;
class SchematicTestRunner {
    constructor(_collectionName, collectionPath) {
        this._collectionName = _collectionName;
        this._engineHost = new tools_1.NodeModulesTestEngineHost();
        this._engine = new schematics_1.SchematicEngine(this._engineHost);
        this._engineHost.registerCollection(_collectionName, collectionPath);
        this._logger = new core_1.logging.Logger('test');
        this._registry = new core_1.schema.JsonSchemaRegistry();
        this._engineHost.registerOptionsTransform((schematicDescription, opts) => {
            const schematic = schematicDescription;
            if (schematic.schema && schematic.schemaJson) {
                const schemaJson = schematic.schemaJson;
                const name = schemaJson.id || schematic.name;
                this._registry.addSchema(name, schemaJson);
                const serializer = new core_1.schema.serializers.JavascriptSerializer();
                const fn = serializer.serialize(name, this._registry);
                return fn(opts);
            }
            return opts;
        });
        this._collection = this._engine.createCollection(this._collectionName);
    }
    get logger() { return this._logger; }
    runSchematicAsync(schematicName, opts, tree) {
        const schematic = this._collection.createSchematic(schematicName);
        const host = Observable_1.Observable.of(tree || new schematics_1.VirtualTree);
        return schematic.call(opts || {}, host, { logger: this._logger })
            .map(tree => new UnitTestTree(tree));
    }
    runSchematic(schematicName, opts, tree) {
        const schematic = this._collection.createSchematic(schematicName);
        let result = null;
        const host = Observable_1.Observable.of(tree || new schematics_1.VirtualTree);
        schematic.call(opts || {}, host, { logger: this._logger })
            .subscribe(t => result = new UnitTestTree(t));
        if (result === null) {
            throw new Error('Schematic is async, please use runSchematicAsync');
        }
        return result;
    }
}
exports.SchematicTestRunner = SchematicTestRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hdGljLXRlc3QtcnVubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2hhbnNsL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3MvdGVzdGluZy9zY2hlbWF0aWMtdGVzdC1ydW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FBdUQ7QUFDdkQsMkRBTW9DO0FBQ3BDLDREQUcwQztBQUMxQyxnREFBNkM7QUFHN0Msa0JBQTBCLFNBQVEseUJBQVk7SUFDNUMsSUFBSSxLQUFLO1FBQ1AsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFQRCxvQ0FPQztBQUVEO0lBT0UsWUFBb0IsZUFBdUIsRUFBRSxjQUFzQjtRQUEvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQU5uQyxnQkFBVyxHQUFHLElBQUksaUNBQXlCLEVBQUUsQ0FBQztRQUM5QyxZQUFPLEdBQTRCLElBQUksNEJBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFNL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxvQkFBd0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNuRixNQUFNLFNBQVMsR0FBNEIsb0JBQStDLENBQUM7WUFFM0YsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQXFDLENBQUM7Z0JBQ25FLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGFBQU0sQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDakUsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV0RCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLE1BQU0sS0FBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXJELGlCQUFpQixDQUNmLGFBQXFCLEVBQ3JCLElBQXVCLEVBQ3ZCLElBQVc7UUFFWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxNQUFNLElBQUksR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSx3QkFBVyxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FDVixhQUFxQixFQUNyQixJQUF1QixFQUN2QixJQUFXO1FBRVgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEUsSUFBSSxNQUFNLEdBQXdCLElBQUksQ0FBQztRQUN2QyxNQUFNLElBQUksR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSx3QkFBVyxDQUFDLENBQUM7UUFFcEQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkQsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQWhFRCxrREFnRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBsb2dnaW5nLCBzY2hlbWEgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQge1xuICBDb2xsZWN0aW9uLFxuICBEZWxlZ2F0ZVRyZWUsXG4gIFNjaGVtYXRpY0VuZ2luZSxcbiAgVHJlZSxcbiAgVmlydHVhbFRyZWUsXG59IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7XG4gIEZpbGVTeXN0ZW1TY2hlbWF0aWNEZXNjLFxuICBOb2RlTW9kdWxlc1Rlc3RFbmdpbmVIb3N0LFxufSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcy90b29scyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuXG5leHBvcnQgY2xhc3MgVW5pdFRlc3RUcmVlIGV4dGVuZHMgRGVsZWdhdGVUcmVlIHtcbiAgZ2V0IGZpbGVzKCkge1xuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICB0aGlzLnZpc2l0KHBhdGggPT4gcmVzdWx0LnB1c2gocGF0aCkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NoZW1hdGljVGVzdFJ1bm5lciB7XG4gIHByaXZhdGUgX2VuZ2luZUhvc3QgPSBuZXcgTm9kZU1vZHVsZXNUZXN0RW5naW5lSG9zdCgpO1xuICBwcml2YXRlIF9lbmdpbmU6IFNjaGVtYXRpY0VuZ2luZTx7fSwge30+ID0gbmV3IFNjaGVtYXRpY0VuZ2luZSh0aGlzLl9lbmdpbmVIb3N0KTtcbiAgcHJpdmF0ZSBfY29sbGVjdGlvbjogQ29sbGVjdGlvbjx7fSwge30+O1xuICBwcml2YXRlIF9sb2dnZXI6IGxvZ2dpbmcuTG9nZ2VyO1xuICBwcml2YXRlIF9yZWdpc3RyeTogc2NoZW1hLkpzb25TY2hlbWFSZWdpc3RyeTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBjb2xsZWN0aW9uUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZW5naW5lSG9zdC5yZWdpc3RlckNvbGxlY3Rpb24oX2NvbGxlY3Rpb25OYW1lLCBjb2xsZWN0aW9uUGF0aCk7XG4gICAgdGhpcy5fbG9nZ2VyID0gbmV3IGxvZ2dpbmcuTG9nZ2VyKCd0ZXN0Jyk7XG4gICAgdGhpcy5fcmVnaXN0cnkgPSBuZXcgc2NoZW1hLkpzb25TY2hlbWFSZWdpc3RyeSgpO1xuXG4gICAgdGhpcy5fZW5naW5lSG9zdC5yZWdpc3Rlck9wdGlvbnNUcmFuc2Zvcm0oKHNjaGVtYXRpY0Rlc2NyaXB0aW9uOiB7fSwgb3B0czogb2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWF0aWM6IEZpbGVTeXN0ZW1TY2hlbWF0aWNEZXNjID0gc2NoZW1hdGljRGVzY3JpcHRpb24gYXMgRmlsZVN5c3RlbVNjaGVtYXRpY0Rlc2M7XG5cbiAgICAgIGlmIChzY2hlbWF0aWMuc2NoZW1hICYmIHNjaGVtYXRpYy5zY2hlbWFKc29uKSB7XG4gICAgICAgIGNvbnN0IHNjaGVtYUpzb24gPSBzY2hlbWF0aWMuc2NoZW1hSnNvbiBhcyBzY2hlbWEuSnNvblNjaGVtYU9iamVjdDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHNjaGVtYUpzb24uaWQgfHwgc2NoZW1hdGljLm5hbWU7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmFkZFNjaGVtYShuYW1lLCBzY2hlbWFKc29uKTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBzY2hlbWEuc2VyaWFsaXplcnMuSmF2YXNjcmlwdFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgY29uc3QgZm4gPSBzZXJpYWxpemVyLnNlcmlhbGl6ZShuYW1lLCB0aGlzLl9yZWdpc3RyeSk7XG5cbiAgICAgICAgcmV0dXJuIGZuKG9wdHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0cztcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbGxlY3Rpb24gPSB0aGlzLl9lbmdpbmUuY3JlYXRlQ29sbGVjdGlvbih0aGlzLl9jb2xsZWN0aW9uTmFtZSk7XG4gIH1cblxuICBnZXQgbG9nZ2VyKCk6IGxvZ2dpbmcuTG9nZ2VyIHsgcmV0dXJuIHRoaXMuX2xvZ2dlcjsgfVxuXG4gIHJ1blNjaGVtYXRpY0FzeW5jPFNjaGVtYXRpY1NjaGVtYVQ+KFxuICAgIHNjaGVtYXRpY05hbWU6IHN0cmluZyxcbiAgICBvcHRzPzogU2NoZW1hdGljU2NoZW1hVCxcbiAgICB0cmVlPzogVHJlZSxcbiAgKTogT2JzZXJ2YWJsZTxVbml0VGVzdFRyZWU+IHtcbiAgICBjb25zdCBzY2hlbWF0aWMgPSB0aGlzLl9jb2xsZWN0aW9uLmNyZWF0ZVNjaGVtYXRpYyhzY2hlbWF0aWNOYW1lKTtcbiAgICBjb25zdCBob3N0ID0gT2JzZXJ2YWJsZS5vZih0cmVlIHx8IG5ldyBWaXJ0dWFsVHJlZSk7XG5cbiAgICByZXR1cm4gc2NoZW1hdGljLmNhbGwob3B0cyB8fCB7fSwgaG9zdCwgeyBsb2dnZXI6IHRoaXMuX2xvZ2dlciB9KVxuICAgICAgLm1hcCh0cmVlID0+IG5ldyBVbml0VGVzdFRyZWUodHJlZSkpO1xuICB9XG5cbiAgcnVuU2NoZW1hdGljPFNjaGVtYXRpY1NjaGVtYVQ+KFxuICAgIHNjaGVtYXRpY05hbWU6IHN0cmluZyxcbiAgICBvcHRzPzogU2NoZW1hdGljU2NoZW1hVCxcbiAgICB0cmVlPzogVHJlZSxcbiAgKTogVW5pdFRlc3RUcmVlIHtcbiAgICBjb25zdCBzY2hlbWF0aWMgPSB0aGlzLl9jb2xsZWN0aW9uLmNyZWF0ZVNjaGVtYXRpYyhzY2hlbWF0aWNOYW1lKTtcblxuICAgIGxldCByZXN1bHQ6IFVuaXRUZXN0VHJlZSB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGhvc3QgPSBPYnNlcnZhYmxlLm9mKHRyZWUgfHwgbmV3IFZpcnR1YWxUcmVlKTtcblxuICAgIHNjaGVtYXRpYy5jYWxsKG9wdHMgfHwge30sIGhvc3QsIHsgbG9nZ2VyOiB0aGlzLl9sb2dnZXIgfSlcbiAgICAgIC5zdWJzY3JpYmUodCA9PiByZXN1bHQgPSBuZXcgVW5pdFRlc3RUcmVlKHQpKTtcblxuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2NoZW1hdGljIGlzIGFzeW5jLCBwbGVhc2UgdXNlIHJ1blNjaGVtYXRpY0FzeW5jJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19