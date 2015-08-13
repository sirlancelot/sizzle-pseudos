// Selects elements base on a regular expression matching a defined attribute.
//
// Here's how you would use it to gather all elements with a className that
// starts with "k-":
//
//     var kendoClassElements = $(":regexp(class, \\bk-,)");
//
// Another example is getting all elements with an ID that starts with a
// vowel (case-insensitive):
//
//     var vowelIds = $(":regexp(id, ^[aeiou], i)");
//
// You must always have three parameters inside the `()` or an error will be
// thrown. If you don't need to set any RegExp flags, just put a comma right
// before the closing parenthesis (see the first example).
//
// The RegExp is treated as a string first before it is parsed so you need to
// escape backslashes (see the first example). Leading- and trailing- spaces
// are stripped from the RegExp before it is parsed. If you need to test for a
// space at the beginning or end, use a Boundary Anchor (^ or $) or Character
// Set ([ ]).
//
//     var leadingSpaces = $(":regexp(rel, [ ]k-,)");
//
// You do not need to escape commas within your RegExp, they will be treated
// like regular commas.
$.expr[":"].regexp = $.expr.createPseudo(function(param) {
	param = param.split(",");
	if (param.length < 3) throw new Error("Bad :regexp() params: " + param);
	var attr = param.shift();
	var flags = $.trim(param.pop());
	var matcher = new RegExp($.trim(param.join(",")), flags);
	param = flags = null;

	return function regexp(el) {
		var prop = el.getAttribute(attr) || "";
		return matcher.test(prop);
	};
});
