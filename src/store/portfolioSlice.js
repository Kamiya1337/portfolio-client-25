import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProject: null,
  previewData: {
    isOpen: false,
    url: '',
    type: ''
  }
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setPreviewData: (state, action) => {
      state.previewData = action.payload;
    },
    clearPreviewData: (state) => {
      state.previewData = { isOpen: false, url: '', type: '' };
    }
  }
});

export const { setSelectedProject, setPreviewData, clearPreviewData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
