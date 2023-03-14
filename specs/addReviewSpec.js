import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Add New Review', () => {
  const addReviewSection = () => {
    document.body.innerHTML = `<div class="review-input-container">
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
  <customer-reviews></customer-reviews>`
  }

  beforeEach(() => {
    addReviewSection();
  })
});
