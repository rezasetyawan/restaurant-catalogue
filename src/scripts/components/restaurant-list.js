import './restaurant-item.js';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    if (!this._restaurants.length) {
      this.style.display = 'block';
      this.innerHTML = `<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>`
    }
    this._restaurants.forEach((restaurant) => {
      this.style.display = 'grid';
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
