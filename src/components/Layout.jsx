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

const staticImg = [
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
  {
    title: "static image",
    url: "../assets/logo_mj.jpg",
  },
];

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [notYetSearched, setNotYetSearched] = useState(true);
  const [imgArray, setImgArray] = useState([]);
  const [query, setQuery] = useState();
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
        console.log(result.data);
        const array = Array.isArray(result?.data) ? result.data : [];
        const data = array.map((imgObj) => ({
          ...imgObj,
          url: imgObj.url
            ? imgObj.url.replace("localhost", import.meta.env.VITE_HOST)
            : "",
          title: "dummy title",
        }));
        console.log(data);
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
    //setImgArray(staticImg);
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
