# vim: noet sw=4 ts=4
# Copyright (C) 2015 YesLogic Pty Ltd
# Copyright (C) 2015 Paul Bone

mfug.pdf : mfug.html mfug.css
	prince --media projection mfug.html

%.png : %.pnm
	#convert $< $@
	convert $< -colorspace gray -scale "50%" $@

%.pnm : %.eps
	pstopnm -xsize 8000 -portrait -stdout $< > $@

%.eps : %.ps
	ps2eps -f $<

%.ps : %.pic
	groff -mpic -p -Tps $< > $@

mfug-2up.pdf : mfug.pdf
	pdfnup --nup '1x2' --no-landscape --frame true -o $@ $<

mfug-6up.pdf : mfug.pdf
	pdfnup --nup '2x3' --no-landscape --frame true -o $@ $<

