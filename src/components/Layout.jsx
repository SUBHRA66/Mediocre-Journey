console.log(import.meta.env);

import { BrowserRouter } from "react-router-dom";
import { CustomFooter } from "./Footer.jsx";
import { Welcome } from "./Welcome.jsx";
import { SearchBox } from "./SearchBox.jsx";
import { Header } from "./Header.jsx";
import { ShimmerUI } from "./ShimmerUI.jsx";
import { Grid } from "./Grid.jsx";
import { NotFound } from "./NotFound.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [notYetSearched, setNotYetSearched] = useState(true);
  const [imgArray, setImgArray] = useState([]);
  const [query, setQuery] = useState();
  const [searched, setSearched] = useState(0);
  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);

      try {
        const URL = `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/`;
          const result = await axios.post(URL + "images", {
          query,
        });
        const array = Array.isArray(result?.data?.images)
          ? result.data.images
          : [];

        const data = array.map((imgObj) => ({
          ...imgObj,
          url: imgObj.url
            ? imgObj.url.replace("localhost", import.meta.env.HOSTNAME)
            : "",
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
  }, [searched]);

  const handleSearch = (value) => {
    if (!value) return;
    setSearched((prev) => prev + 1);
    setNotYetSearched(false);
    setQuery(value);
  };

  return (
    <BrowserRouter>
      <div className="layout-container">
        <Header />
        <div className="main-content">
          <SearchBox loading={loading} onSearch={handleSearch} />
          {loading && <ShimmerUI loading={loading} />}
          {notYetSearched && <Welcome />}
          {!notYetSearched &&
            !loading &&
            (imgArray?.length ? <Grid imgArray={imgArray} /> : <NotFound />)}
        </div>
        <CustomFooter />
      </div>
    </BrowserRouter>
  );
};
