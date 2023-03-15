/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import CONFIG from '../globals/config.js';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {name, city, rating, pictureId, description, id} = this._restaurant;
    this.innerHTML = `
      <article class="restaurant-item">
      <img data-src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}" class="restaurant-item-thumbnail lazyload">
      <div class="restaurant-item-content">
      <span class="restaurant-city">${city}</span>
        <span class="restaurant-rating">Rating: ${rating}</span>
        <h3 class="restaurant-name"><a href="#/detail/${id}">${name}</a></h3>
        <p class="restaurant-item-description">${description}</p>
      </div>
    </article>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
