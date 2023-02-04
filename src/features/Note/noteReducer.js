import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        items: [
            {
                id: nanoid(),
                content: "redux deneme",
            },
            {
                id: nanoid(),
                content: "deneme 2",  
            }
        ],
        filtered: "",
    },
    reducers: {
        addNote: {
            reducer(state, action) {
                state.items.push(action.payload);
            }
        },
        deleteNote: {
            reducer(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        },
    },
});

export const { addNote, deleteNote, changeColor, findNote } = noteSlice.actions;
export default noteSlice.reducer;