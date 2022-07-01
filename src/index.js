// Design and build the base architecture for a DOM manipulation utility library like jQuery.
// requirements:
// 1. library should expose a function $().
// 2. it should accept a query string as parameter to do DOM lookup.
// example: $('.my-class-name') first occurence
// > <div class="my-class-name">.......</div>
// 3. it should expose additional methods like the following.
// a. .show() - to show/make an element visible on to DOM
// >  $('.my-class-name').show()
// b. .hide() - to hide an element from DOM
// >  $('.my-class-name').hide()
// c. .attr() - to add/set attributes on to a DOM element
// >  $('.my-class-name').attr('class', 'new-class')
// d. .on() - to attach event to a DOM element
// >  $('.my-class-name').on('click', function(){console.log('hello')})
// e. .html() - to simply return the element
// > <div class="my-class-name">.......</div>
// 4. it should support method chaining
// >  $('.my-class-name').hide().show().attr() ..

"use-strict";

window.$ = function (query) {
  var ele = document.querySelector(query);
  var jQueryObj = {
    ele,
    on: function (eventType, callback) {
      ele.addEventListener(eventType, callback);
      return jQueryObj;
    },
    hide: function () {
      ele.style.display = "none";
      return jQueryObj;
    },
    show: function () {
      ele.style.display = "";
      return jQueryObj;
    },
    attr: function (key, value) {
      ele.setAttribute(key, value);
      return jQueryObj;
    }
  };
  return jQueryObj;
};
