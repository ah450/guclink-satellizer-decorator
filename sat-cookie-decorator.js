angular.module('satellizer')
.requires.push('ngCookie');

angular.module('satellizer')
.decorator('SatellizerStorage', function($delegate, $cookies) {
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
});
