import './App.css';
import Welcome from './components/Welcome'
import Quiz from './components/Quiz';
import Results from './components/Results';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />
    },
    {
      path: '/quiz',
      element: <Quiz />
    },
    {
      path: '/results',
      element: <Results />
    },
  ])

  return (
    <div className='h-screen w-screen flex px-4'>
      <div className='w-max m-auto'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
