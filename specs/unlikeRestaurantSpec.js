import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });


  it('should show unlike button when restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
        .toBeTruthy();
  });

  it('should not show like button when restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});

    expect(document.querySelector('[aria-label="like this restaurant"]'))
        .toBeFalsy();
  });

  it('should be able to remove like restaurnt from list', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenter({id: 1});

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
