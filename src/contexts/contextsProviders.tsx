import React from "react";
import { AppContextProvider } from "./app.context";
import { CookieContextProvider } from "./cookie.context";

export const ContextsProvider = ({ children }: {children: React.ReactNode}) => {
    return (
        <AppContextProvider>
            <CookieContextProvider>
                {children}
            </CookieContextProvider>
        </AppContextProvider>
    );
};