import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

const preloadedState = {
	favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
	preloadedState,
});

store.subscribe(() => {
	localStorage.setItem('favorites', JSON.stringify(store.getState().favorites));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
