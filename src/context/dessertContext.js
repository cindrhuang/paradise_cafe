import React, { useState } from 'react';

const DessertsContext = React.createContext({
    desserts: [],
    initializeDesserts: () => {},
});

export const DessertsContextProvider = (props) => {
    const [desserts, setDesserts] = useState([]);

    const initializeDesserts = (dessertsFromAPI) => {
        setDesserts(dessertsFromAPI);
    }
    
    return (
        <DessertsContext.Provider
            value={{desserts: desserts, initializeDesserts: initializeDesserts}}>
            {props.children}
        </DessertsContext.Provider>
    )
} 

export default DessertsContext;