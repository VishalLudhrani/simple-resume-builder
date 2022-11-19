import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BasicInfoState {
  name: string,
  position: string,
  phone: string,
  email: string,
  about: string,
  hobbies: string[]
}

const initialState: BasicInfoState = {
  name: 'Vishal Ludhrani',
  position: '',
  phone: '',
  email: '',
  about: '',
  hobbies: []
}

export const basicSlice = createSlice({
  name: 'basic',
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updatePosition: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateAbout: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateHobbies: (state, action: PayloadAction<string[]>) => {
      state.hobbies = action.payload;
    }
  }
})

export const basicInfoActions = basicSlice.actions;

export default basicSlice.reducer;