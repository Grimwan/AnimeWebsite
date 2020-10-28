import React, { Component } from "react";
import SearchFormJikan from "./SearchFormJikan";
import  JikanAnimeObject from "./JikanAnimeObject";
import JikanAnimeSidePanel from "./JikanAnimeSidePanel";

import {Layout} from 'antd'
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;



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
    this.Testcallback = this.Testcallback.bind(this);
    this.SiderToggle = this.SiderToggle.bind(this);
    this.state = {
      searchTerm: "",
      Animes: [],
      visible: false,
      SiderToggle:false,
      arrayId: 0,
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
    console.log(animeArray);
    //<img src={item.image_url} alt="alternatetext"></img>
  }

  SiderToggle(Value)
  {
    if(Value === this.state.arrayId && this.state.SiderToggle == true)
      this.setState({SiderToggle:false});
    else
    {
      this.setState({SiderToggle:true, arrayId: Value});
    }
  }
  
  Testcallback(Value)
  {
    console.log("callbackcalled "+Value);
    this.setState({SiderToggle:true});
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header>
            <SearchFormJikan
              onSearchValueChange={this.UpdateSearch}
              onFormSubmit={this.SearchAnime}
            >  
            </SearchFormJikan>
          </Header>
          <Layout>
            <Content>
              <ul style= {customLink}>
              {this.state.Animes.map((item,index) => (<li key = {item.mal_id}>
                <JikanAnimeObject
                  image_url = {item.image_url}
                  airing = {item.airing}
                  synopsis = {item.synopsis}
                  end_Date = {item.end_Date}
                  ID = {index}
                  mal_id = {item.mal_id}
                  testcallback = {this.SiderToggle}
                ></JikanAnimeObject></li>))}
              </ul>
            </Content>
           
          {this.state.SiderToggle===true ?
          <JikanAnimeSidePanel siderToggle = {()=>(this.setState({SiderToggle : false}))} 
            Anime ={this.state.Animes[this.state.arrayId]} >
          </JikanAnimeSidePanel> : ""}  
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

const TextStyle = 
{
  color:"White",
}

const SiderBarStyle = {
  overflow: 'auto',
  height: '80vh',
  top:"0",
  position: 'sticky',
}

const imageSidebarStyle = {
  filter: "grayscale(50%)",
  width: "100%",
  height: "auto",
}

const customLink = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
  //justifyContent: "space-around",
  //alignItems: "center",
  listStyle: "none",  
  padding:"0",
  //gridGap: "2px 4px",
};


export default jikanMainPage;
