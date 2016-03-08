
# PhD Thesis

Content:
Copyright (C) 2009-2012 Paul Bone

Typesetting:
Copyright (c) 2015 YesLogic Pty Ltd

This example demonstrates how to typeset a large book-like document.
Using a real document forces us to consider many issues that may occur for
real documents but not for example documents. 

## Requirements

You will need the following tools in addition to Prince.

    + bibtex2html
    + sass (I used version 3.4.21)
    + awk or gawk (already installed on most Linux / BSD / MacOS systems)
    + grep (already installed on most Linux / BSD / MacOS systems)
    + GNU Make

On Debian based systems these can be installed with:

    $ sudo aptitude install bibtex2html ruby-sass gawk grep make

## About LaTeX -> HTML conversion

Rather than try to reproduce the original document or reproduce TeX/LaTeX's
output I am taking the opportunity to modify the typesetting.  For example
the original uses one and a half line spacing.  This uses single spacing and
this should hopefully save paper (if anyone prints this out).  I have also
taken the opportunity to fix typesetting (but not other) errors in the
original: for example page numbers were incorrectly printed on blank pages
in the original.

## This example is incomplete

This example is currently incomplete, it includes only part of the first
chapter of the dissertation.  I hope to convert other chapters including
tables, formulas and figures to HTML+CSS for use with Prince.

