import { RootState } from '@/app/store';
import { createSlice } from "@reduxjs/toolkit"

const theme = localStorage.getItem('theme') || 'light'
const language = localStorage.getItem('language') || 'en'

const initialSettingState ={
    theme,
    language,
}

export const appCustomize = createSlice({
    name: 'appCustomize',
    initialState: initialSettingState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
        },
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { changeTheme,changeLanguage } = appCustomize.actions

export const selectTheme = (state: RootState) => state.appCustomize.theme
export const selectLanguage = (state: RootState) => state.appCustomize.language

export default appCustomize.reducer
    