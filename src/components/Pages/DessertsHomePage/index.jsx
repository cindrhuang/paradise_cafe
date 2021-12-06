import "./styles.css";

import { useEffect, useState } from "react";

import { DessertItem } from "../../DessertItem";

export const Homepage = () => {

    const [desserts, setDesserts] = useState([]);

    useEffect (() => {
        getDesserts();
    }, []);

    const getDesserts = async() => {
        try {
            const response = await fetch ("https://firestore.googleapis.com/v1/projects/paradise-cafe-4012/databases/(default)/documents/desserts/");
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            setDesserts(formattedData);
            

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="homepage">
            <div className="desserts-container">
                <DessertItem/>
                {
                    desserts.map((desserts) => (
                        <DessertItem key={desserts.id.stringValue} id={desserts.id.stringValue} image={desserts.image.stringValue} name={desserts.name.stringValue} type={desserts.type.stringValue} details={desserts.details.stringValue}/>
                    ))
                }
            </div>
        </div>
    )
}