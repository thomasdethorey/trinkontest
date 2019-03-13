$(function(){
$( "#showText" ).click(function() {
  $( "#text" ).toggle();
  $( "#showText" ).toggle();
  $( "#hideText" ).toggle();
});
});
$(function(){
$( "#hideText" ).click(function() {
  $( "#text" ).toggle();
  $( "#showText" ).toggle();
  $( "#hideText" ).toggle();
});
});
$(function(){
$( "#showText1" ).click(function() {
  $( "#text1" ).toggle();
  $( "#showText1" ).toggle();
  $( "#hideText1" ).toggle();
});
});
$(function(){
$( "#hideText1" ).click(function() {
  $( "#text1" ).toggle();
  $( "#showText1" ).toggle();
  $( "#hideText1" ).toggle();
});
});
$(function(){
$( "#showText2" ).click(function() {
  $( "#text2" ).toggle();
  $( "#showText2" ).toggle();
  $( "#hideText2" ).toggle();
});
});
$(function(){
$( "#hideText2" ).click(function() {
  $( "#text2" ).toggle();
  $( "#showText2" ).toggle();
  $( "#hideText2" ).toggle();
});
});
var myDiv = document.getElementById("showText");

myDiv.addEventListener("mousedown", function() {
  if ( this.classList.contains("animateOnce") ) {
    this.classList.remove("animateOnce");
  }
});

myDiv.addEventListener("mouseup", function() {
  this.classList.add("animateOnce");
});
var myDiv1 = document.getElementById("showText1");

myDiv1.addEventListener("mousedown", function() {
  if ( this.classList.contains("animateOnce") ) {
    this.classList.remove("animateOnce");
  }
});

myDiv1.addEventListener("mouseup", function() {
  this.classList.add("animateOnce");
});
var myDiv2 = document.getElementById("showText2");

myDiv2.addEventListener("mousedown", function() {
  if ( this.classList.contains("animateOnce") ) {
    this.classList.remove("animateOnce");
  }
});

myDiv2.addEventListener("mouseup", function() {
  this.classList.add("animateOnce");
});
