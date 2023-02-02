import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/category/Category';
import { routes } from './routes';

import store from './redux/store'

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Category />
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App;
