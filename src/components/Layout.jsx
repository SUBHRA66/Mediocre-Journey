import { BrowserRouter } from "react-router-dom";
import { CustomFooter } from "./Footer.jsx";
import { Welcome } from "./Welcome.jsx";
import { SearchBox } from "./SearchBox.jsx";
import { Header } from "./Header.jsx";
import { ShimmerUI } from "./ShimmerUI.jsx";
import { Grid } from "./Grid.jsx";
import { NotFound } from "./NotFound.jsx";
import { useState } from "react";
import { URL, HOSTNAME, DUMMY_URL } from "../constants/url.js";
import axios from "axios";

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [notYetSearched, setNotYetSearched] = useState(true);
  const [imgArray, setImgArray] = useState(null);

  const handleSearch = async (value) => {
    if (!value) return;

    setLoading(true);
    setNotYetSearched(false);

    /*const result = await axios.post(DUMMY_URL + "auth/get?email=wolve@gmail.com", {
                prompt: "this is the prompt that is sent to the backend"
            });

            setImgArray(result?.data?.images ?? []);
            console.log(imgArray);*/

    //code when connecting to the actual backend---------

    try {
      const result = await axios.post(URL + "images", {
        query: "this is the prompt that is sent to the backend",
      });
      const array = Array.isArray(result?.data?.images)
        ? result?.data?.images
        : [];

      const data = array?.map((imgObj) => ({
        ...imgObj,
        url: imgObj.url ? imgObj?.url?.replace("localhost", HOSTNAME) : "",
      }));

      setImgArray(data);
    } catch (err) {
      console.error("search failed");
      setImgArray([]);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
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
