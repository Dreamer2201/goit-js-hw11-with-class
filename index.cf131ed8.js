!function(){function e(e){return e&&e.__esModule?e.default:e}var t={formEl:document.querySelector(".search-form"),inputEl:document.querySelector("input"),btnSubmitEl:document.querySelector("button"),galleryEl:document.querySelector(".gallery"),btnLoadMoreEl:document.querySelector(".load-more"),totalHitsEl:document.querySelector(".total-hits")},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,r){t&&o(e.prototype,t);r&&o(e,r);return e};var c=new(function(){"use strict";function t(){e(r)(this,t),this.searchQuery="",this.page=1}return e(n)(t,[{key:"fetchArticles",value:function(){var e="".concat("https://pixabay.com/api/","?key=").concat("29146874-e25e04f0bbd5e8c4fffc4a4f6","&q=").concat(this.searchQuery,"&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=1");fetch(e).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"query",get:function(){this.searchQuery},set:function(e){this.searchQuery=e}}]),t}());t.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(e.currentTarget.elements.searchQuery.value),c.query=e.currentTarget.elements.searchQuery.value,c.fetchArticles()})),t.btnLoadMoreEl.addEventListener("click",(function(){c.fetchArticles()}))}();
//# sourceMappingURL=index.cf131ed8.js.map