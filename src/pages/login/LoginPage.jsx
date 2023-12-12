import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth"
import { Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {

    const auth = getAuth()
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider)
        console.log('res', res);
    }

    if (user?.uid) {
        navigate('/')
        return
    }

    return <div className="max-w-lg mx-auto text-center">
        <h5 className="font-semibold my-10">Welcome to Note App</h5>
        <Button variant="outlined"
            onClick={handleLoginWithGoogle}
        >
            Login with Google
        </Button>
    </div>
}
export default LoginPage