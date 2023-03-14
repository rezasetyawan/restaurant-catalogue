import MainPage from '../views/pages/main-page.js';
import Detail from '../views/pages/detail.js';
import Like from '../views/pages/like';

const routes = {
  '/': MainPage,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
