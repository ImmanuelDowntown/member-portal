import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthRoute from "@/components/authRoute";
import AdminRoute from "@/components/AdminRoute";

// Headers
import HeaderLogoOnly from "@/components/Header";      // your logo-only header currently named Header.tsx
import HeaderAuth from "@/components/HeaderAuth";      // new header with nav

// Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Groups from "@/pages/Groups";
import Forums from "@/pages/Forums";
import Resources from "@/pages/Resources";
import Events from "@/pages/Events";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import SeedGroups from "@/pages/Admin/SeedGroups";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";

function Frame({ children }: { children: React.ReactNode }){
  const loc = useLocation();
  const onLogin = loc.pathname === "/login" || loc.pathname === "/forgot" || loc.pathname === "/reset";
  return (
    <>
      {onLogin ? <HeaderLogoOnly /> : <HeaderAuth />}
      {children}
    </>
  );
}

export default function App(){
  return (
    <BrowserRouter>
      <AuthProvider>
        <Frame>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset" element={<ResetPassword />} />

            <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
            <Route path="/groups" element={<AuthRoute><Groups /></AuthRoute>} />
            <Route path="/forums" element={<AuthRoute><Forums /></AuthRoute>} />
            <Route path="/resources" element={<AuthRoute><Resources /></AuthRoute>} />
            <Route path="/events" element={<AuthRoute><Events /></AuthRoute>} />
            <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>} />
            <Route path="/settings" element={<AuthRoute><Settings /></AuthRoute>} />

            <Route path="/admin/seed-groups" element={<AdminRoute><SeedGroups /></AdminRoute>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Frame>
      </AuthProvider>
    </BrowserRouter>
  );
}
