import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {

    const handleSearch = () => {
        return
    }

    return (
        <div className="header-with-search_search-section">
            <div className="shopee-searchbar">
                <div className="shopee-searchbar__main">
                    <form >

                    </form>
                </div>
            </div>
            <input type="text"
                   placeholder="Sale Xả Hàng"/>
            <button
                type="button"
                onClick={handleSearch()}
            />
        </div>
    )
}
export default Search;