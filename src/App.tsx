import { Component, lazy } from 'solid-js';
import { Router, Route, RouteDefinition } from 'solid-app-router';
import { AuthContext, AuthStore } from '@lib/Auth'
import { createLocalStore } from '@lib/utils'

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./views/Home'))
  },
  {
    path: "/*all",
    component: lazy(() => import('./views/NotFound'))
  }
];

const App: Component = () => {
	const [ isAuthed, setIsAuthed ] = createLocalStore({state: false})
	const authContext: AuthStore = {
		isAuthed: () => isAuthed.state,
		login: () => setIsAuthed({state: true}),
		logout: () => setIsAuthed({state: false})
	}

	return (
		<div class="bg-gray-100 font-sans h-screen">
			<Router routes={routes}>
				<AuthContext.Provider value={authContext}>
					<Route />
				</AuthContext.Provider>
			</Router>
		</div>
	);
};

export default App;
