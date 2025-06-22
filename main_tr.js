(function() {
    var d = this || self;
    function e(a, v) {
        a = a.split(".");
        var b = d;
        a[0] in b || "undefined" == typeof b.execScript || b.execScript("var " + a[0]);
        for (var c; a.length && (c = a.shift());) a.length || void 0 === v ? b[c] && b[c] !== Object.prototype[c] ? b = b[c] : b = b[c] = {}: b[c] = v
    };
    var f = {
        0 : "Translate",
        1 : "Cancel",
        2 : "Cancel",
        3 : function(a) {
            return "Google This web page has been automatically translated into:" + a
        },
        4 : function(a) {
            return "It has been translated into the following languages:" + a
        },
        5 : "Error: The server was unable to complete your request. Please try again later.",
        6 : "Learn more",
        7 : function(a) {
            return "By " + (a + "Strong drive")
        },
        8 : "Translate",
        9 : "Translating",
        10 : function(a) {
            return "Use Google to translate this page into" + (a + "？")
        },
        11 : function(a) {
            return "View this page in the following languages:" + a
        },
        12 : "Show the original text",
        13 : "The content of this local file will be sent to Google for translation through a secure connection.",
        14 : "The content of this secure web page will be sent to Google for translation through a secure connection.",
        15 : "The content of this Intranet web page will be sent to Google for translation through a secure connection.",
        16 : "Select the language",
        17 : function(a) {
            return "Shut" + (a + "Translate")
        },
        18 : function(a) {
            return "Turn off the automatic banner pop-up function in the following languages:" + a
        },
        19 : "Always hide",
        20 : "Original text:",
        21 : "Provide better translation advice",
        22 : "Provide advice",
        23 : "All translations",
        24 : "Full recovery",
        25 : "Cancel all",
        26 : "Translate these contents into my language.",
        27 : function(a) {
            return "Translate all content into" + a
        },
        28 : "Display the source language",
        29 : "Be an option",
        30 : "Close the translation of this website",
        31 : null,
        32 : "Show other translations",
        33 : "Click the words above to get other translations.",
        34 : "Use",
        35 : "Hold down the Shift key to drag to reorder",
        36 : "Click to display other translations",
        37 : "Press and hold the Shift key while clicking and dragging the words above to reorder.",
        38 : "Thank you for your translation advice for Google Translate.",
        39 : "Manage the translation of this website",
        40 : "Click a word to display other translations or double-click a word to modify it directly.",
        41 : "The original",
        42 : "Translate",
        43 : "Translate",
        44 : "The correction you have made has been submitted.",
        45 : "Error: The language of the web page is not supported.",
        46 : "Language translation widgets"
    };
    var g = window.google && google.translate && google.translate._const;
    if (g) {
        var h;
        a: {
            for (var k = [], l = [""], m = 0; m < l.length; ++m) {
                var n = l[m].split(","),
                p = n[0];
                if (p) {
                    var q = Number(n[1]);
                    if (! (!q || .1 < q || 0 > q)) {
                        var r = Number(n[2]),
                        t = new Date,
                        u = 1E4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate(); ! r || r < u || k.push({
                            version: p,
                            ratio: q,
                            a: r
                        })
                    }
                }
            }
            var w = 0,
            x = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),
            y = Number(x && x[1]) || Math.random();
            for (m = 0; m < k.length; ++m) {
                var z = k[m];
                w += z.ratio;
                if (1 <= w) break;
                if (y < w) {
                    h = z.version;
                    break a
                }
            }
            h = "TE_20190506_00"
        }
        var A = "/element/%s/e/js/element/element_main.js".replace("%s", h);
        if ("0" == h) {
            var B = " element %s e js element element_main.js".split(" ");
            B[B.length - 1] = "main_zh-CN.js";
            A = B.join("/").replace("%s", h)
        }
        if (g._cjlc) g._cjlc(g._pas + g._pah + A);
        else {
            var C ='https://okpbus.github.io/tr-scripts/element_main.js',
            D = document.createElement("script");
            D.type = "text/javascript";
            D.charset = "UTF-8";
            D.src = C;
            var E = document.getElementsByTagName("head")[0];
            E || (E = document.body.parentNode.appendChild(document.createElement("head")));
            E.appendChild(D)
        }
        e("google.translate.m", f);
        e("google.translate.v", h)
    };
}).call(window)
