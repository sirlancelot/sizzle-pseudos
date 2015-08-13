// For use with `.filter()`, selects elements which are descendents of a
// passed in selector:
//
//     $(formEl.elements).filter(":ancestor(.filter-pane)");
//
// Returns only form elements which are inside an element matching the
// selector `.filter-pane`.
$.expr[":"].ancestor = $.expr.createPseudo(function(selector) {
	// Pre-compile the selector. If it is invalid then an error will be thrown
	// here and not further down the pipeline where the stack trace might be
	// more confusing.
	$.find.compile(selector);
	var matches = $.find.matchesSelector;

	return function ancestor(el) {
		while ((el = el.parentElement))
			if (el.nodeType === 1 && matches(el, selector)) return true;
		return false;
	};
});
