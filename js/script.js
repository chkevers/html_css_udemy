'use strict';

const inputText = document.getElementById("test");
const butEvent = document.getElementById("but");

butEvent.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(inputText.value);
    console.log('Something is wrong dear');
});

// Tesdt for Jquery remove items when clicking on it 

// $(document).ready(function(){
//   $("li").click(function(){
//     $(this).hide();
//   });
// });
