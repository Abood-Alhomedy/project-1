
var scrollButtom = $(".scroll-top");
$(window).scroll(function(){

   if($(this).scrollTop()>=300){
    scrollButtom.show();
   }
   else{
    scrollButtom.hide();
   }
});
//click on buttom to scroll top
scrollButtom.click(function(){
    $('html,body').animate({scrollTop:0},600); //600 هي سرعه الطلوع 
                                            
});

//loading screen
$(window).load(function(){

    //loading elements
   $(".loading-overlayd .loader").fadeOut(2000 ,
     function(){
      $(this).parent().fadeOut(2000 ,
         function(){   
             //اضهار السكرول  في الصفحه بعد التحميل 
      $("body").css("overflow" , "auto");
           $(this).remove();    
     });
   });
});