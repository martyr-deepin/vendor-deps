/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs/Observable';
import { BaseException } from '../../exception/exception';
import { Path, PathFragment } from '../path';
import { FileBuffer, Host, HostCapabilities, HostWatchEvent, HostWatchOptions, Stats } from './interface';
export declare class SynchronousDelegateExpectedException extends BaseException {
    constructor();
}
/**
 * Implement a synchronous-only host interface (remove the Observable parts).
 */
export declare class SyncDelegateHost<T extends object> {
    protected _delegate: Host<T>;
    constructor(_delegate: Host<T>);
    protected _doSyncCall<ResultT>(observable: Observable<ResultT>): ResultT;
    readonly capabilities: HostCapabilities;
    write(path: Path, content: FileBuffer): void;
    read(path: Path): FileBuffer;
    delete(path: Path): void;
    rename(from: Path, to: Path): void;
    list(path: Path): PathFragment[];
    exists(path: Path): boolean;
    isDirectory(path: Path): boolean;
    isFile(path: Path): boolean;
    stats(path: Path): Stats<T> | null;
    watch(path: Path, options?: HostWatchOptions): Observable<HostWatchEvent> | null;
}
