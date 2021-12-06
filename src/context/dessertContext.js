import React, { useState } from 'react';

const DessertsContext = React.createContext({
    desserts: [],
    initializeDess: () => {},
});

export const DessertsContextProvider = (props) => {
    const [desserts, setDesserts] = useState([]);

    const initializeDess = (dessertsFromAPI) => {
        setDesserts(dessertsFromAPI);
    }
    
    return (
        <DessertsContext.Provider
            value={{initializeDess: initializeDess}}>
            {props.children}
        </DessertsContext.Provider>
    )
} 

export default DessertsContext;