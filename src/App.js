import Cards from "./components/Card/Cards";
import Chart from "./components/Chart/Chart";
import Country from "./components/CountryPicker/CountryPicker";

import styles from "./App.module.css";
import { fetchData } from "./api";

import React, { Component } from "react";
import coronaImg from "./image.png";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="COVID-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
