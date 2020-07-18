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

const aboutObserver = new IntersectionObserver(
	(entries, observer) => {
		if (entries[0].isIntersecting) {
			aboutTxt.style.transform = "translateX(0px)";
			aboutTxt.style.visibility = "visible";
			aboutTxt.style.opacity = "1";
			aboutContent.style.visibility = "visible";
			aboutContent.style.opacity = "1";

			observer.disconnect();
		}
	},
	{
		threshold: 1.0,
	}
);

aboutObserver.observe(aboutTxt);

const skills = document.getElementsByClassName("skill-card");

const skillObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("skill-card-visible");
			}
		});
	},
	{
		threshold: 1.0,
	}
);

for (const skill of skills) {
	skillObserver.observe(skill);
}
