import React from 'react'
import { navigationConfig } from './navigationConfig'
import { Routes, Route, Navigate } from 'react-router-dom'

const Router: React.FC = () => {
  // TODO: Auto redirect to /#home if no hash is present and the path is only /

  return (
    <Routes>
      {navigationConfig.map(({ path, component }) => (
        <Route key={path} path={path} element={React.createElement(component)} />
      ))}
      <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
  )
}

export default Router
