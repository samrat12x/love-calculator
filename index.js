//h4 is reserved for conclusion

$(".result").hide();
$(".getback").hide();
$(".conclusion").hide();
alert("hello");

var s;//i have to make this sound object global





$(".Predict").click(function() {
    $(".conclusion").show();


    var s1= document.getElementById("name1").value;
    var s2=document.getElementById("name2").value;

        
    if(s1.length!==0 && s2.length!==0 )  //here not equal to syntax: !==
    {
        var love=Math.round(Math.random()*100);
        document.querySelector(".conclusion").textContent=s1+" and "+ s2 +" love chances are "+love+"%";
    
        $(".container").hide();//common before results came in

    
    if(love>=85)
    {

        $(".conclusion").after( "<h4>We can see the future!!!....</h4> ");
         s =new Audio("sounds/m1.mp3"); s.play();
    
        
    document.querySelector(".n1").textContent=s1;
    document.querySelector(".n2").textContent=s2;
          
          $(".result").fadeIn();

        
        $(".getback").show();
      //for auto scrolling to img
        $('html, body').animate({
            'scrollTop' : $("h4").position().top
        });

      


        $(".getback").click(function(){
            $(".container").show();
            $(".result").fadeOut();
            $(".getback").hide();
           
            s.pause(); //to pause the music playing after getback button gets clicked
            s.currentTime = 0;
            $(".conclusion").hide();
             $("h4").remove(); 
        }); 


    }
    else if(love>=65 &&love<85)
    {
        $(".conclusion").after( "<h4>Your Vibes are matching!!!....</h4> ");
        $("<img  src='images/giphy (1).gif'>").insertAfter("h4");
        s =new Audio("sounds/paro.mp3"); s.play();

        $('html, body').animate({
            'scrollTop' : $(".conclusion").position().top
        }); 

        home();
$(".getback").click(function(){ 
 $("h4").remove();
$("img").remove();

});
              

}
    else if(love>=40 &&love<65)
    {  
        
     $(".conclusion").after( "<h4>Sunn,Efforts lagate reh ,samjha..</h4> ");
        
     //for inserting sallu gif dynamically
  
     $("<img  src='images/sallu.gif'>").insertAfter("h4");
     
    
     s =new Audio("sounds/sallu guitar.mp3"); s.play();
     
     $('html, body').animate({
        'scrollTop' : $(".conclusion").position().top
    }); 
     
      home();
        $(".getback").click(function(){  $("h4").remove();
        $("img").remove();
   
    });
              
    
    
    }
    else if(love>=20 &&love<40)
    { $(".conclusion").after( "<h4>Oh no ! You are friendzoned....</h4> ");
    $("<img  src='images/laughing-emoji-3.webp'>").insertAfter("h4")
         s =new Audio("sounds/d.mp3");
          s.play();
     
          $('html, body').animate({
            'scrollTop' : $(".conclusion").position().top
        }); 

          home();
          $(".getback").click(function(){  $("h4").remove();
          $("img").remove();
          
          });     
              
    }
    else
        {
            $(".conclusion").after( "<h4>One-sided love....</h4> ");
        $("<img  src='images/crying-20_.gif'>").insertAfter("h4")
           
            
            s =new Audio("sounds/gulabi.mp3"); s.play();
        
            $('html, body').animate({
                'scrollTop' : $(".conclusion").position().top
            }); 
            
        
            home();
        
        //auto-scrolling to main part
        
        
        
        $(".getback").click(function(){  $("h4").remove();
        $("img").remove();
        
        });     

    }

    
   
   


}
    else
    alert("please enter names")


});


function home()
{
    $(".getback").show();   
    
    $(".getback").click(function(){
        $(".container").show();
      
        $(".getback").hide();
        s.pause();

        $(".conclusion").hide();
    });    

}
