"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-any
function oneLine(strings, ...values) {
    const endResult = String.raw(strings, ...values);
    return endResult.replace(/(?:\n(?:\s*))+/gm, ' ').trim();
}
exports.oneLine = oneLine;
function indentBy(indentations) {
    let i = '';
    while (indentations--) {
        i += ' ';
    }
    return (strings, ...values) => {
        return i + stripIndent(strings, ...values).replace(/\n/g, '\n' + i);
    };
}
exports.indentBy = indentBy;
// tslint:disable-next-line:no-any
function stripIndent(strings, ...values) {
    const endResult = String.raw(strings, ...values);
    // remove the shortest leading indentation from each line
    const match = endResult.match(/^[ \t]*(?=\S)/gm);
    // return early if there's nothing to strip
    if (match === null) {
        return endResult;
    }
    const indent = Math.min(...match.map(el => el.length));
    const regexp = new RegExp('^[ \\t]{' + indent + '}', 'gm');
    return (indent > 0 ? endResult.replace(regexp, '') : endResult).trim();
}
exports.stripIndent = stripIndent;
// tslint:disable-next-line:no-any
function stripIndents(strings, ...values) {
    return String.raw(strings, ...values)
        .split('\n')
        .map(line => line.trim())
        .join('\n')
        .trim();
}
exports.stripIndents = stripIndents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0ZXJhbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhbnNsL1NvdXJjZXMvaGFuc2wvZGV2a2l0LyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvY29yZS9zcmMvdXRpbHMvbGl0ZXJhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSxrQ0FBa0M7QUFDbEMsaUJBQXdCLE9BQTZCLEVBQUUsR0FBRyxNQUFhO0lBQ3JFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFFakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0QsQ0FBQztBQUpELDBCQUlDO0FBRUQsa0JBQXlCLFlBQW9CO0lBQzNDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNYLE9BQU8sWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUN0QixDQUFDLElBQUksR0FBRyxDQUFDO0lBQ1gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU07UUFDeEIsTUFBTSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVRELDRCQVNDO0FBR0Qsa0NBQWtDO0FBQ2xDLHFCQUE0QixPQUE2QixFQUFFLEdBQUcsTUFBYTtJQUN6RSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRWpELHlEQUF5RDtJQUN6RCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFakQsMkNBQTJDO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUzRCxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pFLENBQUM7QUFmRCxrQ0FlQztBQUdELGtDQUFrQztBQUNsQyxzQkFBNkIsT0FBNkIsRUFBRSxHQUFHLE1BQWE7SUFDMUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ1YsSUFBSSxFQUFFLENBQUM7QUFDWixDQUFDO0FBTkQsb0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBUZW1wbGF0ZVRhZyA9ICh0ZW1wbGF0ZTogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnN1YnN0aXR1dGlvbnM6IGFueVtdKSA9PiBzdHJpbmc7XG5cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIG9uZUxpbmUoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pIHtcbiAgY29uc3QgZW5kUmVzdWx0ID0gU3RyaW5nLnJhdyhzdHJpbmdzLCAuLi52YWx1ZXMpO1xuXG4gIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZSgvKD86XFxuKD86XFxzKikpKy9nbSwgJyAnKS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRlbnRCeShpbmRlbnRhdGlvbnM6IG51bWJlcik6IFRlbXBsYXRlVGFnIHtcbiAgbGV0IGkgPSAnJztcbiAgd2hpbGUgKGluZGVudGF0aW9ucy0tKSB7XG4gICAgaSArPSAnICc7XG4gIH1cblxuICByZXR1cm4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIHJldHVybiBpICsgc3RyaXBJbmRlbnQoc3RyaW5ncywgLi4udmFsdWVzKS5yZXBsYWNlKC9cXG4vZywgJ1xcbicgKyBpKTtcbiAgfTtcbn1cblxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gc3RyaXBJbmRlbnQoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pIHtcbiAgY29uc3QgZW5kUmVzdWx0ID0gU3RyaW5nLnJhdyhzdHJpbmdzLCAuLi52YWx1ZXMpO1xuXG4gIC8vIHJlbW92ZSB0aGUgc2hvcnRlc3QgbGVhZGluZyBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICBjb25zdCBtYXRjaCA9IGVuZFJlc3VsdC5tYXRjaCgvXlsgXFx0XSooPz1cXFMpL2dtKTtcblxuICAvLyByZXR1cm4gZWFybHkgaWYgdGhlcmUncyBub3RoaW5nIHRvIHN0cmlwXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gIH1cblxuICBjb25zdCBpbmRlbnQgPSBNYXRoLm1pbiguLi5tYXRjaC5tYXAoZWwgPT4gZWwubGVuZ3RoKSk7XG4gIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ15bIFxcXFx0XXsnICsgaW5kZW50ICsgJ30nLCAnZ20nKTtcblxuICByZXR1cm4gKGluZGVudCA+IDAgPyBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKSA6IGVuZFJlc3VsdCkudHJpbSgpO1xufVxuXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEluZGVudHMoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogYW55W10pIHtcbiAgcmV0dXJuIFN0cmluZy5yYXcoc3RyaW5ncywgLi4udmFsdWVzKVxuICAgIC5zcGxpdCgnXFxuJylcbiAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG4gICAgLmpvaW4oJ1xcbicpXG4gICAgLnRyaW0oKTtcbn1cbiJdfQ==