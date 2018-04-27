import * as Lint from 'tslint';
import * as ts from 'typescript';
import { NgWalker } from './angular/ngWalker';
import { ComponentMetadata } from './angular/metadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: Lint.IRuleMetadata;
    static SELECTOR_FAILURE: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
export declare class EnforceComponentSelectorValidatorWalker extends NgWalker {
    private rule;
    constructor(sourceFile: ts.SourceFile, rule: Rule);
    visitNgComponent(metadata: ComponentMetadata): void;
    private generateFailure(start, width, failureConfig);
}
