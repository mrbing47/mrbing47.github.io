const btnSubmitForm = document.getElementById("submit-form");
const ipUserName = document.getElementById("name");
const ipUserEmail = document.getElementById("email");
const ipUserMessage = document.getElementById("message");
const formErr = document.getElementById("form-err");

emailjs.init("user_3n6sdiY1yTphzbCRv2hK0");

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

	/*emailjs
		.send("gmail", "template_fVeTzPhc", {
			user_name: name,
			user_email: email,
			user_msg: msg,
		})
		.then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);*/
});
