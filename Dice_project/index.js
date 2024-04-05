var randomnumber1=  Math.floor(Math.random()*6)+1;
var randomdiceImage  = "dice"+ randomnumber1+ ".png";

var randomdiceImagesource = "images/" + randomdiceImage;
var Image1= document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomdiceImagesource);

var randomnumber2=  Math.floor(Math.random()*6)+1;
var randomdiceImage2  = "dice"+ randomnumber2+ ".png";

var randomdiceImagesource2 = "images/" + randomdiceImage2;
var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomdiceImagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 is winner";
}

 else if (randomnumber2>randomnumber1)
 {
    document.querySelector("h1").innerHTML="Player2 is winner";
}

else {
    document.querySelector("h1").innerHTML="draw";
}



//console.log(randomnumber1);





