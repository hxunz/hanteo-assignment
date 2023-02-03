import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from './components/category/Category';
import { routes } from './routes';

import store from './redux/store'

import Home from './pages';
import ChartPage from './pages/chart';
import WhookPage from './pages/whook';
import NewsPage from './pages/news';
import StorePage from './pages/store';
import EventPage from './pages/event';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Category />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path={routes.chart} element={<ChartPage />} />
          <Route path={routes.whook} element={<WhookPage />} />
          <Route path={routes.news} element={<NewsPage />} />
          <Route path={routes.store} element={<StorePage />} />
          <Route path={routes.event} element={<EventPage />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App;