import Chart from '../components/Category/Chart/Chart';
import Event from '../components/Category/Event/Event';
import News from '../components/Category/News/News';
import Store from '../components/Category/Store/Store';
import Whook from '../components/Category/Whook/Whook';

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
