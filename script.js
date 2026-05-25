const games = [
  {
    title: "Persona 5 Royal",
    rating: "9/10",
    image: "images/p5.jpg",
    review: `
    Excellent RPG avec un style incroyable.
    Les personnages sont très mémorables et la musique est folle.
    Le jeu est long mais presque jamais ennuyant.
    `
  },

  {
    title: "Cyberpunk 2077",
    rating: "8/10",
    image: "images/cyberpunk.jpg",
    review: `
    Très bon univers et ambiance.
    Certaines quêtes sont incroyables.
    Night City est magnifique.
    `
  }
];

const gamesList = document.getElementById("games-list");

games.forEach((game) => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <div class="game-preview">
      <img src="${game.image}" alt="${game.title}">
      <div class="game-title">${game.title}</div>
    </div>

    <div class="game-details">
      <img src="${game.image}" alt="${game.title}">

      <div class="game-content">
        <div class="rating">${game.rating}</div>
        <div class="review">${game.review}</div>
      </div>
    </div>
  `;

  const preview = card.querySelector(".game-preview");
  const details = card.querySelector(".game-details");

  preview.addEventListener("click", () => {
    details.classList.toggle("active");
  });

  gamesList.appendChild(card);
});