// utils.js (client)
import "isomorphic-fetch"
// import { difference } from "../pages/index.js";

export function addName(name) {
    return fetch('http://localhost:3001/addtime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, time: Date.now() }) 
    })
}