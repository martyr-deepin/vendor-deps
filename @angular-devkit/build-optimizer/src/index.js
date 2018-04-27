"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var webpack_loader_1 = require("./build-optimizer/webpack-loader");
exports.buildOptimizerLoader = webpack_loader_1.default;
var build_optimizer_1 = require("./build-optimizer/build-optimizer");
exports.buildOptimizer = build_optimizer_1.buildOptimizer;
var webpack_plugin_1 = require("./purify/webpack-plugin");
exports.PurifyPlugin = webpack_plugin_1.PurifyPlugin;
var purify_1 = require("./purify/purify");
exports.purify = purify_1.purify;
var transform_javascript_1 = require("./helpers/transform-javascript");
exports.transformJavascript = transform_javascript_1.transformJavascript;
var class_fold_1 = require("./transforms/class-fold");
exports.getFoldFileTransformer = class_fold_1.getFoldFileTransformer;
var import_tslib_1 = require("./transforms/import-tslib");
exports.getImportTslibTransformer = import_tslib_1.getImportTslibTransformer;
exports.testImportTslib = import_tslib_1.testImportTslib;
var prefix_classes_1 = require("./transforms/prefix-classes");
exports.getPrefixClassesTransformer = prefix_classes_1.getPrefixClassesTransformer;
exports.testPrefixClasses = prefix_classes_1.testPrefixClasses;
var prefix_functions_1 = require("./transforms/prefix-functions");
exports.getPrefixFunctionsTransformer = prefix_functions_1.getPrefixFunctionsTransformer;
var scrub_file_1 = require("./transforms/scrub-file");
exports.getScrubFileTransformer = scrub_file_1.getScrubFileTransformer;
exports.testScrubFile = scrub_file_1.testScrubFile;
var wrap_enums_1 = require("./transforms/wrap-enums");
exports.getWrapEnumsTransformer = wrap_enums_1.getWrapEnumsTransformer;
exports.testWrapEnums = wrap_enums_1.testWrapEnums;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX29wdGltaXplci9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxtRUFBbUY7QUFBMUUsZ0RBQUEsT0FBTyxDQUF3QjtBQUN4QyxxRUFBbUU7QUFBMUQsMkNBQUEsY0FBYyxDQUFBO0FBRXZCLDBEQUF1RDtBQUE5Qyx3Q0FBQSxZQUFZLENBQUE7QUFDckIsMENBQXlDO0FBQWhDLDBCQUFBLE1BQU0sQ0FBQTtBQUVmLHVFQUFxRTtBQUE1RCxxREFBQSxtQkFBbUIsQ0FBQTtBQUU1QixzREFBaUU7QUFBeEQsOENBQUEsc0JBQXNCLENBQUE7QUFDL0IsMERBQXVGO0FBQTlFLG1EQUFBLHlCQUF5QixDQUFBO0FBQUUseUNBQUEsZUFBZSxDQUFBO0FBQ25ELDhEQUE2RjtBQUFwRix1REFBQSwyQkFBMkIsQ0FBQTtBQUFFLDZDQUFBLGlCQUFpQixDQUFBO0FBQ3ZELGtFQUE4RTtBQUFyRSwyREFBQSw2QkFBNkIsQ0FBQTtBQUN0QyxzREFBaUY7QUFBeEUsK0NBQUEsdUJBQXVCLENBQUE7QUFBRSxxQ0FBQSxhQUFhLENBQUE7QUFDL0Msc0RBQWlGO0FBQXhFLCtDQUFBLHVCQUF1QixDQUFBO0FBQUUscUNBQUEsYUFBYSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBidWlsZE9wdGltaXplckxvYWRlciB9IGZyb20gJy4vYnVpbGQtb3B0aW1pemVyL3dlYnBhY2stbG9hZGVyJztcbmV4cG9ydCB7IGJ1aWxkT3B0aW1pemVyIH0gZnJvbSAnLi9idWlsZC1vcHRpbWl6ZXIvYnVpbGQtb3B0aW1pemVyJztcblxuZXhwb3J0IHsgUHVyaWZ5UGx1Z2luIH0gZnJvbSAnLi9wdXJpZnkvd2VicGFjay1wbHVnaW4nO1xuZXhwb3J0IHsgcHVyaWZ5IH0gZnJvbSAnLi9wdXJpZnkvcHVyaWZ5JztcblxuZXhwb3J0IHsgdHJhbnNmb3JtSmF2YXNjcmlwdCB9IGZyb20gJy4vaGVscGVycy90cmFuc2Zvcm0tamF2YXNjcmlwdCc7XG5cbmV4cG9ydCB7IGdldEZvbGRGaWxlVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvY2xhc3MtZm9sZCc7XG5leHBvcnQgeyBnZXRJbXBvcnRUc2xpYlRyYW5zZm9ybWVyLCB0ZXN0SW1wb3J0VHNsaWIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW1wb3J0LXRzbGliJztcbmV4cG9ydCB7IGdldFByZWZpeENsYXNzZXNUcmFuc2Zvcm1lciwgdGVzdFByZWZpeENsYXNzZXMgfSBmcm9tICcuL3RyYW5zZm9ybXMvcHJlZml4LWNsYXNzZXMnO1xuZXhwb3J0IHsgZ2V0UHJlZml4RnVuY3Rpb25zVHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvcHJlZml4LWZ1bmN0aW9ucyc7XG5leHBvcnQgeyBnZXRTY3J1YkZpbGVUcmFuc2Zvcm1lciwgdGVzdFNjcnViRmlsZSB9IGZyb20gJy4vdHJhbnNmb3Jtcy9zY3J1Yi1maWxlJztcbmV4cG9ydCB7IGdldFdyYXBFbnVtc1RyYW5zZm9ybWVyLCB0ZXN0V3JhcEVudW1zIH0gZnJvbSAnLi90cmFuc2Zvcm1zL3dyYXAtZW51bXMnO1xuIl19