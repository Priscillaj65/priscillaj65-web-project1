document.getElementById("fanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Welcome to the BTS ARMY, " + name + "! 💜";
});
