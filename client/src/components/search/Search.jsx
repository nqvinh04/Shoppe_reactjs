import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {

    const handleSearch = () => {
        return
    }

    return (
        <div>
            <input type="text"
                   placeholder="Sale Xả Hàng"/>
            <button
                type="button"
                onClick={handleSearch()}
            />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </div>
    )
}
export default Search;