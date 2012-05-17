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

    // Initialize the components
    $(function(){
        var Router = Backbone.Router.extend({});
        
        app.router = new Router();
        app.initializers.forEach(function(initializer) {
            initializer(app, "#main-content");
        });

        Backbone.history.start();
    });
})($, _, Backbone, window["jolira-app"]);