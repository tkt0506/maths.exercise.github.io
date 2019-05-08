<!DOCTYPE html>
<script type="text/javascript">
function timetime() {
  var d = new Date();
  d.setDate(15);
  document.getElementById("time").innerHTML = d;
}	
function myweb(){	
	for(x=0;x<document.myform.myselect.options.length;x++){
		if(document.myfrom.myselect[x].selected){
			alert("sry,have not finish yet")
			location.href=document.myfrom.myselect[x].value
		}
	}
}
function login(){
try{
	if(document.myForm.ID.value!="TKT"){
		throw"idError"
	}else if(document.myForm.psw.value!="tkt0506"){
		throw"pswError"
	}else{
		alert("pass!")
		document.getElementById("87").innerHTML="change the color that you like"
	}
}catch(showError){
	if(showError=="idError"){
		alert("id is not correct")
		document.getElementById("t").innerHTML="you have no permission to use it"
	}			 
	if(showError=="pswError"){
		alert("psw is not correct")
		document.getElementById("t").innerHTML="you have no permission to use it"
	}	
}
}		
function chg1(){
document.getElementById("chgarea").style.backgroundColor="#FF0000"
}
function chg2(){
document.getElementById("chgarea").style.backgroundColor="#0000FF"
}
function chg3(){
document.getElementById("chgarea").style.backgroundColor="#00FF00"
}
function chg4(){
document.getElementById("chgarea").style.backgroundColor="#333"
}
function chg11(){
document.getElementById("chgarea2").style.backgroundColor="#FF0000"
}
function chg22(){
document.getElementById("chgarea2").style.backgroundColor="#0000FF"
}
function chg33(){
document.getElementById("chgarea2").style.backgroundColor="#00FF00"
}
function chg44(){
document.getElementById("chgarea2").style.backgroundColor="#333"
}
function chg111(){
document.getElementById("chgarea1").style.backgroundColor="#FF0000"
}
function chg222(){
document.getElementById("chgarea1").style.backgroundColor="#0000FF"
}
function chg333(){
document.getElementById("chgarea1").style.backgroundColor="#00FF00"
}
function chg444(){
document.getElementById("chgarea1").style.backgroundColor="#333"
}
function picChg(){
document.getElementById("chgArea").innerHTML="You see! Very cute"
}
function txtChg(){
document.getElementById("chgArea").innerHTML='<img src="https://a.wattpad.com/cover/69478585-352-k55561.jpg"/>'
}	
function bigPic(){
document.myPicA.src="https://yt3.ggpht.com/a-/AAuE7mD5oBJwJrFbmZ14xjN0ObCpD5HfU9DVAXqtFA=s288-mo-c-c0xffffffff-rj-k-no"
}	
function smallPic(){
document.myPicA.src="https://stickershop.line-scdn.net/stickershop/v1/product/1503590/LINEStorePC/main.png;compress=true"
}
function myFunction() {
  document.getElementById("demo").innerHTML = Math.floor(Math.random()*34);
} 
function myFunc(){
	var Hours=new Date().getHours();
	var greeting;
if (Hours<10){
	greeting="Good Day!";
}else if(Hours<14){
	greeting="good afternoon!";
}else if(Hours<18){
	greeting="good evening!";
}else{
	greeting="good night!";
}	
	document.getElementById("oh").innerHTML = greeting;
}
	var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("Day").innerHTML = "Hello！ Today is " + day; 
	 var text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Woo!Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "Yeah!It is Weekend";
    break;
  default:
    text = "oh,looking forward to the Weekend";
}
document.getElementById("hi").innerHTML = text;
function hay() {
 var x,y;
 x = document.getElementById("good").value;
 y = document.getElementById("bad").value;	
  try{
if(x==" ") {
	throw"nox"
}else if(y==" ") {
	throw"noy"
}else if(isNaN(x)){		
	throw"xx"
}else if(isNaN(y)) {
	throw"yx"
}else if(x>y){
	throw"x>y"
}else{
documnet.getElementById("pol").innerHTML=
Math.floor(Math.random()*y+x) ;
}
}catch{
     if(showError=="nox"){
	     alert("please enter the min number")
     }
     if(showError=="noy"){
	     alert("please enter the max number")
     }
     if(showError=="xx"){
	     alert("min number is not a number")
     }
     if(showError=="yx"){
	     alert("max number is not a number")
     }
     if(showError=="x>y"){
	     alert("why min number is larger than max number?")
     }		 
}	
}
</script>
</html>
