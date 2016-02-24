/PUT_BIB_HERE/ {
        while ((getline line < "bib-sorted.html") > 0)
            print line
        close("bib-sorted.html")
    }
! /PUT_BIB_HERE/ { 
        print 
    }

