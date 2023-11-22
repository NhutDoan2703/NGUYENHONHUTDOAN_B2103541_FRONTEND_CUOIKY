import { defineStore } from "pinia";
import AuthenService from "../services/Authen.service.js"

export const useAuthStore = defineStore("auth", {
	state() {
		return {
			user: null,
		};
	},
	getters: {
		isUserLoggedIn(state) {
			return !!state.user && !!state.user.accessToken;
		},
	},
	actions: {
		loadAuthState() {
			this.user = JSON.parse(localStorage.getItem("user"));
		},
		logout() {
			this.user = null;
			localStorage.removeItem("user");
		},
		async login(user) {
			const response = await AuthService.createlogin(user);
			if (!response.accessToken) {
				this.logout();
				throw new Error("Oops, no access token found!");
			}
			this.user = response;
			localStorage.setItem("user", JSON.stringify(response));
			return response;
		},
		register(user) {
			this.user = null;
			return AuthService.createsignup(user);
		},
	},
});