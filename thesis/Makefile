% vim: ts=4 sw=4 noet

thesis.pdf : thesis.html thesis.css
	prince thesis.html

thesis.css : thesis.scss
	sass $< > $@

.PHONY: clean
clean:
	rm thesis.css thesis.pdf

