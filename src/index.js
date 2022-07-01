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

//**
// 1. export $ (param) => {

//   this.ele = document.querySelector(param)
//   const hide = () => {}; return this }
// 2. $.prototype.hide = () => {this.ele; return this}

"use-strict";

function $(query) {
  this.ele = document.querySelector(query);
  this.on = function (eventType, callback) {
    this.ele.addEventListener(eventType, callback);
    return this;
  };
  this.hide = function () {
    this.ele.style.display = "none";
    return this;
  };
  this.show = function () {
    this.ele.style.display = "";
    return this;
  };
  this.attr = function (key, value) {
    this.ele.setAttribute(key, value);
    return this;
  };
  return this;
}
