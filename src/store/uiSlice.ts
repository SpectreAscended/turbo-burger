import { createSlice } from '@reduxjs/toolkit';

interface InitialUiState {
  menuOpen: boolean;
}

const initialUiState: InitialUiState = {
  menuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
