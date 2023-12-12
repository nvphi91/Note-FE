import { Link, Outlet, useParams } from "react-router-dom";

const NoteList = () => {
    const { folderId } = useParams();
    const folder = {
        notes: [
            {
                id: 1, content: '<p>This is new note</p>'
            }
        ]
    }
    return <div className="flex h-full">
        <div className="w-1/3 px-4 py-4 bg-[#F0EBE3] overflow-auto">
            <div className="font-semibold">Notes</div>
            <div className="mt-4">
                {
                    folder.notes.map((item, index) => {
                        return <Link 
                        key={item.id}
                        to={`note/${item.id}`}>
                            <div className="text-sm "
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