import { createEffect } from 'solid-js'
import { createStore, Store, SetStateFunction } from 'solid-js/store'

export function createLocalStore<T>(initState: T): [Store<T>, SetStoreFunction<T>] {
	const [state, setState] = createStore(initState)
	if(localStorage.auth) setState(JSON.parse(localStorage.auth));
	createEffect(() => (localStorage.auth = JSON.stringify(state)))
	return [state, setState]
}
