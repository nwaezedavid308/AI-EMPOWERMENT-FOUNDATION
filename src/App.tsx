/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Founder from './pages/Founder';
import Initiatives from './pages/Initiatives';
import Flagship from './pages/Flagship';
import Mentorship from './pages/Mentorship';
import Leadership from './pages/Leadership';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="founder" element={<Founder />} />
            <Route path="initiatives" element={<Initiatives />} />
            <Route path="flagship" element={<Flagship />} />
            <Route path="mentorship" element={<Mentorship />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
