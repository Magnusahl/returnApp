const initialState = {
    currentRecycleStations: null,
}

export const recyclestations = (state = initialState, action) => {
    return {
        ...state,
        currentRecycleStations: action.currentRecycleStations,
    }
}