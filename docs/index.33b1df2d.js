"use strict";function _createForOfIteratorHelper(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=_unsupportedIterableToArray(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){s=!0,t},f:function t(){try{i||null==e.return||e.return()}finally{if(s)throw t}}}}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _defineProperties(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var Song=_createClass((function t(n,e){for(var o in _classCallCheck(this,t),this.key=n,e)this[o]=e[o];this.$templateUrl="songs/".concat(n,"/song.html"),this.$search=new SearchString({title:e.title||"",num:null==e.num?"":e.num.toString().trim()})})),SearchString=function(){function t(n){_classCallCheck(this,t),this.$string="",this.$contains={},n&&this.extend(n)}return _createClass(t,[{key:"extend",value:function(n){var e=null;if("object"==_typeof(n))for(var o in e="",n)null!=n[o]&&(n[o]=t.filterString2searchKey(n[o]),this.$contains[o]=(this.$contains[o]||"")+" "+n[o],e+=" "+n[o]);else"string"==typeof n&&0<n.trim().length&&(e=n);"string"==typeof e?this.$string=t.filterString2searchKey(this.$string,e):n&&console.warn("SearchString.extend :: Invalid argument")}},{key:"toString",value:function(){return this.$string}}]),t}();SearchString.filterString2searchKey=function(){function t(n){return n.filter((function(t){return!!t})).map((function(n){return Array.isArray(n)?t(n):n})).join(" ")}var n=/[\.,:'\(\)\[\]\{\}\/\\]/g,e=/\s.{0,3}\s/g;return function(o){return 1<arguments.length?SearchString.filterString2searchKey(Array.prototype.slice.call(arguments)):(Array.isArray(o)&&(o=t(o)),"string"==typeof o?(" "+o.toLowerCase().replace(n," ")+" ").replace(e," ").trim():(console.warn("SearchString.filterString2searchkey :: Invalid argument",_typeof(o),o),""))}}(),angular.module("laulukirja-app",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,n){n.otherwise("/index"),t.state("index",{url:"/index",views:{"songsList@":{controller:"songListController",template:'\n<div id="search">\n\t<input type="text" class="form-control" placeholder="Hae..." ng-model="$root.search" ng-change="runFilter()">\n\n\t<a class="clear-btn glyphicon glyphicon-remove" ng-if="$root.search.trim().length" ng-click="runFilter(\'\')"></a>\n</div>\n\n<ul id="songlist" class="songs-list-group list-group">\n\t<li class="list-group-item"\n\t    ng-repeat="song in Songs.sorted"\n\t    ng-hide="song.$$filtered"\n\t    ng-class="{ \'active\' : $root.$state.params.song_key == song.key }">\n\n\t\t<a ui-sref="index.song({ \'song_key\' : song.key })">\n\t\t\t<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>\n\t\t</a>\n\t</li>\n\n\t<li class="list-group-item no-results" ng-if="songsCount == 0">\n\t\t<b><h4>\n\t\t\t\t{{ (songsCount == 0) ? \'Ei lauluja :&lt;\' : \'...\' }}\n\t\t\t</h4></b>\n\t</li>\n</ul>\n\n\t\t\t\t\t'},"songView@":{controller:["$scope","$timeout",function(t,n){t.loading=n((function(){t.loading=!1}))}],template:"<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"}},resolve:{songsIndex:["Songs",function(t){return t.init("songs/index.json")}]}}).state("index.song",{url:"/:song_key",views:{"songView@":{controller:"songViewController",template:'\n<pre ng-include="$song.$templateUrl" id="song-body" ng-style="{ \'font-size\' : ($root.font_size / 10.0) + \'em\' }"></pre>\n\t\t\t\t\t'},"songMeta@":{controller:"songMetaController",template:'\n<div id="songmeta">\n\t<h2 class="title">{{ meta.title }}</h2>\n\t<h3 class="author">{{ meta.author }}</h3>\n\t<p class="description">{{ meta.description }}</p>\n\t<ul class="links">\n\t\t<li ng-repeat="link in meta.links">\n\t\t\t<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t\t\t\t'}},resolve:{$song:["$stateParams","$templateRequest","songsIndex",function(t,n,e){var o=t.song_key,r=e[o];if(!r)throw"Could not found song '"+o+"'";return n(r.$templateUrl).then((function(){return r}))}]}})}]).run(["$rootScope","$state","Songs",function(t,n){t.$state=n,t.songsIndex={},t.font_size=12,t.setSongFont=function(n){return t.font_size+=n},t.increaseFont=function(){return t.font_size*=1.1},t.decreaseFont=function(){return t.font_size*=.9},t.search="",t.songlist={open:!0},window.addEventListener("resize",t.$emit.bind(t,"resize")),t.$watch("songlist.open",t.$emit.bind(t,"resize")),t.$on("$stateChangeStart",(function(n,e){try{"index"==e.name&&(t.$song=null)}catch(t){console.error(t),n.preventDefault()}})),t.$on("$stateChangeError",(function(t,n){console.error("$stateChangeError @ "+n.to,arguments)})),t.$on("$stateChangeSuccess",(function(n,e){console.log("$stateChangeSuccess @ "+e.to,arguments),"index"==e.name&&(t.songlist.open=!0),angular.element(document.body).attr("state",e.name)})),t.$on("$viewContentLoaded",(function(){console.log("$viewContentLoaded",arguments)})),t.$on("$stateNotFound",(function(t,n){console.error("$stateNotFound @ "+n.to,arguments)}))}]).controller("songListController",["$rootScope","$scope","$stateParams","songsIndex","Songs",function(t,n,e,o,r){n.Songs=r,n.songsCount=0,n.runFilter=function(e){(e=t.search=(null==e?t.search:e)||"")&&(e=e.toLowerCase().trim()),e&&(e=e.split(/\s+/g)),n.songsCount=0;var o,i=_createForOfIteratorHelper(r.sorted);try{for(i.s();!(o=i.n()).done;){var s=o.value;e?(s.$$filtered=!0,e.forEach((function(t){-1!=s.$search.$string.indexOf(t)&&(s.$$filtered=!1)}))):s.$$filtered=!1,s.$$filtered||n.songsCount++}}catch(t){i.e(t)}finally{i.f()}},setTimeout((function(){n.runFilter()}))}]).controller("songViewController",["$rootScope","$scope","$sce","$song","$timeout",function(t,n,e,o,r){function i(){return r((function(){var n=document.getElementById("song-body"),e=n.parentNode.offsetWidth/n.offsetWidth;0<e&&(t.font_size*=e),console.log("refreshFont() :: ",t.font_size,"em")})).catch((function(t){console.warn("Unable to customize font size",t)}))}console.log("songViewController :: Loaded song "+o.title,o),n.$song=o,document.getElementById("song-body"),768>=window.innerWidth&&(t.songlist.open=!1),t.$on("resize",i),n.loading=i().then((function(){n.loading=!1}))}]).controller("songMetaController",["$rootScope","$scope","$song",function(t,n,e){for(var o in n.meta={title:e.title,author:e.author||null,links:e.links||{}},n.meta.links)n.meta.links[o]={title:o,href:n.meta.links[o]}}]);