document.addEventListener("DOMContentLoaded", 
function(event) {
    fetch("https://api.github.com/users/FrauReise/repos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(element => {
                document.getElementById('projects').innerHTML += element.name + "</br>";
            });{};
        })
        .catch(err => console.log(err));
});