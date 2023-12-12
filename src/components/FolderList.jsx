import { Link, useParams } from "react-router-dom";

const FolderList = ({ folders }) => {
    const { folderId } = useParams();
    console.log('id: ', folderId);

    return <div className="bg-[#7D9D9C] overflow-auto h-full">
        <h3 className="font-semibold text-2xl mx-4 my-4">Folders</h3>
        <div>
            {folders.map((item, index) => {
                return <Link
                    to={`/folders/${item.id}`}
                    key={item.id}>
                    <div className={`${item.id == folderId ? 'bg-yellow-400' : 'bg-white'} mx-4 my-2 py-2 rounded-lg px-2 transition-all duration-300`}>
                        {item.name}</div>
                </Link>
            })}
        </div>
    </div>
}
export default FolderList;