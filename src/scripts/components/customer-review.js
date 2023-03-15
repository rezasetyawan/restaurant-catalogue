/* eslint-disable require-jsdoc */
class customerReview extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const {name, review, date} = this._review;
    this.innerHTML = `
    <h4 class="guest-name">${name}</h4>
    <p class="feedback">${review}</p>
    <time class="feeback-date">${date}</time>
      `;
  }
}

customElements.define('customer-review', customerReview);
