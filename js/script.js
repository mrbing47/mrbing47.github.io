const aboutTxt = document.getElementById("about-txt");
const aboutContent = document.getElementById("about-content");

const options = {
	threshold: 1.0,
};

let observer = new IntersectionObserver((options) => {
	console.log(options[0]);
	if (options[0].isIntersecting) {
		console.log("here");
		aboutTxt.style.transform = "translateX(0px)";
		aboutContent.style.visibility = "visible";
		aboutContent.style.opacity = "1";
	}
}, options);

observer.observe(aboutTxt);
