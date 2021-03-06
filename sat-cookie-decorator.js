angular.module('satellizer')
.requires.push('ngCookies');

angular.module('satellizer')
.config(['$cookiesProvider', function($cookiesProvider) {
  $cookiesProvider.defaults = {
    path: '/',
    domain: '.guclink.in',
    secure: true
  };
}]);

angular.module('satellizer')
.decorator('SatellizerStorage', ['$cookies', function($cookies) {
  var storage = {
    get: function(key) {
      return $cookies.get(key);
    },
    set: function(key, value) {
      $cookies.put(key, value);
    },
    remove: function(key) {
      $cookies.remove(key);
    }
  };

  return storage;
}]);
