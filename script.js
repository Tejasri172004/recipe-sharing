document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("add-recipe-form");
  const recipesContainer = document.getElementById("recipes");
  const searchInput = document.getElementById("search");

  // Function to add a new recipe
  form.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const image = document.getElementById("image").value;
      const ingredients = document.getElementById("ingredients").value;
      const steps = document.getElementById("steps").value;
      const category = document.getElementById("category").value;

      if (title && image && ingredients && steps) {
          createRecipeCard(title, image, ingredients, steps, category);
          form.reset();
      }
  });

  // Function to create a recipe card
  function createRecipeCard(title, image, ingredients, steps, category) {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");

      recipeCard.innerHTML = `
          <h3>${title}</h3>
          <img src="${image}" alt="${title}">
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Ingredients:</strong> ${ingredients}</p>
          <p><strong>Steps:</strong> ${steps}</p>
          <div class="rating">
              <span class="star" data-value="1">★</span>
              <span class="star" data-value="2">★</span>
              <span class="star" data-value="3">★</span>
              <span class="star" data-value="4">★</span>
              <span class="star" data-value="5">★</span>
          </div>
          <p class="rating-text">No rating yet</p>
          <button class="delete-btn">Delete</button>
          <div class="comments-section">
              <h4>Comments</h4>
              <div class="comments-list"></div>
              <input type="text" class="comment-input" placeholder="Add a comment...">
              <button class="comment-btn">Post</button>
          </div>
      `;

      recipeCard.querySelector(".delete-btn").addEventListener("click", function () {
          recipeCard.remove();
      });

      const stars = recipeCard.querySelectorAll(".star");
      const ratingText = recipeCard.querySelector(".rating-text");

      stars.forEach(star => {
          star.addEventListener("click", function () {
              const rating = this.getAttribute("data-value");
              stars.forEach(s => s.classList.remove("selected"));
              for (let i = 0; i < rating; i++) {
                  stars[i].classList.add("selected");
              }
              ratingText.textContent = `Rated: ${rating} Stars`;
          });
      });

      document.getElementById("recipes").appendChild(recipeCard);
  }
});
