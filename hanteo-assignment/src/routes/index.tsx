import Chart from 'src/components/chart/Chart';
import Event from 'src/components/event/Event';
import News from 'src/components/news/News';
import Store from 'src/components/store/Store';
import Whook from 'src/components/whook/Whook';
import Home from 'src/pages/Home';

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
  },
  {
    path: '*',
    element: <Home />
  }
];
