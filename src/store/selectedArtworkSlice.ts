import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Artwork {
	title: string;
	image_id: string;
	artist_title: string;
}

interface SelectedArtworkState {
	artwork: Artwork | null;
}

const initialState: SelectedArtworkState = {
	artwork: null,
};

export const selectedArtworkSlice = createSlice({
	name: 'selectedArtwork',
	initialState,
	reducers: {
		selectArtwork: (state, action: PayloadAction<Artwork>) => {
			state.artwork = action.payload;
		},
	},
});

export const { selectArtwork } = selectedArtworkSlice.actions;

export default selectedArtworkSlice.reducer;
