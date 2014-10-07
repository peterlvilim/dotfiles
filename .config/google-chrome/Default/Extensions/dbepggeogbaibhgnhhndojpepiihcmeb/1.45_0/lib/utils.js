// Generated by CoffeeScript 1.3.3
(function() {
  var Utils, globalRoot, root,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Utils = {
    getCurrentVersion: function() {
      return chrome.runtime.getManifest().version;
    },
    invokeCommandString: function(str, argArray) {
      var component, components, func, obj, _i, _len, _ref;
      components = str.split('.');
      obj = window;
      _ref = components.slice(0, -1);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        component = _ref[_i];
        obj = obj[component];
      }
      func = obj[components.pop()];
      return func.apply(obj, argArray);
    },
    createElementFromHtml: function(html) {
      var tmp;
      tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.firstChild;
    },
    escapeHtml: function(string) {
      return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    createUniqueId: (function() {
      var id;
      id = 0;
      return function() {
        return id += 1;
      };
    })(),
    hasChromePrefix: function(url) {
      var chromePrefixes, prefix, _i, _len;
      chromePrefixes = ["about", "view-source", "chrome-extension", "data"];
      for (_i = 0, _len = chromePrefixes.length; _i < _len; _i++) {
        prefix = chromePrefixes[_i];
        if (url.startsWith(prefix)) {
          return true;
        }
      }
      return false;
    },
    createFullUrl: function(partialUrl) {
      if (!/^[a-z]{3,}:\/\//.test(partialUrl)) {
        return "http://" + partialUrl;
      } else {
        return partialUrl;
      }
    },
    isUrl: function(str) {
      var dottedParts, hostName, lastPart, longTlds, match, specialHostNames, urlRegex, _ref;
      if (/^[a-z]{3,}:\/\//.test(str)) {
        return true;
      }
      if (__indexOf.call(str, ' ') >= 0) {
        return false;
      }
      urlRegex = new RegExp('^(?:([^:]+)(?::([^:]+))?@)?' + '([^:]+|\\[[^\\]]+\\])' + '(?::(\\d+))?$');
      longTlds = ['arpa', 'asia', 'coop', 'info', 'jobs', 'local', 'mobi', 'museum', 'name', 'onion'];
      specialHostNames = ['localhost'];
      match = urlRegex.exec((str.split('/'))[0]);
      if (!match) {
        return false;
      }
      hostName = match[3];
      if (__indexOf.call(specialHostNames, hostName) >= 0) {
        return true;
      }
      if (__indexOf.call(hostName, ':') >= 0) {
        return true;
      }
      dottedParts = hostName.split('.');
      if (dottedParts.length > 1) {
        lastPart = dottedParts.pop();
        if ((2 <= (_ref = lastPart.length) && _ref <= 3) || __indexOf.call(longTlds, lastPart) >= 0) {
          return true;
        }
      }
      if (/^(\d{1,3}\.){3}\d{1,3}$/.test(hostName)) {
        return true;
      }
      return false;
    },
    createSearchUrl: function(query) {
      return Settings.get("searchUrl") + encodeURIComponent(query);
    },
    convertToUrl: function(string) {
      string = string.trim();
      if (Utils.hasChromePrefix(string)) {
        return string;
      } else if (Utils.isUrl(string)) {
        return Utils.createFullUrl(string);
      } else {
        return Utils.createSearchUrl(string);
      }
    },
    isString: function(obj) {
      return typeof obj === 'string' || obj instanceof String;
    },
    compareVersions: function(versionA, versionB) {
      var a, b, i, _i, _ref;
      versionA = versionA.split(".");
      versionB = versionB.split(".");
      for (i = _i = 0, _ref = Math.max(versionA.length, versionB.length); 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        a = parseInt(versionA[i] || 0, 10);
        b = parseInt(versionB[i] || 0, 10);
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        }
      }
      return 0;
    },
    zip: function(arrays) {
      return arrays[0].map(function(_, i) {
        return arrays.map(function(array) {
          return array[i];
        });
      });
    },
    hasUpperCase: function(s) {
      return s.toLowerCase() !== s;
    }
  };

  Function.prototype.curry = function() {
    var fixedArguments, fn;
    fixedArguments = Array.copy(arguments);
    fn = this;
    return function() {
      return fn.apply(this, fixedArguments.concat(Array.copy(arguments)));
    };
  };

  Array.copy = function(array) {
    return Array.prototype.slice.call(array, 0);
  };

  String.prototype.startsWith = function(str) {
    return this.indexOf(str) === 0;
  };

  globalRoot = typeof window !== "undefined" && window !== null ? window : global;

  globalRoot.extend = function(hash1, hash2) {
    var key;
    for (key in hash2) {
      hash1[key] = hash2[key];
    }
    return hash1;
  };

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Utils = Utils;

}).call(this);
