import React, { Component } from 'react';

class Item extends Component {

    state={
        showme: false
    }
    
    render() {
        let showme = this.props.showme;
        return (
            <div className="col-xs-2">
                <div className="panel panel-default" onMouseLeave={()=>this.setState({showme: false})} onMouseOver={()=>this.setState({showme: true})}>
                    <div className="panel-heading" style={{backgroundColor: "#222", color: "white"}}>{this.props.detail.title}</div>
                    <div className="panel-body" style={{backgroundColor: "#222", color: "white"}} className="row">
                        <img className="col-xs-12" src={this.props.detail.img} />
                    </div>
                    <div className="panel-footer" style={{backgroundColor: "#222", color: "white"}}>
                        {this.state.showme && <button type="button" onClick={()=>this.props.onRemove(this.props.detail)} className="btn btn-primary">{this.props.action}</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;