const aboutTxt = document.getElementById("about-txt");
const aboutContent = document.getElementById("about-content");

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
		threshold: 0.5,
	}
);

for (const skill of skills) {
	skillObserver.observe(skill);
}

const projects = document.getElementsByClassName("project-card");
const projectObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("project-card-visible");
			}
		});
	},
	{
		threshold: 0.1,
	}
);

for (const project of projects) {
	projectObserver.observe(project);
}
