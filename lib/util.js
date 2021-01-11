// utils.js (client)
import "isomorphic-fetch"
import timeDiff from "../pages/index.js";


export function addName(name) {
  const number = timeDiff;
    return fetch('http://localhost:3001/addtime', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, time: Date.now() })
    })
}