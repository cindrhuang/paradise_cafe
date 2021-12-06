import "./styles.css";

import { Link } from "react-router-dom";

import samplePhoto from "../../images/chocorollcake.PNG"

export const DessertItem = (props) => {
    const {image, name, type, details, id} = props;

    return (
        <div className="dessert">
            <img className="dess-photo" src={image} alt={name + type + "photo"}/>

            <Link to ={`/dessert/${id}`}>
                <h1 className="dess-name"> {name} </h1>
            </Link>

            <p className="dess-type"> {"Type: " + type} </p>
            <p className="dess-details"> {details} </p>
        </div>
    )
}

DessertItem.defaultProps = {
    image: samplePhoto,
    name: "Chocolate Roll Cake w/ Strawberry",
    type: "Cake",
    details: "A delicious chocolate swiss roll cake with thick buttercream, topped with a tart strawberry.",
    id: "123456"
}