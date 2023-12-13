export const notesLoader = async ({params: {folderId}}) => {
    const query = `query Folder($folderId: String) {
        folder(folderId: $folderId) {
            id
            name
            createdAt
            notes {
                id
                content
            }
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
                folderId
            }
        })
    })

    const { data } = await res.json();
    console.log('data');
    console.log(data);
    return data;
}