export const noteLoader = async ({params: {noteId}}) => {
    const query = `query Note($noteId: String) {
        note(noteId: $noteId) {
            id
            content
        }
    }`;
    const res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: {
                noteId
            }
        })
    })

    const { data } = await res.json();
    console.log('data');
    console.log(data);
    return data;
}