/* Note that this script works primarily by setting style attrs, so cannot be
 * used with --no-author-style.
 *
 * Note too that there is value in assigning an id to each thematic break, to
 * allow setting the correct visibility in advance, so that only one formatting
 * pass is necessary.
 */

/* There are two common representations of thematic breaks:
 *
 *   - An explicit element representing a thematic break:
 *     thematicBreakClass.
 *
 *   - No element for the thematic break itself, but a class for the
 *     following paragraph to be styled with an extra top margin:
 *     afterThematicBreakClass.
 */
thematicBreakClass = "thematic";
thematicBreakTag = "hr";   /* Used for creating a new element; not currently used as part of query. */
afterThematicBreakClass = null;   /* Can be null. */

Prince.trackBoxes = true;

if (afterThematicBreakClass) {
    Prince.addEventListener("load", function() {
        /* Ensure that we have an explicit thematic break element for each thematic
         * break.
         *
         * This code doesn't retract the afterThematicBreakClass class; instead, we
         * leave it to the stylesheet to drop the extra margin.
         */
        var xs = document.querySelectorAll('.' + afterThematicBreakClass + ':not(' + thematicBreakClass + '+*)');
        for (var i = 0; i < xs.length; ++i) {
            var after = xs[i];
            var hr = document.createElement(thematicBreakTag);
            hr.className = thematicBreakClass;
            after.parentNode.insertBefore(hr, after);
        }
    });
}

Prince.registerPostLayoutFunc(function() {
    var n_hidden = 0;
    var n_shown = 0;
    var xs = document.getElementsByClassName(thematicBreakClass);
    var stylesheet = '';
    for (var i = 0; i < xs.length; ++i) {
        var hr = xs[i];
        var boxes = hr.getPrinceBoxes();
        if (boxes.length == 3) {
            var extant = window.getComputedStyle(hr).visibility;
            if (extant != 'hidden') {
                console.log("hiding on p."
                        + boxes[0].pageNum
                        + "; visibility was '" + extant + "'");
                hr.style.visibility = 'hidden';
                ++n_hidden;
                if (hr.id) { stylesheet += " #" + hr.id + "{visibility:hidden}\n"; }
            }
        } else if (boxes.length == 4 || boxes.length == 5) {
            if (hr.id) { stylesheet += " #" + hr.id + "{visibility:visible}\n"; }
            // N.B. The above does no CSS quoting of id.
            var extant = window.getComputedStyle(hr).visibility;
            if (extant != 'visible') {
                console.log("showing on p."
                        + boxes[((boxes.length == 4)
                                 && boxes[0].h)
                                ? 0
                                : 2].pageNum
                        + "; visibility was '" + extant + "'");
                hr.style.visibility = 'visible';
                ++n_shown;
            }
        } else {
            console.log("Error: Found " + boxes.length + " box fragments for thematic break.");
            /* Cannot determine whether this occurs at start or end of
             * a fragmentainer, so err towards making it visible.
             */
            hr.style.visibility = 'visible';
        }
    }

    /* Prince will notice whether this registerPostLayoutFunc hook modifies
     * the DOM, and will redo layout if so.
     *
     * I haven't checked whether the ‘!= 'visible'’ test is needed: i.e.
     * whether setting to 'visible' counts as modification if it was already
     * visible.
     */
    var msg = null;
    if (n_hidden != 0) {
        msg = "Hid " + n_hidden;
        if (n_shown != 0) {
            msg += " and showed " + n_shown;
        }
    } else if (n_shown != 0) {
        msg = "Showed " + n_shown;
    }
    if (msg !== null) {
        console.log(msg + " thematic breaks; repeating.");
        console.log("The following stylesheet might reduce the need for iteration:\n"
                    + " .thematic{visibility:hidden}\n"
                    + stylesheet);
        // Note that the stylesheet currently does no CSS quoting of id.
    }
});


// vi: set autoindent shiftwidth=4 tabstop=8 expandtab softtabstop=4 filetype=javascript :
