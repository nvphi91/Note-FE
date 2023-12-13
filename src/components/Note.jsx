import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import { useLoaderData } from "react-router-dom";

const Note = () => {
    const {note} = useLoaderData()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const [rawHtml, setRawHtml] = useState(note.content)

    useEffect(() => {
        setRawHtml(note.content)
    }, [note.content])

    useEffect(() => {
        const blockFromHTML = convertFromHTML(note.content);
        const state = ContentState.createFromBlockArray(blockFromHTML.contentBlocks, blockFromHTML.entityMap)
        setEditorState(EditorState.createWithContent(state));
    }, [note.id])


    const onEditorStateChange = (e) => {
        setEditorState(e)
        setRawHtml(draftToHtml(e.getCurrentContent()))
    }

    return <div>
        <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
            placeholder="Write something"
            editorStyle={{ paddingLeft: 10 }}
        />
    </div>
}
export default Note;