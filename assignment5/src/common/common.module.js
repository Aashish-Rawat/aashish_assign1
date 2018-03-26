(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mysterious-taiga-72259.herokuapp.com/menu_items/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
