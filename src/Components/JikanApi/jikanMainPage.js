import React, { Component } from "react";
import SearchFormJikan from "./SearchFormJikan";
async function fetchjSonArraydata(searchData) {
  const fetchData = await fetch(`https://api.jikan.moe/v3/${searchData}`);
  const data = await fetchData.json();
  const array = await data.results;
  return array;
}

export class jikanMainPage extends Component {
  constructor() {
    super();
    this.UpdateSearch = this.UpdateSearch.bind(this);
    this.SearchAnime = this.SearchAnime.bind(this);
    this.state = {
      searchTerm: "",
      Animes: []
    };
  }
  UpdateSearch(Value) {
    this.setState({ searchTerm: Value });
  }
  async SearchAnime(searchValue) {
    const animeArray = await fetchjSonArraydata(
      `${searchValue}${this.state.searchTerm}`
    );
    this.setState({Animes: animeArray});
    //console.log(this.state.Animes);
    //console.log(animeArray);
  }

  render() {
    return (
      <React.Fragment>
        <SearchFormJikan
          onSearchValueChange={this.UpdateSearch}
          onFormSubmit={this.SearchAnime}
        ></SearchFormJikan>
        <ul style= {customLink}>
            {this.state.Animes.map((item) => (<li key = {item.mal_id}><img src={item.image_url} alt="alternatetext"></img></li>))}
        </ul>
      </React.Fragment>
    );
  }
}

const customLink = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto auto auto auto auto auto auto",
  justifyContent: "space-around",
  alignItems: "center",
  listStyle: "none",  
  gridGap: "2px 4px",
};


export default jikanMainPage;
