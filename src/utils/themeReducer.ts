type State = {
    theme: string;
}

type Action = {
    type: string;
    payload: string;
}

export const initialState = {
    theme: "primary"
};

const themeReducer = (state: State, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_THEME":
            return {
                ...state,
                theme: payload
            }
        default:
            throw new Error("no case for " + type)
    }
}

export default themeReducer