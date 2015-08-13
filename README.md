# jQuery/Sizzle Custom Pseudo Selectors

Just my collection of pseudos.

## Performance

Take care about how many elements will be passed through these selectors as
they will not be able to take advantage of the performance boost provided by
the native DOM `querySelectorAll()` method. To achieve the best performance
when using any of these pseudos, first narrow down your set using a native
selector and then use `.filter(":pseudo()")`.
