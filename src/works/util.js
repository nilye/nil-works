export function importAll(r){
	return r.keys().reduce((cached, k) => {
		cached.push(r(k).default)
		return cached
	}, [])
}
