import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Home from './pages/Home/Home.jsx'
import Lenis from 'lenis'
import AuthProvider from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import CompoHomePage from './pages/CompoPages/CompoHomePage.jsx'
import AccordionPage from './pages/CompoPages/AccordionPage.jsx'
import CarouselPage from './pages/CompoPages/CarouselPage.jsx'
import FormsPage from './pages/CompoPages/FormsPage.jsx'
import CardsPage from './pages/CompoPages/CardsPage.jsx'
import ButtonPage from './pages/CompoPages/ButtonPage.jsx'
import MainComponentPage from './pages/MainComponentPage/MainComponentPage.jsx'
import HerosPage from './pages/CompoPages/HerosPage.jsx'
import NavbarPage from './pages/CompoPages/NavbarPage.jsx'


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
        element: <MainComponentPage />,
        children: [
          {
            path: "/components",
            element: <CompoHomePage />,
          },
          {
            path: "/components/accordion",
            element: <AccordionPage />,
          },
          {
            path: "/components/navbar",
            element: <NavbarPage />,
          },
          {
            path: "/components/carousel",
            element: <CarouselPage />,
          },
          {
            path: "/components/form",
            element: <FormsPage />,
          },
          {
            path: "/components/card",
            element: <CardsPage />,
          },
          {
            path: "/components/hero",
            element: <HerosPage />,
          },
          {
            path: "/components/button",
            element: <ButtonPage />,
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
