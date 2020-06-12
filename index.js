// ==UserScript==
// @name OneTo
// @description temporal occlusion
// @namespace  https://xiedaimala.com/
// @version 1.0
// @author A-Tione
// @license MIT
// @include *
// @run-at document-endo
// @match http://*/*
// @grant none
// ==/UserScript==

(function () {
  var dragBox = function (drag, wrap) {

    function getCss(ele, prop) {
      return parseInt(window.getComputedStyle(ele)[prop]);
    }

    var initX,
      initY,
      dragable = false,
      wrapLeft = getCss(wrap, "left"),
      wrapRight = getCss(wrap, "top");

    drag.addEventListener("mousedown", function (e) {
      dragable = true;
      initX = e.clientX;
      initY = e.clientY;
    }, false);

    document.addEventListener("mousemove", function (e) {
      if (dragable === true) {
        var nowX = e.clientX,
          nowY = e.clientY,
          disX = nowX - initX,
          disY = nowY - initY;
        wrap.style.left = wrapLeft + disX + "px";
        wrap.style.top = wrapRight + disY + "px";
      }
    });

    drag.addEventListener("mouseup", function (e) {
      dragable = false;
      wrapLeft = getCss(wrap, "left");
      wrapRight = getCss(wrap, "top");
    }, false);

  };
  let currentDiv = document.getElementById("div1");
  let newDiv = document.createElement('div')
  newDiv.style.position = 'absolute'
  newDiv.style.width = '200px'
  newDiv.style.height = '200px'
  newDiv.style.background = 'black'
  document.body.insertBefore(newDiv, currentDiv);

  dragBox(newDiv, newDiv);
})()
