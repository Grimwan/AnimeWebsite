import React, { Component } from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css';
const { Sider } = Layout;
export class JikanAnimeSidePanel extends Component {
    constructor() {
        super();
    }
    
    render() {
        const Anime = this.props.Anime;
        return (
            <Sider onClick={()=>{this.props.siderToggle()}} style={SiderBarStyle} width="20%" height="20%" >
              <h2 style={TextStyle}>{Anime.title}</h2>
              <h1 style={TextStyle}>{Anime.type}</h1>
              <img img src={Anime.image_url} alt="alternatetext" style={imageSidebarStyle} ></img>
              {Anime.airing ? <h1 style={TextStyle}>Currently airing</h1> : <h1 style={TextStyle}>Currently not airing</h1> }
              <h1 style={TextStyle}>The anime started at {Anime.start_date?.substring(0,10)}</h1>
              {Anime.airing ? <h1 style={TextStyle}>The anime ends at {Anime.end_date?.substring(0,10)}</h1> : <h1 style={TextStyle}>The anime ended {Anime.end_date?.substring(0,10)}</h1> }             
              <h1 style={TextStyle}>Amount of episodes {Anime.episodes}</h1>
              <h1 style={TextStyle}>Rated {Anime.rated}</h1>
              <h1 style={TextStyle}> score  {Anime.score} / 10</h1>
              <h2 style={TextStyle}>Synopsis:</h2>
              <h1 style={TextStyle}>{Anime.synopsis}</h1>


          </Sider>            
        )
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
export default JikanAnimeSidePanel
