const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('restaurant-list');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  });

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(2);

  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});


Scenario('unliking one restaurant', async ({ I }) => {
    // AWALNYA KAYA SCENARION LIKE ONE RESTAURANT
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    I.amOnPage('/');
    I.wait(2);
  
    I.seeElement('.restaurant-name a');
  
    const firstRestaurant = locate('.restaurant-name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    // PROSES UNLIKE MULAI DARI SINI
    
    I.amOnPage('/#/like');
    
    I.seeElement('.restaurant-name a');
    I.click('.restaurant-name a');
    I.wait(2);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('restaurant-list');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  });
  

// Scenario('searching movies', async ({ I }) => {
//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

//   I.amOnPage('/');
//   I.wait(2);

//   I.seeElement('.movie__title a');

//   const titles = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.movie__title a').at(i));
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     titles.push(await I.grabTextFrom('.movie__title'));
//     I.amOnPage('/');
//     I.wait(2);
//   }

//   I.amOnPage('/#/like');
//   I.seeElement('#query');

//   const searchQuery = titles[1].substring(1, 3);
//   const matchingMovies = titles.filter((title) => title.indexOf(searchQuery) !== -1);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   const visibleLikedMovies = await I.grabNumberOfVisibleElements('.movie-item');
//   assert.strictEqual(matchingMovies.length, visibleLikedMovies);

//   matchingMovies.forEach(async (title, index) => {
//     const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(index + 1));
//     assert.strictEqual(title, visibleTitle);
//   });
// });
