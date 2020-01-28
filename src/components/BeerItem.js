import React, { Component } from 'react'

class BeerItem extends Component{
    state={
        liked: false
    } 

    likePost = () => this.setState({ liked: !this.state.liked})


    render(){
        return(
            <div>
                <p>
                    {this.props.info.name}
                </p>
                <p> style={{color: 'red'}}>
                    {this.props.info.brewers_tips}
                </p>
                <button onClick={this.likePost}>Like</button>
        <p>{this.state.liked.toString()}</p>
            </div>
        )
    }
}

export default BeerItem