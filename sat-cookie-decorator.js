angular.module('satellizer')
.requires.push('ngCookies');

angular.module('satellizer')
.config(['$cookiesProvider', function($cookiesProvider) {
  $cookiesProvider.defaults = {
    path: '/',
    domain: '.guclink.in',
    secure: true
  }
}]);

angular.module('satellizer')
.decorator('SatellizerStorage', ['$cookies', function($cookies) {
  var storage = {
    get: function(key) {
      console.log('get', key)
      return $cookies.get(key);
    },
    set: function(key, value) {
      console.log('put', key, value)
      $cookies.put(ke y, value);
    },
    remove: function(key) {
      console.log('remove', key)
      $cookies.remove(key);
    }
  };

  return storage;
}]);
