import WhookPage from 'src/components/whook/Whook';
import Home from 'src/pages';
import ChartPage from 'src/pages/chart';
import EventPage from 'src/pages/event';
import NewsPage from 'src/pages/news';
import StorePage from 'src/pages/store';

export const routes = {
  chart: '/chart',
  whook: '/whook',
  event: '/event',
  news: '/news',
  store: '/store',
}

export const router = [
  {
    path: routes.chart,
    element: <ChartPage />,
    name: '차트'
  },
  {
    path: routes.whook,
    element: <WhookPage />,
    name: 'whook'
  },
  {
    path: routes.event,
    element: <EventPage />,
    name: 'event'
  },
  {
    path: routes.news,
    element: <NewsPage />,
    name: 'news'
  },
  {
    path: routes.store,
    element: <StorePage />,
    name: 'store'
  },
  {
    path: '*',
    element: <Home />
  }
];
