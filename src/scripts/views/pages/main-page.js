import RestaurantApiSource from '../../data/restaurant-api-source.js';
import '../../components/restaurant-list.js';

const MainPage = {
  async render() {
    return `
    <section class="restaurant">
      <h2>Find our restaurant</h2>
      <restaurant-list></restauran-list>
    </section>
    `;
  },

  async afterRender() {
    const restaurantsData = await RestaurantApiSource.restaurantList();
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.restaurants = restaurantsData;
  },
};

export default MainPage;
