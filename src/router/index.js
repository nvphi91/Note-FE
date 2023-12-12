import { Outlet, createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import HomePage from "../pages/home/HomePage"
import AuthProvider from "../context/AuthProvider"


const AuthLayout = () => {
    return <AuthProvider>
        <Outlet />
    </AuthProvider>
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <LoginPage />,
                path: '/login'
            },
            {
                element: <HomePage />,
                path: '/'
            }
        ]
    }
])