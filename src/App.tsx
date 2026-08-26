import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Rules from '@/pages/Rules'
import NotFound from '@/pages/NotFound'

/**
 * Root application router.
 * All routes share the same visual system and design tokens.
 *
 * Routes:
 *   /        → Home (single-page narrative scroll)
 *   /rules   → Rules & Guidelines page
 *   *        → 404 Not Found
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Skip navigation link — always the first focusable element */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*"      element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
