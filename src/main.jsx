import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Home from './pages/Home/Home.jsx'
import Lenis from 'lenis'
import AuthProvider from './context/AuthProvider.jsx'
import ComponentPage from './pages/ComponentPage/ComponentPage.jsx'
import CompoHome from './pages/ComponentPage/CompoPage/CompoHome.jsx'
import CompoAccordion from './pages/ComponentPage/CompoPage/CompoAccordion.jsx'
import CompoCarousel from './pages/ComponentPage/CompoPage/CompoCarousel.jsx'
import CompoForm from './pages/ComponentPage/CompoPage/CompoForm.jsx'
import CompoCard from './pages/ComponentPage/CompoPage/CompoCard.jsx'
import CompoButton from './pages/ComponentPage/CompoPage/CompoButton.jsx'
import { Toaster } from 'react-hot-toast'


// const lenis = new Lenis();
// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/components",
        element: <ComponentPage />,
        children: [
          {
            path: "/components",
            element: <CompoHome />,
          },
          {
            path: "/components/accordion",
            element: <CompoAccordion />,
          },
          {
            path: "/components/carousel",
            element: <CompoCarousel />,
          },
          {
            path: "/components/form",
            element: <CompoForm />,
          },
          {
            path: "/components/card",
            element: <CompoCard />,
          },
          {
            path: "/components/button",
            element: <CompoButton />,
          },
        ]
      },

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />

      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
