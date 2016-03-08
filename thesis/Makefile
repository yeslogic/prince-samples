% vim: ts=4 sw=4 noet

thesis.pdf : thesis-postproc.html thesis.css
	prince $< -o $@

thesis.css : thesis.scss
	sass $< $@

thesis-postproc.html : thesis.html bib-sorted.html make-file.awk
	awk -f make-file.awk < $< > $@

bib-sorted.html : bib-sorted.bib citefile.txt
	bibtex2html -q -noabstract -nokeywords -dl -nodoc -a -nobibsource \
		-citefile citefile.txt $<

citefile.txt : thesis.html
	grep "a class=\"cite" $< | sed -e 's/.*\href=\"#\(.*\)".*/\1/' > $@

bib-sorted.bib : bib.bib
	bib2bib -q -s editor,author,year < $< > $@

.PHONY: clean
clean:
	rm -rf thesis.pdf .sass-cache thesis.css.map

.PHONY: realclean
realclean: clean
	rm -f thesis.css thesis-postproc.html bib-sorted.bib bib-sorted.html \
		citefile.txt

