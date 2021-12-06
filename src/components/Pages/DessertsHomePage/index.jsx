import "./styles.css";

import { useEffect, useState } from "react";

import { DessertItem } from "../../DessertItem";

export const Homepage = () => {

    const [desserts, setDesserts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
            

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    return (
        <div className="homepage">
            <div className="desserts-container">
                {
                    !loading // && filteredPets.length === 0 && <p>Nothing found for {searchString}!</p>
                }
                {
                    loading && <p>Loading data...</p>
                }
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