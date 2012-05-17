/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    var path = require("path"),
        templates = path.join(__dirname, "templates"),
        pubdir = path.join(__dirname, "public"),
        twitterbootstrap = require("site-manager-bootstrap");

    module.exports = function (defaults, cb) {
        [
            "js/libs/underscore/underscore-1.3.3.js",
            "js/libs/jquery/jquery-1.7.2.js",
            "js/libs/backbone/backbone-0.9.2.js",
            "js/bootstrap-dropdown.js",
            "js/bootstrap.js", // MUST load first!!!
            "js/navbar.js", // MUST load second
            "js/container.js"  // MUST load last
        ].forEach(function (dir) {
                defaults.tailingScripts.push(dir);
            });
        defaults.htmlFiles = [
            path.join(templates, "navbar.html"),
            path.join(templates, "container.html")
        ];
        defaults.templateFiles = [
            path.join(templates, "navbar.html"),
            path.join(templates, "customer.html"),
            path.join(templates, "sidebar.html"),
            path.join(templates, "tab.html"),
            path.join(templates, "menu-item.html")
        ];
        [twitterbootstrap, pubdir].forEach(function (dir) {
            defaults["public"].unshift(dir);
        });
        defaults.useRequireJS = false;

        return cb(undefined, defaults);
    };
})(module);