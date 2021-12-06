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
        console.log(dessert);
        setDessert(dessert);
    }, [])

    if (dessert) {
        return (
            <div className="dessert-page">
                <img src={dessert.image?.stringValue} alt="dessert photo"></img>
                <h1 className="dess-title"> ✧･ﾟ:* {dessert.name?.stringValue} *:･ﾟ✧ </h1>
                <p className="dessert-type"> {dessert.type?.stringValue} </p>
                <p className="dess-more"> {dessert.moreDetails?.stringValue} </p>
            </div>
        )
    } else {
        return <p>No dessert with this ID</p>
    }
}