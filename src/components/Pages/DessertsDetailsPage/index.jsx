import "./styles.css";

import { useParams } from "react-router-dom";

export const DessertsDetailsPage = (props) => {
    const {id} = useParams();

    const [dessert, setDessert] = useState({});
    
    //const globalState = useContext(PetsOrderContext);

    /*useEffect (() => {
        const dessert = globalState.pets.find(
            (pet) => pet.id.stringValue === id
        );
        setPet(pet);
    }, [])*/

    if (dessert) {
        return (
            <div className="desserts-page">
                <h1 className="dess-title"> {dessert.name?.stringValue} </h1>
                <img src={dessert.image?.stringValue} alt="dessert photo"></img>
            </div>
        )
    } else {
        return <p>No desserts with this ID</p>
    }
}