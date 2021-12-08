import { Component, createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

const Counter: Component = () => {
	const [state, setState] = createStore<{count: Number}>({count: 0});
	const increment = (by: 1) => setState("count", i => i + 1)
	const decrement = (by: 1) => setState("count", i => i - 1)
	return (
		<div class="flex gap-4">
			<button onclick={decrement} class="shadow px-2 rounded">-</button>
			<p>{state.count}</p>
			<button onclick={increment} class="shadow px-2 rounded">+</button>
		</div>
	)
}

export default Counter;
