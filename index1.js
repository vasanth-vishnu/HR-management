function functy(){
  var v=document.forms["hello"]["user"].value;
  var v1=document.forms["hello"]["pass"].value;

  if(v=="taxheal"){
    if(v1=="1234"){
      alert("login ok");
      window.location="final.html";
    }
    else{
      alert("incorrect username or password");
    }
  }
  else{
    alert("incorrectusername or password");
  }


}
