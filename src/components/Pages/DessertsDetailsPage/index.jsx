import "./styles.css";
import DessertsContext from "../../../context/dessertContext"

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

export const DessertsDetailsPage = (props) => {
    const {id} = useParams();

    const [dessert, setDessert] = useState({});
    
    const globalState = useContext(DessertsContext);

    useEffect (() => {
        const dessert = globalState.desserts.find(
            (dessert) => dessert.id.stringValue === id
        );
        setDessert(dessert);
    }, [])

    if (dessert) {
        return (
            <div className="desserts-page">
                <h1 className="desserts-title"> {dessert.name?.stringValue} </h1>
                <img src={dessert.image?.stringValue} alt="dessert photo"></img>
            </div>
        )
    } else {
        return <p>No dessert with this ID</p>
    }
}