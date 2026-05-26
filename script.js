const games = [
  {
    id: "persona5",
    title: "Persona 5 Royal",
    image: "images/p5.jpg",
    rating: "9/10",
    review:
      "Excellent RPG avec un style incroyable. Les personnages sont mémorables et la musique est folle."
  },

  {
    id: "cyberpunk",
    title: "Cyberpunk 2077",
    image: "images/cyberpunk.jpg",
    rating: "8/10",
    review:
      "Night City est magnifique. Certaines quêtes sont incroyables et l'ambiance fonctionne très bien."
  },

  {
    id: "majora",
    title: "Zelda Majora's Mask",
    image: "images/majora.jpg",
    rating: "10/10",
    review:
      "Une ambiance mélancolique unique avec un monde étrange et mémorable."
  }
];

const app = document.getElementById("games-list");

function renderHome() {
  app.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");

    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="game-title">${game.title}</div>
    `;

    card.addEventListener("click", () => {
      history.pushState({}, "", `#${game.id}`);
      renderGame(game.id);
    });

    app.appendChild(card);
  });
}

function renderGame(id) {
  const game = games.find((g) => g.id === id);

  if (!game) {
    renderHome();
    return;
  }

  app.innerHTML = `
    <button class="back-btn">← Retour</button>

    <div class="game-page">

      <img class="game-cover" src="${game.image}" alt="${game.title}">

      <div class="game-info">
        <h1>${game.title}</h1>

        <div class="rating">${game.rating}</div>

        <div class="review">
          ${game.review}
        </div>
      </div>

    </div>
  `;

  document.querySelector(".back-btn").addEventListener("click", () => {
    history.pushState({}, "", "#");
    renderHome();
  });
}

function checkRoute() {
  const id = window.location.hash.replace("#", "");

  if (id) {
    renderGame(id);
  } else {
    renderHome();
  }
}

window.addEventListener("popstate", checkRoute);

checkRoute();