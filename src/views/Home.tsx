import { Component } from 'solid-js';
import { useAuth } from '@lib/Auth'

const Home: Component = () => {
	const { isAuthed, login, logout } = useAuth()
    return (
        <div class="p-4 flex justify-center items-center text-center">
		{
			isAuthed() ?
			<div>
				<p>You're authenticated</p>
				<button class="py-1 text-white px-6 bg-red-500 rounded" onclick={logout}>Logout</button>
			</div>
			: <div>
				<p>You're unauthenticated</p>
				<button class="py-1 text-white px-6 bg-blue-700 rounded" onclick={login}>Login</button>
			</div>
		}
		
        </div>
    )
}

export default Home;
