import React, { Component } from 'react'
import {Modal,Button} from 'antd'
import 'antd/dist/antd.css';
export class JikanAnimeObject extends Component {
    constructor() {
        super();
        this.state = {
          visible: false
        };
      }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      handleOk = e => {
        this.setState({
          visible: false,
        });
      };
      handleCancel = e => {
        this.setState({
          visible: false,
        });
      };

    render() {
        return (
            <React.Fragment>
          <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.props.airing}</p>
          <p>{this.props.synopsis}</p>
          <p>Some contents...</p>
        </Modal>
                <img style={{width:"100%",height: "100%"}} src={this.props.image_url} onDoubleClick={this.showModal} onClick={()=>(this.props.testcallback(this.props.ID))} alt="updated"></img> 
            </React.Fragment>
        )
    }
}

export default JikanAnimeObject
