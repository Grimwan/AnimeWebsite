import React, { Component } from "react";
import SearchFormJikan from "./SearchFormJikan";
import  JikanAnimeObject from "./JikanAnimeObject";

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
            <div className= "MainContent" style = {MainContentStyle}>
              <div className = "TableRow" style = {TableRowStyle}>
                <div className = "LeftContent" style={LeftContentStyle}>
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
                </div>
              {this.state.SiderToggle===true ? 
              <div style={divstyleSidebar}>
                <div onClick={()=> (this.setState({SiderToggle : false}))} style={divstyleSidebarTop}>    
                  <img img src={this.state.Animes[this.state.arrayId].image_url} alt="alternatetext" style={imageSidebarStyle} ></img>
                  <h1>Currently not he</h1>
                  <h1>Currently not airing</h1>
                  <h1>Currently not airing</h1>
                  <h1>Currently not no</h1>
                </div>
                <div style = {divstyleSidebarTop}>
                <h1>Currently not teest</h1>
                  <h1>Currently nottetee</h1>
                </div>
              </div> : ""}  
            </div>
          </div>
          </Content>
       
        </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}

const MainContentStyle = {
  width: "100%",
  display: "table",
}
const LeftContentStyle = {
  width: "80%",
  display: "table-cell",
}
const TableRowStyle = {
  display:"table-row"
}

const divstyleSidebar = {
  display: "table-cell",

}
const divstyleSidebarTop = {
  top:"0",
  position:" sticky",
  position: "-webkit-sticky",
}




const imageSidebarStyle = {
  width: "100%",
  height:"100%",
  filter: "grayscale(50%)",
  opacity: "0.2",
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
