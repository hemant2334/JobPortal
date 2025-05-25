import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import Jobs from "./components/JobList/Jobs";
import Register from "./components/Auth/Register";
import LogIn from "./components/Auth/Login";
import Resetpass from "./components/Auth/Resetpass";
import About from "./components/About/about";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import Help from "./components/Help/Help";
import EmployerDashboard from "./components/Dashboard/EmployerDashboard";
import Profile from './components/UserProfile/Profile';


// Toaster
import { Toaster } from "react-hot-toast";

// Lenis used for smooth scrolling
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Home layout section
export const MainLayout = () => (
  <>
    <Home />
  </>
);

const AuthWrapper = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthWrapper><Layout /></AuthWrapper>}>
      <Route index element={<MainLayout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/resetpass" element={<Resetpass />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/help" element={<Help />} />
      <Route path="/EmployerDashboard" element={<EmployerDashboard />} />
      <Route path="/Profile" element={<Profile />} />


   
    </Route>
  )
);

// Render app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
  </StrictMode>
);
