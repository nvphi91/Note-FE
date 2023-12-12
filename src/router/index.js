import { Outlet, createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import HomePage from "../pages/home/HomePage"
import AuthProvider from "../context/AuthProvider"
import ErrorPage from "../pages/error/ErrorPage"
import ProtectedRoute from "./ProtectedRoute"
import NoteList from "../components/NoteList"
import Note from "../components/Note"


const AuthLayout = () => {
    return <AuthProvider>
        <Outlet />
    </AuthProvider>
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <LoginPage />,
                path: '/login'
            },
            {
                element: <ProtectedRoute />,
                children: [{
                    element: < HomePage />,
                    path: '/',
                    children: [
                        {
                            element: <NoteList />,
                            path: 'folders/:folderId',
                            children: [
                                {
                                    element: <Note />,
                                    path: 'note/:noteId'
                                }
                            ]
                        }
                    ]
                }]
            }
        ]
    }
])