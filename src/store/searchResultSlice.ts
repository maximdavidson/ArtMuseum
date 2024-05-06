import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Artwork {
	id: number;
	title: string;
	image_id: string;
	artist_title: string;
	date_display: string;
	artist_display: string;
	dimensions: string;
	credit_line: string;
	department_title: string;
}

interface SearchResultState {
	results: Artwork[];
	searchTerm: string;
	sortOrder: string;
}

const initialState: SearchResultState = {
	results: [],
	searchTerm: '',
	sortOrder: 'asc',
};

export const searchResultSlice = createSlice({
	name: 'searchResult',
	initialState,
	reducers: {
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
		setResults: (state, action: PayloadAction<Artwork[]>) => {
			state.results = action.payload;
		},
		setSortOrder: (state, action: PayloadAction<string>) => {
			state.sortOrder = action.payload;
		},
	},
});

export const { setSearchTerm, setResults, setSortOrder } =
	searchResultSlice.actions;

export default searchResultSlice.reducer;
