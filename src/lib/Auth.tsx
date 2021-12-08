import { createContext, useContext } from 'solid-js'

export type AuthStore = {
	isAuthed: () => boolean;
	login: () => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthStore>();

export const useAuth = () => useContext(AuthContext)
