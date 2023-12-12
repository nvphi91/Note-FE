import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";

const Note = () => {
    const note = { id: '111', content: '<p>this is new note</p>' }
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    
    const [rawHtml, setRawHtml] = useState(note.content)
 
    useEffect(()=> {
        setRawHtml(note.content)
    },[note.content])

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
            editorStyle={{paddingLeft: 10}}
        />
    </div>
}
export default Note;