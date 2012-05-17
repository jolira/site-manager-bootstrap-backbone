(function ($, _, Backbone, app) {
    "use strict";

    app.initializers.push(function (app) {
        app.menu = {
            add: function(title, handler) {
                var NavbarItem = Backbone.View.extend({
                    tagName: "li",
                    template: app.getTemplate("script[id='navbar-item']"),
                    events: {
                        "click": "click"
                    },
                    render: function() {
                        $(this.el).html(this.template({title: title}));
                        return this;
                    },
                    click: function() {
                        return handler();
                    }
                });
                var item = new NavbarItem();

                $("#main-nav").append(item.render().el);
                $('.dropdown-toggle').dropdown();
            }
        };

        var NavBar = Backbone.View.extend({
            template: app.getTemplate("script[id='navbar']"),
            events:{
                "focus #global-search":"popupResults"
            },
            render: function() {
                var title = $("title").text();
                $(this.el).html(this.template({title: title}));
                $(this.el).addClass("navbar");
                $(this.el).addClass("navbar-fixed-top");
                return this;
            },
            popupResults:function () {
                $("#global-search").popover({
                    placement:"bottom",
                    content:"test"
                });
                return false;
            }
        }),
            navbar = new NavBar();

        $("body").prepend(navbar.render().el);
    });
})($, _, Backbone, window["jolira-app"]);