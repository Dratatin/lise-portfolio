import { createContext, useReducer, useContext } from "react";
import { FC, PropsWithChildren } from "react";
import themeReducer from "./themeReducer";
import { initialState } from "./themeReducer";
import { State } from "./themeReducer";


type ThemeContextType = {
    state: State;
    setTheme: (value: string) => void;
    setAboutOpened: (value: boolean) => void;
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

    const setAboutOpened = (opened: boolean) => {
        dispatch({
            type: "SET_ABOUT_OPENED",
            payload: opened
        })
    }

    const store = {
        state,
        setTheme,
        setAboutOpened
    }
    return <ThemeContext.Provider value={store}> {children} </ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    return context
}

export default useTheme