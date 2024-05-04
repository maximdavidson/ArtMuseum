import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Artwork {
	title: string;
	image_id: string;
	artist_title: string;
	date_display: string;
	artist_display: string;
	dimensions: string;
	credit_line: string;
	department_title: string;
}

const initialState: Artwork[] = [];

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Artwork>) => {
			state.push(action.payload);
		},
		removeFavorite: (state, action: PayloadAction<Artwork>) => {
			return state.filter(
				(artwork) => artwork.image_id !== action.payload.image_id,
			);
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
