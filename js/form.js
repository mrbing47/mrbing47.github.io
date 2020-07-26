const btnSubmitForm = document.getElementById("submit-form");
const ipUserName = document.getElementById("name");
const ipUserEmail = document.getElementById("email");
const ipUserMessage = document.getElementById("message");
const formErr = document.getElementById("form-err");

const loadingCard = document.getElementById("loading-card");
const successfulCard = document.getElementById("successful-card");
const failCard = document.getElementById("fail-card");

const btnTryAgain = document.getElementById("try-again");
const btnAnotherRes = document.getElementById("another-res");

emailjs.init("user_3n6sdiY1yTphzbCRv2hK0");

function toggleCard(showCard, isVisible) {
	if (isVisible) {
		showCard.style.visibility = "visible";
		showCard.style.opacity = "1";
	} else {
		showCard.style.visibility = "hidden";
		showCard.style.opacity = "0";
	}
}

btnSubmitForm.addEventListener("click", (e) => {
	const name = ipUserName.value;
	const email = ipUserEmail.value;
	const msg = ipUserMessage.value;

	if (!name || !email || !msg) {
		formErr.innerText = "All Fields are Required.";
		formErr.style.visibility = "visible";
		return;
	} else {
		if (email.split("@").length != 2) {
			formErr.innerText = "Please Enter a valid Email Id.";
			formErr.style.visibility = "visible";
			return;
		} else {
			formErr.style.visibility = "hidden";
		}
	}

	toggleCard(loadingCard, true);

	ipUserName.value = "";
	ipUserEmail.value = "";
	ipUserMessage.value = "";

	emailjs
		.send("gmail", "template_fVeTzPhc", {
			user_name: name,
			user_email: email,
			user_msg: msg,
		})
		.then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				toggleCard(successfulCard, true);
				toggleCard(loadingCard, false);
			},
			function (error) {
				console.log("FAILED...", error);
				toggleCard(failCard, true);
				toggleCard(loadingCard, false);
			}
		);
});

btnTryAgain.addEventListener("click", () => {
	toggleCard(failCard, false);
});

btnAnotherRes.addEventListener("click", () => {
	toggleCard(successfulCard, false);
});
