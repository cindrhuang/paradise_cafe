import "./styles.css";

import { useEffect, useState, useContext } from "react";

import { DessertItem } from "../../DessertItem";
import { Search } from "../../Search";
import DessertsContext from "../../../context/dessertContext"

export const Homepage = () => {

    const [desserts, setDesserts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filteredDesserts, setFilteredDesserts] = useState([]);
    const [searchString, setSearchString] = useState(true);

    const globalState = useContext(DessertsContext);

    useEffect (() => {
        getDesserts();
    }, []);

    useEffect (() => {
        handleSearchByType();
    }, [searchString]);

    const handleSearchByType = () => {
        if (searchString == "") {
          setFilteredDesserts(desserts);
        }
    
        //filter
        const dessertsFiltered = desserts.filter(
          (desserts) => {
            const type = desserts.type.stringValue.toLowerCase();
            const isMatch = type.indexOf(searchString.trim().toLowerCase());
    
            return isMatch !== -1;
          }
        )
        setFilteredDesserts(dessertsFiltered);
      }

    const getDesserts = async() => {
        try {
            const response = await fetch ("https://firestore.googleapis.com/v1/projects/paradise-cafe-4012/databases/(default)/documents/desserts/");
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
                return item.fields
            });

            setDesserts(formattedData);
            setFilteredDesserts(formattedData);
            globalState.initializeDesserts(formattedData);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    const handleSearchUpdate = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <div className="homepage">
            <Search handleSearchUpdate={handleSearchUpdate}/>
            <div className="desserts-container">
                {
                    !loading && filteredDesserts.length === 0 && <p>Nothing found for {searchString}!</p>
                }
                {
                    loading && <p>Loading data...</p>
                }
                {
                    filteredDesserts.map((desserts) => (
                        <DessertItem key={desserts.id.stringValue} id={desserts.id.stringValue} image={desserts.image.stringValue} name={desserts.name.stringValue} type={desserts.type.stringValue} details={desserts.details.stringValue}/>
                    ))
                }
            </div>
        </div>
    )
}