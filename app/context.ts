import { Dispatch, SetStateAction, createContext } from "react";

export const GlobalContext = createContext<{
    showLoginModal: boolean,
    setShowLoadingModal: Dispatch<SetStateAction<boolean>>
}>({ showLoginModal: false, setShowLoadingModal: () => false });