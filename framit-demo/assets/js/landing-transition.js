$(document).ready(function() {
	var image1 = $('.image-1');
	var image2 = $('.image-2');
	var image3 = $('.image-3');
	var image4 = $('.image-4');
	var image5 = $('.image-5');
	var images = [image1, image2, image3, image4, image5];
	image2.hide();
	image3.hide();
	image4.hide();
	image5.hide();

	var i = 0;

	setInterval(function() {
		images[i].fadeOut(2500);
		if (i+1==images.length) {
			images[0].fadeIn(2500);
			i=0;
		}
		else{
			images[i+1].fadeIn(2500);
			i++;
		}
	}, 7000);
});