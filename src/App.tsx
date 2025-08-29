import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthRoute from "@/components/AuthRoute";
import OnboardRoute from "@/components/OnboardRoute";
import AdminRoute from "@/components/AdminRoute";
import GroupAdminRoute from "@/components/GroupAdminRoute";

// Pages
import GroupsExplore from "@/pages/GroupsExplore";
import GroupDetail from "@/pages/GroupDetail";
import GroupPolls from "@/pages/GroupPolls";

// Headers
import HeaderLogoOnly from "@/components/Header";
import HeaderAuth from "@/components/HeaderAuth";

// Core Pages
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";
import Groups from "@/pages/Groups";
import Resources from "@/pages/Resources";
import Events from "@/pages/Events";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import Welcome from "@/pages/Welcome";
import SundayResources from "@/pages/SundayResources";
import Forum from "@/pages/Forum";
import ForumThread from "@/pages/ForumThread";
import PastorQuestions from "@/pages/PastorQuestions";
import UserActivity from "@/pages/UserActivity";


// Admin Pages
import GroupAdminBootstrap from "@/pages/Admin/GroupAdminBootstrap";
import AdminConsole from "@/pages/Admin/AdminConsole";
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
import DMDock from "@/components/DMDock";
import WhoAmI from "@/pages/Admin/WhoAmI";

function Frame({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const onLogin =
    loc.pathname === "/login" ||
    loc.pathname === "/signup" ||
    loc.pathname === "/forgot" ||
    loc.pathname === "/reset";
  return (
    <>
      {onLogin ? <HeaderLogoOnly /> : <HeaderAuth />}
      {!onLogin && <DMDock />}
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
            {/* Public auth routes */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset" element={<ResetPassword />} />

            {/* Onboarding (must NOT be inside OnboardRoute or it will loop) */}
            <Route path="/welcome" element={<AuthRoute><Welcome /></AuthRoute>} />

            {/* Protected app routes gated by onboarding completion */}
            <Route path="/dashboard" element={<AuthRoute><OnboardRoute><Dashboard /></OnboardRoute></AuthRoute>} />
            <Route path="/groups" element={<AuthRoute><OnboardRoute><Groups /></OnboardRoute></AuthRoute>} />
            <Route path="/resources" element={<AuthRoute><OnboardRoute><Resources /></OnboardRoute></AuthRoute>} />
            <Route path="/events" element={<AuthRoute><OnboardRoute><Events /></OnboardRoute></AuthRoute>} />
            <Route path="/profile" element={<AuthRoute><OnboardRoute><Profile /></OnboardRoute></AuthRoute>} />
            <Route path="/settings" element={<AuthRoute><OnboardRoute><Settings /></OnboardRoute></AuthRoute>} />
            <Route path="/forum" element={<AuthRoute><OnboardRoute><Forum /></OnboardRoute></AuthRoute>} />
            <Route path="/forum/thread/:id" element={<AuthRoute><OnboardRoute><ForumThread /></OnboardRoute></AuthRoute>} />
            <Route path="/sunday-resources" element={<AuthRoute><OnboardRoute><SundayResources /></OnboardRoute></AuthRoute>} />
            <Route path="/pastor/questions" element={<AuthRoute><OnboardRoute><PastorQuestions /></OnboardRoute></AuthRoute>} />
            <Route path="/activity" element={<AdminRoute><OnboardRoute><UserActivity /></OnboardRoute></AdminRoute>} />

            {/* Groups Explore + Detail */}
            <Route path="/groups/explore" element={<AuthRoute><OnboardRoute><GroupsExplore /></OnboardRoute></AuthRoute>} />
            <Route path="/groups/:slug" element={<AuthRoute><OnboardRoute><GroupDetail /></OnboardRoute></AuthRoute>} />
            <Route path="/groups/:slug/polls" element={<AuthRoute><OnboardRoute><GroupPolls /></OnboardRoute></AuthRoute>} />


            {/* Admin routes */}
            {/* Admin Console landing page */}
            <Route path="/admin" element={<AdminRoute><OnboardRoute><AdminConsole /></OnboardRoute></AdminRoute>} />

            {/* Admin Groups index */}
            <Route path="/admin/groups" element={<AdminRoute><OnboardRoute><AdminGroupsIndex /></OnboardRoute></AdminRoute>} />

            {/* Per-group admin pages – group-admin gated */}
            <Route path="/admin/groups/:slug/requests" element={<GroupAdminRoute><OnboardRoute><AdminGroupRequests /></OnboardRoute></GroupAdminRoute>} />
            <Route path="/admin/groups/:slug/members" element={<GroupAdminRoute><OnboardRoute><AdminGroupMembers /></OnboardRoute></GroupAdminRoute>} />
            <Route path="/admin/groups/:slug/events" element={<GroupAdminRoute><OnboardRoute><AdminGroupEvents /></OnboardRoute></GroupAdminRoute>} />

            {/* Global admin tools */}
            <Route path="/admin/super-admins" element={<AdminRoute><SuperAdmins /></AdminRoute>} />
            <Route path="/admin/group-admins/by-email" element={<AdminRoute><GrantGroupAdminByEmail /></AdminRoute>} />
            <Route path="/admin/users" element={<AdminRoute><AdminUsersIndex /></AdminRoute>} />
            <Route path="/admin/groups/new" element={<AdminRoute><AdminGroupNew /></AdminRoute>} />
            <Route path="/admin/groups/:slug/edit" element={<AdminRoute><AdminGroupEdit /></AdminRoute>} />

            {/* Debug helpers (leave restricted) */}
            <Route path="/__whoami" element={<WhoAmI />} />
            <Route path="/__admin/new" element={<AdminRouteDebug><AdminGroupNew /></AdminRouteDebug>} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Frame>
      </AuthProvider>
    </BrowserRouter>
  );
}
