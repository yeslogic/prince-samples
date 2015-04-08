#!/bin/sh

set -e -x

URLs="http://css4.pub/2015/business/simple.html
    http://css4.pub/2015/business/letter.html
    http://css4.pub/2015/usenix/example.html
    http://css4.pub/2015/malthus/essay.html
    http://css4.pub/2015/textbook/somatosensory.html
    http://css4.pub/2015/cssdftw-sample/sample.html
    http://css4.pub/2015/oliver-twist/oliver-twist.html
    http://www.wiumlie.no/2014/ibsen/digte.html"

for name in $URLs; do
    wget $name
    prince --javascript $name -o `basename $name | sed -e 's/.html/.pdf/'`;
done


