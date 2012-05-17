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
        }; // this is the reason why this file has to be included second

        var NavBar = Backbone.View.extend({
            el:".navbar",
            events:{
                "focus #global-search":"popupResults"
            },
            popupResults:function () {
                $("#global-search").popover({
                    placement:"bottom",
                    content:"test"
                });
                return false;
            }
        });

        return new NavBar();
    });
})($, _, Backbone, window["jolira-app"]);