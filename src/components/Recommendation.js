import React, { Component } from 'react';

class Recommendation extends Component {

    state = {
        showme: false
    }
    render() {
        return (
            <div className="col-xs-2" onMouseOver={()=>this.setState({showme: true})}>
                <div className="panel panel-default">
                    <div className="panel-heading">{this.props.detail.title}</div>
                    <div className="panel-body">
                        <img src={this.props.detail.img} />
                    </div>
                    <div className="panel-footer">
                    {this.state.showme && <button type="button" onClick={()=>this.props.addToList(this.props.detail)} className="btn btn-default">Add</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommendation;