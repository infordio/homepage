/**
 * 
 */
(function(e, t, n) {
    var r = function(e, t) {
            var r = n.querySelector(e),
                s = [].slice.call(r.children, 0),
                c = s[0],
                h = {},
                p = function(e) {
                    if (!s[e]) return;
                    a(h, "deactivate", {
                        slide: c,
                        index: s.indexOf(c)
                    }), c = s[e], s.map(v), a(h, "activate", {
                        slide: c,
                        index: e
                    }), f(c, "active"), l(c, "inactive")
                },
                v = function(e, t) {
                    var n = t - s.indexOf(c),
                        r = n > 0 ? "after" : "before";
                    ["before(-\\d+)?", "after(-\\d+)?", "active", "inactive"].map(l.bind(null, e)), e !== c && ["inactive", r, r + "-" + Math.abs(n)].map(f.bind(null, e))
                },
                m = function(e) {
                    a(h, "slide", {
                        slide: s[e],
                        index: e
                    }) && p(e)
                },
                g = function() {
                    var e = s.indexOf(c) + 1;
                    a(h, "next", {
                        slide: c,
                        index: s.indexOf(c)
                    }) && p(e)
                },
                y = function() {
                    var e = s.indexOf(c) - 1;
                    a(h, "prev", {
                        slide: c,
                        index: s.indexOf(c)
                    }) && p(e)
                },
                b = {
                    on: o.bind(null, h),
                    off: u.bind(null, h),
                    fire: a.bind(null, h),
                    slide: m,
                    next: g,
                    prev: y,
                    parent: r,
                    slides: s
                };
            return p(0), f(r, "parent"), s.map(function(e) {
                f(e, "slide")
            }), Object.keys(t || {}).map(function(e) {
                var n = t[e];
                n && d[e](b, n === !0 ? {} : n)
            }), i.push(b), b
        },
        i = [],
        s = {},
        o = function(e, t, n) {
            (e[t] || (e[t] = [])).push(n)
        },
        u = function(e, t, n) {
            e[t] = (e[t] || []).filter(function(e) {
                return e !== n
            })
        },
        a = function(e, t, n) {
            return (e[t] || []).concat(e !== s && s[t] || []).reduce(function(e, t) {
                return e && t(n) !== !1
            }, !0)
        },
        f = function(t, n) {
            t.classList.add(e + "-" + n)
        },
        l = function(t, n) {
            t.className = t.className.replace(new RegExp(e + "-" + n + "(\\s|$)", "g"), " ").replace(/^\s+|\s+$/g, "")
        },
        c = function(e) {
            return function(t) {
                i.map(function(n) {
                    n[e].call(null, t)
                })
            }
        },
        h = function(e) {
            return {
                from: function(t, n) {
                    return (n = n || {})[e] = !0, r(t, n)
                }
            }
        },
        p = function(e) {
            return function(t) {
                var r, i;
                n.addEventListener("keydown", function(n) {
                    var r = n.which;
                    e === "X" ? (r === 37 && t.prev(), (r === 32 || r === 39) && t.next()) : (r === 38 && t.prev(), (r === 32 || r === 40) && t.next())
                }), t.parent.addEventListener("touchstart", function(t) {
                    t.touches.length && (r = t.touches[0]["page" + e], i = 0)
                }), t.parent.addEventListener("touchmove", function(t) {
                    t.touches.length && (t.preventDefault(), i = t.touches[0]["page" + e] - r)
                }), t.parent.addEventListener("touchend", function() {
                    Math.abs(i) > 50 && (i > 0 ? t.prev() : t.next())
                })
            }
        },
        d = {
            horizontal: p("X"),
            vertical: p("Y")
        };
    t[e] = {
        from: r,
        slide: c("slide"),
        next: c("next"),
        prev: c("prev"),
        horizontal: h("horizontal"),
        vertical: h("vertical"),
        on: o.bind(null, s),
        off: u.bind(null, s),
        plugins: d
    }
})("bespoke", this, document);