import firebase from 'firebase/app'
import 'firebase/database'

const config = {
	databaseURL: "https://hacker-news.firebaseio.com"
}
const version = "/v0"
// const PAGE_LIMIT = 30


firebase.initializeApp(config)
const api = firebase.database().ref(version)

export function fetchItem(id, cb) {
	itemRef(id).once('value', snapshot => cb(snapshot.val()))
}

export function fetchItems(ids, cb) {
	let items = []
	let unsuccessful = 0
	ids.forEach(id => {
		fetchItem(id, item => {
			if (item !== null) {
				items.push(item)
			} else {
				unsuccessful++
			}
			if (items.length >= ids.length - unsuccessful) {
				cb(items)
			}
		})
	})
}


export function storiesRef(path) { return api.child(path) }

export function itemRef(id) { return api.child('item/' + id)}


