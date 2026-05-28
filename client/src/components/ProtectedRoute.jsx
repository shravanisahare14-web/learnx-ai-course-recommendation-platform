import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  /* GET TOKEN */

  const token = localStorage.getItem("token")



  /* CHECK AUTH */

  if (!token) {

    return <Navigate to="/login" />

  }



  return children
}

export default ProtectedRoute