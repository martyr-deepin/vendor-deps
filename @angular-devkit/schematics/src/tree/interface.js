"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy[MergeStrategy["AllowOverwriteConflict"] = 2] = "AllowOverwriteConflict";
    MergeStrategy[MergeStrategy["AllowCreationConflict"] = 4] = "AllowCreationConflict";
    MergeStrategy[MergeStrategy["AllowDeleteConflict"] = 8] = "AllowDeleteConflict";
    // Uses the default strategy.
    MergeStrategy[MergeStrategy["Default"] = 0] = "Default";
    // Error out if 2 files have the same path. It is useful to have a different value than
    // Default in this case as the tooling Default might differ.
    MergeStrategy[MergeStrategy["Error"] = 1] = "Error";
    // Only content conflicts are overwritten.
    MergeStrategy[MergeStrategy["ContentOnly"] = 2] = "ContentOnly";
    // Overwrite everything with the latest change.
    MergeStrategy[MergeStrategy["Overwrite"] = 14] = "Overwrite";
})(MergeStrategy = exports.MergeStrategy || (exports.MergeStrategy = {}));
exports.FileVisitorCancelToken = Symbol();
exports.TreeSymbol = (function () {
    const globalSymbol = (typeof window == 'object' && window.window === window && window.Symbol)
        || (typeof self == 'object' && self.self === self && self.Symbol)
        || (typeof global == 'object' && global.global === global && global.Symbol);
    if (!globalSymbol) {
        return Symbol('schematic-tree');
    }
    if (!globalSymbol.schematicTree) {
        globalSymbol.schematicTree = Symbol('schematic-tree');
    }
    return globalSymbol.schematicTree;
})();
var Tree;
(function (Tree) {
    function isTree(maybeTree) {
        return exports.TreeSymbol in maybeTree;
    }
    Tree.isTree = isTree;
})(Tree || (Tree = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2hhbnNsL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3Mvc3JjL3RyZWUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EsSUFBWSxhQW1CWDtBQW5CRCxXQUFZLGFBQWE7SUFDdkIscUZBQWtDLENBQUE7SUFDbEMsbUZBQWtDLENBQUE7SUFDbEMsK0VBQWtDLENBQUE7SUFFbEMsNkJBQTZCO0lBQzdCLHVEQUE2QixDQUFBO0lBRTdCLHVGQUF1RjtJQUN2Riw0REFBNEQ7SUFDNUQsbURBQWtDLENBQUE7SUFFbEMsMENBQTBDO0lBQzFDLCtEQUFnRSxDQUFBO0lBRWhFLCtDQUErQztJQUMvQyw0REFFNkQsQ0FBQTtBQUMvRCxDQUFDLEVBbkJXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBbUJ4QjtBQUdZLFFBQUEsc0JBQXNCLEdBQUcsTUFBTSxFQUFFLENBQUM7QUE2QmxDLFFBQUEsVUFBVSxHQUFXLENBQUM7SUFDakMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztXQUN4RSxDQUFDLE9BQU8sSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1dBQzlELENBQUMsT0FBTyxNQUFNLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU5RixFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUErQkwsSUFBVSxJQUFJLENBSWI7QUFKRCxXQUFVLElBQUk7SUFDWixnQkFBdUIsU0FBaUI7UUFDdEMsTUFBTSxDQUFDLGtCQUFVLElBQUksU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFGZSxXQUFNLFNBRXJCLENBQUE7QUFDSCxDQUFDLEVBSlMsSUFBSSxLQUFKLElBQUksUUFJYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBhdGgsIFBhdGhGcmFnbWVudCB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcblxuXG5leHBvcnQgZW51bSBNZXJnZVN0cmF0ZWd5IHtcbiAgQWxsb3dPdmVyd3JpdGVDb25mbGljdCAgICA9IDEgPDwgMSxcbiAgQWxsb3dDcmVhdGlvbkNvbmZsaWN0ICAgICA9IDEgPDwgMixcbiAgQWxsb3dEZWxldGVDb25mbGljdCAgICAgICA9IDEgPDwgMyxcblxuICAvLyBVc2VzIHRoZSBkZWZhdWx0IHN0cmF0ZWd5LlxuICBEZWZhdWx0ICAgICAgICAgICAgICAgICAgID0gMCxcblxuICAvLyBFcnJvciBvdXQgaWYgMiBmaWxlcyBoYXZlIHRoZSBzYW1lIHBhdGguIEl0IGlzIHVzZWZ1bCB0byBoYXZlIGEgZGlmZmVyZW50IHZhbHVlIHRoYW5cbiAgLy8gRGVmYXVsdCBpbiB0aGlzIGNhc2UgYXMgdGhlIHRvb2xpbmcgRGVmYXVsdCBtaWdodCBkaWZmZXIuXG4gIEVycm9yICAgICAgICAgICAgICAgICAgICAgPSAxIDw8IDAsXG5cbiAgLy8gT25seSBjb250ZW50IGNvbmZsaWN0cyBhcmUgb3ZlcndyaXR0ZW4uXG4gIENvbnRlbnRPbmx5ICAgICAgICAgICAgICAgPSBNZXJnZVN0cmF0ZWd5LkFsbG93T3ZlcndyaXRlQ29uZmxpY3QsXG5cbiAgLy8gT3ZlcndyaXRlIGV2ZXJ5dGhpbmcgd2l0aCB0aGUgbGF0ZXN0IGNoYW5nZS5cbiAgT3ZlcndyaXRlICAgICAgICAgICAgICAgICA9IE1lcmdlU3RyYXRlZ3kuQWxsb3dPdmVyd3JpdGVDb25mbGljdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgTWVyZ2VTdHJhdGVneS5BbGxvd0NyZWF0aW9uQ29uZmxpY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIE1lcmdlU3RyYXRlZ3kuQWxsb3dEZWxldGVDb25mbGljdCxcbn1cblxuXG5leHBvcnQgY29uc3QgRmlsZVZpc2l0b3JDYW5jZWxUb2tlbiA9IFN5bWJvbCgpO1xuZXhwb3J0IHR5cGUgRmlsZVZpc2l0b3IgPSBGaWxlUHJlZGljYXRlPHZvaWQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSB7XG4gIHJlYWRvbmx5IHBhdGg6IFBhdGg7XG4gIHJlYWRvbmx5IGNvbnRlbnQ6IEJ1ZmZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJFbnRyeSB7XG4gIHJlYWRvbmx5IHBhcmVudDogRGlyRW50cnkgfCBudWxsO1xuICByZWFkb25seSBwYXRoOiBQYXRoO1xuXG4gIHJlYWRvbmx5IHN1YmRpcnM6IFBhdGhGcmFnbWVudFtdO1xuICByZWFkb25seSBzdWJmaWxlczogUGF0aEZyYWdtZW50W107XG5cbiAgZGlyKG5hbWU6IFBhdGhGcmFnbWVudCk6IERpckVudHJ5O1xuICBmaWxlKG5hbWU6IFBhdGhGcmFnbWVudCk6IEZpbGVFbnRyeSB8IG51bGw7XG5cbiAgdmlzaXQodmlzaXRvcjogRmlsZVZpc2l0b3IpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVQcmVkaWNhdGU8VD4ge1xuICAocGF0aDogUGF0aCwgZW50cnk/OiBSZWFkb25seTxGaWxlRW50cnk+IHwgbnVsbCk6IFQ7XG59XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfSwgd2luZG93OiB7fSB9O1xuZGVjbGFyZSBjb25zdCBzZWxmOiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfSwgc2VsZjoge30gfTtcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiB7IFN5bWJvbDogeyBzY2hlbWF0aWNUcmVlOiBzeW1ib2wgfSwgZ2xvYmFsOiB7fSB9O1xuXG5leHBvcnQgY29uc3QgVHJlZVN5bWJvbDogc3ltYm9sID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBnbG9iYWxTeW1ib2wgPSAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cud2luZG93ID09PSB3aW5kb3cgJiYgd2luZG93LlN5bWJvbClcbiAgICAgICAgICAgICAgICAgICAgfHwgKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmLlN5bWJvbClcbiAgICAgICAgICAgICAgICAgICAgfHwgKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbC5TeW1ib2wpO1xuXG4gIGlmICghZ2xvYmFsU3ltYm9sKSB7XG4gICAgcmV0dXJuIFN5bWJvbCgnc2NoZW1hdGljLXRyZWUnKTtcbiAgfVxuXG4gIGlmICghZ2xvYmFsU3ltYm9sLnNjaGVtYXRpY1RyZWUpIHtcbiAgICBnbG9iYWxTeW1ib2wuc2NoZW1hdGljVHJlZSA9IFN5bWJvbCgnc2NoZW1hdGljLXRyZWUnKTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWxTeW1ib2wuc2NoZW1hdGljVHJlZTtcbn0pKCk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBUcmVlIHtcbiAgYnJhbmNoKCk6IFRyZWU7XG4gIG1lcmdlKG90aGVyOiBUcmVlLCBzdHJhdGVneT86IE1lcmdlU3RyYXRlZ3kpOiB2b2lkO1xuXG4gIHJlYWRvbmx5IHJvb3Q6IERpckVudHJ5O1xuXG4gIC8vIFJlYWRvbmx5LlxuICByZWFkKHBhdGg6IHN0cmluZyk6IEJ1ZmZlciB8IG51bGw7XG4gIGV4aXN0cyhwYXRoOiBzdHJpbmcpOiBib29sZWFuO1xuICBnZXQocGF0aDogc3RyaW5nKTogRmlsZUVudHJ5IHwgbnVsbDtcbiAgZ2V0RGlyKHBhdGg6IHN0cmluZyk6IERpckVudHJ5O1xuICB2aXNpdCh2aXNpdG9yOiBGaWxlVmlzaXRvcik6IHZvaWQ7XG5cbiAgLy8gQ2hhbmdlIGNvbnRlbnQgb2YgaG9zdCBmaWxlcy5cbiAgb3ZlcndyaXRlKHBhdGg6IHN0cmluZywgY29udGVudDogQnVmZmVyIHwgc3RyaW5nKTogdm9pZDtcbiAgYmVnaW5VcGRhdGUocGF0aDogc3RyaW5nKTogVXBkYXRlUmVjb3JkZXI7XG4gIGNvbW1pdFVwZGF0ZShyZWNvcmQ6IFVwZGF0ZVJlY29yZGVyKTogdm9pZDtcblxuICAvLyBTdHJ1Y3R1cmFsIG1ldGhvZHMuXG4gIGNyZWF0ZShwYXRoOiBzdHJpbmcsIGNvbnRlbnQ6IEJ1ZmZlciB8IHN0cmluZyk6IHZvaWQ7XG4gIGRlbGV0ZShwYXRoOiBzdHJpbmcpOiB2b2lkO1xuICByZW5hbWUoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nKTogdm9pZDtcblxuICBhcHBseShhY3Rpb246IEFjdGlvbiwgc3RyYXRlZ3k/OiBNZXJnZVN0cmF0ZWd5KTogdm9pZDtcbiAgcmVhZG9ubHkgYWN0aW9uczogQWN0aW9uW107XG59XG5cblxubmFtZXNwYWNlIFRyZWUge1xuICBleHBvcnQgZnVuY3Rpb24gaXNUcmVlKG1heWJlVHJlZTogb2JqZWN0KTogbWF5YmVUcmVlIGlzIFRyZWUge1xuICAgIHJldHVybiBUcmVlU3ltYm9sIGluIG1heWJlVHJlZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUmVjb3JkZXIge1xuICAvLyBUaGVzZSBqdXN0IHJlY29yZCBjaGFuZ2VzLlxuICBpbnNlcnRMZWZ0KGluZGV4OiBudW1iZXIsIGNvbnRlbnQ6IEJ1ZmZlciB8IHN0cmluZyk6IFVwZGF0ZVJlY29yZGVyO1xuICBpbnNlcnRSaWdodChpbmRleDogbnVtYmVyLCBjb250ZW50OiBCdWZmZXIgfCBzdHJpbmcpOiBVcGRhdGVSZWNvcmRlcjtcbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogVXBkYXRlUmVjb3JkZXI7XG59XG4iXX0=