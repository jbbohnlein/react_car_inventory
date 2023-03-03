import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
    },

    // What can be done with the data
    reducers: {
        // action is submitted elsewhere - written to state.name
        // Set the input to state.___
        chooseMake: (state, action) => { state.make = action.payload }, // All we're doing is setting the input to the state.name
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },

    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor } = rootSlice.actions