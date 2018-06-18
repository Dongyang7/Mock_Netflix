import React, { Component } from 'react';

class Item extends Component {

    state={
        showme: false
    }
    
    render() {
        let showme = this.props.showme;
        return (
            <div className="col-xs-2">
                <div className="panel panel-default" onMouseOver={()=>this.setState({showme: true})}>
                    <div className="panel-heading">{this.props.detail.title}</div>
                    <div className="panel-body">
                        <img src={this.props.detail.img} />
                    </div>
                    <div className="panel-footer">
                        {this.state.showme && <button type="button" onClick={()=>this.props.onRemove(this.props.detail)} className="btn btn-default">Remove</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;