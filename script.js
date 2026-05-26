const games = [
  {
    title: "Persona 5 Royal",
    image: "images/p5.jpg",
    page: "jeux/persona5.html"
  },

  {
    title: "Cyberpunk 2077",
    image: "images/cyberpunk.jpg",
    page: "jeux/cyberpunk.html"
  },

  {
    title: "Zelda Majora's Mask",
    image: "images/majora.jpg",
    page: "jeux/zelda-mm.html"
  }
];

const gamesList = document.getElementById("games-list");

games.forEach((game) => {
  const card = document.createElement("a");

  card.className = "game-card";
  card.href = game.page;

  card.innerHTML = `
    <img src="${game.image}" alt="${game.title}">
    <div class="game-title">${game.title}</div>
  `;

  gamesList.appendChild(card);
});