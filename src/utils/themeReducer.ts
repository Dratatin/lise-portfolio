export interface State {
    theme: string;
    about: {
        opened: boolean | null;
    }
}

interface Action {
    type: string;
    payload: string | boolean;
}

export const initialState = {
    theme: "primary",
    about: {
        opened: null,
    }
};

const themeReducer = (state: State, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_THEME":
            return {
                ...state,
                theme: payload as string
            }
        case "SET_ABOUT_OPENED":
            return {
                ...state,
                about: {
                    ...state.about,
                    opened: payload as boolean,
                }
            }
        default:
            throw new Error("no case for " + type)
    }
}

export default themeReducer