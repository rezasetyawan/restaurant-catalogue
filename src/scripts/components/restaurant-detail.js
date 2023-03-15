/* eslint-disable require-jsdoc */
import './customer-reviews.js';
import CONFIG from '../globals/config.js';
import RestaurantApiSource from '../data/restaurant-api-source.js';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {id, name, city, rating, pictureId, description, address, categories, menus, customerReviews} = this._restaurant;
    const foodMenus = menus.foods;
    const drinkMenus = menus.foods;

    this.innerHTML = `
    <div class="restaurant-detail">
      <h2 class="restaurant-name">${name}</h2>
      <img src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}" class="restaurant-img">
      <div class="restaurant-info">
        <h3 class="restaurant-info-title">Details</h3>
        <h4 class="restaurant-info-title">Restaurant City</h4>
        <p>${city}</p>
        <h4 class="restaurant-info-title">Restaurant Address</h4>
        <p>${address}</p>
        <h4 class="restaurant-info-title">Rating</h4>
        <p>${rating}</p>
        <h4 class="restaurant-info-title">Restaurant Catergory</h4>
        ${categories.map((category) => `<span class="restaurant-category">${category.name}</span>`).join(', ')}
        <h4 class="restaurant-info-title" >Description</h4>
        <p class="restaurant-description">${description}</p>
      </div>

      <div class="menus">
        <div class="food-menu">
          <h4 class="restaurant-info-title" >Food:</h4>
          <ul>${foodMenus.map((food) => `<li>${food.name}</li>`).join('')}</ul>
        </div>
        <div class="drink-menu">
          <h4 class="restaurant-info-title" >Drink:</h4>
          <ul>${drinkMenus.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
        </div>
      </div>
    </div>

    <div class="review-input-container">
    <h3 >Leave a Review</h3>
    <form id="inputBook">
      <div class="input">
        <label for="inputName">Name</label>
        <input id="inputName" type="text" required>
      </div>
      <div class="input">
        <label for="inputReview">Review</label>
        <textarea rows="3" id="inputReview" type="text" required> </textarea>
      </div>
      <button id="reviewSubmit" type="submit">Submit</button>
    </form>
  </div>
  <customer-reviews></customer-reviews>
`;
    const reviewContainer = document.querySelector('customer-reviews');
    reviewContainer.reviews = customerReviews;

    const reviewName = document.querySelector('#inputName');
    const reviewFeedback = document.querySelector('#inputReview');

    const reviewSubmitButton = document.querySelector('#reviewSubmit');

    reviewSubmitButton.addEventListener('click', async (event) => {
      const reviewData = {
        id: id,
        name: reviewName.value,
        review: reviewFeedback.value,
      };

      if (reviewName.value == '' || reviewFeedback == '') {
        alert('Require name and review');
      } else {
        event.preventDefault();
        await RestaurantApiSource.addNewReview(reviewData);
        location.reload();
        alert('Thank you for your review');
      }
    });
  }
}
customElements.define('restaurant-detail', RestaurantDetail);

