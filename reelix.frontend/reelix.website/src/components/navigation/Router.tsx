import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ContentFeedPage from '../pages/ContentFeedPage'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'

const Router: React.FC = () => {
  // TODO: Auto redirect to /#home if no hash is present and the path is only /

  return (
    <Routes>
      <Route path="/" element={<ContentFeedPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/#home" replace />} />
    </Routes>
  )
}
export default Router
