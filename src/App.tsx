import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthRoute from "@/components/AuthRoute";
import OnboardRoute from "@/components/OnboardRoute";
import AdminRoute from "@/components/AdminRoute";
import GroupAdminRoute from "@/components/GroupAdminRoute";

// Pages
import GroupsExplore from "@/pages/GroupsExplore";
import GroupDetail from "@/pages/GroupDetail";

// Headers
import HeaderLogoOnly from "@/components/Header";
import HeaderAuth from "@/components/HeaderAuth";

// Core Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Groups from "@/pages/Groups";
import Forums from "@/pages/Forums";
import Resources from "@/pages/Resources";
import Events from "@/pages/Events";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Welcome from "@/pages/Welcome";

// Admin Pages (capital A)
import GroupAdminBootstrap from "@/pages/Admin/GroupAdminBootstrap";
import AdminGroupsIndex from "@/pages/Admin/AdminGroupsIndex";
import AdminUsersIndex from "@/pages/Admin/AdminUsersIndex";
import AdminGroupRequests from "@/pages/Admin/AdminGroupRequests";
import AdminGroupMembers from "@/pages/Admin/AdminGroupMembers";
import AdminGroupEvents from "@/pages/Admin/AdminGroupEvents";
import GrantGroupAdminByEmail from "@/pages/Admin/GrantGroupAdminByEmail";
import AdminGroupNew from "@/pages/Admin/AdminGroupNew";
import AdminGroupEdit from "@/pages/Admin/AdminGroupEdit";
import SuperAdmins from "@/pages/Admin/SuperAdmins";
import AdminRouteDebug from "./components/AdminRouteDebug";
import WhoAmI from "@/pages/Admin/WhoAmI";

function Frame({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const onLogin =
    loc.pathname === "/login" ||
    loc.pathname === "/forgot" ||
    loc.pathname === "/reset";
  return (
    <>
      {onLogin ? <HeaderLogoOnly /> : <HeaderAuth />}
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Frame>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset" element={<ResetPassword />} />

            {/* Onboarding page (must be outside OnboardRoute to avoid loop) */}
            <Route path="/welcome" element={<AuthRoute><Welcome /></AuthRoute>} />

            {/* Protected app routes gated by onboarding completion */}
            <Route path="/dashboard" element={<AuthRoute><OnboardRoute><Dashboard /></OnboardRoute></AuthRoute>} />
            <Route path="/groups" element={<AuthRoute><OnboardRoute><Groups /></OnboardRoute></AuthRoute>} />
            <Route path="/forums" element={<AuthRoute><OnboardRoute><Forums /></OnboardRoute></AuthRoute>} />
            <Route path="/resources" element={<AuthRoute><OnboardRoute><Resources /></OnboardRoute></AuthRoute>} />
            <Route path="/events" element={<AuthRoute><OnboardRoute><Events /></OnboardRoute></AuthRoute>} />
            <Route path="/profile" element={<AuthRoute><OnboardRoute><Profile /></OnboardRoute></AuthRoute>} />
            <Route path="/settings" element={<AuthRoute><OnboardRoute><Settings /></OnboardRoute></AuthRoute>} />

            {/* Groups Explore + Detail */}
            <Route path="/groups/explore" element={<AuthRoute><OnboardRoute><GroupsExplore /></OnboardRoute></AuthRoute>} />
            <Route path="/groups/:slug" element={<AuthRoute><OnboardRoute><GroupDetail /></OnboardRoute></AuthRoute>} />

            {/* Admin routes */}
            <Route path="/admin/group-admins/bootstrap" element={<AdminRoute><OnboardRoute><GroupAdminBootstrap /></OnboardRoute></AdminRoute>} />
            <Route path="/admin/groups" element={<AuthRoute><OnboardRoute><AdminGroupsIndex /></OnboardRoute></AuthRoute>} />
            <Route path="/admin/groups/:slug/requests" element={<GroupAdminRoute><OnboardRoute><AdminGroupRequests /></OnboardRoute></GroupAdminRoute>} />
            <Route path="/admin/groups/:slug/members" element={<GroupAdminRoute><OnboardRoute><AdminGroupMembers /></OnboardRoute></GroupAdminRoute>} />
            <Route path="/admin/groups/:slug/events" element={<GroupAdminRoute><OnboardRoute><AdminGroupEvents /></OnboardRoute></GroupAdminRoute>} />
            <Route path="/admin/super-admins" element={<AdminRoute><SuperAdmins /></AdminRoute>} />
            <Route path="/admin/group-admins/by-email" element={<AdminRoute><GrantGroupAdminByEmail /></AdminRoute>} />
            <Route path="/__whoami" element={<WhoAmI />} />

            {/* New Group routes */}
            <Route path="/admin/groups/new" element={<AdminRoute><AdminGroupNew /></AdminRoute>} />
            <Route path="/admin/groups/:slug/edit" element={<AdminRoute><AdminGroupEdit /></AdminRoute>} />
            <Route path="/__admin/new" element={<AdminRouteDebug><AdminGroupNew /></AdminRouteDebug>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/admin/users" element={<AdminRoute><AdminUsersIndex /></AdminRoute>} />
          </Routes>
        </Frame>
      </AuthProvider>
    </BrowserRouter>
  );
}
