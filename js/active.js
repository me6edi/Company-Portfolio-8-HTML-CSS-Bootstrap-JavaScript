$(document).ready(function(){
    // $(".homepage-slides").owlCarousel({
    //     items: 1,
    //     nav:true,
    //     loop: true,
    //     autoplay: true,
    //     dots: false,
    //     loop:true,
    //     navTxt:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]

    // });
     

    let $btns = $('.project-area .button-group button');
    $btns.click(function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');
    
    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter:selector
      });
    
      return false;
    
     })



     
     
  });