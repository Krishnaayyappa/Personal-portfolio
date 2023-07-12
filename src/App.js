import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLayout from './components/layout/layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/projects';
import Contact from './pages/contact';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "resume", element: <Resume /> },
      { path: "projects", element: <Projects /> },
      {path:"contact", element:<Contact />}
    ],
  },
]);


function App() {
  return <RouterProvider router = {routes}/>
}

export default App;


