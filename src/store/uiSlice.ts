import { createSlice } from '@reduxjs/toolkit';

interface InitialUiState {
  menuOpen: boolean;
  modalOpen: boolean;
}

const initialUiState: InitialUiState = {
  menuOpen: false,
  modalOpen: false,
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
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
