// utils.js (client)
import "isomorphic-fetch"

export function addTime(name,time) {
    return fetch('http://localhost/3001/api/addtime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, time }) 
    })
}
