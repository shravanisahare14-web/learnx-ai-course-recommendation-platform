
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"



/* PAGES */

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import Learning from "./pages/Learning"
import CoursePlayer from "./pages/CoursePlayer"



/* PROTECTED ROUTE */

import ProtectedRoute from "./components/ProtectedRoute"



function App() {

  return (

    <BrowserRouter>

      <Routes>



        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />



        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />



        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />



        {/* COURSES */}

        <Route
          path="/courses"
          element={<Courses />}
        />



        {/* LEARNING */}

        <Route
          path="/learning"
          element={
            <ProtectedRoute>

              <Learning />

            </ProtectedRoute>
          }
        />



        {/* DYNAMIC COURSE PLAYER */}

        <Route
          path="/course-player/:id"
          element={
            <ProtectedRoute>

              <CoursePlayer />

            </ProtectedRoute>
          }
        />



        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />



      </Routes>

    </BrowserRouter>

  )
}

export default App
