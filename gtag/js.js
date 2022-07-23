// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "function": "__cid" }],
            "tags": [{ "function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = { a: !0 },
                ha = {};
            try {
                ha.__proto__ = ea;
                da = ha.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ia = ca,
        ka = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Nj = b.prototype
        },
        la = this || self,
        ma = function(a) { return a };
    var na = function() {},
        sa = function(a) { return "function" == typeof a },
        ta = function(a) { return "string" == typeof a },
        ua = function(a) { return "number" == typeof a && !isNaN(a) },
        va = Array.isArray,
        wa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        xa = function(a, b) { if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        Aa = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Ca = function(a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Ea = function(a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Fa = function(a) { return Math.round(Number(a)) || 0 },
        Ga = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Ha = function(a) {
            var b = [];
            if (va(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ka = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        Oa = function() { return new Date(Date.now()) },
        Pa = function() { return Oa().getTime() },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    ya.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Qa = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Sa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try { c() } catch (d) {}
                }
            }
        },
        Ta = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        Wa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Xa = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        Ya = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Za = /^\w{1,9}$/,
        $a = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ca(a, function(d, e) { Za.test(d) && e && c.push(d) });
            return c.join(b)
        };
    var ab, bb = function() {
        if (void 0 === ab) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try { a = b.createPolicy("goog#html", { createHTML: ma, createScript: ma, createScriptURL: ma }) } catch (c) { la.console && la.console.error(c.message) }
                ab = a
            } else ab = a
        }
        return ab
    };
    var eb = function(a, b) { this.m = b === db ? a : "" };
    eb.prototype.toString = function() { return this.m + "" };
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function gb() { var a = la.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" }

    function hb(a) { return -1 != gb().indexOf(a) };
    var ib = {},
        jb = function(a, b, c) { this.m = c === ib ? a : "" };
    jb.prototype.toString = function() { return this.m.toString() };
    var kb = function(a) { return a instanceof jb && a.constructor === jb ? a.m : "type_error:SafeHtml" },
        mb = function(a) {
            var b = bb(),
                c = b ? b.createHTML(a) : a;
            return new jb(c, null, ib)
        },
        nb = new jb(la.trustedTypes && la.trustedTypes.emptyHTML || "", 0, ib);
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ob = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        pb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var qb = function(a) {
        var b = !1,
            c;
        return function() { b || (c = a(), b = !0); return c }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = kb(nb);
        return !c.parentElement
    });
    var l = window,
        B = document,
        rb = navigator,
        sb = B.currentScript && B.currentScript.src,
        ub = function(a, b) {
            var c = l[a];
            l[a] = void 0 === c ? b : c;
            return l[a]
        },
        vb = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        wb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        xb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function yb(a, b, c) {
        b && Ca(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var zb = function(a, b, c, d) {
            var e = B.createElement("script");
            yb(e, d, wb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = bb(),
                m = g ? g.createScriptURL(a) : a;
            f = new eb(m, db);
            e.src = f instanceof eb && f.constructor === eb ? f.m : "type_error:TrustedResourceUrl";
            var k, n, p = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
                r = null === (n = p.querySelector) || void 0 === n ? void 0 : n.call(p, "script[nonce]");
            (k = r ? r.nonce || r.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", k);
            vb(e, b);
            c && (e.onerror = c);
            var v = B.getElementsByTagName("script")[0] ||
                B.body || B.head;
            v.parentNode.insertBefore(e, v);
            return e
        },
        Ab = function() { if (sb) { var a = sb.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        Bb = function(a, b) {
            var c = void 0,
                d = !1;
            c || (c = B.createElement("iframe"), d = !0);
            yb(c, void 0, xb);
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            if (d) {
                var e = B.body && B.body.lastChild || B.body || B.head;
                e.parentNode.insertBefore(c, e)
            }
            vb(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Eb = function(a, b, c) {
            var d = new Image(1,
                1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Fb = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        Gb = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        G = function(a) { l.setTimeout(a, 0) },
        Hb = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        Ib = function(a) {
            var b = a.innerText || a.textContent || "";
            b &&
                " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Jb = function(a) {
            var b = B.createElement("div"),
                c = mb("A<div>" + a + "</div>"),
                d = b;
            if (qb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = kb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Kb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Lb = function(a) {
            var b;
            try { b = rb.sendBeacon && rb.sendBeacon(a) } catch (c) {}
            b || Eb(a)
        },
        Mb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Nb = function(a) { var b = B.featurePolicy; return b && sa(b.allowsFeature) ? b.allowsFeature(a) : !1 },
        Ob = function() { return rb.userLanguage || rb.language };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Pb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Qb = function(a) { if (null == a) return String(a); var b = Pb.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Sb = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Tb = function(a) {
            if (!a || "object" != Qb(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Sb(a, "constructor") && !Sb(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Sb(a, b)
        },
        H = function(a, b) {
            var c = b || ("array" == Qb(a) ? [] : {}),
                d;
            for (d in a)
                if (Sb(a, d)) { var e = a[d]; "array" == Qb(e) ? ("array" != Qb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : Tb(e) ? (Tb(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e }
            return c
        };
    var Ub = function(a) {
        if (void 0 === a || va(a) || Tb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Vb = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            Yg: a("consent"),
            Zg: a("consent_always_fire"),
            bf: a("convert_case_to"),
            cf: a("convert_false_to"),
            df: a("convert_null_to"),
            ef: a("convert_true_to"),
            ff: a("convert_undefined_to"),
            uj: a("debug_mode_metadata"),
            wj: a("event_data_overrides"),
            qb: a("function"),
            Hh: a("instance_name"),
            Lh: a("live_only"),
            Mh: a("malware_disabled"),
            Nh: a("metadata"),
            zj: a("original_activity_id"),
            Aj: a("original_vendor_template_id"),
            Rh: a("once_per_event"),
            Nf: a("once_per_load"),
            Cj: a("priority_override"),
            Dj: a("respected_consent_types"),
            Sf: a("setup_tags"),
            Uf: a("tag_id"),
            Vf: a("teardown_tags")
        }
    }();
    var rc;
    var sc = [],
        tc = [],
        uc = [],
        vc = [],
        Bc = [],
        Cc = {},
        Dc, Ec, Fc, Gc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Cc[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.eg && d.eg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Vb.Zg.toString() && a[g]) {}
            e && d && d.dg && (f.vtp_gtmCachedValues = d.dg);
            return void 0 !== e ? e(f) : rc(c, f, b)
        },
        Ic = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Hc(a[e], b, c));
            return d
        },
        Hc = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Hc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = sc[f];
                        if (!g || b.He(g)) return;
                        c[f] = !0;
                        try {
                            var m = Ic(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            d = Gc(m, { event: b, index: f, type: 2 });
                            Fc && (d = Fc.fi(d, m))
                        } catch (A) { b.vg && b.vg(A, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[Hc(a[k], b, c)] = Hc(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var r = Hc(a[p], b, c);
                            Ec && (n = n || r === Ec.$c);
                            d.push(r)
                        }
                        return Ec && n ? Ec.ji(d) : d.join("");
                    case "escape":
                        d = Hc(a[1], b, c);
                        if (Ec && va(a[1]) && "macro" === a[1][0] && Ec.Hi(a)) return Ec.Wi(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Wb[a[v]] && (d = Wb[a[v]](d));
                        return d;
                    case "tag":
                        var t =
                            a[1];
                        if (!vc[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = { jg: a[2], index: t };
                    case "zb":
                        var q = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        q["function"] = a[1];
                        var u = Jc(q, b, c),
                            x = !!a[4];
                        return x || 2 !== u ? x !== (1 === u) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Jc = function(a, b, c) { try { return Dc(Ic(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Mc = function(a) {
            function b(v) { for (var t = 0; t < v.length; t++) d[v[t]] = !0 }
            for (var c = [], d = [], e = Kc(a), f = 0; f < tc.length; f++) {
                var g = tc[f],
                    m = Lc(g, e);
                if (m) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === m && b(g.block || []);
            }
            for (var p = [], r = 0; r < vc.length; r++) c[r] && !d[r] && (p[r] = !0);
            return p
        },
        Lc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var m = b(f[g]); if (2 === m) return null; if (1 === m) return !1 }
            return !0
        },
        Kc = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Jc(uc[c], a)); return b[c] } };
    var Nc = {
        fi: function(a, b) {
            b[Vb.bf] && "string" === typeof a && (a = 1 == b[Vb.bf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Vb.df) && null === a && (a = b[Vb.df]);
            b.hasOwnProperty(Vb.ff) && void 0 === a && (a = b[Vb.ff]);
            b.hasOwnProperty(Vb.ef) && !0 === a && (a = b[Vb.ef]);
            b.hasOwnProperty(Vb.cf) && !1 === a && (a = b[Vb.cf]);
            return a
        }
    };
    var N = {
        Nb: "_ee",
        fd: "_syn_or_mod",
        Fj: "_uei",
        be: "_eu",
        Bj: "_pci",
        Kb: "event_callback",
        Pc: "event_timeout",
        xa: "gtag.config",
        Ia: "gtag.get",
        va: "purchase",
        Gb: "refund",
        hb: "begin_checkout",
        Eb: "add_to_cart",
        Fb: "remove_from_cart",
        ih: "view_cart",
        jf: "add_to_wishlist",
        wa: "view_item",
        ib: "view_promotion",
        Lc: "select_promotion",
        Ed: "select_item",
        Ua: "view_item_list",
        hf: "add_payment_info",
        hh: "add_shipping_info",
        Ka: "value_key",
        Wa: "value_callback",
        W: "allow_ad_personalization_signals",
        hc: "restricted_data_processing",
        $b: "allow_google_signals",
        oa: "cookie_expires",
        Ib: "cookie_update",
        ic: "session_duration",
        Uc: "session_engaged_time",
        Ma: "user_properties",
        qa: "transport_url",
        T: "ads_data_redaction",
        za: "user_data",
        cc: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        $e: "region",
        af: "wait_for_update",
        na: "conversion_linker",
        Ca: "conversion_cookie_prefix",
        fa: "value",
        da: "currency",
        Jf: "trip_type",
        aa: "items",
        Bf: "passengers",
        Hd: "allow_custom_scripts",
        jc: "session_id",
        Gf: "quantity",
        Ya: "transaction_id",
        nb: "language",
        Nc: "country",
        Mc: "allow_enhanced_conversions",
        Md: "aw_merchant_id",
        Kd: "aw_feed_country",
        Ld: "aw_feed_language",
        Jd: "discount",
        V: "developer_id",
        Vc: "delivery_postal_code",
        Sd: "estimated_delivery_date",
        Qd: "shipping",
        Yd: "new_customer",
        Nd: "customer_lifetime_value",
        Rd: "enhanced_conversions",
        Zb: "page_view",
        ja: "linker",
        N: "domains",
        Mb: "decorate_forms",
        wf: "enhanced_conversions_automatic_settings",
        ph: "auto_detection_enabled",
        xf: "ga_temp_client_id",
        Fd: "user_engagement",
        bh: "app_remove",
        dh: "app_store_refund",
        eh: "app_store_subscription_cancel",
        fh: "app_store_subscription_convert",
        gh: "app_store_subscription_renew",
        jh: "first_open",
        kh: "first_visit",
        lh: "in_app_purchase",
        mh: "session_start",
        nh: "allow_display_features",
        ac: "campaign",
        kf: "campaign_content",
        lf: "campaign_id",
        nf: "campaign_medium",
        pf: "campaign_name",
        qf: "campaign_source",
        rf: "campaign_term",
        kb: "client_id",
        ia: "cookie_domain",
        Hb: "cookie_name",
        Va: "cookie_path",
        Da: "cookie_flags",
        bc: "custom_map",
        Vd: "groups",
        Af: "non_interaction",
        ob: "page_location",
        Zd: "page_path",
        La: "page_referrer",
        Sc: "page_title",
        ka: "send_page_view",
        pb: "send_to",
        $d: "session_engaged",
        yf: "_logged_in_state",
        ae: "session_number",
        Dh: "tracking_id",
        Za: "url_passthrough",
        Lb: "accept_incoming",
        fc: "url_position",
        Ef: "phone_conversion_number",
        Cf: "phone_conversion_callback",
        Df: "phone_conversion_css_class",
        Ff: "phone_conversion_options",
        Ah: "phone_conversion_ids",
        zh: "phone_conversion_country_code",
        Ja: "aw_remarketing",
        Id: "aw_remarketing_only",
        Gd: "gclid",
        oh: "auid",
        uh: "affiliation",
        vf: "tax",
        Pd: "list_name",
        uf: "checkout_step",
        tf: "checkout_option",
        vh: "coupon",
        wh: "promotions",
        $a: "user_id",
        Bh: "retoken",
        ya: "cookie_prefix",
        sf: "disable_merchant_reported_purchases",
        th: "dc_natural_search",
        sh: "dc_custom_params",
        zf: "method",
        Ch: "search_term",
        rh: "content_type",
        yh: "optimize_id",
        xh: "experiments",
        Xa: "google_signals"
    };
    N.Rc = "google_tld";
    N.Wc = "update";
    N.Td = "firebase_id";
    N.Ud = "ga_restrict_domain";
    N.Oc = "event_settings";
    N.Od = "dynamic_event_settings";
    N.kc = "user_data_settings";
    N.Hf = "screen_name";
    N.lb = "_x_19";
    N.Jb = "_ecid";
    N.Qc = "_x_20";
    N.Xd = "internal_traffic_results";
    N.If = "traffic_type";
    N.Tc = "referral_exclusion_definition";
    N.Wd = "ignore_referrer";
    N.qh = "content_group";
    N.jb = "allow_interest_groups";
    var qd = {};
    N.Lf = Object.freeze((qd[N.hf] = 1, qd[N.hh] = 1, qd[N.Eb] = 1, qd[N.Fb] = 1, qd[N.ih] = 1, qd[N.hb] = 1, qd[N.Ed] = 1, qd[N.Ua] = 1, qd[N.Lc] = 1, qd[N.ib] = 1, qd[N.va] = 1, qd[N.Gb] = 1, qd[N.wa] = 1, qd[N.jf] = 1, qd));
    N.de = Object.freeze([N.W, N.$b, N.Ib]);
    N.Ph = Object.freeze([].concat(N.de));
    N.ee = Object.freeze([N.oa, N.Pc, N.ic, N.Uc]);
    N.Qh = Object.freeze([].concat(N.ee));
    var sd = {},
        Ad = function(a, b) {
            sd[a] = sd[a] || [];
            sd[a][b] = !0
        },
        Bd = function(a) { for (var b = [], c = sd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var Cd = function(a) { Ad("GTM", a) };
    var O = {},
        R = null,
        Dd = Math.random();
    O.I = "UA-115459104-1";
    O.dd = "150";
    O.U = "dataLayer";
    O.ah = "ChEIgKzqjgYQqKemmJup6reGARInAFDz6XvCeWIpHQ+51jkEyttyyJTF0B4S2m6EMovPtwCh6wz+NBi9GgLSNQ\x3d\x3d";
    var Ed = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        Fd = { __paused: !0, __tg: !0 },
        Gd;
    for (Gd in Ed) Ed.hasOwnProperty(Gd) && (Fd[Gd] = !0);
    O.Cd = "www.googletagmanager.com";
    var Hd = O.Cd + "/gtm.js";
    Hd = O.Cd + "/gtag/js";
    var Id = Hd,
        Jd = Ga(""),
        Kd = null,
        Ld = null,
        Md = "https://www.googletagmanager.com/a?id=" + O.I + "&cv=1",
        Nd = {},
        Od = {},
        Pd = function() {
            var a = R.sequence || 1;
            R.sequence = a + 1;
            return a
        };
    O.$g = "";
    var Qd = "";
    O.ed = Qd;
    var Rd = {},
        Sd = new ya,
        Yd = {},
        Zd = {},
        be = {
            name: O.U,
            set: function(a, b) {
                H(Ya(a, b), Yd);
                $d()
            },
            get: function(a) { return ae(a, 2) },
            reset: function() {
                Sd = new ya;
                Yd = {};
                $d()
            }
        },
        ae = function(a, b) { return 2 != b ? Sd.get(a) : ce(a) },
        ce = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Yd, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        de = function(a, b) { Zd.hasOwnProperty(a) || (Sd.set(a, b), H(Ya(a, b), Yd), $d()) },
        $d = function(a) {
            Ca(Zd, function(b, c) {
                Sd.set(b, c);
                H(Ya(b, void 0),
                    Yd);
                H(Ya(b, c), Yd);
                a && delete Zd[b]
            })
        },
        fe = function(a, b, c) {
            Rd[a] = Rd[a] || {};
            Rd[a][b] = ee(b, c)
        },
        ee = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? ce(a) : Sd.get(a); "array" === Qb(d) || "object" === Qb(d) ? c = H(d) : c = d; return c },
        ge = function(a, b) { if (Rd[a]) return Rd[a][b] },
        he = function(a, b) { Rd[a] && delete Rd[a][b] };
    var ie = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        je = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        ke = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        le = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var me = function() {
            var a = !1;
            a = !0;
            return a
        },
        oe = function(a) {
            var b = ae("gtm.allowlist") || ae("gtm.whitelist");
            b && Cd(9);
            me() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Xa(Ha(b), je),
                d = ae("gtm.blocklist") ||
                ae("gtm.blacklist");
            d || (d = ae("tagTypeBlacklist")) && Cd(3);
            d ? Cd(8) : d = [];
            ne() && (d = Ha(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ha(d).indexOf("google") && Cd(2);
            var e = d && Xa(Ha(d), ke),
                f = {};
            return function(g) {
                var m = g && g[Vb.qb];
                if (!m || "string" != typeof m) return !0;
                m = m.replace(/^_*/, "");
                if (void 0 !== f[m]) return f[m];
                var k = Od[m] || [],
                    n = a(m, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(m))
                            if (k && 0 < k.length)
                                for (var r = 0; r < k.length; r++) {
                                    if (0 > c.indexOf(k[r])) {
                                        Cd(11);
                                        p = !1;
                                        break a
                                    }
                                } else { p = !1; break a }
                        p = !0
                    }
                    n = p
                }
                var v = !1;
                if (d) {
                    var t = 0 <= e.indexOf(m);
                    if (t) v = t;
                    else {
                        var q = Aa(e, k || []);
                        q && Cd(10);
                        v = q
                    }
                }
                var u = !n || v;
                u || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (u = Aa(e, le));
                return f[m] = u
            }
        },
        ne = function() { return ie.test(l.location && l.location.hostname) };
    var pe = { active: !0, isAllowed: function() { return !0 } },
        qe = function(a) { var b = R.zones; return b ? b.checkState(O.I, a) : pe },
        re = function(a) { var b = R.zones;!b && a && (b = R.zones = a()); return b };
    var se = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ue = function() {
        var a = te,
            b = "Fe";
        if (a.Fe && a.hasOwnProperty(b)) return a.Fe;
        var c = new a;
        a.Fe = c;
        a.hasOwnProperty(b);
        return c
    };
    var te = function() {
        var a = {};
        this.m = function() {
            var b = se.m,
                c = se.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() { a[se.m] = !0 }
    };
    var ve = [];

    function we() {
        var a = ub("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: xe, update: ye, addListener: ze, notifyListeners: Ae, active: !1, usedDefault: !1 });
        return a.ics
    }

    function xe(a, b, c, d, e, f) {
        var g = we();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var m = g.entries,
                k = m[a] || {},
                n = k.region,
                p = c && ta(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var r = !!(f && 0 < f && void 0 === k.update),
                    v = { region: p, initial: "granted" === b, update: k.update, quiet: r };
                if ("" !== d || !1 !== k.initial) m[a] = v;
                r && l.setTimeout(function() { m[a] === v && v.quiet && (v.quiet = !1, Be(a), Ae(), Ad("TAGGING", 2)) }, f)
            }
        }
    }

    function ye(a, b) {
        var c = we();
        c.active = !0;
        if (void 0 != b) {
            var d = Ce(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ce(a);
            f.quiet ? (f.quiet = !1, Be(a)) : g !== d && Be(a)
        }
    }

    function ze(a, b) { ve.push({ ve: a, ui: b }) }

    function Be(a) {
        for (var b = 0; b < ve.length; ++b) {
            var c = ve[b];
            va(c.ve) && -1 !== c.ve.indexOf(a) && (c.Ag = !0)
        }
    }

    function Ae(a) { for (var b = 0; b < ve.length; ++b) { var c = ve[b]; if (c.Ag) { c.Ag = !1; try { c.ui({ consentEventId: a }) } catch (d) {} } } }
    var Ce = function(a) { var b = we().entries[a] || {}; return void 0 !== b.update ? b.update : b.initial },
        De = function(a) { return (we().entries[a] || {}).initial },
        Ee = function(a) { return !(we().entries[a] || {}).quiet },
        Fe = function() { return ue().m() ? we().active : !1 },
        Ge = function() { return we().usedDefault },
        He = function(a, b) { we().addListener(a, b) },
        Ie = function(a) { we().notifyListeners(a) },
        Je = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Ee(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                He(b, function(e) { d || c() || (d = !0, a(e)) })
            } else a({})
        },
        Ke = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var m = d[g];!1 === Ce(m) || e[m] || (f.push(m), e[m] = !0) } return f }
            var d = ta(b) ? [b] : b,
                e = {};
            c().length !== d.length && He(d, function(f) {
                var g = c();
                0 < g.length && (f.ve = g, a(f))
            })
        };

    function Le() {}

    function Me() {};

    function Ne(a) {
        for (var b = [], c = 0; c < Oe.length; c++) {
            var d = a(Oe[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Oe = [N.C, N.H],
        Pe = function(a) {
            var b = a[N.$e];
            b && Cd(40);
            var c = a[N.af];
            c && Cd(41);
            for (var d = va(b) ? b : [b], e = { Wb: 0 }; e.Wb < d.length; e = { Wb: e.Wb }, ++e.Wb) Ca(a, function(f) {
                return function(g, m) {
                    if (g !== N.$e && g !== N.af) {
                        var k = d[f.Wb];
                        we().set(g, m, k, "UA", "UA-63", c)
                    }
                }
            }(e))
        },
        Qe = 0,
        Re = function(a, b) {
            Ca(a, function(e, f) { we().update(e, f) });
            Ie(b);
            var c = Pa(),
                d = c - Qe;
            Qe && 0 <= d && 1E3 > d && Cd(66);
            Qe = c
        },
        Se = function(a) { var b = Ce(a); return void 0 != b ? b : !0 },
        Te = function() { return "G1" + Ne(Ce) },
        $e = function() {
            return "G1" +
                Ne(De)
        },
        af = function(a, b) { Ke(a, b) },
        bf = function(a, b) { Je(a, b) };
    var df = function(a) { return cf ? B.querySelectorAll(a) : null },
        ef = function(a, b) {
            if (!cf) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        ff = !1;
    if (B.querySelectorAll) try {
        var gf = B.querySelectorAll(":root");
        gf && 1 == gf.length && gf[0] == B.documentElement && (ff = !0)
    } catch (a) {}
    var cf = ff;
    var Bf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Cf = function(a) {
            var b = new Bf;
            b.eventModel = a;
            return b
        },
        Df = function(a, b) { a.targetConfig = b; return a },
        Ef = function(a, b) { a.containerConfig = b; return a },
        Ff = function(a, b) { a.globalConfig = b; return a },
        Gf = function(a,
            b) { a.remoteConfig = b; return a },
        Hf = function(a, b) { a.onSuccess = b; return a },
        If = function(a, b) { a.setContainerTypeLoaded = b; return a },
        Jf = function(a, b) { a.getContainerTypeLoaded = b; return a },
        Kf = function(a, b) { a.onFailure = b; return a };
    Bf.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]; if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a] };
    var Lf = function(a) {
            function b(d) { for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1 }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Mf = function(a, b, c) {
            function d(g) {
                Tb(g) && Ca(g, function(m, k) {
                    f = !0;
                    e[m] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Nf = function(a) {
            var b = [N.ac, N.kf, N.lf, N.nf, N.pf, N.qf, N.rf],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        Of = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== N.Nb && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var Pf, Qf = !1,
        Rf = function(a) {
            if (!Qf) {
                Qf = !0;
                Pf = Pf || {}
            }
            return Pf[a]
        };
    var Sf = function(a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle) return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var m = g.indexOf("opacity(");
                0 <= m && (g = g.substring(m + 8, g.indexOf(")", m)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d,
                null))
        }
        return !1
    };
    var ag = /:[0-9]+$/,
        bg = function(a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var g = f.slice(1).join("="); return c ? g : decodeURIComponent(g).replace(/\+/g, " ") } } },
        eg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = cg(a.protocol) || cg(l.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : l.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || l.location.hostname).replace(ag, "").toLowerCase());
            return dg(a, b, c, d, e)
        },
        dg = function(a, b, c, d, e) {
            var f, g = cg(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = fg(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ag, "").toLowerCase();
                    if (c) {
                        var m = /^www\d*\./.exec(f);
                        m && m[0] && (f = f.substr(m[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Ad("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = bg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        cg = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
        fg = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        gg = function(a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ad("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ag, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        },
        hg = function(a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" }

            function c(n) { return n.split("&").map(b).filter(function(p) { return void 0 != p }).join("&") }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = gg(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                m = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === m[0] && (m = m.substring(1));
            g = c(g);
            m = c(m);
            "" !== g && (g = "?" + g);
            "" !== m && (m = "#" + m);
            var k = "" + f + g + m;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ig = {};
    var Bg = {},
        Cg = function(a, b) {
            if (l._gtmexpgrp && l._gtmexpgrp.hasOwnProperty(a)) return l._gtmexpgrp[a];
            void 0 === Bg[a] && (Bg[a] = Math.floor(Math.random() * b));
            return Bg[a]
        };
    var Dg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var Eg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                m = g[0].replace(/^\s*|\s*$/g, "");
            if (m && m == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function Hg(a) { return "null" !== a.origin };
    var Kg = function(a, b, c, d) { return Ig(d) ? Eg(a, String(b || Jg()), c) : [] },
        Ng = function(a, b, c, d, e) {
            if (Ig(e)) {
                var f = Lg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Mg(f, function(g) { return g.md }, b);
                    if (1 === f.length) return f[0].id;
                    f = Mg(f, function(g) { return g.Ac }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Og(a, b, c, d) {
        var e = Jg(),
            f = window;
        Hg(f) && (f.document.cookie = a);
        var g = Jg();
        return e != g || void 0 != c && 0 <= Kg(b, g, !1, d).indexOf(c)
    }
    var Sg = function(a, b, c) {
            function d(t, q, u) {
                if (null == u) return delete g[q], t;
                g[q] = u;
                return t + "; " + q + "=" + u
            }

            function e(t, q) {
                if (null == q) return delete g[q], t;
                g[q] = !0;
                return t + "; " + q
            }
            if (!Ig(c.Qa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Pg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            f = d(f, "expires", m);
            f = d(f, "max-age", c.Jj);
            f = d(f, "samesite",
                c.Lj);
            c.Mj && (f = e(f, "secure"));
            var k = c.domain;
            if (k && "auto" === k.toLowerCase()) {
                for (var n = Qg(), p = 0; p < n.length; ++p) {
                    var r = "none" !== n[p] ? n[p] : void 0,
                        v = d(f, "domain", r);
                    v = e(v, c.flags);
                    if (!Rg(r, c.path) && Og(v, a, b, c.Qa)) return 0
                }
                return 1
            }
            k && "none" !== k.toLowerCase() && (f = d(f, "domain", k));
            f = e(f, c.flags);
            return Rg(k, c.path) ? 1 : Og(f, a, b, c.Qa) ? 0 : 1
        },
        Tg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Sg(a, b, c)
        };

    function Mg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var m = a[g],
                k = b(m);
            k === c ? d.push(m) : void 0 === f || k < f ? (e = [m], f = k) : k === f && e.push(m)
        }
        return 0 < d.length ? d : e
    }

    function Lg(a, b, c) {
        for (var d = [], e = Kg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                m = g.shift();
            if (!b || -1 !== b.indexOf(m)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({ id: g.join("."), md: 1 * k[0] || 1, Ac: 1 * k[1] || 1 }))
            }
        }
        return d
    }
    var Pg = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        Ug = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Vg = /(^|\.)doubleclick\.net$/i,
        Rg = function(a, b) { return Vg.test(window.document.location.hostname) || "/" === b && Ug.test(a) },
        Jg = function() { return Hg(window) ? window.document.cookie : "" },
        Qg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Vg.test(e) || Ug.test(e) || a.push("none");
            return a
        },
        Ig = function(a) { if (!ue().m() || !a || !Fe()) return !0; if (!Ee(a)) return !1; var b = Ce(a); return null == b ? !0 : !!b };
    var Wg = function(a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ Dg(a) & 2147483647) : String(b) },
        Xg = function(a) { return [Wg(a), Math.round(Pa() / 1E3)].join(".") },
        $g = function(a, b, c, d, e) { var f = Yg(b); return Ng(a, f, Zg(c), d, e) },
        ah = function(a, b, c, d) {
            var e = "" + Yg(c),
                f = Zg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Yg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Zg = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function bh(a, b, c) {
        var d, e = Number(null != a.wb ? a.wb : void 0);
        0 !== e && (d = new Date((b || Pa()) + 1E3 * (e || 7776E3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d }
    };
    var ch = ["1"],
        dh = {},
        eh = {},
        ih = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = fh(a.prefix);
            if (!dh[c] && !gh(c, a.path, a.domain) && b) {
                var d = fh(a.prefix),
                    e = Xg();
                if (0 === hh(d, e, a)) {
                    var f = ub("google_tag_data", {});
                    f._gcl_au ? Ad("GTM", 57) : f._gcl_au = e
                }
                gh(c, a.path, a.domain)
            }
        };

    function hh(a, b, c, d) {
        var e = ah(b, "1", c.domain, c.path),
            f = bh(c, d);
        f.Qa = "ad_storage";
        return Tg(a, e, f)
    }

    function gh(a, b, c) {
        var d = $g(a, b, c, ch, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (dh[a] = e.slice(0, 2).join("."), eh[a] = { id: e.slice(2, 4).join("."), rg: Number(e[4]) || 0 }) : 3 === e.length ? eh[a] = { id: e.slice(0, 2).join("."), rg: Number(e[2]) || 0 } : dh[a] = d;
        return !0
    }

    function fh(a) { return (a || "_gcl") + "_au" };
    var jh = function(a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({ We: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 })
        }
        b.sort(function(g, m) { return m.timestamp - g.timestamp });
        return b
    };

    function kh(a, b) {
        var c = jh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].We] || (d[c[e].We] = []);
                var g = { version: f[0], timestamp: 1E3 * Number(f[1]), ra: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].We].push(g)
            }
        }
        return d
    };

    function lh() { for (var a = mh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function nh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var mh, oh;

    function ph(a) {
        mh = mh || nh();
        oh = oh || lh();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                m = e ? a.charCodeAt(c + 2) : 0,
                k = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | m >> 6,
                r = m & 63;
            e || (r = 64, d || (p = 64));
            b.push(mh[k], mh[n], mh[p], mh[r])
        }
        return b.join("")
    }

    function qh(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = oh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        mh = mh || nh();
        oh = oh || lh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                m = b(64);
            if (64 === m && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != m && (c += String.fromCharCode(g << 6 & 192 | m)))
        }
    };
    var rh, sh = function(a) {
        var b;
        if (!(b = rh)) {
            for (var c = Array(256), d = 0; 256 > d; d++) {
                for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                c[d] = e
            }
            b = c
        }
        rh = b;
        for (var g = 4294967295, m = 0; m < a.length; m++) g = g >>> 8 ^ rh[(g ^ a.charCodeAt(m)) & 255];
        return (g ^ -1) >>> 0
    };
    var th = { tj: 0, Ej: 1, yj: 2, xj: 3 },
        xh = function() {
            var a = uh,
                b = vh,
                c = wh(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) };
            if (!c.init) {
                Fb(B, "mousedown", d);
                Fb(B, "keyup", d);
                Fb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        yh = function(a, b, c, d, e) {
            var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            wh().decorators.push(f)
        },
        zh = function(a, b, c) {
            for (var d = wh().decorators,
                    e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    m;
                if (m = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== B.location.hostname))
                        for (var r = 0; r < k.length; r++)
                            if (k[r] instanceof RegExp) { if (k[r].test(n)) { m = !0; break a } } else if (0 <= n.indexOf(k[r]) || p && 0 <= k[r].indexOf(n)) { m = !0; break a }
                    m = !1
                }
                if (m) {
                    var v = g.placement;
                    void 0 == v && (v = g.fragment ? 2 : 1);
                    v === b && Ta(e, g.callback())
                }
            }
            return e
        };

    function wh() {
        var a = ub("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b);
        return b
    };
    var Ah = /(.*?)\*(.*?)\*(.*)/,
        Bh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ch = /^(?:www\.|m\.|amp\.)+/,
        Dh = /\*?xp_[0-3]\*?/,
        Eh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Fh(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var Ih = function(a, b) {
        var c = [],
            d;
        for (d in a)
            if (a.hasOwnProperty(d)) {
                var e = a[d];
                void 0 !== e && e === e && null !== e && "[object Object]" !== e.toString() && (c.push(d), c.push(ph(String(e))))
            }
        var f = c.join("*");
        if (void 0 !== b) {
            var g = "xp_" + b,
                m = Gh[b](f);
            f = [f, g, ph(String(m))].join("*")
        }
        return ["1", Hh(f), f].join("*")
    };

    function Hh(a, b) { var c = [l.navigator.userAgent, (new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"); return sh(c).toString(36) }
    var Jh = {},
        Gh = (Jh[0] = function() { return "BASELINE" }, Jh[1] = Kh, Jh[2] = Lh, Jh[3] = Mh, Jh);

    function Kh(a, b) { var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"); return sh(c).toString(36) }

    function Lh(a, b) { if (!rb.userAgentData) return "UA_DATA_NOT_PRESENT"; var c = [(new Date).getTimezoneOffset(), Ob(), Math.floor(Pa() / 60 / 1E3) - (void 0 === b ? 0 : b), rb.userAgentData.brands, rb.userAgentData.mobile, rb.userAgentData.platform, a].join("*"); return sh(c).toString(36) }

    function Mh() { return "UACH_ACCESSED_TOO_EARLY" }

    function Nh() {
        return function(a) {
            var b = gg(l.location.href),
                c = b.search.replace("?", ""),
                d = bg(c, "_gl", !0) || "";
            a.query = Oh(d) || {};
            var e = eg(b, "fragment").match(Fh("_gl"));
            a.fragment = Oh(e && e[3] || "") || {}
        }
    }
    var Ph = function(a) {
            var b = Nh(),
                c = wh();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ta(d, e.query), a && Ta(d, e.fragment));
            return d
        },
        Oh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Ah.exec(d);
                            if (f) { c = f; break a }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var m = g[2],
                            k = g[3],
                            n = null !== k.match(Dh),
                            p;
                        a: {
                            for (var r = 0; r < b; ++r)
                                if (m === Hh(k, r)) { p = !0; break a }
                            p = !1
                        }
                        var v = p;
                        if (v || n) {
                            for (var t = {}, q = k ? k.split("*") : [], u = 0; u + 1 < q.length; u += 2) {
                                var x =
                                    q[u],
                                    A = null !== x.match(Dh);
                                if (v || A) {
                                    var w = qh(q[u + 1]);
                                    t[x] = w
                                }
                                if (A) {
                                    var z = x.split("_")[1];
                                    if (!(Number(z) < Object.keys(th).length)) return;
                                    var y = b,
                                        C = t[x],
                                        F = k.slice(0, k.indexOf("*xp")),
                                        D = v;
                                    if (0 !== Number(z)) a: {
                                        var E = C,
                                            P = F,
                                            J = y;
                                        if ("undefined" !== E && "UA_DATA_NOT_PRESENT" !== E && "UACH_ACCESSED_TOO_EARLY" !== E)
                                            for (var I = 0; I < J; ++I)
                                                if (E === Gh[z](P, I)) { D = !0; break a }
                                        D = !1
                                    }
                                    t._z = "uaxp." + (v ? D === v ? "" + z + 0 : "" + z + 3 : D === v ? "" + z + 1 : "" + z + 2)
                                }
                            }
                            Ad("TAGGING", 6);
                            return t
                        }
                        Ad("TAGGING", 7)
                    }
                }
            } catch (M) { Ad("TAGGING", 8) }
        };

    function Qh(a, b, c, d) {
        function e(p) {
            var r = p,
                v = Fh(a).exec(r),
                t = r;
            if (v) {
                var q = v[2],
                    u = v[4];
                t = v[1];
                u && (t = t + q + u)
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Eh.exec(c);
        if (!f) return "";
        var g = f[1],
            m = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : m = "?" + e(m.substring(1));
        return "" + g + m + k
    }

    function Rh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = zh(b, 1, c),
            e = zh(b, 2, c),
            f = zh(b, 3, c);
        if (Wa(d)) {
            var g = Ih(d, void 0);
            c ? Sh("_gl", g, a) : Th("_gl", g, a, !1)
        }
        if (!c && Wa(e)) {
            var m = Ih(e);
            Th("_gl", m, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    r = a;
                if (r.tagName) { if ("a" === r.tagName.toLowerCase()) { Th(n, p, r, void 0); break a } if ("form" === r.tagName.toLowerCase()) { Sh(n, p, r); break a } }
                "string" == typeof r && Qh(n, p, r, void 0)
            }
    }

    function Th(a, b, c, d) {
        if (c.href) {
            var e = Qh(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function Sh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var m = e[g];
                    if (m.name === a) {
                        m.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = B.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Qh(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    function uh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Rh(e, e.hostname) }
        } catch (g) {}
    }

    function vh(a) {
        try {
            if (a.action) {
                var b = eg(gg(a.action), "host");
                Rh(a, b)
            }
        } catch (c) {}
    }
    var Uh = function(a, b, c, d) {
            xh();
            yh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Vh = function(a, b) {
            xh();
            yh(a, [dg(l.location, "host", !0)], b, !0, !0)
        },
        Wh = function() {
            var a = B.location.hostname,
                b = Bh.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var m = a.replace(Ch, ""),
                k = e.replace(Ch, ""),
                n;
            if (!(n = m === k)) {
                var p = "." + k;
                n = m.substring(m.length - p.length,
                    m.length) === p
            }
            return n
        },
        Xh = function(a, b) { return !1 === a ? !1 : a || b || Wh() };
    var Yh = {};
    var Zh = /^\w+$/,
        $h = /^[\w-]+$/,
        ai = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        bi = function() { if (!ue().m() || !Fe()) return !0; var a = Ce("ad_storage"); return null == a ? !0 : !!a },
        ci = function(a, b) { Ee("ad_storage") ? bi() ? a() : Ke(a, "ad_storage") : b ? Ad("TAGGING", 3) : Je(function() { ci(a, !0) }, ["ad_storage"]) },
        ei = function(a) { return di(a).map(function(b) { return b.ra }) },
        di = function(a) {
            var b = [];
            if (!Hg(l) || !B.cookie) return b;
            var c = Kg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Hc: d.Hc }, e++) {
                var f = fi(c[e]);
                if (null != f) {
                    var g = f,
                        m = g.version;
                    d.Hc = g.ra;
                    var k = g.timestamp,
                        n = g.labels,
                        p = wa(b, function(r) { return function(v) { return v.ra === r.Hc } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = gi(p.labels, n || [])) : b.push({ version: m, ra: d.Hc, timestamp: k, labels: n })
                }
            }
            b.sort(function(r, v) { return v.timestamp - r.timestamp });
            return hi(b)
        };

    function gi(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function ii(a) { return a && "string" == typeof a && a.match(Zh) ? a : "_gcl" }
    var ki = function() {
            var a = gg(l.location.href),
                b = eg(a, "query", !1, void 0, "gclid"),
                c = eg(a, "query", !1, void 0, "gclsrc"),
                d = eg(a, "query", !1, void 0, "wbraid"),
                e = eg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || bg(f, "gclid", void 0);
                c = c || bg(f, "gclsrc", void 0);
                d = d || bg(f, "wbraid", void 0)
            }
            return ji(b, c, e, d)
        },
        ji = function(a, b, c, d) {
            var e = {},
                f = function(g, m) {
                    e[m] || (e[m] = []);
                    e[m].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && $h.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match($h)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        mi = function(a) {
            var b = ki();
            ci(function() { li(b, !1, a) })
        };

    function li(a, b, c, d, e) {
        function f(x, A) {
            var w = ni(x, g);
            w && (Tg(w, A, m), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = ii(c.prefix);
        d = d || Pa();
        var m = bh(c, d, !0);
        m.Qa = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var A = ["GCL", n, x];
                0 < e.length && A.push(e.join("."));
                return A.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Yh.enable_gbraid_cookie_write ? 0 : Yh.enable_gbraid_cookie_write) && !k && a.gb) {
            var r = a.gb[0],
                v = ni("gb",
                    g),
                t = !1;
            if (!b)
                for (var q = di(v), u = 0; u < q.length; u++) q[u].ra === r && q[u].labels && 0 < q[u].labels.length && (t = !0);
            t || f("gb", p(r))
        }
    }
    var pi = function(a, b) {
            var c = Ph(!0);
            ci(function() {
                for (var d = ii(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ai[f]) {
                        var g = ni(f, d),
                            m = c[g];
                        if (m) {
                            var k = Math.min(oi(m), Pa()),
                                n;
                            b: {
                                var p = k;
                                if (Hg(l))
                                    for (var r = Kg(g, B.cookie, void 0, "ad_storage"), v = 0; v < r.length; ++v)
                                        if (oi(r[v]) > p) { n = !0; break b }
                                n = !1
                            }
                            if (!n) {
                                var t = bh(b, k, !0);
                                t.Qa = "ad_storage";
                                Tg(g, m, t)
                            }
                        }
                    }
                }
                li(ji(c.gclid, c.gclsrc), !1, b)
            })
        },
        ni = function(a, b) { var c = ai[a]; if (void 0 !== c) return b + c },
        oi = function(a) {
            return 0 !== qi(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function fi(a) { var b = qi(a.split(".")); return 0 === b.length ? null : { version: b[0], ra: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function qi(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !$h.test(a[2]) ? [] : a }
    var ri = function(a, b, c, d, e) {
            if (va(b) && Hg(l)) {
                var f = ii(e),
                    g = function() {
                        for (var m = {}, k = 0; k < a.length; ++k) {
                            var n = ni(a[k], f);
                            if (n) {
                                var p = Kg(n, B.cookie, void 0, "ad_storage");
                                p.length && (m[n] = p.sort()[p.length - 1])
                            }
                        }
                        return m
                    };
                ci(function() { Uh(g, b, c, d) })
            }
        },
        hi = function(a) { return a.filter(function(b) { return $h.test(b.ra) }) },
        si = function(a, b) {
            if (Hg(l)) {
                for (var c = ii(b.prefix), d = {}, e = 0; e < a.length; e++) ai[a[e]] && (d[a[e]] = ai[a[e]]);
                ci(function() {
                    Ca(d, function(f, g) {
                        var m = Kg(c + g, B.cookie, void 0, "ad_storage");
                        m.sort(function(t,
                            q) { return oi(q) - oi(t) });
                        if (m.length) {
                            var k = m[0],
                                n = oi(k),
                                p = 0 !== qi(k.split(".")).length ? k.split(".").slice(3) : [],
                                r = {},
                                v;
                            v = 0 !== qi(k.split(".")).length ? k.split(".")[2] : void 0;
                            r[f] = [v];
                            li(r, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ti(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var ui = function(a) {
        function b(e, f, g) { g && (e[f] = g) }
        if (Fe()) {
            var c = ki();
            if (ti(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Vh(function() { return d }, 3);
                Vh(function() { var e = {}; return e._up = "1", e }, 1)
            }
        }
    };

    function vi(a, b) {
        var c = ii(b),
            d = ni(a, c);
        if (!d) return 0;
        for (var e = di(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function wi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Si = !1,
        Ti = 0,
        Ui = [];

    function Vi(a) {
        if (!Si) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { Si = !0; for (var e = 0; e < Ui.length; e++) G(Ui[e]) }
            Ui.push = function() { for (var f = 0; f < arguments.length; f++) G(arguments[f]); return 0 }
        }
    }

    function Wi() { if (!Si && 140 > Ti) { Ti++; try { B.documentElement.doScroll("left"), Vi() } catch (a) { l.setTimeout(Wi, 50) } } }
    var Xi = function(a) { Si ? a() : Ui.push(a) };
    var Zi = function(a, b) {
            this.m = !1;
            this.D = [];
            this.K = { tags: [] };
            this.Z = !1;
            this.o = this.s = 0;
            Yi(this, a, b)
        },
        $i = function(a, b, c, d) {
            if (Fd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Tb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        aj = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        bj = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Yi = function(a, b, c) {
            sa(b) && cj(a, b);
            c && l.setTimeout(function() { return bj(a) }, Number(c))
        },
        cj = function(a,
            b) {
            var c = Sa(function() { return G(function() { b(O.I, a.K) }) });
            a.m ? c() : a.D.push(c)
        },
        dj = function(a) {
            a.s++;
            return Sa(function() {
                a.o++;
                a.Z && a.o >= a.s && bj(a)
            })
        };
    var ej = function() {
            function a(d) { return !ua(d) || 0 > d ? 0 : d }
            if (!R._li && l.performance && l.performance.timing) {
                var b = l.performance.timing.navigationStart,
                    c = ua(be.get("gtm.start")) ? be.get("gtm.start") : 0;
                R._li = { cst: a(c - b), cbt: a(Ld - b) }
            }
        },
        fj = function(a) { l.performance && l.performance.mark(O.I + "_" + a + "_start") },
        gj = function(a) {
            if (l.performance) {
                var b = O.I + "_" + a + "_start",
                    c = O.I + "_" + a + "_duration";
                l.performance.measure(c, b);
                var d = l.performance.getEntriesByName(c)[0];
                l.performance.clearMarks(b);
                l.performance.clearMeasures(c);
                var e = R._p || {};
                void 0 === e[a] && (e[a] = d.duration, R._p = e);
                return d.duration
            }
        },
        hj = function() {
            if (l.performance && l.performance.now) {
                var a = R._p || {};
                a.PAGEVIEW = l.performance.now();
                R._p = a
            }
        };
    var ij = {},
        jj = function() { return l.GoogleAnalyticsObject && l[l.GoogleAnalyticsObject] },
        kj = !1;
    var lj = function(a) {
            l.GoogleAnalyticsObject || (l.GoogleAnalyticsObject = a || "ga");
            var b = l.GoogleAnalyticsObject;
            if (l[b]) l.hasOwnProperty(b) || Cd(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Oa());
                l[b] = c
            }
            ej();
            return l[b]
        },
        mj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = jj();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        nj = function(a) {
            if (!Fe()) return;
            var b = jj();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function oj() { return l.GoogleAnalyticsObject || "ga" }
    var pj = function(a) {},
        qj = function(a, b) {
            return function() {
                var c = jj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            m = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", m, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var zj = function(a) {},
        Dj = function(a) {},
        Ej =
        function() { return "&tc=" + vc.filter(function(a) { return a }).length },
        Hj = function() { 2022 <= Fj().length && Gj() },
        Ij = function(a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" },
        Kj = function() { Jj || (Jj = l.setTimeout(Gj, 500)) },
        Gj = function() {
            Jj && (l.clearTimeout(Jj), Jj = void 0);
            void 0 === Lj || Mj[Lj] && !Nj && !Oj || (Pj[Lj] || Qj.Ii() || 0 >= Rj-- ? (Cd(1), Pj[Lj] = !0) : (Qj.cj(), Eb(Fj(!0)), Mj[Lj] = !0, Sj = Tj = Uj = Oj = Nj = ""))
        },
        Fj = function(a) {
            var b = Lj;
            if (void 0 === b) return "";
            var c = Bd("GTM"),
                d = Bd("TAGGING");
            return [Vj, Mj[b] ? "" : "&es=1",
                Wj[b], zj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Ej(), Nj, Oj, Uj, Tj, Dj(a), Sj, "&z=0"
            ].join("")
        },
        Yj = function() { Vj = Xj() },
        Xj = function() { return [Md, "&v=3&t=t", "&pid=" + xa(), "&rv=" + O.dd].join("") },
        Cj = ["L", "S", "Y"],
        yj = ["S", "E"],
        Zj = { sampleRate: "0.005000", Ug: "", Tg: Number("5") },
        ak = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="),
        bk;
    if (!(bk = ak)) {
        var ck = Math.random(),
            dk = Zj.sampleRate;
        bk = ck < dk
    }
    var ek = bk,
        fk = { label: O.I + " Container", children: [{ label: "Initialization", children: [] }] },
        Vj = Xj(),
        Mj = {},
        Nj = "",
        Oj = "",
        Sj = "",
        Tj = "",
        Bj = {},
        Aj = !1,
        xj = {},
        gk = {},
        Uj = "",
        Lj = void 0,
        Wj = {},
        Pj = {},
        Jj = void 0,
        hk = 5;
    0 < Zj.Tg && (hk = Zj.Tg);
    var Qj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ii: function() { return c < a ? !1 : Pa() - d[c % a] < b },
                cj: function() {
                    var f = c++ % a;
                    d[f] = Pa()
                }
            }
        }(hk, 1E3),
        Rj = 1E3,
        jk = function(a, b) {
            if (ek && !Pj[a] && Lj !==
                a) {
                Gj();
                Lj = a;
                Sj = Nj = "";
                Wj[a] = "&e=" + Ij(b) + "&eid=" + a;
                Kj();
            }
        },
        kk = function(a, b, c, d) {
            if (ek && b) {
                var e, f = String(b[Vb.qb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Pj[a]) {
                    a !== Lj && (Gj(), Lj = a);
                    Nj = Nj ? Nj + "." + g : "&tr=" + g;
                    var m = b["function"];
                    if (!m) throw Error("Error: No function name given for function call.");
                    var k = (Cc[m] ? "1" : "2") + e;
                    Sj = Sj ? Sj + "." + k : "&ti=" + k;
                    Kj();
                    Hj()
                }
            }
        };
    var rk = function(a, b, c) {
            if (ek && !Pj[a]) {
                a !== Lj && (Gj(), Lj = a);
                var d = c + b;
                Oj = Oj ? Oj + "." + d : "&epr=" + d;
                Kj();
                Hj()
            }
        },
        sk = function(a, b, c) {};

    function tk(a, b, c, d) {
        var e = vc[a],
            f = uk(a, b, c, d);
        if (!f) return null;
        var g = Hc(e[Vb.Sf], c, []);
        if (g && g.length) {
            var m = g[0];
            f = tk(m.index, { onSuccess: f, onFailure: 1 === m.jg ? b.terminate : f, terminate: b.terminate }, c, d)
        }
        return f
    }

    function uk(a, b, c, d) {
        function e() {
            if (f[Vb.Mh]) m();
            else {
                var x = Ic(f, c, []);
                var A = x[Vb.Yg];
                if (null != A)
                    for (var w = 0; w < A.length; w++)
                        if (!Se(A[w])) { m(); return }
                var z = $i(c.rb, String(f[Vb.qb]), Number(f[Vb.Uf]), x[Vb.Nh]),
                    y = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!y) {
                        y = !0;
                        var D = Pa() - F;
                        kk(c.id, vc[a], "5", D);
                        aj(c.rb, z, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!y) {
                        y = !0;
                        var D = Pa() - F;
                        kk(c.id, vc[a], "6", D);
                        aj(c.rb, z, "failure", D);
                        m()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                kk(c.id, f, "1");
                var C = function() {
                    var D = Pa() - F;
                    kk(c.id, f, "7", D);
                    aj(c.rb, z, "exception", D);
                    y || (y = !0, m())
                };
                var F = Pa();
                try { Gc(x, { event: c, index: a, type: 1 }) } catch (D) { C(D) }
            }
        }
        var f = vc[a],
            g = b.onSuccess,
            m = b.onFailure,
            k = b.terminate;
        if (c.He(f)) return null;
        var n = Hc(f[Vb.Vf], c, []);
        if (n && n.length) {
            var p = n[0],
                r = tk(p.index, { onSuccess: g, onFailure: m, terminate: k }, c, d);
            if (!r) return null;
            g = r;
            m = 2 === p.jg ? k : r
        }
        if (f[Vb.Nf] || f[Vb.Rh]) {
            var v =
                f[Vb.Nf] ? Bc : c.nj,
                t = g,
                q = m;
            if (!v[a]) {
                e = Sa(e);
                var u = vk(a, v, e);
                g = u.onSuccess;
                m = u.onFailure
            }
            return function() { v[a](t, q) }
        }
        return e
    }

    function vk(a, b, c) {
        var d = [],
            e = [];
        b[a] = wk(d, e, c);
        return { onSuccess: function() { b[a] = xk; for (var f = 0; f < d.length; f++) d[f]() }, onFailure: function() { b[a] = yk; for (var f = 0; f < e.length; f++) e[f]() } }
    }

    function wk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function xk(a) { a() }

    function yk(a, b) { b() };
    var Bk = function(a, b) {
        for (var c = [], d = 0; d < vc.length; d++)
            if (a[d]) {
                var e = vc[d];
                var f = dj(b.rb);
                try {
                    var g = tk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var m = c,
                            k = m.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var r = Cc[p];
                        k.call(m, { Mg: n, Cg: r ? r.priorityOverride || 0 : 0, execute: g })
                    } else zk(d, b), f()
                } catch (q) { f() }
            }
        var v = b.rb;
        v.Z = !0;
        v.o >= v.s && bj(v);
        c.sort(Ak);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Ak(a, b) {
        var c, d = b.Cg,
            e = a.Cg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Mg,
                m = b.Mg;
            f = g > m ? 1 : g < m ? -1 : 0
        }
        return f
    }

    function zk(a, b) {
        if (!ek) return;
        var c = function(d) {
            var e = b.He(vc[d]) ? "3" : "4",
                f = Hc(vc[d][Vb.Sf], b, []);
            f && f.length && c(f[0].index);
            kk(b.id, vc[d], e);
            var g = Hc(vc[d][Vb.Vf], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Ck = !1;
    var Ik = function(a) {
        var b = Pa(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (Ck) return !1;
            Ck = !0;
        }
        var g = qe(c),
            m = !1;
        if (!g.active) {
            if ("gtm.js" !== d) return !1;
            m = !0;
            g = qe(Number.MAX_SAFE_INTEGER)
        }
        jk(c,
            d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var r = { id: c, name: d, He: oe(g.isAllowed), nj: [], vg: function() { Cd(6) }, eg: Dk(c), rb: new Zi(p, n) };
        r.dg = Ek();
        Fk(c, r.rb);
        var v = Mc(r);
        m && (v = Gk(v));
        var t = Bk(v, r);
        "gtm.js" !== d && "gtm.sync" !==
            d || pj(O.I);
        return Hk(v, t)
    };

    function Dk(a) { return function(b) { ek && (Ub(b) || sk(a, "input", b)) } }

    function Fk(a, b) {
        fe(a, "event", 1);
        fe(a, "ecommerce", 1);
        fe(a, "gtm");
        fe(a, "eventModel");
    }

    function Ek() {
        var a = {};
        a.event = ee("event", 1);
        a.ecommerce = ee("ecommerce", 1);
        a.gtm = ee("gtm");
        a.eventModel = ee("eventModel");
        return a
    }

    function Gk(a) { for (var b = [], c = 0; c < a.length; c++) a[c] && Ed[String(vc[c][Vb.qb])] && (b[c] = !0); return b }

    function Hk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && vc[c] && !Fd[String(vc[c][Vb.qb])]) return !0;
        return !1
    }

    function Jk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return gg("" + c + b).href
        }
    }

    function Kk(a, b) { return Lk() ? Jk(a, b) : void 0 }

    function Lk() { var a = !1; return a }

    function Mk() { return !!O.ed && "SGTM_TOKEN" !== O.ed.replaceAll("@@", "") };
    var Nk = function() { var a = !1; return a };
    var Ok;
    if (3 === O.dd.length) Ok = "g";
    else {
        var Pk = "G";
        Pk = "g";
        Ok = Pk
    }
    var Qk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Ok, OPT: "o" },
        Rk = function(a) {
            var b = O.I.split("-"),
                c = b[0].toUpperCase(),
                d = Qk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === O.dd.length) {
                var g = "w";
                g = Nk() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + O.dd + e
        };

    function Sk(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var Tk = function(a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) };

    function Uk() { return hb("iPhone") && !hb("iPod") && !hb("iPad") };
    hb("Opera");
    hb("Trident") || hb("MSIE");
    hb("Edge");
    !hb("Gecko") || -1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") || hb("Trident") || hb("MSIE") || hb("Edge"); - 1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") && hb("Mobile");
    hb("Macintosh");
    hb("Windows");
    hb("Linux") || hb("CrOS");
    var Vk = la.navigator || null;
    Vk && (Vk.appVersion || "").indexOf("X11");
    hb("Android");
    Uk();
    hb("iPad");
    hb("iPod");
    Uk() || hb("iPad") || hb("iPod");
    gb().toLowerCase().indexOf("kaios");
    var Wk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try { e = !(!c.frames || !c.frames[b]) } catch (m) { e = !1 }
                if (e) return c;
                var f;
                a: {
                    try { var g = c.parent; if (g && g != c) { f = g; break a } } catch (m) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        Xk = function(a) {
            if (!a || !B.head) return null;
            var b, c;
            c = void 0 === c ? document : c;
            b = c.createElement("meta");
            B.head.appendChild(b);
            b.httpEquiv = "origin-trial";
            b.content = a;
            return b
        };
    var Yk = function() {};
    var Zk = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        $k = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.K = void 0 === b ? 500 : b;
            this.s = null
        };
    ka($k, Yk);
    var bl = function(a) { return "function" === typeof a.o.__tcfapi || null != al(a) };
    $k.prototype.addEventListener = function(a) {
        var b = {},
            c = pb(function() { return a(b) }),
            d = 0; - 1 !== this.K && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.K));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Zk(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try { cl(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    $k.prototype.removeEventListener = function(a) { a && a.listenerId && cl(this, "removeEventListener", null, a.listenerId) };
    var el = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var m = c;
            2 === c ? (m = 0, 2 === g && (m = 1)) : 3 === c && (m = 1, 1 === g && (m = 0));
            var k;
            if (0 === m)
                if (a.purpose && a.vendor) {
                    var n = dl(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && dl(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === m ? a.purpose && a.vendor ? dl(a.purpose.legitimateInterests,
                b) && dl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        dl = function(a, b) { return !(!a || !a[b]) },
        cl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (al(a)) {
                fl(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*")
                }
            } else c({}, !1)
        },
        al = function(a) {
            if (a.m) return a.m;
            a.m = Wk(a.o, "__tcfapiLocator");
            return a.m
        },
        fl = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" ===
                        typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Tk(a.o, a.s))
        };
    var gl = !0;
    gl = !1;
    var hl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        il = Sk("", 550),
        jl = Sk("", 500);

    function kl() { var a = R.tcf || {}; return R.tcf = a }
    var ll = function(a, b) {
            this.s = a;
            this.m = b;
            this.o = Pa();
        },
        ml = function(a) {},
        nl = function(a) {},
        tl = function() {
            var a = kl(),
                b = new $k(l, gl ? 3E3 : -1),
                c = new ll(b, a);
            if ((ol() ? !0 === l.gtag_enable_tcf_support : !1 !== l.gtag_enable_tcf_support) && !a.active && ("function" === typeof l.__tcfapi || bl(b))) {
                a.active = !0;
                a.Cc = {};
                pl();
                var d = null;
                gl ? d = l.setTimeout(function() {
                    ql(a);
                    rl(a);
                    d = null
                }, jl) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) ql(a), rl(a), ml(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = sl(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    m;
                                for (m in hl)
                                    if (hl.hasOwnProperty(m))
                                        if ("1" === m) {
                                            var k = e,
                                                n = !0;
                                            n = void 0 === n ? !1 : n;
                                            var p;
                                            var r = k;
                                            !1 === r.gdprApplies ? p = !0 : (void 0 === r.internalErrorState && (r.internalErrorState = Zk(r)), p = "error" === r.cmpStatus || 0 !== r.internalErrorState || "loaded" === r.cmpStatus && ("tcloaded" === r.eventStatus || "useractioncomplete" ===
                                                r.eventStatus) ? !0 : !1);
                                            g["1"] = p ? !1 === k.gdprApplies || "tcunavailable" === k.tcString || void 0 === k.gdprApplies && !n || "string" !== typeof k.tcString || !k.tcString.length ? !0 : el(k, "1", 0) : !1
                                        } else g[m] = el(e, m, hl[m]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Cc = f, rl(a), ml(c))
                        }
                    }), nl(c)
                } catch (e) { d && (clearTimeout(d), d = null), ql(a), rl(a) }
            }
        };

    function ql(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        gl && (a.Cc = sl())
    }

    function pl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = il, a);
        Pe(b)
    }
    var ol = function() {
        var a = !1;
        a = !0;
        return a
    };

    function sl() {
        var a = {},
            b;
        for (b in hl) hl.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function rl(a) {
        var b = {},
            c = (b.ad_storage = a.Cc["1"] ? "granted" : "denied", b);
        Re(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: ul() })
    }
    var vl = function() { var a = kl(); if (a.active && void 0 !== a.loadTime) return Number(a.loadTime) },
        ul = function() { var a = kl(); return a.active ? a.tcString || "" : "" },
        wl = function() { var a = kl(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        xl = function(a) { if (!hl.hasOwnProperty(String(a))) return !0; var b = kl(); return b.active && b.Cc ? !!b.Cc[String(a)] : !0 };
    var El = !1;
    var Fl = function() { this.m = {} },
        Gl = function(a, b, c) { null != c && (a.m[b] = c) },
        Hl = function(a) { return Object.keys(a.m).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]) }).join("&") },
        Jl = function(a, b, c, d, e) {};
    var Ll = /[A-Z]+/,
        Ml = /\s/,
        Nl = function(a) {
            if (ta(a)) {
                a = Ka(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ll.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || Ml.test(e[f]) && ("AW" !== c || 1 !== f || !d)) return;
                        return { id: a, prefix: c, containerId: c + "-" + e[0], M: e }
                    }
                }
            }
        },
        Pl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d =
                    Nl(a[c]);
                d && (b[d.id] = d)
            }
            Ol(b);
            var e = [];
            Ca(b, function(f, g) { e.push(g) });
            return e
        };

    function Ol(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.M[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Rl = function(a, b, c, d) { return (2 === Ql() || d || "http:" != l.location.protocol ? a : b) + c },
        Ql = function() {
            var a = Ab(),
                b;
            if (1 === a) a: {
                var c = Id;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), m = 0; m < g.length && 100 > m; m++) {
                    var k = g[m].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Tl = function(a, b, c) {
            if (l[a.functionName]) return b.Oe && G(b.Oe), l[a.functionName];
            var d = Sl();
            l[a.functionName] = d;
            if (a.hd)
                for (var e = 0; e < a.hd.length; e++) l[a.hd[e]] = l[a.hd[e]] || Sl();
            a.td && void 0 === l[a.td] && (l[a.td] = c);
            zb(Rl("https://", "http://", a.Ue), b.Oe, b.Ti);
            return d
        },
        Sl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ul = { functionName: "_googWcmImpl", td: "_googWcmAk", Ue: "www.gstatic.com/wcm/loader.js" },
        Vl = { functionName: "_gaPhoneImpl", td: "ga_wpid", Ue: "www.gstatic.com/gaphone/loader.js" },
        Wl = { Xg: "", Sh: "5" },
        Xl = { functionName: "_googCallTrackingImpl", hd: [Vl.functionName, Ul.functionName], Ue: "www.gstatic.com/call-tracking/call-tracking_" + (Wl.Xg || Wl.Sh) + ".js" },
        Yl = {},
        Zl = function(a, b, c, d) {
            Cd(22);
            if (c) {
                d = d || {};
                var e = Tl(Ul, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.Pa && (f.autoreplace = c);
                e(2, d.Pa, f, c, 0, Oa(), d.options)
            }
        },
        $l = function(a, b, c, d) {
            Cd(21);
            if (b && c) {
                d = d || {};
                for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Oa() }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Yl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = { ak: g.M[0], cl: g.M[1] }, Yl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = { gaWpid: g.containerId }, Yl[g.id] = !0))
                }(e.gaData || e.adData) && Tl(Xl, d)(d.Pa, e, d.options)
            }
        },
        am = function() { var a = !1; return a },
        bm = function(a, b) {
            if (a)
                if (Nk()) {} else {
                    if (ta(a)) {
                        var c =
                            Nl(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(N.Ah);
                    if (f && va(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var m = Nl(f[g]);
                            m && (d.push(m), (a.id === m.id || a.id === a.containerId && a.containerId === m.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(N.Ef),
                            n;
                        if (k) {
                            va(k) ? n = k : n = [k];
                            var p = b.getWithConfig(N.Cf),
                                r = b.getWithConfig(N.Df),
                                v = b.getWithConfig(N.Ff),
                                t = b.getWithConfig(N.zh),
                                q = p || r,
                                u = 1;
                            "UA" !== a.prefix || d || (u = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < u)
                                    if (d) $l(d, n[x], t, { Pa: q, options: v });
                                    else if ("AW" === a.prefix &&
                                a.M[1]) am() ? $l([a], n[x], t || "US", { Pa: q, options: v }) : Zl(a.M[0], a.M[1], n[x], { Pa: q, options: v });
                            else if ("UA" === a.prefix)
                                if (am()) $l([a], n[x], t || "US", { Pa: q });
                                else {
                                    var A = a.containerId,
                                        w = n[x],
                                        z = { Pa: q };
                                    Cd(23);
                                    if (w) {
                                        z = z || {};
                                        var y = Tl(Vl, z, A),
                                            C = {};
                                        void 0 !== z.Pa ? C.receiver = z.Pa : C.replace = w;
                                        C.ga_wpid = A;
                                        C.destination = w;
                                        y(2, Oa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var jm = !1;

    function km() {
        if (sa(rb.joinAdInterestGroup)) return !0;
        jm || (Xk(''), jm = !0);
        return sa(rb.joinAdInterestGroup)
    };
    var hn = function() {
            var a = !0;
            xl(7) && xl(9) && xl(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !gn() && (a = !1);
            return a
        },
        gn = function() {
            var a = !0;
            xl(3) && xl(4) || (a = !1);
            return a
        };
    var mn = function(a, b) {
            var c = b.getWithConfig(N.Ka),
                d = b.getWithConfig(N.Wa),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                jn.hasOwnProperty(c) ? f = jn[c] : kn.hasOwnProperty(c) && (f = kn[c]);
                1 === f && (f = ln(c));
                ta(f) ? jj()(function() {
                    var g = jj().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else d(e);
        },
        nn = function(a, b) {
            var c = a[N.fc];
            mj(b + ".", a[N.N] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[N.Mb])
        },
        rn = function(a, b, c) {
            if (Fe() && (!c.isGtmEvent || !on[a])) {
                var d = !Se(N.H),
                    e = function() {
                        var f, g, m = jj(),
                            k = pn(b, "", c),
                            n, p = k.createOnlyFields._useUp;
                        if (c.isGtmEvent || qn(b, k.createOnlyFields)) {
                            var r = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + Pd();
                                g = k.createOnlyFields;
                                k.gtmTrackerName && (g.name = f);
                                r = !1;
                                r = !0;
                            }
                            r && m(function() {
                                var t = m.getByName(b);
                                t && (n = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? g : k.createOnlyFields);
                            d && Se(N.H) && (d = !1, m(function() { var t = jj().getByName(c.isGtmEvent ? f : b);!t || t.get("clientId") == n && p || (c.isGtmEvent ? k.fieldsToSet["&gcu"] = "1" : k.fieldsToSend["&gcu"] = "1", t.set(k.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", k.fieldsToSend)) }));
                            c.isGtmEvent &&
                                m(function() { m.remove(f) })
                        }
                    };
                Ke(e, N.H);
                Ke(e, N.C);
                c.isGtmEvent && (on[a] = !0)
            }
        },
        sn = function(a, b) { Mk() && b && (a[N.lb] = b) },
        Bn = function(a, b, c) {
            function d() {
                var J = c.getWithConfig(N.bc);
                m(function() {
                    if (!c.isGtmEvent && Tb(J)) {
                        var I = q.fieldsToSend,
                            M = k().getByName(n),
                            L;
                        for (L in J)
                            if (J.hasOwnProperty(L) && /^(dimension|metric)\d+$/.test(L) && void 0 != J[L]) {
                                var K = M.get(ln(J[L]));
                                tn(I, L, K)
                            }
                    }
                })
            }

            function e() {
                if (q.displayfeatures) {
                    var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: J })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                m = c.isGtmEvent ? lj(c.getWithConfig("gaFunctionName")) : lj();
            if (sa(m)) {
                var k = jj,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(J) {
                        var I = [].slice.call(arguments, 0);
                        I[0] = n ? n + "." + I[0] : "" + I[0];
                        m.apply(window, I)
                    },
                    r = function(J) {
                        var I = function(S, qa) { for (var ra = 0; qa && ra < qa.length; ra++) p(S, qa[ra]) },
                            M = c.isGtmEvent,
                            L = M ? un(q) : vn(b, c);
                        if (L) {
                            var K = {};
                            sn(K, J);
                            p("require", "ec", "ec.js",
                                K);
                            M && L.we && p("set", "&cu", L.we);
                            var T = L.action;
                            if (M || "impressions" === T)
                                if (I("ec:addImpression", L.qg), !M) return;
                            if ("promo_click" === T || "promo_view" === T || M && L.Bc) {
                                var V = L.Bc;
                                I("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === T) { M ? p("ec:setAction", T, L.ab) : p("ec:setAction", T); return }
                                if (!M) return
                            }
                            "promo_view" !== T && "impressions" !== T && (I("ec:addProduct", L.xb), p("ec:setAction", T, L.ab))
                        }
                    },
                    v = function(J) {
                        if (J) {
                            var I = {};
                            if (Tb(J))
                                for (var M in wn) wn.hasOwnProperty(M) && xn(wn[M], M, J[M], I);
                            p("require", "linkid", I)
                        }
                    },
                    t = function() {
                        if (Nk()) {} else {
                            var J = c.getWithConfig(N.yh);
                            J && (p("require", J, { dataLayer: O.U }), p("require", "render"))
                        }
                    },
                    q = pn(n, b, c),
                    u = function(J, I, M) {
                        M && (I = "" + I);
                        q.fieldsToSend[J] = I
                    };
                !c.isGtmEvent && qn(n, q.createOnlyFields) && (m(function() { k() && k().remove(n) }), yn[n] = !1);
                m("create", f, q.createOnlyFields);
                if (q.createOnlyFields[N.lb] &&
                    !c.isGtmEvent) {
                    var x = Kk(q.createOnlyFields[N.lb], "/analytics.js");
                    x && (g = x)
                }
                var A = c.isGtmEvent ? q.fieldsToSet[N.lb] : q.createOnlyFields[N.lb];
                if (A) {
                    var w = c.isGtmEvent ? q.fieldsToSet[N.Qc] : q.createOnlyFields[N.Qc];
                    w && !yn[n] && (yn[n] = !0, m(qj(n, w)))
                }
                c.isGtmEvent ? q.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), v(q.linkAttribution));
                var z = q[N.ja];
                z && z[N.N] && nn(z, n);
                p("set", q.fieldsToSet);
                if (c.isGtmEvent) {
                    if (q.enableLinkId) {
                        var y = {};
                        p("require", "linkid", "linkid.js", y)
                    }
                    Fe() && rn(f, n, c)
                }
                if (b === N.Zb)
                    if (c.isGtmEvent) {
                        e();
                        if (q.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: C })
                        }
                        r(A);
                        p("send", "pageview");
                        q.createOnlyFields._useUp && nj(n + ".")
                    } else t(), p("send", "pageview", q.fieldsToSend);
                else b === N.xa ? (t(), bm(f, c), c.getWithConfig(N.Za) && (ui(["aw", "dc"]), nj(n + ".")), 0 != q.sendPageView && p("send", "pageview", q.fieldsToSend),
                        rn(f, n, c), !c.isGtmEvent && 0 < Of(c).length && (Cd(68), 1 < R.configCount && Cd(69))) : b === N.Ia ? mn(n, c) : "screen_view" === b ? p("send", "screenview", q.fieldsToSend) : "timing_complete" === b ? (q.fieldsToSend.hitType = "timing", u("timingCategory", q.eventCategory, !0), c.isGtmEvent ? u("timingVar", q.timingVar, !0) : u("timingVar", q.name, !0), u("timingValue", Fa(q.value)), void 0 !== q.eventLabel && u("timingLabel", q.eventLabel, !0), p("send", q.fieldsToSend)) : "exception" === b ? p("send", "exception", q.fieldsToSend) : "optimize.callback" === b || "" ===
                    b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (q.fieldsToSend.hitType = "social", u("socialNetwork", q.socialNetwork, !0), u("socialAction", q.socialAction, !0), u("socialTarget", q.socialTarget, !0)) : ((c.isGtmEvent || zn[b]) && r(A), c.isGtmEvent && e(), q.fieldsToSend.hitType = "event", u("eventCategory", q.eventCategory, !0), u("eventAction", q.eventAction || b, !0), void 0 !== q.eventLabel && u("eventLabel", q.eventLabel, !0), void 0 !== q.value && u("eventValue", Fa(q.value))), p("send", q.fieldsToSend));
                var F = !1;
                var D = An;
                F && (D = c.getContainerTypeLoaded("UA"));
                if (!D && !c.isGtmEvent) {
                    An = !0;
                    F && c.setContainerTypeLoaded("UA", !0);
                    ej();
                    var E = function() {
                            F && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        P = function() { k().loaded || E() };
                    Nk() ? G(P) : zb(g, P, E)
                }
            } else G(c.onFailure)
        },
        Cn = function(a, b, c, d) { bf(function() { Bn(a, b, d) }, [N.H, N.C]) },
        En = function(a, b) {
            function c(f) {
                function g(p, r) { for (var v = 0; v < r.length; v++) { var t = r[v]; if (f[t]) { k[p] = f[t]; break } } }

                function m() {
                    if (f.category) k.category = f.category;
                    else {
                        for (var p = "", r = 0; r < Dn.length; r++) void 0 !== f[Dn[r]] && (p && (p += "/"), p += f[Dn[r]]);
                        p && (k.category = p)
                    }
                }
                var k = H(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]), m();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return k
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Tb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        Fn = function(a) { return Se(a) },
        Gn = !1;
    var An, yn = {},
        on = {},
        Hn = {},
        jn = Object.freeze((Hn.client_storage =
            "storage", Hn.sample_rate = 1, Hn.site_speed_sample_rate = 1, Hn.store_gac = 1, Hn.use_amp_client_id = 1, Hn[N.kb] = 1, Hn[N.na] = "storeGac", Hn[N.ia] = 1, Hn[N.oa] = 1, Hn[N.Da] = 1, Hn[N.Hb] = 1, Hn[N.Va] = 1, Hn[N.Ib] = 1, Hn)),
        In = {},
        Jn = Object.freeze((In._cs = 1, In._useUp = 1, In.allowAnchor = 1, In.allowLinker = 1, In.alwaysSendReferrer = 1, In.clientId = 1, In.cookieDomain = 1, In.cookieExpires = 1, In.cookieFlags = 1, In.cookieName = 1, In.cookiePath = 1, In.cookieUpdate = 1, In.legacyCookieDomain = 1, In.legacyHistoryImport = 1, In.name = 1, In.sampleRate = 1, In.siteSpeedSampleRate =
            1, In.storage = 1, In.storeGac = 1, In.useAmpClientId = 1, In._cd2l = 1, In)),
        Kn = Object.freeze({ anonymize_ip: 1 }),
        Ln = {},
        kn = Object.freeze((Ln.campaign = { content: "campaignContent", id: "campaignId", medium: "campaignMedium", name: "campaignName", source: "campaignSource", term: "campaignKeyword" }, Ln.app_id = 1, Ln.app_installer_id = 1, Ln.app_name = 1, Ln.app_version = 1, Ln.description = "exDescription", Ln.fatal = "exFatal", Ln.language = 1, Ln.page_hostname = "hostname", Ln.transport_type = "transport", Ln[N.da] = "currencyCode", Ln[N.Af] = 1, Ln[N.ob] =
            "location", Ln[N.Zd] = "page", Ln[N.La] = "referrer", Ln[N.Sc] = "title", Ln[N.Hf] = 1, Ln[N.$a] = 1, Ln)),
        Mn = {},
        Nn = Object.freeze((Mn.content_id = 1, Mn.event_action = 1, Mn.event_category = 1, Mn.event_label = 1, Mn.link_attribution = 1, Mn.name = 1, Mn[N.ja] = 1, Mn[N.zf] = 1, Mn[N.ka] = 1, Mn[N.fa] = 1, Mn)),
        On = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Dn = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Pn = {},
        wn = Object.freeze((Pn.levels = 1, Pn[N.oa] = "duration", Pn[N.Hb] = 1, Pn)),
        Qn = {},
        Rn = Object.freeze((Qn.anonymize_ip = 1, Qn.fatal = 1, Qn.send_page_view = 1, Qn.store_gac = 1, Qn.use_amp_client_id = 1, Qn[N.na] = 1, Qn[N.Af] = 1, Qn)),
        xn = function(a, b, c, d) {
            if (void 0 !== c)
                if (Rn[b] && (c = Ga(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[ln(b)] = c;
                else if (ta(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) &&
                    void 0 !== c[e] && (d[a[e]] = c[e])
        },
        ln = function(a) { return a && ta(a) ? a.replace(/(_[a-z])/g, function(b) { return b[1].toUpperCase() }) : a },
        Sn = {},
        zn = Object.freeze((Sn.checkout_progress = 1, Sn.select_content = 1, Sn.set_checkout_option = 1, Sn[N.Eb] = 1, Sn[N.Fb] = 1, Sn[N.hb] = 1, Sn[N.Ua] = 1, Sn[N.ib] = 1, Sn[N.va] = 1, Sn[N.Gb] = 1, Sn[N.wa] = 1, Sn)),
        Tn = {},
        Un = Object.freeze((Tn.checkout_progress = 1, Tn.set_checkout_option = 1, Tn[N.hf] = 1, Tn[N.Eb] = 1, Tn[N.Fb] = 1, Tn[N.hb] = 1, Tn[N.va] = 1, Tn[N.Gb] = 1, Tn[N.jf] = 1, Tn)),
        Vn = {},
        Wn = Object.freeze((Vn.generate_lead =
            1, Vn.login = 1, Vn.search = 1, Vn.select_content = 1, Vn.share = 1, Vn.sign_up = 1, Vn.view_search_results = 1, Vn[N.Ua] = 1, Vn[N.ib] = 1, Vn[N.wa] = 1, Vn)),
        Xn = function(a) {
            var b = "general";
            Un[a] ? b = "ecommerce" : Wn[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Yn = {},
        Zn = Object.freeze((Yn.view_search_results = 1, Yn[N.Ua] = 1, Yn[N.ib] = 1, Yn[N.wa] = 1, Yn)),
        tn = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
        $n = function(a) {
            if (va(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 !=
                            f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        pn = function(a, b, c) {
            function d(I, M) { void 0 !== M && (m[I] = M) }
            var e = function(I) { return c.getWithConfig(I) },
                f = {},
                g = {},
                m = {},
                k = {},
                n = $n(e(N.xh));
            !c.isGtmEvent && n && tn(g, "exp", n);
            m["&gtm"] = Rk(!0);
            Fe() && (k._cs = Fn);
            var p = e(N.bc);
            if (!c.isGtmEvent && Tb(p))
                for (var r in p)
                    if (p.hasOwnProperty(r) && /^(dimension|metric)\d+$/.test(r) && void 0 != p[r]) {
                        var v = e(String(p[r]));
                        void 0 !== v && tn(g, r, v)
                    }
            for (var t = Lf(c), q = 0; q < t.length; ++q) {
                var u = t[q];
                if (c.isGtmEvent) {
                    var x =
                        e(u);
                    On.hasOwnProperty(u) ? f[u] = x : Jn.hasOwnProperty(u) ? k[u] = x : m[u] = x
                } else {
                    var A = void 0;
                    A = u !== N.V ? e(u) : Mf(c, u);
                    if (Nn.hasOwnProperty(u)) xn(Nn[u], u, A, f);
                    else if (Kn.hasOwnProperty(u)) xn(Kn[u], u, A, m);
                    else if (kn.hasOwnProperty(u)) xn(kn[u], u, A, g);
                    else if (jn.hasOwnProperty(u)) xn(jn[u], u, A, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(u)) xn(1, u, A, g);
                    else if (u === N.V) {
                        if (!Gn) {
                            var w = $a(A);
                            w && (g["&did"] = w)
                        }
                        var z = void 0,
                            y = void 0;
                        b === N.xa ? z = $a(Mf(c, u), ".") : (z = $a(Mf(c, u, 1), "."), y = $a(Mf(c, u, 2), "."));
                        z && (g["&gdid"] =
                            z);
                        y && (g["&edid"] = y)
                    } else u === N.ya && 0 > t.indexOf(N.Hb) && (k.cookieName = A + "_ga")
                }
            }!1 !== e(N.nh) && !1 !== e(N.$b) && hn() || (m.allowAdFeatures = !1);
            if (!1 === e(N.W) || !gn()) {
                var C = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                m[C] = !1
            }!c.isGtmEvent && e(N.Za) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || f.gtmTrackerName;
                var F = m.hitCallback;
                m.hitCallback = function() {
                    sa(F) &&
                        F();
                    c.onSuccess()
                }
            } else {
                tn(k, "cookieDomain", "auto");
                tn(m, "forceSSL", !0);
                tn(f, "eventCategory", Xn(b));
                Zn[b] && tn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? tn(f, "eventLabel", e(N.zf)) : "search" === b || "view_search_results" === b ? tn(f, "eventLabel", e(N.Ch)) : "select_content" === b && tn(f, "eventLabel", e(N.rh));
                var D = f[N.ja] || {},
                    E = D[N.Lb];
                E || 0 != E && D[N.N] ? k.allowLinker = !0 : !1 === E && tn(k, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                k.name = a
            }
            Fe() && (m["&gcs"] = Te(), Se(N.H) || (k.storage = "none"), Se(N.C) || (m.allowAdFeatures = !1, k.storeGac = !1));
            var P = e(N.qa) || e(N.lb),
                J = e(N.Qc);
            P && (c.isGtmEvent || (k[N.lb] = P), k._cd2l = !0);
            J && !c.isGtmEvent && (k[N.Qc] = J);
            f.fieldsToSend = g;
            f.fieldsToSet = m;
            f.createOnlyFields = k;
            return f
        },
        un = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.we = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d =
                    b.impressions;
                c.qg = "impressions" === b.translateIfKeyEquals ? En(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Bc = "promoView" === b.translateIfKeyEquals ? En(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Bc = "promoClick" === b.translateIfKeyEquals ? En(f, !0) : f;
                c.ab = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action =
                        g;
                    var m = b[g].products;
                    c.xb = "products" === b.translateIfKeyEquals ? En(m, !0) : m;
                    c.ab = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        vn = function(a, b) {
            function c(t) { return { id: d(N.Ya), affiliation: d(N.uh), revenue: d(N.fa), tax: d(N.vf), shipping: d(N.Qd), coupon: d(N.vh), list: d(N.Pd) || t } }
            for (var d = function(t) { return b.getWithConfig(t) }, e = d(N.aa), f, g = 0; e && g < e.length && !(f = e[g][N.Pd]); g++);
            var m = d(N.bc);
            if (Tb(m))
                for (var k = 0; e && k < e.length; ++k) {
                    var n = e[k],
                        p;
                    for (p in m) m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != m[p] && tn(n, p, n[m[p]])
                }
            var r = null,
                v = d(N.wh);
            a === N.va || a === N.Gb ? r = { action: a, ab: c(), xb: En(e) } : a === N.Eb ? r = { action: "add", xb: En(e) } : a === N.Fb ? r = { action: "remove", xb: En(e) } : a === N.wa ? r = { action: "detail", ab: c(f), xb: En(e) } : a === N.Ua ? r = { action: "impressions", qg: En(e) } : "view_promotion" === a ? r = { action: "promo_view", Bc: En(v) } : "select_content" === a && v && 0 < v.length ? r = { action: "promo_click", Bc: En(v) } : "select_content" === a ? r = { action: "click", ab: { list: d(N.Pd) || f }, xb: En(e) } : a === N.hb || "checkout_progress" === a ? r = {
                action: "checkout",
                xb: En(e),
                ab: { step: a === N.hb ? 1 : d(N.uf), option: d(N.tf) }
            } : "set_checkout_option" === a && (r = { action: "checkout_option", ab: { step: d(N.uf), option: d(N.tf) } });
            r && (r.we = d(N.da));
            return r
        },
        ao = {},
        qn = function(a, b) {
            var c = ao[a];
            ao[a] = H(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var bo = !1;
    bo = !0;

    function co() { var a = R; return a.gcq = a.gcq || new eo }
    var fo = function(a, b, c) { co().register(a, b, c) },
        go = function(a, b, c, d) { co().push("event", [b, a], c, d) },
        ho = function(a, b) { co().push("config", [a], b) },
        io = function(a, b, c, d) { co().push("get", [a, b], c, d) },
        jo = {},
        ko = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.m = !1
        },
        lo = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.R = c || "";
            this.m = d;
            this.o = e
        },
        eo = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = { AW: !1, UA: !1 }
        },
        mo = function(a, b) {
            var c = Nl(b);
            return a.o[c.containerId] =
                a.o[c.containerId] || new ko
        },
        no = function(a, b, c) {
            if (b) {
                var d = Nl(b);
                if (d && 1 === mo(a, b).status) {
                    mo(a, b).status = 2;
                    var e = {};
                    ek && (e.timeoutId = l.setTimeout(function() {
                        Cd(38);
                        Kj()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    jo[d.containerId] = Pa();
                    if (Nk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + O.U + "&cx=c";
                        Mk() && (g += "&sign=" + O.ed);
                        var m = ("http:" != l.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Kk(c, g) || m;
                        zb(k)
                    }
                }
            }
        },
        oo = function(a, b, c, d) {
            if (d.R) {
                var e = mo(a, d.R),
                    f = e.s;
                if (f) {
                    var g = H(c),
                        m = H(e.targetConfig[d.R]),
                        k = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.s),
                        r = ae("gtm.uniqueEventId"),
                        v = Nl(d.R).prefix,
                        t = Sa(function() {
                            var u = g[N.Kb];
                            u && G(u)
                        }),
                        q = Jf(If(Kf(Hf(Ff(Gf(Ef(Df(Cf(g), m), k), n), p), function() {
                            rk(r, v, "2");
                            bo && t()
                        }), function() {
                            rk(r, v, "3");
                            bo && t()
                        }), function(u, x) { a.D[u] = x }), function(u) { return a.D[u] });
                    try {
                        rk(r, v, "1");
                        f(d.R, b, d.s, q)
                    } catch (u) { rk(r, v, "4"); }
                }
            }
        };
    eo.prototype.register = function(a, b, c) {
        var d = mo(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = Nl(a),
                f = jo[e.containerId];
            if (void 0 !== f) {
                var g = R[e.containerId].bootstrap,
                    m = e.prefix.toUpperCase();
                R[e.containerId]._spx && (m = m.toLowerCase());
                var k = ae("gtm.uniqueEventId"),
                    n = m,
                    p = Pa() - g;
                if (ek && !Pj[k]) {
                    k !== Lj && (Gj(), Lj = k);
                    var r = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Tj = Tj ? Tj + "," + r : "&cl=" + r
                }
                delete jo[e.containerId]
            }
            this.flush()
        }
    };
    eo.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Pa() / 1E3);
        no(this, c, b[0][N.qa] || this.s[N.qa]);
        c && mo(this, c).m && (d = !1);
        this.m.push(new lo(a, e, c, b, d));
        d || this.flush()
    };
    eo.prototype.insert = function(a, b, c) {
        var d = Math.floor(Pa() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new lo(a, d, c, b, !1)) : this.m.push(new lo(a, d, c, b, !1))
    };
    eo.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.R || mo(this, f.R).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== mo(this, f.R).status && !a) { this.m.push.apply(this.m, c); return }
                        ek && l.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Ca(f.m[0], function(v, t) { H(Ya(v, t), b.s) });
                        break;
                    case "config":
                        e.Ha = {};
                        Ca(f.m[0], function(v) { return function(t, q) { H(Ya(t, q), v.Ha) } }(e));
                        var g = !!e.Ha[N.Wc];
                        delete e.Ha[N.Wc];
                        var m =
                            mo(this, f.R),
                            k = Nl(f.R),
                            n = k.containerId === k.id;
                        g || (n ? m.containerConfig = {} : m.targetConfig[f.R] = {});
                        m.m && g || oo(this, N.xa, e.Ha, f);
                        m.m = !0;
                        delete e.Ha[N.Nb];
                        n ? H(e.Ha, m.containerConfig) : H(e.Ha, m.targetConfig[f.R]);
                        d = !0;
                        break;
                    case "event":
                        e.Gc = {};
                        Ca(f.m[0], function(v) { return function(t, q) { H(Ya(t, q), v.Gc) } }(e));
                        oo(this, f.m[1], e.Gc, f);
                        break;
                    case "get":
                        var p = {},
                            r = (p[N.Ka] = f.m[0], p[N.Wa] = f.m[1], p);
                        oo(this, N.Ia, r, f)
                }
                this.m.shift();
                po(this, f)
            }
            e = { Ha: e.Ha, Gc: e.Gc }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var po = function(a, b) {
        if ("require" !== b.type)
            if (b.R)
                for (var c = a.getCommandListeners(b.R)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], m = 0; m < g.length; m++) g[m]()
                    }
    };
    eo.prototype.getRemoteConfig = function(a) { return mo(this, a).remoteConfig };
    eo.prototype.getCommandListeners = function(a) { return mo(this, a).o };
    var qo = {},
        ro = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = qo[b[c]] || [];
                qo[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        so = function(a) {
            Ca(qo, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var to = "HA GF G UA AW DC".split(" "),
        vo = !1;
    vo = !0;
    var wo = !1,
        xo = !1,
        yo = 0;

    function zo(a, b) {
        var c = { event: a };
        b && (c.eventModel = H(b), b[N.Kb] && (c.eventCallback = b[N.Kb]), b[N.Pc] && (c.eventTimeout = b[N.Pc]));
        return c
    }

    function Ao(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: Pd() }); return a["gtm.uniqueEventId"] }

    function Bo() {
        if (!wo && !R.gtagRegistered) {
            wo = R.gtagRegistered = !0;
            R.addTargetToGroup = function(c) { ro(c, "default") };
            var a = R.pendingDefaultTargets;
            delete R.pendingDefaultTargets;
            if (va(a))
                for (var b = 0; b < a.length; ++b) ro(a[b], "default")
        }
        return wo
    }
    var Co = {
            config: function(a) {
                var b, c = Ao(a);
                if (2 > a.length || !ta(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Tb(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = Nl(a[1]);
                if (!e) return;
                so(e.id);
                ro(e.id, d[N.Vd] || "default");
                delete d[N.Vd];
                xo || Cd(43);
                if (Bo() && -1 !== to.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[N.Nb] = !0);
                    vo && delete d[N.Kb];
                    e.id === e.containerId && (R.configCount = ++yo);
                    ho(d, e.id);
                    return
                }
                de("gtag.targets." + e.id, void 0);
                de("gtag.targets." + e.id, H(d));
                var f = {};
                f[N.pb] = e.id;
                b = zo(N.xa, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                function b() { Bo() && H(a[2], { subcommand: a[1] }) }
                if (3 === a.length) {
                    Cd(39);
                    var c = Pd(),
                        d = a[1];
                    "default" === d ? (b(), Pe(a[2])) : "update" === d && (b(), Re(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && ta(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Tb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = zo(b, c),
                        e = Ao(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[N.pb];
                    void 0 === g && (g = ae(N.pb, 2),
                        void 0 === g && (g = "default"));
                    if (ta(g) || va(g)) {
                        for (var m = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < m.length; n++)
                            if (0 <= m[n].indexOf("-")) k.push(m[n]);
                            else {
                                var p = qo[m[n]];
                                p && p.length && (k = k.concat(p))
                            }
                        f = Pl(k)
                    } else f = void 0;
                    var r = f;
                    if (!r) return;
                    for (var v = Bo(), t = [], q = 0; v && q < r.length; q++) {
                        var u = r[q];
                        if (-1 !== to.indexOf(u.prefix)) {
                            var x = H(c);
                            "G" === u.prefix && (x[N.Nb] = !0);
                            vo && delete x[N.Kb];
                            go(b, x, u.id)
                        }
                        t.push(u.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < r.length ? d.eventModel[N.pb] = t.join() : delete d.eventModel[N.pb];
                    xo || Cd(43);
                    return d
                }
            },
            get: function(a) {
                Cd(53);
                if (4 !== a.length || !ta(a[1]) || !ta(a[2]) || !sa(a[3])) return;
                var b = Nl(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                xo || Cd(43);
                if (!Bo() || -1 === to.indexOf(b.prefix)) return;
                Pd();
                var e = {};
                Le(H((e[N.Ka] = c, e[N.Wa] = d, e)));
                io(c, function(f) { G(function() { return d(f) }) }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    xo = !0;
                    Bo();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = Ao(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Tb(a[1]) ? b = H(a[1]) : 3 == a.length && ta(a[1]) && (b = {}, Tb(a[2]) || va(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (Pd(), Bo()) {
                        H(b);
                        var c = H(b);
                        co().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        Do = { policy: !0 };
    var Eo = function() {
        this.m = [];
        this.o = []
    };
    Eo.prototype.push = function(a, b, c) {
        var d = { Hj: c, message: a, yc: b, Bg: this.m.length + 1 };
        this.m.push(d);
        for (var e = 0; e < this.o.length; e++) try { this.o[e](d) } catch (f) {}
    };
    Eo.prototype.ug = function(a) { this.o.push(a) };
    Eo.prototype.get = function() {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b],
                d = a[c.yc];
            d || (d = [], a[c.yc] = d);
            d.push(c)
        }
        return a
    };
    Eo.prototype.get = Eo.prototype.get;
    Eo.prototype.listen = Eo.prototype.ug;
    Eo.prototype.push = Eo.prototype.push;

    function Fo(a, b) { return a.yc - b.yc || a.Bg - b.Bg };
    var Go = function(a) {
            var b = l[O.U].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                c && (b.end(), b.end = null)
            }
        },
        Ho = function(a) {
            var b = l[O.U],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Io = !1,
        Jo = [];

    function Ko() { if (!Io) { Io = !0; for (var a = 0; a < Jo.length; a++) G(Jo[a]) } }
    var Lo = function(a) { Io ? G(a) : Jo.push(a) };
    var bp = function(a) {
        if (ap(a)) return a;
        this.m = a
    };
    bp.prototype.Ai = function() { return this.m };
    var ap = function(a) { return !a || "object" !== Qb(a) || Tb(a) ? !1 : "getUntrustedUpdateValue" in a };
    bp.prototype.getUntrustedUpdateValue = bp.prototype.Ai;
    var cp = 0,
        dp, ep = {},
        fp = [],
        gp = [],
        hp = !1,
        ip = !1,
        jp = function(a) { return l[O.U].push(a) },
        kp = function(a, b) {
            var c = R[O.U],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = l.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {++e === d && (g && (l.clearTimeout(g), g = void 0), f || (a(), f = !0)) }
        };

    function lp(a) {
        var b = a._clear;
        Ca(a, function(d, e) { "_clear" !== d && (b && de(d, void 0), de(d, e)) });
        Kd || (Kd = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Pd(), a["gtm.uniqueEventId"] = c, de("gtm.uniqueEventId", c));
        return Ik(a)
    }

    function mp(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Ea(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }

    function np() {
        for (var a = !1; !ip && (0 < fp.length || 0 < gp.length);) {
            if (!hp && mp(fp[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = fp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                fp.unshift(c, e);
                hp = !0
            }
            ip = !0;
            delete Yd.eventModel;
            $d();
            var g = null;
            null == g && (g = fp.shift());
            if (null != g) {
                var m = ap(g);
                if (m) {
                    var k = g;
                    g = ap(k) ? k.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], p = 0; p < n.length; p++) {
                        var r = n[p],
                            v = ae(r, 1);
                        if (va(v) || Tb(v)) v = H(v);
                        Zd[r] = v
                    }
                }
                try {
                    if (sa(g)) try { g.call(be) } catch (C) {} else if (va(g)) {
                        var t = g;
                        if (ta(t[0])) {
                            var q = t[0].split("."),
                                u = q.pop(),
                                x = t.slice(1),
                                A = ae(q.join("."), 2);
                            if (void 0 !== A && null !== A) try {
                                A[u].apply(A,
                                    x)
                            } catch (C) {}
                        }
                    } else {
                        if (Ea(g)) {
                            a: {
                                var w = g;
                                if (w.length && ta(w[0])) { var z = Co[w[0]]; if (z && (!m || !Do[w[0]])) { g = z(w); break a } }
                                g = void 0
                            }
                            if (!g) { ip = !1; continue }
                        }
                        a = lp(g) || a;
                    }
                } finally { m && $d(!0) }
            }
            ip = !1
        }
        return !a
    }

    function pp() { var b = np(); try { Go(O.I) } catch (c) {} return b }
    var sp = function() {
        var a = ub(O.U, []),
            b = ub("google_tag_manager", {});
        b = b[O.U] = b[O.U] || {};
        Xi(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
        Lo(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < R.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f =
                        0; f < arguments.length; f++) e[f] = new bp(arguments[f])
            } else e = [].slice.call(arguments, 0);
            var g, m = !0;
            m = !1;
            g = m;
            !g && fp.push.apply(fp, e);
            var k = c.apply(a, e);
            g && fp.push.apply(fp, e);
            if (300 < this.length)
                for (Cd(4); 300 < this.length;) this.shift();
            var n = "boolean" !== typeof k || k;
            return np() && n
        };
        var d = a.slice(0);
        fp.push.apply(fp, d);
        if (qp()) { G(pp) }
    };
    var qp = function() { var a = !0; return a };

    function tp(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Pa();
        return b < c + 3E5 && b > c - 9E5
    };
    var up = function(a) { R.addTargetToGroup ? R.addTargetToGroup(a) : (R.pendingDefaultTargets = R.pendingDefaultTargets || [], R.pendingDefaultTargets.push(a)) };
    var vp = {};
    vp.$c = new String("undefined");
    var Wp = l.clearTimeout,
        Xp = l.setTimeout,
        U = function(a, b, c, d) { if (Nk()) { b && G(b) } else return zb(a, b, c, d) },
        Yp = function() { return new Date },
        Zp = function() { return l.location.href },
        $p = function(a) { return eg(gg(a), "fragment") },
        aq = function(a) { return fg(gg(a)) },
        bq = function(a, b) { return ae(a, b || 2) },
        cq = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = jp(a)) : d = jp(a);
            return d
        },
        dq = function(a, b) { l[a] = b },
        X = function(a, b,
            c) { b && (void 0 === l[a] || c && !l[a]) && (l[a] = b); return l[a] },
        eq = function(a, b, c) { return Kg(a, b, void 0 === c ? !0 : !!c) },
        fq = function(a, b, c) { return 0 === Tg(a, b, c) },
        gq = function(a, b) { if (Nk()) { b && G(b) } else Bb(a, b) },
        hq = function(a) { return !!Cp(a, "init", !1) },
        iq = function(a) { Ap(a, "init", !0) },
        jq = function(a) {
            var b = Id,
                c = "?id=" + encodeURIComponent(a) + "&l=" + O.U;
            Mk() && (c += "&sign=" + O.ed, sb && (b = sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Rl("https://", "http://", b + c);
            U(d)
        },
        kq = function(a, b, c) { ek && (Ub(a) || sk(c, b, a)) };

    function Iq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Jq = new ya;

    function Kq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Jq.get(e);
            f || (f = new RegExp(b, d), Jq.set(e, f));
            return f.test(a)
        } catch (g) { return !1 }
    }

    function Lq(a, b) {
        function c(g) {
            var m = gg(g),
                k = eg(m, "protocol"),
                n = eg(m, "host", !0),
                p = eg(m, "port"),
                r = eg(m, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" == k && "80" == p || "https" == k && "443" == p) k = "web", p = "default";
            return [k, n, p, r]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Mq(a) { return Nq(a) ? 1 : 0 }

    function Nq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({ arg1: c[d], any_of: void 0 }, e);
                if (Mq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var m = 0; m < g.length; m++)
                                if (b[g[m]]) { f = b[g[m]](c); break a }
                        } catch (k) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Iq(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Kq(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Lq(b, c)
        }
        return !1
    };
    Object.freeze({ dl: 1, id: 1 });
    Object.freeze(["config", "event", "get", "set"]);
    var Oq = encodeURI,
        Y = encodeURIComponent,
        Pq = Eb;
    var Qq = function(a, b) {
        if (!a) return !1;
        var c = eg(gg(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Rq = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };

    function ps() { return l.gaGlobal = l.gaGlobal || {} }
    var qs = function() {
            var a = ps();
            a.hid = a.hid || xa();
            return a.hid
        },
        rs = function(a, b) { var c = ps(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var Ns = function() {
        if (sa(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var lt = window,
        mt = document,
        nt = function(a) {
            var b = lt._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === lt["ga-disable-" + a]) return !0;
            try { var c = lt.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {}
            for (var d = Eg("AMP_TOKEN", String(mt.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return mt.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var ot = {};

    function rt(a) {
        delete a.eventModel[N.Nb];
        tt(a.eventModel)
    }
    var tt = function(a) {
        Ca(a, function(c) { "_" === c.charAt(0) && delete a[c] });
        var b = a[N.Ma] || {};
        Ca(b, function(c) { "_" === c.charAt(0) && delete b[c] })
    };
    var wt = function(a, b, c) { go(b, c, a) },
        xt = function(a, b, c) { go(b, c, a, !0) },
        At = function(a, b) {};

    function yt(a, b) {}
    var Z = { g: {} };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(ge(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();

    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = bq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                kq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.h = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0
            })(function(a) {
                var b;
                switch (Nl(a.vtp_containerId).prefix) {
                    case "AW":
                        b = Gm;
                        break;
                    case "DC":
                        b = Tm;
                        break;
                    case "GF":
                        b = Ym;
                        break;
                    case "HA":
                        b = cn;
                        break;
                    case "UA":
                        b = Cn;
                        break;
                    default:
                        G(a.vtp_gtmOnFailure);
                        return
                }
                G(a.vtp_gtmOnSuccess);
                fo(a.vtp_containerId, b, a.vtp_remoteConfig || {})
            })
        }();

    Z.g.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() { return O.I })
        }();







    Z.g.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? xt : wt)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    var Bt = {};
    Bt.dataLayer = be;
    Bt.callback = function(a) {
        Nd.hasOwnProperty(a) && sa(Nd[a]) && Nd[a]();
        delete Nd[a]
    };
    Bt.bootstrap = 0;
    Bt._spx = !1;

    function Ct() {
        R[O.I] = Bt;
        Ta(Od, Z.g);
        Fc = Nc
    }

    function Dt() {
        var a = !1;
        a && fj("INIT");
        ue().o();
        R = l.google_tag_manager = l.google_tag_manager || {};
        tl();
        Yh.enable_gbraid_cookie_write = !0;
        var b = !!R[O.I];
        if (b) {
            var c = R.zones;
            c && c.unregisterChild(O.I);
        } else {
            for (var g = data.resource || {}, m = g.macros || [], k = 0; k < m.length; k++) sc.push(m[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) vc.push(n[p]);
            for (var r = g.predicates || [], v = 0; v < r.length; v++) uc.push(r[v]);
            for (var t = g.rules || [], q = 0; q < t.length; q++) {
                for (var u = t[q], x = {}, A = 0; A < u.length; A++) x[u[A][0]] = Array.prototype.slice.call(u[A], 1);
                tc.push(x)
            }
            Cc = Z;
            Dc =
                Mq;
            Ct();
            sp();
            Si = !1;
            Ti = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) Vi();
            else {
                Fb(B, "DOMContentLoaded", Vi);
                Fb(B, "readystatechange", Vi);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var w = !0;
                    try { w = !l.frameElement } catch (D) {}
                    w && Wi()
                }
                Fb(l, "load", Vi)
            }
            Io = !1;
            "complete" === B.readyState ? Ko() : Fb(l, "load", Ko);
            ek && l.setInterval(Yj, 864E5);
            Ld = (new Date).getTime();
            Bt.bootstrap = Ld;
            if (a) { var F = gj("INIT"); }
        }
    }
    (function(a) {
        if (!l["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (B.referrer) {
                var c = gg(B.referrer);
                b = "cct.google" === dg(c, "host")
            }
            if (!b) {
                var d = Kg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (l["__TAGGY_INSTALLED"] = !0, zb("https://cct.google/taggy/agent.js"))
        }
        var f = function(r) {
                var v = "GTM",
                    t = "GTM";
                v = "OGT", t = "GTAG";
                var q = l["google.tagmanager.debugui2.queue"];
                q || (q = [], l["google.tagmanager.debugui2.queue"] = q, zb("https://" + O.Cd + "/debug/bootstrap?id=" + O.I + "&src=" + t + "&cond=" + r + "&gtm=" + Rk()));
                var u = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: sb,
                        containerProduct: v,
                        debug: !1,
                        id: O.I
                    }
                };
                u.data.resume = function() { a() };
                O.$g && (u.data.initialPublish = !0);
                q.push(u)
            },
            g = void 0,
            m = eg(l.location, "query", !1, void 0, "gtm_debug");
        tp(m) && (g = 2);
        if (!g && B.referrer) { var k = gg(B.referrer); "tagassistant.google.com" === dg(k, "host") && (g = 3) }
        if (!g) {
            var n = Kg("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = B.documentElement.getAttribute("data-tag-assistant-present");
            tp(p) && (g = 5)
        }
        g && sb ? f(g) : a()
    })(Dt);

})()