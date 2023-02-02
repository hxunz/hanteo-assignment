import Chart from '../components/category/chart/Chart';
import Event from '../components/category/event/Event';
import News from '../components/category/news/News';
import Store from '../components/category/store/Store';
import Whook from '../components/category/whook/Whook';

export const routes = [
  {
    path: '/chart',
    element: <Chart />
  },
  {
    path: '/whook',
    element: <Whook />
  },
  {
    path: '/event',
    element: <Event />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/store',
    element: <Store />
  }
];
