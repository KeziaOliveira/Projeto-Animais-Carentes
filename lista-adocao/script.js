const dogsElement = document.getElementById("dogs");
const catsElement = document.getElementById("cats");

pets.dogs.forEach((dog) => {
  catsElement.innerHTML += `<div class="pet-card"><img src="../data/images/${dog.image}-d.jpg" alt="foto de perfil de ${dog.name}" /><h2>${dog.name}</h2><p>${dog.description}</p></div>`;
});

pets.cats.forEach((cat) => {
  catsElement.innerHTML += `<div class="pet-card"><img src="../data/images/${cat.image}-c.jpg" alt="foto de perfil de ${cat.name}" /><h2>${cat.name}</h2><p>${cat.description}</p></div>`;
});
