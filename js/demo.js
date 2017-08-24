//demo.js

//usage: scrollReveal.init([obj,obj,...])
//takes array of objects
//id: the css id of the div to tbe moved
//delay: the time it takes in milliseconds to reveal and div
//topOffset: and integer for the number of pixels  to move the object down while invisible and then move up when
//            displayed
//css of ID div must be position:relative for movement up to display.
var scrollReveal=new ScrollRevealModule();

$( document ).ready(function() {
   
   scrollReveal.init([{id:"box3", delay:1000,topOffset:100}, {id:"box4", delay:1000,topOffset:100}, {id:"box5", delay:1000,topOffset:100}]); 
    
});