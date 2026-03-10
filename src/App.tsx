/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BlogListing from './pages/BlogListing';
import BlogPostPage from './pages/BlogPostPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListing />} />
        <Route path="/:slug" element={<BlogPostPage />} />
        {/* Redirect old /blog routes to new structure */}
        <Route path="/blog" element={<Navigate to="/" replace />} />
        <Route path="/blog/:slug" element={<Navigate to="/:slug" replace />} />
      </Routes>
    </Router>
  );
}
