import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layouts/UserLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import ProtectedRoute from "./components/Admin/ProtectedRoute"; 

import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

import Keyboard from './components/Admin/Keyboard'
import DashboardPage from './pages/DashboardPage'
import GalleryPage from './pages/GalleryPage'

const App = () => {
  return (
    <BrowserRouter>
      <Keyboard />
      <Routes>
        {/* Public user routes with layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>

        {/* Admin login page */}
        <Route path="/admin" element={<LoginPage />} />

        {/* Protected admin dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Optional: catch all unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
