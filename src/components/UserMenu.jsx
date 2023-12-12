import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Menu } from '@headlessui/react'
import { getAuth } from "@firebase/auth";

const UserMenu = () => {
    const { user } = useContext(AuthContext)
    const auth = getAuth();

    const handleLogout = () => {
        auth.signOut()
    }

    return <div >
        <Menu as='div'>
            <div className="w-full">
            <Menu.Button>
                <div className="flex items-center gap-4">
                    <p>{user.displayName}</p>
                    <img
                        className="rounded-full w-12"
                        src={user.photoURL} alt="avatar" />
                </div>
            </Menu.Button>
            <Menu.Items className='shadow-md mt-2 absolute z-10 bg-white rounded-lg px-6'>
                <Menu.Item as='div'
                    onClick={handleLogout}
                    className='px-4 py-2 text-center cursor-pointer hover:font-semibold'>
                    Logout
                </Menu.Item>
            </Menu.Items>
            </div>
        </Menu>
    </div>
}
export default UserMenu;