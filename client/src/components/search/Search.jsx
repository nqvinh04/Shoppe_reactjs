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
                        <input type="text" placeholder="Sale Xả Hàng"/>
                    </form>
                </div>
                <button
                    type="button"
                    onClick={handleSearch()}
                />
            </div>
            <div className="FaT0DB">
                <a class="UPUwyq" href="/search?keyword=%C3%A1o%20kho%C3%A1c">Áo Khoác</a>
                <a class="UPUwyq" href="/search?keyword=%C3%A1o%20len">Áo Len</a>
                <a class="UPUwyq" href="/search?keyword=d%C3%A9p">Dép</a>
                <a class="UPUwyq" href="/search?keyword=%C3%A1o%20kho%C3%A1c%20nam">Áo Khoác Nam</a>
                <a class="UPUwyq" href="/search?keyword=t%C3%BAi%20x%C3%A1ch%20n%E1%BB%AF">Túi Xách Nữ</a>
                <a class="UPUwyq" href="/search?keyword=gi%C3%A0y%20nam">Giày Nam</a>
                <a class="UPUwyq" href="/search?keyword=%C3%A1o%20croptop">Áo Croptop</a>
                <a class="UPUwyq" href="/search?keyword=lego">LEGO</a>
            </div>
        </div>
    )
}
export default Search;