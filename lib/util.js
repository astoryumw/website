// utils.js (client)
import "isomorphic-fetch"

export function addTime(name,time,cube) {
	console.log(cube);
    return fetch('http://35.194.72.130/api/addtime', { // http://35.194.72.130/api/addtime
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, time, cube }) 
    })
}
