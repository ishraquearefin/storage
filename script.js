
document.getElementById("save3").onclick=function(){
	
	document.getElementById("mytb").style.display="block"
	if (typeof(Storage) !== "undefined") {
		if(localStorage.textEntered!==null){
localStorage.textEntered= localStorage.textEntered+"<br>"+document.getElementById("pi1").value
//localStorage.removeItem("textEntered")
document.getElementById("info1").innerHTML = localStorage.textEntered
		}
  // Store
  else{
  localStorage.textEntered=document.getElementById("pi1").value
    document.getElementById("info1").innerHTML = localStorage.textEntered ;
//localStorage.removeItem("textEntered")
}
  // Retrieve

  

} else {
  document.getElementById("info1").innerHTML = "Sorry, your browser does not support Web Storage...";
}
	

			if (typeof(Storage) !== "undefined") {
				if(localStorage.age!==null){
					localStorage.age= localStorage.age+"<br>"+document.getElementById("pi2").value


document.getElementById("info2").innerHTML = localStorage.age
//localStorage.removeItem("age")

		}
  // Store
  else{
  localStorage.age=document.getElementById("pi2").value
    document.getElementById("info2").innerHTML = localStorage.age ;
  //localStorage.removeItem("age")
}
  // Retrieve

  

} else {
  document.getElementById("info2").innerHTML = "Sorry, your browser does not support Web Storage...";
}

		if (typeof(Storage) !== "undefined") {
			if(localStorage.gender!==null){
localStorage.gender= localStorage.gender+"<br>"+document.getElementById("pi3").value
document.getElementById("info3").innerHTML = localStorage.gender
//localStorage.removeItem("gender")
		}
  // Store
  else{
  localStorage.gender=document.getElementById("pi3").value
 document.getElementById("info3").innerHTML = localStorage.gender ;
//localStorage.removeItem("gender")
}
  // Retrieve

  

} else {
  document.getElementById("info3").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}