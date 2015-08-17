# jQuery/Sizzle Custom Pseudo Selectors

Just my collection of pseudos.

## Performance

Take care about how many elements will be passed through these selectors as
they will not be able to take advantage of the performance boost provided by
the native DOM `querySelectorAll()` method. To achieve the best performance
when using any of these pseudos, first narrow down your set using a native
selector and then use `.filter(":pseudo()")`.

## Available Pseudos

  * [`:ancestor()`][ancestor] - Selects elements with a common ancestor.
  * [`:in-viewport()`][in-viewport] - Selects elements which are within the
    current viewport.
  * [`:regexp()`][regexp] - Finds elements which have a property matching a
    given RegExp.

  [ancestor]: http://matpie.com/sizzle-pseudos/docs/ancestor.html
  [in-viewport]: http://matpie.com/sizzle-pseudos/docs/in-viewport.html
  [regexp]: http://matpie.com/sizzle-pseudos/docs/regexp.html
