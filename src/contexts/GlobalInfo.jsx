import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function GlobalInfo( {children} ) {
    const [navBarState, setNavBarState] = useState(false);

    return <GlobalContext.Provider 
        value={{
            navBarState,
            setNavBarState
        }}
    >
        {children}
    </GlobalContext.Provider>
}