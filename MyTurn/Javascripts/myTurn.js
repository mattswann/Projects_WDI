$(document).ready(function(){

  $('.column1, .column2 div').on('click', function(){
    // $('.column1 div p').toggle();
    console.log(this);
    $(this).find('p').toggle();
    console.log($(this).find('p').html())
  })


//MS- consider using something like this to retun the 'ID' of an html element.

console.log($(this).attr('id'));


 // $('.column2','card').on('click', function(){
 //    // $('.column1 div p').toggle();
 //    console.log(this);
 //    $(this).find('p').toggle();
 //    console.log($(this).find('p').html())
 //  })





//   $(this).on('click', function(){
// $(".card").toggleClass("A")
// $(".card").toggleClass('clicked')
// $(".card").toggleClass("B")
// $(".card").toggleClass('clicked')
// });









  if('p'.html === 'B'){
    console.log("pick another!");
  }
  // $("#hide").click(function(){
  //   $("cardRed").hide();
  // });
  // $("#show").click(function(){
  //   $("#cardRed").show();
  // });

  

});