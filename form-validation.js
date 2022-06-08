function numDays() {
	var date1 = new Date(document.getElementById("check-in").value);
	var date2 = new Date(document.getElementById("check-out").value);
	var diffDays = Math.round((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
	if (diffDays >= 0) {
		document.getElementById("days").value = diffDays;
		document.getElementById("cost").value = diffDays * 1000 + 500;
	}
	else {
		if (document.getElementById("check-in").value && document.getElementById("check-out").value) {
			document.getElementById("days").value = "";
			document.getElementById("cost").value = "";
			alert("Check-out date is earlier than check-in date");
		}
	}
}

function validateForm() {
	if (!document.getElementById("username").value) {
		alert("Username field is empty");
		return false;
	}
	else if (!document.getElementById("firstname").value) {
		alert("First name field is empty");
		return false;
	}
	else if (!document.getElementById("lastname").value) {
		alert("Last name field is empty");
		return false;
	}
	else if (!document.getElementById("phone#").value) {
		alert("Phone number field is empty");
		return false;
	}
	else if (!document.getElementById("fax").value) {
		alert("Fax field is empty");
		return false;
	}
	else if (!document.getElementById("e-mail").value) {
		alert("Email field is empty");
		return false;
	}
	else if (!document.getElementById("check-in").value) {
		alert("Check-in date is empty");
		return false;
	}
	else if (!document.getElementById("check-out").value) {
		alert("Check-out date is empty");
		return false;
	}
	else if (!document.getElementById("message").value) {
		alert("Message box is empty");
		return false;
	}
	else if (!document.getElementById("low").value && !document.getElementById("medium").value && !document.getElementById("high").value) {
		alert("Priority selection is empty");
		return false;
	}
	else if (!document.getElementById("days").value || !document.getElementById("cost").value) {
		alert("Check-out date is earlier than check-in date");
		return false;
	}
	else if (!checkRegex(document.getElementById("firstname").value, "letters")) {
		alert("First name must be all letters");
		return false;
	}
	else if (!checkRegex(document.getElementById("lastname").value, "letters")) {
		alert("Last name must be all letters");
		return false;
	}
	else if (!checkRegex(document.getElementById("fax").value, "numbers")) {
		alert("Fax must be all numbers");
		return false;
	}
	else if (!checkRegex(document.getElementById("e-mail").value, "email")) {
		alert("Email must be in correct format");
		return false;
	}
	else {
		alert("Success. Your form has been submitted and is being processed.");
	}
}

function checkRegex(str, type) {
	if (type === "letters") {
		let re = /^[a-zA-Z]+$/;
		if (new RegExp(re).test(str))
			return true;
		else
			return false;
	}
	else if (type === "numbers") {
		let re = /^[0-9]+$/;
		if (new RegExp(re).test(str)) 
			return true;
		else
			return false;
	}
	else if (type === "email") {
		let re = /^\w+\@\w+\.\w{2,3}$/;
		if (new RegExp(re).test(str))
			return true;
		else
			return false;
	}
}