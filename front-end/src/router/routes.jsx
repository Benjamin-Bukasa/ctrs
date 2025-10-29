import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminRoute from "../components/AdminRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import News from "../pages/News";
import Job from "../pages/Job";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true,
        element: <Home/> 
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"news",
        element:<News/>
      },
      {
        path:"job",
        element:<Job/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      {
        path: "admin",
        element: (
          <AdminRoute>
            <h1>Admin area - Only ADMIN role</h1>
          </AdminRoute>
        ),
      },
    ],
  },

  { path: "/login", element: <Login /> },
]);

export default router;
