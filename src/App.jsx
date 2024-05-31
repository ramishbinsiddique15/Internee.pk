import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Internship from './components/Internship'
import Browse from './components/Browse'
import Blog from './components/Blog'
import Portal from './components/Portal'
function App() {
  const router = createBrowserRouter([
    { path: '/', element:<> <Navbar /> <Home/> <About/> <Internship/> <Browse/> <Blog/> <Portal/> </>},
  ]

  )


  return (
  <>
  <RouterProvider router={router}/>
  </> 
  )
}

export default App
