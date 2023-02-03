import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/category/Category';

import store from './redux/store'
import { routes } from './routes';

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
