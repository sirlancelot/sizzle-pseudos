// For use with `.filter()`, selects elements whose dimensions fall within the
// current viewport.
//
//     $("li").filter(":in-viewport")
//
// You can also supply a tolerance in pixels. The tolerance will allow the
// element to be partially outside the viewport.
//
//     $("li").filter(":in-viewport(15)")
//
// The supplied tolerance must be a non-negative integer. An error will be
// thrown otherwise.
$.expr[":"]["in-viewport"] = $.expr.createPseudo(function(tolerance) {
	tolerance = parseInt(tolerance || 0, 10);
	if (isNaN(tolerance) || tolerance < 0)
		throw new Error("Bad :in-viewport() param: " + tolerance);

	return function inViewport(el) {
		var rect = el.getBoundingClientRect();
		var height = window.innerHeight || document.documentElement.clientHeight;
		var width = window.innerWidth || document.documentElement.clientWidth;
		return (
			rect.top >= -tolerance &&
			rect.left >= -tolerance &&
			rect.bottom <= (height + tolerance) &&
			rect.right <= (width + tolerance)
		);
	};
});
