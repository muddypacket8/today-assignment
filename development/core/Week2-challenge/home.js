const animalList = document.getElementById("animal-list");
const animalDetails = document.getElementById("animal-details");

fetch("http://localhost:3000/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.characters.forEach(animal => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.innerText = animal.name;
            link.addEventListener("click", () => {
                displaySelectedAnimalDetails(animal);
            })
            listItem.appendChild(link);
            animalList.appendChild(listItem);
        });
    });

function displaySelectedAnimalDetails(animal) {
    animalDetails.innerHTML = "";

    const image = document.createElement("img");
    image.src = animal.image;
    animalDetails.appendChild(image);

    const voteCount = document.createElement("span");
    voteCount.innerText = `Votes: ${animal.votes}`;
    animalDetails.appendChild(voteCount);

    const voteButton = document.createElement("button");
    voteButton.innerText = "Vote";
    voteButton.addEventListener("click", function() {
        animal.votes++;
        voteCount.innerText = `Votes: ${animal.votes}`;
    });
    animalDetails.appendChild(voteButton);
}    
