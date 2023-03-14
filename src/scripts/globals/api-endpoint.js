import CONFIG from './config.js';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  detail: (id) => `${CONFIG.BASE_URL}detail/${id}?`,
  addReview: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
