fetch('recipes.json')
  .then(res => res.json())
  .then(data => {
    const categoriesDiv = document.getElementById('categories');
    const recipesDiv = document.getElementById('recipes');
    const detailDiv = document.getElementById('recipeDetail');

    Object.keys(data).forEach(category => {
      const btn = document.createElement('button');
      btn.textContent = category;

      btn.onclick = () => {
        recipesDiv.innerHTML = '';
        detailDiv.innerHTML = '';

        data[category].forEach(recipe => {
          const card = document.createElement('div');
          card.className = `card ${recipe.light}`;

          card.innerHTML = `
            <strong>${recipe.name}</strong><br>
            ${recipe.tags}<br>
            ${recipe.description}
          `;

          card.onclick = () => {
            detailDiv.innerHTML = `
              <div class="card ${recipe.light}">
                <h2>${recipe.name}</h2>
                <p>${recipe.details}</p>
              </div>
            `;
          };

          recipesDiv.appendChild(card);
        });
      };

      categoriesDiv.appendChild(btn);
    });
  });
