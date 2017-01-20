var sites = [
"http://www.koalastothemax.com/",
"http://cemresari.nl",
"http://heeeeeeeey.com/",
"http://eelslap.com/",
"http://www.fallingfalling.com/",
"http://www.trashloop.com/",
"http://donottouch.org/",
"http://chrismckenzie.com/",
"http://heeeeeeeey.com/",
"http://www.republiquedesmangues.fr/",
"http://thatsthefinger.com/",
"http://www.rrrgggbbb.com/",
"http://www.sanger.dk/",
"http://www.partridgegetslucky.com/",
"http://www.everydayim.com/",
"http://www.koalastothemax.com/",
"http://www.sadforjapan.com/",
"http://www.taghua.com/",
"http://iloveyoulikeafatladylovesapples.com/",
"http://www.pointerpointer.com/",
"http://www.crossdivisions.com/"
];

$( "#btn" ).click(function() {
$( "#head" ).hide();


});

var myFrame = document.getElementById("frame");

function getRandomUrl(myFrame) {
var index = Math.floor(Math.random()*sites.length);
var url = sites[index];
myFrame.src = url;
}

btn.addEventListener("click", function() {
getRandomUrl(myFrame);

});
