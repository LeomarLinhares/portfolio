import React, { createContext, useState } from 'react';

export const Context = createContext();

export default function GlobalInfo( {children} ) {
    const [navBarState, setNavBarState] = useState(false);

    return <Context.Provider 
        value={{
            navBarState,
            setNavBarState
        }}
    >
        {children}
    
    </Context.Provider>
}