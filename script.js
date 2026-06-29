function homePage() {
    alert("Welcome to the Community Discussion Forum");
}

function loginUser() {

    let username = prompt("Enter your username");

    if (username == "" || username == null) {
        alert("Login Cancelled");
    }
    else {
        alert("Welcome " + username);
    }

}

function signupUser() {

    let username = prompt("Create your username");

    if (username == "" || username == null) {
        alert("Signup Cancelled");
    }
    else {
        alert("Account Created Successfully");
    }

}

function startDiscussion() {
    alert("You can create a new discussion below.");
}

function searchDiscussion() {

    let search = document.getElementById("searchBox").value;

    if (search == "") {
        alert("Please enter something to search.");
    }
    else {
        alert("Searching for : " + search);
    }

}

function viewDiscussion(title) {
    alert("Opening Discussion : " + title);
}

function postDiscussion(event) {

    event.preventDefault();

    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let message = document.getElementById("message").value;

    if (title == "" || message == "") {
        alert("Please fill all the fields.");
        return;
    }

    if (category == "Select Category") {
        alert("Please select a category.");
        return;
    }

    alert("Discussion Posted Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("message").value = "";

}