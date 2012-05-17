/*global PhoneGap:false, require:false */
(function ($, _, Backbone, app) {
    "use strict";

    app.tabs = {
        add: function(id, title) {
            var tabTemplate = app.getTemplate("script[id='tab']"),
                tabHtml = tabTemplate({
                id: id,
                title: title
            });

            $("#main-tabs").append(tabHtml);
        }
    };

    var AppRouter = Backbone.Router.extend({
/*
        routes:{
            "xxx":"example",
            "*actions":"renderHome"
        },
        renderHome:function () {
            var home = app.getHomeView("#main-content");

            home.render();
            app.tabs.add("xxx", "yyyy", "<h1>zzzz</h1>");
        },
        example: function () {
            $("#main-content").html("<h1>DONE!!!!</h1>");
        }
*/
    });

    // Initiate the router
    app.router = new AppRouter();
    app.initializers.forEach(function(initializer) {
        initializer(app, "#main-content");
    });

    Backbone.history.start();
})($, _, Backbone, window["jolira-app"]);