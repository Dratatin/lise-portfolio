import { createContext, useReducer, useContext } from "react";
import { FC, PropsWithChildren } from "react";
import themeReducer from "./themeReducer";
import { initialState } from "./themeReducer";

type ThemeState = {
    theme: string;
}

type ThemeContextType = {
    state: ThemeState;
    setTheme: (value: string) => void;
};

const ThemeContext = createContext<ThemeContextType>(undefined!)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    const setTheme = (theme: string) => {
        dispatch({
            type: "SET_THEME",
            payload: theme
        })
    }

    const store = {
        state,
        setTheme
    }
    return <ThemeContext.Provider value={store}> {children} </ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    return context
}

export default useTheme