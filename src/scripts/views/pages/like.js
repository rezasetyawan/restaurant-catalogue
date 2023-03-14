import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import '../../components/restaurant-list.js';

const Like = {
  async render() {
    return `
    <section class="restaurant">
    <h2>Your Liked Restaurant</h2>
    <restaurant-list></restauran-list>
    </section>
    `;
  },

  async afterRender() {
    const restaurantsFavoriteData = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurantsFavoriteData;
  },
};

export default Like;
