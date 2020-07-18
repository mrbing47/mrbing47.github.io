const greetImg = document.getElementById("greet-img");
window.addEventListener("load", () => {
	greetImg.style.transform = "translateX(0px)";
	greetImg.style.visibility = "visible";
	greetImg.style.opacity = "1";
});

const mouse = document.getElementById("mouse");

const aboutSec = document.getElementById("about-sec");
const aboutTxt = document.getElementById("about-txt");
const aboutContent = document.getElementById("about-content");

mouse.addEventListener("click", (event) => {
	aboutSec.scrollIntoView();
});

const options = {
	threshold: 1.0,
};

let observer = new IntersectionObserver((options) => {
	if (options[0].isIntersecting) {
		aboutTxt.style.transform = "translateX(0px)";
		aboutTxt.style.visibility = "visible";
		aboutTxt.style.opacity = "1";
		aboutContent.style.visibility = "visible";
		aboutContent.style.opacity = "1";
	}
}, options);

observer.observe(aboutTxt);
