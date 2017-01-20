var cat1 = [
"http://cemresari.nl",
"http://heeeeeeeey.com/",
"http://eelslap.com/",
"http://www.fallingfalling.com/"
];

var myFrame = document.getElementById("frame");

function getRandomUrl(myFrame) {
var index = Math.floor(Math.random()*cat1.length);
var url = cat1[index];
myFrame.src = url;
}

btn.addEventListener("click", function() {

getRandomUrl(myFrame);

});
