angular.module('satellizer')
.requires.push('ngCookies');

angular.module('satellizer')
.decorator('SatellizerStorage', ['$delegate', '$cookies', function($delegate, $cookies) {
  var storage = {
    get: function(key) {
      return $cookies.get(key);
    },
    set: function(key, value) {
      $cookies.put(key, value, { path: '/', domain: '.guclink.in', secure: true });
    },
    remove: function(key) {
      $cookies.remove(key);
    }
  };

  return storage;
}]);
