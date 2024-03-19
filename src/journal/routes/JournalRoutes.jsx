import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'
import { LoginPage } from '../../auth/pages'

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <JournalPage /> } />

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
