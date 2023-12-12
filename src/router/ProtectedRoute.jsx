const { Outlet, useNavigate } = require("react-router-dom")

const ProtectedRoute = ({chidren}) => {
    const navigate = useNavigate();
    if (!localStorage.getItem('accessToken')) {
        navigate('/login');
        return;
    }
    return <Outlet/>
}

export default ProtectedRoute