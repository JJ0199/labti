(function(a) {
    a.fn.niceSelect = function(c) {
        if (typeof c == "string") {
            if (c == "update") {
                this.each(function() {
                    var f = a(this);
                    var e = a(this).next(".nice-select");
                    var g = e.hasClass("open");
                    if (e.length) {
                        e.remove();
                        b(f);
                        if (g) {
                            f.next().trigger("click")
                        }
                    }
                })
            } else {
                if (c == "destroy") {
                    this.each(function() {
                        var f = a(this);
                        var e = a(this).next(".nice-select");
                        if (e.length) {
                            e.remove();
                            f.css("display", "")
                        }
                    });
                    if (a(".nice-select").length == 0) {
                        a(document).off(".nice_select")
                    }
                } else {
                    console.log('Method "' + c + '" does not exist.')
                }
            }
            return this
        }
        this.hide();
        this.each(function() {
            var e = a(this);
            if (!e.next().hasClass("nice-select")) {
                b(e)
            }
        });

        function b(g) {
            g.after(a("<div></div>").addClass("nice-select").addClass(g.attr("class") || "").addClass(g.attr("disabled") ? "disabled" : "").attr("tabindex", g.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var e = g.next();
            var f = g.find("option");
            var h = g.find("option:selected");
            e.find(".current").html(h.data("display") || h.text());
            f.each(function(l) {
                var j = a(this);
                var k = j.data("display");
                e.find("ul").append(a("<li></li>").attr("data-value", j.val()).attr("data-display", (k || null)).addClass("option" + (j.is(":selected") ? " selected" : "") + (j.is(":disabled") ? " disabled" : "")).html(j.text()))
            })
        }
        a(document).off(".nice_select");
        a(document).on("click.nice_select", ".nice-select", function(f) {
            var e = a(this);
            a(".nice-select").not(e).removeClass("open");
            e.toggleClass("open");
            if (e.hasClass("open")) {
                e.find(".option");
                e.find(".focus").removeClass("focus");
                e.find(".selected").addClass("focus")
            } else {
                e.focus()
            }
        });
        a(document).on("click.nice_select", function(e) {
            if (a(e.target).closest(".nice-select").length === 0) {
                a(".nice-select").removeClass("open").find(".option")
            }
        });
        a(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(g) {
            var f = a(this);
            var e = f.closest(".nice-select");
            e.find(".selected").removeClass("selected");
            f.addClass("selected");
            var h = f.data("display") || f.text();
            e.find(".current").text(h);
            e.prev("select").val(f.data("value")).trigger("change")
        });
        a(document).on("keydown.nice_select", ".nice-select", function(i) {
            var e = a(this);
            var f = a(e.find(".focus") || e.find(".list .option.selected"));
            if (i.keyCode == 32 || i.keyCode == 13) {
                if (e.hasClass("open")) {
                    f.trigger("click")
                } else {
                    e.trigger("click")
                }
                return false
            } else {
                if (i.keyCode == 40) {
                    if (!e.hasClass("open")) {
                        e.trigger("click")
                    } else {
                        var g = f.nextAll(".option:not(.disabled)").first();
                        if (g.length > 0) {
                            e.find(".focus").removeClass("focus");
                            g.addClass("focus")
                        }
                    }
                    return false
                } else {
                    if (i.keyCode == 38) {
                        if (!e.hasClass("open")) {
                            e.trigger("click")
                        } else {
                            var h = f.prevAll(".option:not(.disabled)").first();
                            if (h.length > 0) {
                                e.find(".focus").removeClass("focus");
                                h.addClass("focus")
                            }
                        }
                        return false
                    } else {
                        if (i.keyCode == 27) {
                            if (e.hasClass("open")) {
                                e.trigger("click")
                            }
                        } else {
                            if (i.keyCode == 9) {
                                if (e.hasClass("open")) {
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        });
        var d = document.createElement("a").style;
        d.cssText = "pointer-events:auto";
        if (d.pointerEvents !== "auto") {
            a("html").addClass("no-csspointerevents")
        }
        return this
    }
}(jQuery));