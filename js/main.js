$('button').on('click', function () {

	// Add your code here!

	// Step 1: Add the party class to the .square

$(".square").addClass("party");
	
	// Step 2: Use the .attr() method to update the src of the image to 'images/cat.jpeg'

$("img").attr("src", "images/cat.jpeg");	
	

	// Step 3: Change the HTML for the h1 to "Having fun!" using the .html() method.

$("h1").html("Having fun!");
	
	
	// Step 4: Prepend the following paragraph to the body element:
	//    '<p>Done and Done!</p>'

$("body").prepend("<p>Done and Done!</p>");


});



function initMap() {

	var styles = [
{
	stylers: [
	{ hue: '#00ffe6' },
	{ saturation: -20 }
	]
},{
	featureType: 'road',
	elementType: 'geometry',
	stylers: [
	{ lightness: 100 },
	{ visibility: 'simplified' }
	]
},{
	featureType: 'road',
	elementType: 'labels',
	stylers: [
	{ visibility: 'off' }
	]
}
];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8
    zoomControl: false,
    styles: styles
  });
}

initMap();