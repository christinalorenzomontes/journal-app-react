import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import { LoginPage } from '../../auth/pages'

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <LoginPage /> } />

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
