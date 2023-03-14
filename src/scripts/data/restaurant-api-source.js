import API_ENDPOINT from '../globals/api-endpoint.js';
import '../components/restaurant-list.js';

class RestaurantApiSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (message) {
      document.querySelector('restaurant-list').renderError(message);
    }
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    return response.json();
  }

  static async addNewReview(reviewData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    };
    await fetch(API_ENDPOINT.addReview, options);
  }
}

export default RestaurantApiSource;
