import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import ServicesPage from "./pages/public/ServicesPage";
import DoctorsPage from "./pages/public/DoctorsPage";
import FacilitiesPage from "./pages/public/FacilitiesPage";
import ContactPage from "./pages/public/ContactPage";
import AppointmentPage from "./pages/public/AppointmentPage";
import EmergencyPage from "./pages/public/EmergencyPage";
import TestimonialsPage from "./pages/public/TestimonialsPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Route>

        {/* Auth Routes (Milestone 2) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard Routes (Milestone 2) */}
        {/* <Route element={<DashboardLayout />}> */}
        {/*   <Route path="/dashboard" element={<AdminDashboard />} /> */}
        {/* </Route> */}

        {/* 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-200 font-display">404</h1>
              <p className="text-xl text-gray-500 mt-4">Page not found</p>
              <a href="/" className="inline-block mt-6 btn-primary">Go Home</a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
