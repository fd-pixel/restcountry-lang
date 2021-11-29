import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [lang, setLang] = useState("");

  const url = `https://restcountries.com/v3.1/lang/${lang}`;
  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setCountryList(response.data);
  };
  // const getData = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setCountryList(data));
  // };
  // console.log(response.data)

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(countryList);
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      {/* <Navbar /> */}

      <form style={{ margin: "4rem" }} onSubmit={handleSubmit} action="">
        <label htmlFor="">Enter Language</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <button style={{ margin: "2rem" }} type="submit">
          Submit
        </button>
      </form>
      <div>
        {countryList?.map((country, key) => (
          <>
            <p> {country.name.common}</p>
            <p>
              {" "}
              <img
                style={{ width: "8rem" }}
                src={country?.flags.png}
                alt="flag"
                srcSet=""
              />
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
