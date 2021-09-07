import React, { Component } from 'react'


class HornedBeasts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likesCounter: 0,
        }
    }
    plusLike = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={this.plusLike} src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
                <h3>{this.state.likesCounter}♥</h3>
                <p>{this.props.description}</p>
                <p>{this.props.keyword}</p>
                <p>{this.props.horns}</p>


            </div>
        )
    }
}

export default HornedBeasts