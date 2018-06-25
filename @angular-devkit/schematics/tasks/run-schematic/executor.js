"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return (options, context) => {
        const maybeWorkflow = context.engine.workflow;
        const collection = options.collection || context.schematic.collection.description.name;
        if (!maybeWorkflow) {
            throw new Error('Need Workflow to support executing schematics as post tasks.');
        }
        return maybeWorkflow.execute({
            collection: collection,
            schematic: options.name,
            options: options.options,
            // Allow private when calling from the same collection.
            allowPrivate: collection == context.schematic.collection.description.name,
        });
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3MvdGFza3MvcnVuLXNjaGVtYXRpYy9leGVjdXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBO0lBQ0UsTUFBTSxDQUFDLENBQUMsT0FBb0MsRUFBRSxPQUF5QixFQUFFLEVBQUU7UUFDekUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRXZGLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQzNCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSTtZQUN2QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsdURBQXVEO1lBQ3ZELFlBQVksRUFBRSxVQUFVLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUk7U0FDMUUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCRCw0QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBTY2hlbWF0aWNDb250ZXh0LCBUYXNrRXhlY3V0b3IgfSBmcm9tICcuLi8uLi9zcmMnO1xuaW1wb3J0IHsgUnVuU2NoZW1hdGljVGFza09wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCk6IFRhc2tFeGVjdXRvcjxSdW5TY2hlbWF0aWNUYXNrT3B0aW9uczx7fT4+IHtcbiAgcmV0dXJuIChvcHRpb25zOiBSdW5TY2hlbWF0aWNUYXNrT3B0aW9uczx7fT4sIGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQpID0+IHtcbiAgICBjb25zdCBtYXliZVdvcmtmbG93ID0gY29udGV4dC5lbmdpbmUud29ya2Zsb3c7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IG9wdGlvbnMuY29sbGVjdGlvbiB8fCBjb250ZXh0LnNjaGVtYXRpYy5jb2xsZWN0aW9uLmRlc2NyaXB0aW9uLm5hbWU7XG5cbiAgICBpZiAoIW1heWJlV29ya2Zsb3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmVlZCBXb3JrZmxvdyB0byBzdXBwb3J0IGV4ZWN1dGluZyBzY2hlbWF0aWNzIGFzIHBvc3QgdGFza3MuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1heWJlV29ya2Zsb3cuZXhlY3V0ZSh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgc2NoZW1hdGljOiBvcHRpb25zLm5hbWUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLm9wdGlvbnMsXG4gICAgICAvLyBBbGxvdyBwcml2YXRlIHdoZW4gY2FsbGluZyBmcm9tIHRoZSBzYW1lIGNvbGxlY3Rpb24uXG4gICAgICBhbGxvd1ByaXZhdGU6IGNvbGxlY3Rpb24gPT0gY29udGV4dC5zY2hlbWF0aWMuY29sbGVjdGlvbi5kZXNjcmlwdGlvbi5uYW1lLFxuICAgIH0pO1xuICB9O1xufVxuIl19