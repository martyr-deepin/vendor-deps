"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const interface_1 = require("./tree/interface");
const static_1 = require("./tree/static");
var exception_1 = require("./exception/exception");
exports.SchematicsException = exception_1.SchematicsException;
__export(require("./tree/action"));
__export(require("./engine/collection"));
__export(require("./engine/engine"));
__export(require("./exception/exception"));
__export(require("./tree/interface"));
__export(require("./rules/base"));
__export(require("./rules/move"));
__export(require("./rules/random"));
__export(require("./rules/schematic"));
__export(require("./rules/template"));
__export(require("./rules/url"));
__export(require("./tree/delegate"));
__export(require("./tree/empty"));
__export(require("./tree/filesystem"));
__export(require("./tree/memory-host"));
__export(require("./tree/virtual"));
__export(require("./engine/schematic"));
__export(require("./sink/dryrun"));
var filesystem_1 = require("./sink/filesystem");
exports.FileSystemSink = filesystem_1.FileSystemSink;
const formats = require("./formats");
exports.formats = formats;
exports.Tree = {
    empty() { return static_1.empty(); },
    branch(tree) { return static_1.branch(tree); },
    merge(tree, other, strategy = interface_1.MergeStrategy.Default) {
        return static_1.merge(tree, other, strategy);
    },
    partition(tree, predicate) {
        return static_1.partition(tree, predicate);
    },
    optimize(tree) { return static_1.optimize(tree); },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbnNsL1NvdXJjZXMvaGFuc2wvZGV2a2l0LyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvc2NoZW1hdGljcy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxnREFBZ0U7QUFFaEUsMENBQTBFO0FBRzFFLG1EQUE0RDtBQUFuRCwwQ0FBQSxtQkFBbUIsQ0FBQTtBQUU1QixtQ0FBOEI7QUFDOUIseUNBQW9DO0FBQ3BDLHFDQUFnQztBQUVoQywyQ0FBc0M7QUFDdEMsc0NBQWlDO0FBQ2pDLGtDQUE2QjtBQUM3QixrQ0FBNkI7QUFDN0Isb0NBQStCO0FBQy9CLHVDQUFrQztBQUNsQyxzQ0FBaUM7QUFDakMsaUNBQTRCO0FBQzVCLHFDQUFnQztBQUNoQyxrQ0FBNkI7QUFDN0IsdUNBQWtDO0FBQ2xDLHdDQUFtQztBQUNuQyxvQ0FBK0I7QUFFL0Isd0NBQW1DO0FBQ25DLG1DQUE4QjtBQUM5QixnREFBaUQ7QUFBekMsc0NBQUEsY0FBYyxDQUFBO0FBQ3RCLHFDQUFxQztBQUM1QiwwQkFBTztBQVlILFFBQUEsSUFBSSxHQUFvQjtJQUNuQyxLQUFLLEtBQUssTUFBTSxDQUFDLGNBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixNQUFNLENBQUMsSUFBbUIsSUFBSSxNQUFNLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxLQUFLLENBQUMsSUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsV0FBMEIseUJBQWEsQ0FBQyxPQUFPO1FBQ25ELE1BQU0sQ0FBQyxjQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsU0FBUyxDQUFDLElBQW1CLEVBQUUsU0FBaUM7UUFDOUQsTUFBTSxDQUFDLGtCQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxRQUFRLENBQUMsSUFBbUIsSUFBSSxNQUFNLENBQUMsaUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEZpbGVQcmVkaWNhdGUsIE1lcmdlU3RyYXRlZ3kgfSBmcm9tICcuL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IFRyZWUgYXMgVHJlZUludGVyZmFjZSB9IGZyb20gJy4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgYnJhbmNoLCBlbXB0eSwgbWVyZ2UsIG9wdGltaXplLCBwYXJ0aXRpb24gfSBmcm9tICcuL3RyZWUvc3RhdGljJztcblxuXG5leHBvcnQgeyBTY2hlbWF0aWNzRXhjZXB0aW9uIH0gZnJvbSAnLi9leGNlcHRpb24vZXhjZXB0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi90cmVlL2FjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9jb2xsZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZW5naW5lL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuL2VuZ2luZS9pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9leGNlcHRpb24vZXhjZXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ydWxlcy9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvbW92ZSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3JhbmRvbSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3NjaGVtYXRpYyc7XG5leHBvcnQgKiBmcm9tICcuL3J1bGVzL3RlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcnVsZXMvdXJsJztcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS9kZWxlZ2F0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3RyZWUvZW1wdHknO1xuZXhwb3J0ICogZnJvbSAnLi90cmVlL2ZpbGVzeXN0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi90cmVlL21lbW9yeS1ob3N0JztcbmV4cG9ydCAqIGZyb20gJy4vdHJlZS92aXJ0dWFsJztcbmV4cG9ydCB7VXBkYXRlUmVjb3JkZXJ9IGZyb20gJy4vdHJlZS9pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvc2NoZW1hdGljJztcbmV4cG9ydCAqIGZyb20gJy4vc2luay9kcnlydW4nO1xuZXhwb3J0IHtGaWxlU3lzdGVtU2lua30gZnJvbSAnLi9zaW5rL2ZpbGVzeXN0ZW0nO1xuaW1wb3J0ICogYXMgZm9ybWF0cyBmcm9tICcuL2Zvcm1hdHMnO1xuZXhwb3J0IHsgZm9ybWF0cyB9O1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUNvbnN0cnVjdG9yIHtcbiAgZW1wdHkoKTogVHJlZUludGVyZmFjZTtcbiAgYnJhbmNoKHRyZWU6IFRyZWVJbnRlcmZhY2UpOiBUcmVlSW50ZXJmYWNlO1xuICBtZXJnZSh0cmVlOiBUcmVlSW50ZXJmYWNlLCBvdGhlcjogVHJlZUludGVyZmFjZSwgc3RyYXRlZ3k/OiBNZXJnZVN0cmF0ZWd5KTogVHJlZUludGVyZmFjZTtcbiAgcGFydGl0aW9uKHRyZWU6IFRyZWVJbnRlcmZhY2UsIHByZWRpY2F0ZTogRmlsZVByZWRpY2F0ZTxib29sZWFuPik6IFtUcmVlSW50ZXJmYWNlLCBUcmVlSW50ZXJmYWNlXTtcbiAgb3B0aW1pemUodHJlZTogVHJlZUludGVyZmFjZSk6IFRyZWVJbnRlcmZhY2U7XG59XG5cbmV4cG9ydCB0eXBlIFRyZWUgPSBUcmVlSW50ZXJmYWNlO1xuZXhwb3J0IGNvbnN0IFRyZWU6IFRyZWVDb25zdHJ1Y3RvciA9IHtcbiAgZW1wdHkoKSB7IHJldHVybiBlbXB0eSgpOyB9LFxuICBicmFuY2godHJlZTogVHJlZUludGVyZmFjZSkgeyByZXR1cm4gYnJhbmNoKHRyZWUpOyB9LFxuICBtZXJnZSh0cmVlOiBUcmVlSW50ZXJmYWNlLFxuICAgICAgICBvdGhlcjogVHJlZUludGVyZmFjZSxcbiAgICAgICAgc3RyYXRlZ3k6IE1lcmdlU3RyYXRlZ3kgPSBNZXJnZVN0cmF0ZWd5LkRlZmF1bHQpIHtcbiAgICByZXR1cm4gbWVyZ2UodHJlZSwgb3RoZXIsIHN0cmF0ZWd5KTtcbiAgfSxcbiAgcGFydGl0aW9uKHRyZWU6IFRyZWVJbnRlcmZhY2UsIHByZWRpY2F0ZTogRmlsZVByZWRpY2F0ZTxib29sZWFuPikge1xuICAgIHJldHVybiBwYXJ0aXRpb24odHJlZSwgcHJlZGljYXRlKTtcbiAgfSxcbiAgb3B0aW1pemUodHJlZTogVHJlZUludGVyZmFjZSkgeyByZXR1cm4gb3B0aW1pemUodHJlZSk7IH0sXG59O1xuIl19