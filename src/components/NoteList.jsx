import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";

const NoteList = () => {
    const { noteId } = useParams();
    const {folder} = useLoaderData()

    // console.log('data: ',folder);
    return <div className="flex h-full">
        <div className="w-1/3 px-4 py-4 bg-[#F0EBE3] overflow-auto">
            <div className="font-semibold">Notes</div>
            <div className="mt-4">
                {
                    folder.notes.map((item, index) => {
                        return <Link 
                        key={item.id}
                        to={`note/${item.id}`}>
                            <div className={`${noteId === item.id ? 'bg-yellow-500': 'bg-white'} text-sm px-4 py-3 mb-2 rounded-lg`}
                                dangerouslySetInnerHTML={{ __html: `${item.content.substring(0, 30) || 'Empty'}` }}>
                            </div>
                        </Link>
                    })}
            </div>
        </div>
        <div className="w-2/3">
            <Outlet />
        </div>
    </div>
}
export default NoteList