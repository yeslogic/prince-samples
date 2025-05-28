docs = wind-in-willows.html

prince_books = prince-books
prince = prince

all: hardback.pdf b-format.pdf large-print.pdf

wind_in_willows_css_deps = wind-in-willows.css thematic.css short-last-para.css
b_format_css_deps = b-format.css $(wind_in_willows_css_deps)
large_print_css_deps = large-print.css $(wind_in_willows_css_deps)
hardback_css_deps = hardback.css $(wind_in_willows_css_deps)

thematic_js_args = -s thematic-js.css --script thematic.js
thematic_js_deps = thematic-js.css thematic.js

b_format_pdftotext_args = -W 365 -y 46 -H 455
hardback_pdftotext_args = -W 432 -y 50 -H 510
large_print_pdftotext_args = -W 396 -y 25 -H 540

b-format.pdf: $(b_format_css_deps) $(thematic_js_deps) $(docs)
	$(prince_books) -s b-format.css $(thematic_js_args) -s b-format-thematic.css $(docs) -o $@.tmp$$$$ 2> b-format-report && mv $@.tmp$$$$ $@; rc=$$?; cat b-format-report; exit $$rc
	pdftotext -layout ${b_format_pdftotext_args} $@

hardback.pdf: $(hardback_css_deps) $(thematic_js_deps) $(docs)
	$(prince_books) -s hardback.css $(thematic_js_args) -s hardback-thematic.css $(docs) -o $@.tmp$$$$ 2> hardback-report && mv $@.tmp$$$$ $@; rc=$$?; cat hardback-report; exit $$rc
	pdftotext -layout ${hardback_pdftotext_args} $@

large-print.pdf: $(large_print_css_deps) $(thematic_js_deps) $(docs)
	$(prince_books) -s large-print.css $(thematic_js_args) -s large-print-thematic.css $(docs) -o $@.tmp$$$$ 2> large-print-report && mv $@.tmp$$$$ $@; rc=$$?; cat large-print-report; exit $$rc
	pdftotext -layout ${large_print_pdftotext_args} $@

%-quick.pdf: %.css $(wind_in_willows_css_deps) $(docs)
	$(prince) -s $*.css $(docs) -o $@.tmp$$$$ && mv $@.tmp$$$$ $@

clean:
	rm -f *-quick.pdf b-format.txt hardback.txt large-print.txt *.tmp*

.PHONY: all clean
