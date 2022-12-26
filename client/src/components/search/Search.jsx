import React from "react";
import './search.css';

const Search = () => {

    const handleSearch = () => {
        return true;
    }

    return (
        <div className="header-with-search_search-section">
            <div className="shopee-searchbar">
                <div className="shopee-searchbar__main">
                    <form role="search" className="shopee-searchbar-input" autoComplete="off">
                        <input
                            type="text"
                            placeholder="Sale Xả Hàng"
                            className="shopee-searchbar-input__input"
                        />
                    </form>
                </div>
                <button
                    type="button"
                    className="btn btn-solid-primary btn--s btn--inline shopee-searchbar__search-button"
                    onClick={() => handleSearch()}
                >
                    <svg fill="#ffffff"
                         width="19px"
                         height="19px"
                         viewBox="0 0 19 19"
                         xmlns="http://www.w3.org/2000/svg"
                         stroke="#ffffff"
                         strokeWidth="1"
                         className="shopee-svg-icon"
                    >
                        <g fillRule="evenodd" stroke="none" strokeWidth="1">
                            <g transform="translate(-1016 -32)">
                                <g>
                                    <g transform="translate(405 21)">
                                        <g transform="translate(611 11)">
                                            <path
                                                d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z"></path>
                                            <path
                                                d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        {/*<g id="SVGRepo_bgCarrier" strokeWidth="1"/>*/}
                        {/*<g id="SVGRepo_iconCarrier">*/}
                        {/*    <path d="M 23.9570 41.7695 C 27.8476 41.7695 31.4804 40.5039 34.4336 38.3945 L 45.5429 49.5039 C 46.0585 50.0195 46.7382 50.2774 47.4414 50.2774 C 48.9648 50.2774 50.0664 49.1055 50.0664 47.6055 C 50.0664 46.9023 49.8322 46.2461 49.3162 45.7305 L 38.2773 34.6679 C 40.5976 31.6211 41.9804 27.8476 41.9804 23.7461 C 41.9804 13.8320 33.8710 5.7226 23.9570 5.7226 C 14.0195 5.7226 5.9336 13.8320 5.9336 23.7461 C 5.9336 33.6601 14.0195 41.7695 23.9570 41.7695 Z M 23.9570 37.8789 C 16.1992 37.8789 9.8242 31.4805 9.8242 23.7461 C 9.8242 16.0117 16.1992 9.6133 23.9570 9.6133 C 31.6914 9.6133 38.0898 16.0117 38.0898 23.7461 C 38.0898 31.4805 31.6914 37.8789 23.9570 37.8789 Z"/>*/}
                        {/*</g>*/}
                    </svg>
                </button>
            </div>
            <div className="FaT0DB">
                <div className="pFceVI">
                    <a className="UPUwyq" href="/search?keyword=%C3%A1o%20kho%C3%A1c">Áo Khoác</a>
                    <a className="UPUwyq" href="/search?keyword=%C3%A1o%20len">Áo Len</a>
                    <a className="UPUwyq" href="/search?keyword=d%C3%A9p">Dép</a>
                    <a className="UPUwyq" href="/search?keyword=%C3%A1o%20kho%C3%A1c%20nam">Áo Khoác Nam</a>
                    <a className="UPUwyq" href="/search?keyword=t%C3%BAi%20x%C3%A1ch%20n%E1%BB%AF">Túi Xách Nữ</a>
                    <a className="UPUwyq" href="/search?keyword=gi%C3%A0y%20nam">Giày Nam</a>
                    <a className="UPUwyq" href="/search?keyword=%C3%A1o%20croptop">Áo Croptop</a>
                    <a className="UPUwyq" href="/search?keyword=lego">LEGO</a>
                </div>
            </div>
        </div>
    )
}
export default Search;