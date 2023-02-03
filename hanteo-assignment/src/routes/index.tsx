import WhookPage from 'src/components/whook/Whook';
import Home from 'src/pages';
import ChartPage from 'src/pages/chart';
import EventPage from 'src/pages/event';
import NewsPage from 'src/pages/news';
import StorePage from 'src/pages/store';

export const routes = [
  {
    path: '/chart',
    element: <ChartPage />
  },
  {
    path: '/whook',
    element: <WhookPage />
  },
  {
    path: '/event',
    element: <EventPage />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/store',
    element: <StorePage />
  },
  {
    path: '*',
    element: <Home />
  }
];
