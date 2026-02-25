import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomFooter } from "./components/Footer.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { SearchBox } from "./components/SearchBox.jsx";
import { Header } from "./components/Header.jsx";
import { ShimmerUI } from "./components/ShimmerUI.jsx";
import { NotFound } from "./components/NotFound.jsx";
import axios from "axios";
import { Grid } from "./components/Grid.jsx";

import { staticImg } from "./constants/cardData.js";

export const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [notYetSearched, setNotYetSearched] = useState(true);
    const [imgArray, setImgArray] = useState([]);
    const [query, setQuery] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [searched, setSearched] = useState(0);
    const URL = `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}`;

    useEffect(() => {
        if (!query) return;
        const fetchImages = async () => {
            setLoading(true);

            try {
                const result = await axios.post(URL + "/images", {
                    query,
                });
                const array = Array.isArray(result?.data) ? result.data : [];
                const data = array.map((imgObj) => ({
                    ...imgObj,
                    url: imgObj.url
                        ? imgObj.url.replace("localhost", import.meta.env.VITE_HOST)
                        : "",
                    title: "Braithwaite Mansion",
                }));
                setImgArray(data);
            } catch (err) {
                console.error("searched failed", err);
                setImgArray([]);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };
        fetchImages();
        // setImgArray(staticImg);
    }, [searched]);

    const goToHome = () => {
        setLoading(false);
        setNotYetSearched(true);
        setImgArray([]);
        setInputValue("");
        setQuery(null);
        setSearched(0);
    };
    const handleSearch = (value) => {
        if (!value) return;

        setSearched((prev) => prev + 1);
        setNotYetSearched(false);
        setInputValue(value);
        setQuery(value);
    };

    return (
        <BrowserRouter>
            <div className="layout-container">
                <Header onHomeClick={goToHome} />
                <div className="main-content">
                    <SearchBox
                        loading={loading}
                        onSearch={handleSearch}
                        visibility={notYetSearched}
                        value={inputValue}
                        setValue={setInputValue}
                    />
                    {loading && <ShimmerUI loading={loading} query={query} />}
                    {!notYetSearched &&
                        !loading &&
                        (imgArray?.length ? (
                            <Grid
                                imgArray={imgArray}
                                query={query}
                                totalItems={imgArray.length}
                            />
                        ) : (
                            <NotFound query={query} />
                        ))}
                </div>
                <CustomFooter />
            </div>
        </BrowserRouter>
    );
};
