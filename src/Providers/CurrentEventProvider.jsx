import React, { createContext, useContext, useState } from 'react';

const CurrentEventContext = createContext();

export const useCurrentEvent = () => useContext(CurrentEventContext);

export const CurrentEventProvider = ({ children }) => {
    const [currentEvent, setCurrentEvent] = useState(null);

    return (
        <CurrentEventContext.Provider value={{ currentEvent, setCurrentEvent }}>
            {children}
        </CurrentEventContext.Provider>
    );
};
