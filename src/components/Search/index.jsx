import "./styles.css";

export const Search = (props) => {
    return (
        <input className="search" placeholder="Search by dessert type..." type="text" onChange={props.handleSearchUpdate}/>
    )
}