import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/Category/Category';
import { routes } from './routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <Category />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
