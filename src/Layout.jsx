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
import { DUMMY_CAPTION } from "./constants/strings.js";

const URL2 =
    "https://img.freepik.com/premium-photo/modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-suburban-house-architecture-residential-building_474717-200092.jpg?semt=ais_user_personalization&w=740&q=80";

const URL =
    "https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx";

const staticImg = [
    {
        title: "Grand mansion in Monaco",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "Country side villa",
        url: URL2,
        caption: DUMMY_CAPTION,
    },
    {
        title: "Full property for Luxury stay",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL2,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL2,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
    {
        title: "static image",
        url: URL,
        caption: DUMMY_CAPTION,
    },
];

export const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [notYetSearched, setNotYetSearched] = useState(true);
    const [imgArray, setImgArray] = useState([]);
    const [query, setQuery] = useState(null);
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
        setQuery();
        setSearched(0);
    };
    const handleSearch = (value) => {
        if (!value) return;
        setSearched((prev) => prev + 1);
        setNotYetSearched(false);
        setQuery(value);
    };

    return (
        <BrowserRouter>
            <div className="layout-container">
                <Header onHomeClick={goToHome} />
                <div className="main-content">
                    {notYetSearched && <Welcome notYetSearched={notYetSearched} />}
                    <SearchBox loading={loading} onSearch={handleSearch} />
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
