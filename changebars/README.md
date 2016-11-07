
Changebars
==========

By Michael Day.

Here is an example of how to make changebars using the new JavaScript box
tracking API with a two-pass process where Prince is run once to generate
the changebar markup and then run a second time to generate the final PDF.

Changebars are vertical bars in the margin used to highlight areas of the
text that have been modified since the previous revision of a document.
This example uses <ins> tags but you could also use <del> or your own class
names that apply to blocks as well as spans.

Since Prince runs JavaScript before doing layout, it's not possible to
figure out where to put the changebars in advance, which is why we need a
two-pass process. The first pass uses the Prince oncomplete event to call a
JavaScript function when layout is finished, then inspects the box tree to
find out where the <ins> elements ended up.

Each <ins> generates multiple span boxes, one for each line that they
appear on. The box objects have fields like pageNum, x, y, w, h, and the
code aggregates adjacent boxes on the same page into a single changebar.

(Note that box coordinates are given in pt units (1/72in) and the origin is
the bottom-left corner of the page, so the Y coordinate decreases as you go
down the page).

At this point the JavaScript can't modify the document as layout has
already finished, so it writes some markup to the output log which can be
captured by a calling process and inserted into the original document. Then
when Prince is run again, the changebars will be there! :D

Although it's a little tricky to setup, this two-pass approach is a
powerful technique for changing the document in ways that depend upon the
layout of other content. 

