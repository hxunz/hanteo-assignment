import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './components/Category/Category';
import Chart from './components/Category/Chart/Chart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Category />,
  },
  {
    path: '/chart',
    element: <Chart />
  }
])

const App = () => {
  return (
    <>
      <Category />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
