/* eslint-disable require-jsdoc */
import './customer-review.js';

class CustomerReviews extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = `<h3  tabindex="0">Reviews</h3>`;
    this._reviews.forEach((customerReview) => {
      const restaurantReviewElement = document.createElement('customer-review');
      restaurantReviewElement.setAttribute('tabindex', '0');
      restaurantReviewElement.review = customerReview;
      this.appendChild(restaurantReviewElement);
    });
  }
}

customElements.define('customer-reviews', CustomerReviews);
