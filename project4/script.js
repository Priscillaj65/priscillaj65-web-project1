document.getElementById("fanForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stops page from refreshing

    // get user input
    let name = document.getElementById("name").value;

    // create personalized message
    let message = "Welcome to the BTS ARMY, " + name + "! 💜";

    // display message on page
    document.getElementById("message").textContent = message;
});
