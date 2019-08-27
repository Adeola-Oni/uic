import React, { Component } from 'react'

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <p>Question 1/9</p>
                <h3>What is your name</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <input type="submit" value="Next" />
                </form>
            </div>
        )
    }
}
