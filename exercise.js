// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// Remove the last paragraph in the article.
// Set the font size of the title to be a random pixel size from 0 to 100.
// Add an item to the list; it can say whatever you want.
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// Add an event listener so that when you click on the image, it is removed from the DOM.

console.log("Let's get ready to party with jQuery!");
$('article img').addClass('image-center');
$('p:last-child').remove();
$('h1').css('font-size', Math.floor(Math.random() * 101));
$('ol').append("<li>Here's an extra item!</li>");
$('aside').html("<p>I'm so sorry for the list that was previously here</p>");

$('.form-control').on('change blur', function() {
	let b = $('.form-control').eq('1').val();
	let g = $('.form-control').eq('2').val();
	let r = $('.form-control').eq('0').val();
	$('body').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
});

$('img').on('click', function() {
	$(this).remove();
});
