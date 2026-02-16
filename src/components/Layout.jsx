import { BrowserRouter } from "react-router-dom";
import { CustomFooter } from "./Footer.jsx";
import { Welcome } from "./Welcome.jsx";
import { SearchBox } from "./SearchBox.jsx";
import { Header } from "./Header.jsx";
import { ShimmerUI } from "./ShimmerUI.jsx";
import { NotFound } from "./NotFound.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "./Grid.jsx";

const URL2 =
    "https://img.freepik.com/premium-photo/modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-suburban-house-architecture-residential-building_474717-200092.jpg?semt=ais_user_personalization&w=740&q=80";

const URL =
    "https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx";
const staticImg = [
    {
        title: "Grand mansion in Monaco",
        url: URL,
    },
    {
        title: "Country side villa",
        url: URL2,
    },
    {
        title: "Full property for Luxury stay",
        url: URL,
    },
    {
        title: "static image",
        url: URL2,
    },
    {
        title: "static image",
        url: URL,
    },
    {
        title: "static image",
        url: URL,
    },
    {
        title: "static image",
        url: URL,
    },
    {
        title: "static image",
        url: URL,
    },
    {
        title: "static image",
        url: URL2,
    },
    {
        title: "static image",
        url: URL,
    },
    {
        title: "static image",
        url: URL,
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
                    title: "dummy title",
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
                {notYetSearched && <Welcome />}
                <SearchBox loading={loading} onSearch={handleSearch} />
                <div className="main-content">
                    {loading && <ShimmerUI loading={loading} query={query} />}
                    {!notYetSearched &&
                        !loading &&
                        (imgArray?.length ? (
                            <Grid imgArray={imgArray} query={query} />
                        ) : (
                            <NotFound query={query} />
                        ))}
                </div>
                <CustomFooter />
            </div>
        </BrowserRouter>
    );
};
