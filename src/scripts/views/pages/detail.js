import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurant-api-source.js';
import '../../components/restaurant-detail.js';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <restaurant-detail></restaurant-detail>
    <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantsData = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    restaurantDetailElement.restaurant = restaurantsData.restaurant;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurantsData.restaurant.id,
        name: restaurantsData.restaurant.name,
        city: restaurantsData.restaurant.city,
        rating: restaurantsData.restaurant.rating,
        description: restaurantsData.restaurant.description,
        pictureId: restaurantsData.restaurant.pictureId,
      },
    });
    document.querySelector('.skip-link').dispatchEvent(new Event('click'));
  },
};

export default Detail;

