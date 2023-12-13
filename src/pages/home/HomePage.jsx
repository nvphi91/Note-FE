import { Outlet, useLoaderData } from "react-router-dom"
import UserMenu from "../../components/UserMenu"
import FolderList from "../../components/FolderList"

const HomePage = () => {
    const {folders} = useLoaderData();

    return <div className="items-center mx-auto pt-10">
        <div className="flex">
            <div className="flex-1">
                Note App
            </div>
            <div >
                <UserMenu />
            </div>
        </div>
        <div className="flex mt-4 shadow-lg rounded-2xl overflow-hidden h-[50vh]">
            <div className="w-1/4 ">
                <FolderList folders={folders} />
            </div>
            <div className="w-3/4 ">
                <Outlet />
            </div>
        </div>
    </div>
}
export default HomePage