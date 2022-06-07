

// // changing individual properties with code and using setInterval
 var rotationSpeed = 0.05;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.x);
 }
 
 function spin2(){
 	myOtherBox.object3D.rotation.y -= rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.y);
 }

 function spin3(){
 	myOtherBox.object3D.rotation.z -= rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.z);
 }

 setInterval(spin, 16); //equivalent to 60 fps
 setInterval(spin2, 16);
 setInterval(spin3, 16);
