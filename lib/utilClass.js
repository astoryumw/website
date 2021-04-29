import "isomorphic-fetch"

export function postWriting(paragraph) {
	// console.log(paragraph);
    return fetch(`http://35.194.72.130/api/addText?para=${paragraph}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paragraph }) 
    })
}