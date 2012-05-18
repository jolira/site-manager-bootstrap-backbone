/*global PhoneGap:false, require:false */
(function ($, _, Backbone, app) {
    "use strict";

    app.tabs = {
        add: function(title, id, handler) {
            app.router.route(id, id, function(){
                $("#main-tabs > li").removeClass("active");
                $("a[href='#" + id + "']").parent().addClass("active");
                return handler(id);
            });

            var tabTemplate = app.getTemplate("script[id='tab']"),
                tabHtml = tabTemplate({ id: id, title: title });

            $("#main-tabs").append(tabHtml);
        }
    };

    // Initialize the components (only once)
    $(function(){
        var Router = Backbone.Router.extend({});

        app.router = new Router();
        app.initializers.forEach(function(initializer) {
            initializer(app, "#main-content");
        });

        delete app.initializers;
        Backbone.history.start();
    });
})($, _, Backbone, window["jolira-app"]);