"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs = require("fs");
const path_1 = require("path");
const Observable_1 = require("rxjs/Observable");
const virtual_filesystem_1 = require("./virtual-filesystem");
class FileSystemSinkHost {
    constructor(_root) {
        this._root = _root;
    }
    exists(path) {
        return new Observable_1.Observable(observer => {
            fs.exists(path_1.join(this._root, path), exists => {
                observer.next(exists);
                observer.complete();
            });
        });
    }
    delete(path) {
        return new Observable_1.Observable(o => {
            fs.unlink(path_1.join(this._root, path), (err) => {
                if (err) {
                    o.error(err);
                }
                else {
                    o.complete();
                }
            });
        });
    }
    mkDir(path) {
        const paths = [];
        for (; path != path_1.dirname(path); path = path_1.dirname(path)) {
            if (fs.existsSync(path)) {
                break;
            }
            paths.unshift(path);
        }
        paths.forEach(path => {
            fs.mkdirSync(path);
        });
    }
    write(path, content) {
        path = path_1.join(this._root, path);
        return new Observable_1.Observable(o => {
            this.mkDir(path_1.dirname(path));
            fs.writeFile(path, content, (err) => {
                if (err) {
                    o.error(err);
                }
                else {
                    o.complete();
                }
            });
        });
    }
    read(path) {
        path = path_1.join(this._root, path);
        return new Observable_1.Observable(o => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    o.error(err);
                }
                else {
                    o.next(data);
                    o.complete();
                }
            });
        });
    }
    rename(from, to) {
        from = path_1.join(this._root, from);
        to = path_1.join(this._root, to);
        return new Observable_1.Observable(o => {
            fs.rename(from, to, err => {
                if (err) {
                    o.error(err);
                }
                else {
                    o.complete();
                }
            });
        });
    }
}
exports.FileSystemSinkHost = FileSystemSinkHost;
class FileSystemSink extends virtual_filesystem_1.VirtualFileSystemSink {
    constructor(_root, force) {
        super(new FileSystemSinkHost(_root), force);
        this._root = _root;
    }
}
exports.FileSystemSink = FileSystemSink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXN5c3RlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuc2wvU291cmNlcy9oYW5zbC9kZXZraXQvIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy9zaW5rL2ZpbGVzeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCx5QkFBeUI7QUFDekIsK0JBQXFDO0FBQ3JDLGdEQUE2QztBQUM3Qyw2REFBd0Y7QUFHeEY7SUFDRSxZQUFzQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFFdkMsTUFBTSxDQUFDLElBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDUixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNmLENBQUM7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QUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWxGRCxnREFrRkM7QUFHRCxvQkFBNEIsU0FBUSwwQ0FBcUI7SUFDdkQsWUFBc0IsS0FBYSxFQUFFLEtBQWU7UUFDbEQsS0FBSyxDQUFDLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFEeEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUVuQyxDQUFDO0NBQ0Y7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGRpcm5hbWUsIGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVmlydHVhbEZpbGVTeXN0ZW1TaW5rLCBWaXJ0dWFsRmlsZVN5c3RlbVNpbmtIb3N0IH0gZnJvbSAnLi92aXJ0dWFsLWZpbGVzeXN0ZW0nO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWxlU3lzdGVtU2lua0hvc3QgaW1wbGVtZW50cyBWaXJ0dWFsRmlsZVN5c3RlbVNpbmtIb3N0IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9yb290OiBzdHJpbmcpIHt9XG5cbiAgZXhpc3RzKHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBmcy5leGlzdHMoam9pbih0aGlzLl9yb290LCBwYXRoKSwgZXhpc3RzID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChleGlzdHMpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUocGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHZvaWQ+KG8gPT4ge1xuICAgICAgZnMudW5saW5rKGpvaW4odGhpcy5fcm9vdCwgcGF0aCksIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIG8uZXJyb3IoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbWtEaXIocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aHMgPSBbXTtcbiAgICBmb3IgKDsgcGF0aCAhPSBkaXJuYW1lKHBhdGgpOyBwYXRoID0gZGlybmFtZShwYXRoKSkge1xuICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXRocy51bnNoaWZ0KHBhdGgpO1xuICAgIH1cbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgZnMubWtkaXJTeW5jKHBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgd3JpdGUocGF0aDogc3RyaW5nLCBjb250ZW50OiBCdWZmZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBwYXRoID0gam9pbih0aGlzLl9yb290LCBwYXRoKTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTx2b2lkPihvID0+IHtcbiAgICAgIHRoaXMubWtEaXIoZGlybmFtZShwYXRoKSk7XG5cbiAgICAgIGZzLndyaXRlRmlsZShwYXRoLCBjb250ZW50LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBvLmVycm9yKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlYWQocGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxCdWZmZXI+IHtcbiAgICBwYXRoID0gam9pbih0aGlzLl9yb290LCBwYXRoKTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvID0+IHtcbiAgICAgIGZzLnJlYWRGaWxlKHBhdGgsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIG8uZXJyb3IoZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLm5leHQoZGF0YSk7XG4gICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmFtZShmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBmcm9tID0gam9pbih0aGlzLl9yb290LCBmcm9tKTtcbiAgICB0byA9IGpvaW4odGhpcy5fcm9vdCwgdG8pO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHZvaWQ+KG8gPT4ge1xuICAgICAgZnMucmVuYW1lKGZyb20sIHRvLCBlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgby5lcnJvcihlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG8uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRmlsZVN5c3RlbVNpbmsgZXh0ZW5kcyBWaXJ0dWFsRmlsZVN5c3RlbVNpbmsge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Jvb3Q6IHN0cmluZywgZm9yY2U/OiBib29sZWFuKSB7XG4gICAgc3VwZXIobmV3IEZpbGVTeXN0ZW1TaW5rSG9zdChfcm9vdCksIGZvcmNlKTtcbiAgfVxufVxuIl19