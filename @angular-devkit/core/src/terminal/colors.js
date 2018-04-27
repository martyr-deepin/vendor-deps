"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const object_1 = require("../utils/object");
const kColors = {
    modifiers: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
    },
    colors: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
    },
    bgColors: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
    },
};
const kColorFunctions = object_1.mapObject(kColors, (_, v) => {
    return object_1.mapObject(v, (_, vv) => (x) => `\u001b[${vv[0]}m${x}\u001b[${vv[1]}m`);
});
exports.reset = kColorFunctions.modifiers.reset;
exports.bold = kColorFunctions.modifiers.bold;
exports.dim = kColorFunctions.modifiers.dim;
exports.italic = kColorFunctions.modifiers.italic;
exports.underline = kColorFunctions.modifiers.underline;
exports.inverse = kColorFunctions.modifiers.inverse;
exports.hidden = kColorFunctions.modifiers.hidden;
exports.strikethrough = kColorFunctions.modifiers.strikethrough;
exports.black = kColorFunctions.colors.black;
exports.red = kColorFunctions.colors.red;
exports.green = kColorFunctions.colors.green;
exports.yellow = kColorFunctions.colors.yellow;
exports.blue = kColorFunctions.colors.blue;
exports.magenta = kColorFunctions.colors.magenta;
exports.cyan = kColorFunctions.colors.cyan;
exports.white = kColorFunctions.colors.white;
exports.grey = kColorFunctions.colors.gray;
exports.gray = kColorFunctions.colors.gray;
exports.bgBlack = kColorFunctions.bgColors.bgBlack;
exports.bgRed = kColorFunctions.bgColors.bgRed;
exports.bgGreen = kColorFunctions.bgColors.bgGreen;
exports.bgYellow = kColorFunctions.bgColors.bgYellow;
exports.bgBlue = kColorFunctions.bgColors.bgBlue;
exports.bgMagenta = kColorFunctions.bgColors.bgMagenta;
exports.bgCyan = kColorFunctions.bgColors.bgCyan;
exports.bgWhite = kColorFunctions.bgColors.bgWhite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9jb3JlL3NyYy90ZXJtaW5hbC9jb2xvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCw0Q0FBNEM7QUFFNUMsTUFBTSxPQUFPLEdBQUc7SUFDZCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNiLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2YsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDZixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ3ZCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDYixLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNqQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDakIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDakIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNsQixNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2hCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbkIsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNoQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ2xCO0NBQ0YsQ0FBQztBQUNGLE1BQU0sZUFBZSxHQUFHLGtCQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2xELE1BQU0sQ0FBQyxrQkFBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4RixDQUFDLENBQUMsQ0FBQztBQUdVLFFBQUEsS0FBSyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ3hDLFFBQUEsSUFBSSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ3RDLFFBQUEsR0FBRyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQ3BDLFFBQUEsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQzFDLFFBQUEsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ2hELFFBQUEsT0FBTyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQzVDLFFBQUEsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQzFDLFFBQUEsYUFBYSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0FBRXhELFFBQUEsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3JDLFFBQUEsR0FBRyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2pDLFFBQUEsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3JDLFFBQUEsTUFBTSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLFFBQUEsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ25DLFFBQUEsT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ3pDLFFBQUEsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ25DLFFBQUEsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3JDLFFBQUEsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ25DLFFBQUEsSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBRW5DLFFBQUEsT0FBTyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQzNDLFFBQUEsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLFFBQUEsT0FBTyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQzNDLFFBQUEsUUFBUSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0FBQzdDLFFBQUEsTUFBTSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3pDLFFBQUEsU0FBUyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQy9DLFFBQUEsTUFBTSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3pDLFFBQUEsT0FBTyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgbWFwT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0JztcblxuY29uc3Qga0NvbG9ycyA9IHtcbiAgbW9kaWZpZXJzOiB7XG4gICAgcmVzZXQ6IFswLCAwXSxcbiAgICBib2xkOiBbMSwgMjJdLCAvLyAyMSBpc24ndCB3aWRlbHkgc3VwcG9ydGVkIGFuZCAyMiBkb2VzIHRoZSBzYW1lIHRoaW5nXG4gICAgZGltOiBbMiwgMjJdLFxuICAgIGl0YWxpYzogWzMsIDIzXSxcbiAgICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gICAgaW52ZXJzZTogWzcsIDI3XSxcbiAgICBoaWRkZW46IFs4LCAyOF0sXG4gICAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgYmxhY2s6IFszMCwgMzldLFxuICAgIHJlZDogWzMxLCAzOV0sXG4gICAgZ3JlZW46IFszMiwgMzldLFxuICAgIHllbGxvdzogWzMzLCAzOV0sXG4gICAgYmx1ZTogWzM0LCAzOV0sXG4gICAgbWFnZW50YTogWzM1LCAzOV0sXG4gICAgY3lhbjogWzM2LCAzOV0sXG4gICAgd2hpdGU6IFszNywgMzldLFxuICAgIGdyYXk6IFs5MCwgMzldLFxuICB9LFxuICBiZ0NvbG9yczoge1xuICAgIGJnQmxhY2s6IFs0MCwgNDldLFxuICAgIGJnUmVkOiBbNDEsIDQ5XSxcbiAgICBiZ0dyZWVuOiBbNDIsIDQ5XSxcbiAgICBiZ1llbGxvdzogWzQzLCA0OV0sXG4gICAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgICBiZ01hZ2VudGE6IFs0NSwgNDldLFxuICAgIGJnQ3lhbjogWzQ2LCA0OV0sXG4gICAgYmdXaGl0ZTogWzQ3LCA0OV0sXG4gIH0sXG59O1xuY29uc3Qga0NvbG9yRnVuY3Rpb25zID0gbWFwT2JqZWN0KGtDb2xvcnMsIChfLCB2KSA9PiB7XG4gIHJldHVybiBtYXBPYmplY3QodiwgKF8sIHZ2KSA9PiAoeDogc3RyaW5nKSA9PiBgXFx1MDAxYlske3Z2WzBdfW0ke3h9XFx1MDAxYlske3Z2WzFdfW1gKTtcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCByZXNldCA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMucmVzZXQ7XG5leHBvcnQgY29uc3QgYm9sZCA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMuYm9sZDtcbmV4cG9ydCBjb25zdCBkaW0gPSBrQ29sb3JGdW5jdGlvbnMubW9kaWZpZXJzLmRpbTtcbmV4cG9ydCBjb25zdCBpdGFsaWMgPSBrQ29sb3JGdW5jdGlvbnMubW9kaWZpZXJzLml0YWxpYztcbmV4cG9ydCBjb25zdCB1bmRlcmxpbmUgPSBrQ29sb3JGdW5jdGlvbnMubW9kaWZpZXJzLnVuZGVybGluZTtcbmV4cG9ydCBjb25zdCBpbnZlcnNlID0ga0NvbG9yRnVuY3Rpb25zLm1vZGlmaWVycy5pbnZlcnNlO1xuZXhwb3J0IGNvbnN0IGhpZGRlbiA9IGtDb2xvckZ1bmN0aW9ucy5tb2RpZmllcnMuaGlkZGVuO1xuZXhwb3J0IGNvbnN0IHN0cmlrZXRocm91Z2ggPSBrQ29sb3JGdW5jdGlvbnMubW9kaWZpZXJzLnN0cmlrZXRocm91Z2g7XG5cbmV4cG9ydCBjb25zdCBibGFjayA9IGtDb2xvckZ1bmN0aW9ucy5jb2xvcnMuYmxhY2s7XG5leHBvcnQgY29uc3QgcmVkID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5yZWQ7XG5leHBvcnQgY29uc3QgZ3JlZW4gPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmdyZWVuO1xuZXhwb3J0IGNvbnN0IHllbGxvdyA9IGtDb2xvckZ1bmN0aW9ucy5jb2xvcnMueWVsbG93O1xuZXhwb3J0IGNvbnN0IGJsdWUgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmJsdWU7XG5leHBvcnQgY29uc3QgbWFnZW50YSA9IGtDb2xvckZ1bmN0aW9ucy5jb2xvcnMubWFnZW50YTtcbmV4cG9ydCBjb25zdCBjeWFuID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5jeWFuO1xuZXhwb3J0IGNvbnN0IHdoaXRlID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy53aGl0ZTtcbmV4cG9ydCBjb25zdCBncmV5ID0ga0NvbG9yRnVuY3Rpb25zLmNvbG9ycy5ncmF5O1xuZXhwb3J0IGNvbnN0IGdyYXkgPSBrQ29sb3JGdW5jdGlvbnMuY29sb3JzLmdyYXk7XG5cbmV4cG9ydCBjb25zdCBiZ0JsYWNrID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnQmxhY2s7XG5leHBvcnQgY29uc3QgYmdSZWQgPSBrQ29sb3JGdW5jdGlvbnMuYmdDb2xvcnMuYmdSZWQ7XG5leHBvcnQgY29uc3QgYmdHcmVlbiA9IGtDb2xvckZ1bmN0aW9ucy5iZ0NvbG9ycy5iZ0dyZWVuO1xuZXhwb3J0IGNvbnN0IGJnWWVsbG93ID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnWWVsbG93O1xuZXhwb3J0IGNvbnN0IGJnQmx1ZSA9IGtDb2xvckZ1bmN0aW9ucy5iZ0NvbG9ycy5iZ0JsdWU7XG5leHBvcnQgY29uc3QgYmdNYWdlbnRhID0ga0NvbG9yRnVuY3Rpb25zLmJnQ29sb3JzLmJnTWFnZW50YTtcbmV4cG9ydCBjb25zdCBiZ0N5YW4gPSBrQ29sb3JGdW5jdGlvbnMuYmdDb2xvcnMuYmdDeWFuO1xuZXhwb3J0IGNvbnN0IGJnV2hpdGUgPSBrQ29sb3JGdW5jdGlvbnMuYmdDb2xvcnMuYmdXaGl0ZTtcbiJdfQ==