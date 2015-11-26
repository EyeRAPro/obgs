angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("app.html","<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <base href=\"/obgs/\">\n    <link rel=\"icon\" href=\"/favicon.ico\">\n\n    <title>OBGS - Open Banner Grabbing System</title>\n\n    <!-- Bootstrap core CSS -->\n    <link href=\"bower_components/bootstrap/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- FontAwesome CSS -->\n    <link href=\"bower_components/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n    <!-- Custom styles for this template -->\n    <link href=\"public/app.css\" rel=\"stylesheet\">\n  </head>\n\n  <body ng-app=\"obgs\">\n\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Open Banner Grabbing System</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li ui-sref-active=\"active\"><a href ui-sref=\"dashboard\"><i class=\"fa fa-home\"></i></a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"hosts\">Hosts</a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"scans\">Scans</a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"help\">Help</a></li>\n          </ul>\n          <form class=\"navbar-form navbar-right\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n          </form>\n        </div>\n      </div>\n    </nav>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-3 col-md-2 sidebar\">\n          <ul class=\"nav nav-sidebar\">\n            <li ui-sref-active=\"active\"><a href ui-sref=\"dashboard\">Overview</a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"hosts\">Hosts</a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"scans\">Scans</a></li>\n            <li ui-sref-active=\"active\"><a href ui-sref=\"help\">Help</a></li>\n          </ul>\n        </div>\n        <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\" ui-view></div>\n      </div>\n    </div>\n\n    <!-- Bootstrap core JavaScript\n    ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script src=\"bower_components/angular/angular.min.js\"></script>\n    <script src=\"bower_components/angular-resource/angular-resource.min.js\"></script>\n    <script src=\"bower_components/angular-ui-router/release/angular-ui-router.min.js\"></script>\n    <script src=\"bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js\"></script>\n    <script src=\"src/app.js\"></script>\n    <script src=\"src/hosts/host.js\"></script>\n    <script src=\"src/scans/scan.js\"></script>\n  </body>\n</html>\n");
$templateCache.put("dashboard.html","");
$templateCache.put("hosts/list.html","<h1 class=\"page-header\">Hosts</h1>\n\n<div class=\"panel panel-default\" ng-repeat=\"host in hosts\">\n  <div class=\"panel-heading\">\n    <h2 class=\"panel-title\">{{ getHostIP(host) }}</h2>\n  </div>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" ng-repeat=\"service in host.services\">\n      <p>{{ service.protocol }} {{ service.port }}</p>\n      <pre ng-if=\"service.banner\">{{ service.banner }}</pre>\n    </li>\n  </ul>\n  <div class=\"panel-body\" ng-if=\"host.services.length == 0\">\n    No services found\n  </div>\n  <div class=\"panel-footer\">\n    Scanned at {{ host.tstamp | date }}\n  </div>\n</div>");
$templateCache.put("scans/list.html","<h1 class=\"page-header\">Scans</h1>\n\n<div class=\"panel panel-default\" ng-repeat=\"scan in scans\">\n  <div class=\"panel-heading\">\n    <h2 class=\"panel-title\">Scan {{ scan.target }}</h2>\n  </div>\n  <div class=\"panel-body\">\n    <p><label>Target</label>: {{ scan.target }}</p>\n    <p><label>Progress</label>: {{ scan.finished ? (scan.error ? \'Fail\' : \'Finished\') : scan.progress*100 + \'%\' }}</p>\n    <p><label>Time elapsed</label>: {{ scan.time_elapsed }}</p>\n    <p ng-if=\"scan.time_left\"><label>Time left</label>: {{ scan.time_left }}</p>\n    <p ng-if=\"scan.hitrate\"><label>Hitrate</label>: {{ scan.hitrate * 100 }}%</p>\n  </div>\n  <div class=\"panel-footer\">\n    Scanned at {{ scan.tstamp | date }}\n  </div>\n</div>");}]);