
# Presentation for Melbourne Functional User Group (MFUG)

Copyright (C) 2015 YesLogic Pty Ltd

Copyright (C) 2015 Paul Bone

Copyright (C) 2015 Zoltan Somogyi

This example demonstrates how to create slides for a presentation.

## Creating slides

The slides are setup using the `@page` rule.

    @page {
        size: 1280px 960px;
        @bottom-left {
            content: "The Mercury Programming Language";
        }
        @bottom-right {
            content: counter(page);
        }
        background: black;
        color: white;
        font-family: sans-serif;
        font-size: 16pt;
    }

The size property sets up 4:3 pages, which is all you really need create a
PDF slide show.  The other properties setup footers the background colour
for the slides and the colour and `font-family` of the footers.

The actual slides are creates using `div` tags with `class="style"`.

    div.slide {
        page-break-before: always;
    }

If you use some tag, for example by inventing a new XML tag, you will need
to tell prince that the tag should be displayed as a block.

    display: block;

Enjoy!

## N-up printing

It can be useful to create hand-outs for some presentations.  The Makefile
in this directory can also create 2-up and 6-up handouts using the `pdfnup`
tool (not a Prince tool).  Type:

    $ make mfug-2up.pdf

Or

    $ make mfug-6up.pdf

