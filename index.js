function validateForm(){
  var arr=[];
  for(var i=1;i<5;i++){
    if(($(".form .in"+i).val())==="" || ($(".form .in"+i).val())===null){
      $(".form .v"+i).css("display","block");
      $(".form .d"+i).css("border","1.5px solid hsl(0, 100%, 74%)");
      $(".form .in"+i).attr("placeholder","");
      $(".im"+i).css("display","inline");
    }
     if(i===3 && ($(".form .in"+i).val())==="" || ($(".form .in"+i).val())===null){
      $(".form .in"+i).attr("placeholder","email@example/com");
      $(".form .in"+i).css("color","hsl(0, 100%, 74%)");
      $(".form .in"+i).css("font-weight","700");
    }
    validation();
  }


  }


$("input").click(function(){
  var name=$(this).attr("name");
  if(name==="fname"){
    $(".form .v1").css("display","none");
    $(".form .d1").css("border","1.5px solid hsl(246, 25%, 77%)");
    $(".form .in1").attr("placeholder","First Name");
    $(".d1 img").css("display","none");
  }
  else if(name==="lname"){
    $(".form .v2").css("display","none");
    $(".form .d2").css("border","1.5px solid hsl(246, 25%, 77%)");
    $(".form .in2").attr("placeholder","Last Name");
    $(".d2 img").css("display","none");
  }
  else if(name==="email"){
    $(".form .v3").css("display","none");
    $(".form .d3").css("border","1.5px solid hsl(246, 25%, 77%)");
    $(".form .in3").attr("placeholder","Email Adress");
    $(".d3 img").css("display","none");
    $(".form .in3").val("");
    $(".form .in3").css("color","black");
    $(".form .in3").css("font-weight","500");
  }
  else if(name==="pass"){
    $(".form .v4").css("display","none");
    $(".form .d4").css("border","1.5px solid hsl(246, 25%, 77%)");
    $(".form .in4").attr("placeholder","Password");
    $(".d4 img").css("display","none");
  }

});

function validation(){
  var val=$(".form .in3").val();
  if(val.includes("@")==false || val.length<2){
    $(".form .in3").css("color","hsl(0, 100%, 74%)");
    $(".form .in3").css("font-weight","700");
    $(".form .v3").css("display","block");
    $(".form .d3").css("border","1.5px solid hsl(0, 100%, 74%)");
  }
  else if(val.includes("@")==true || val.length>2){
    var number=val.indexOf("@");
    var arr=[];
    for(var i=number+1;i<val.length;i++){
      arr.push(val.charAt(i));
    }
    if(arr.length===0){
      $(".form .in3").css("color","hsl(0, 100%, 74%)");
      $(".form .in3").css("font-weight","700");
      $(".form .v3").css("display","block");
      $(".form .d3").css("border","1.5px solid hsl(0, 100%, 74%)");
    }
  }


  }
