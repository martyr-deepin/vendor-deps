#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const purify_1 = require("./purify");
if (process.argv.length < 3 || process.argv.length > 4) {
    throw new Error(`
    purify should be called with either one or two arguments:

      purify input.js
      purify input.js output.js
  `);
}
const currentDir = process.cwd();
const inputFile = process.argv[2];
const tsOrJsRegExp = /\.(j|t)s$/;
if (!inputFile.match(tsOrJsRegExp)) {
    throw new Error(`Input file must be .js or .ts.`);
}
// Use provided output file, or add the .purify suffix before the extension.
const outputFile = process.argv[3]
    || inputFile.replace(tsOrJsRegExp, (subStr) => `.purify${subStr}`);
const purifyOutput = purify_1.purify(fs_1.readFileSync(path_1.join(currentDir, inputFile), 'UTF-8'));
fs_1.writeFileSync(path_1.join(currentDir, outputFile), purifyOutput);
console.log(`Emitted: ${outputFile}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2hhbnNsL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX29wdGltaXplci9zcmMvcHVyaWZ5L2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQSwyQkFBaUQ7QUFDakQsK0JBQTRCO0FBQzVCLHFDQUFrQztBQUdsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDOzs7OztHQUtmLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFakMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUFFakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELDRFQUE0RTtBQUM1RSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztPQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRXJFLE1BQU0sWUFBWSxHQUFHLGVBQU0sQ0FBQyxpQkFBWSxDQUFDLFdBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUVoRixrQkFBYSxDQUFDLFdBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLFVBQVUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwdXJpZnkgfSBmcm9tICcuL3B1cmlmeSc7XG5cblxuaWYgKHByb2Nlc3MuYXJndi5sZW5ndGggPCAzIHx8IHByb2Nlc3MuYXJndi5sZW5ndGggPiA0KSB7XG4gIHRocm93IG5ldyBFcnJvcihgXG4gICAgcHVyaWZ5IHNob3VsZCBiZSBjYWxsZWQgd2l0aCBlaXRoZXIgb25lIG9yIHR3byBhcmd1bWVudHM6XG5cbiAgICAgIHB1cmlmeSBpbnB1dC5qc1xuICAgICAgcHVyaWZ5IGlucHV0LmpzIG91dHB1dC5qc1xuICBgKTtcbn1cblxuY29uc3QgY3VycmVudERpciA9IHByb2Nlc3MuY3dkKCk7XG5cbmNvbnN0IGlucHV0RmlsZSA9IHByb2Nlc3MuYXJndlsyXTtcbmNvbnN0IHRzT3JKc1JlZ0V4cCA9IC9cXC4oanx0KXMkLztcblxuaWYgKCFpbnB1dEZpbGUubWF0Y2godHNPckpzUmVnRXhwKSkge1xuICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IGZpbGUgbXVzdCBiZSAuanMgb3IgLnRzLmApO1xufVxuXG4vLyBVc2UgcHJvdmlkZWQgb3V0cHV0IGZpbGUsIG9yIGFkZCB0aGUgLnB1cmlmeSBzdWZmaXggYmVmb3JlIHRoZSBleHRlbnNpb24uXG5jb25zdCBvdXRwdXRGaWxlID0gcHJvY2Vzcy5hcmd2WzNdXG4gIHx8IGlucHV0RmlsZS5yZXBsYWNlKHRzT3JKc1JlZ0V4cCwgKHN1YlN0cikgPT4gYC5wdXJpZnkke3N1YlN0cn1gKTtcblxuY29uc3QgcHVyaWZ5T3V0cHV0ID0gcHVyaWZ5KHJlYWRGaWxlU3luYyhqb2luKGN1cnJlbnREaXIsIGlucHV0RmlsZSksICdVVEYtOCcpKTtcblxud3JpdGVGaWxlU3luYyhqb2luKGN1cnJlbnREaXIsIG91dHB1dEZpbGUpLCBwdXJpZnlPdXRwdXQpO1xuY29uc29sZS5sb2coYEVtaXR0ZWQ6ICR7b3V0cHV0RmlsZX1gKTtcbiJdfQ==