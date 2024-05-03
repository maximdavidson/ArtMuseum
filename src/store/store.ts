import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import selectedArtworkReducer from './selectedArtworkSlice';

const preloadedState = {
	favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
		selectedArtwork: selectedArtworkReducer,
	},
	preloadedState,
});

store.subscribe(() => {
	localStorage.setItem('favorites', JSON.stringify(store.getState().favorites));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
