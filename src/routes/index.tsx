import React from 'react'
import { Route, Routes } from 'react-router-dom'

const RoutesPage: React.FC = () => {
    return (
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>

    )
}
export { RoutesPage }
