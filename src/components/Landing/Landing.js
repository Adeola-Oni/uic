import React from 'react';
import '../CSS/Landing.css';
import Header from './Header.js';
import Objectives from './Objectives';
import About from './About';
import Prices from './Prices';
import Message from './Message';
import Footer from './Footer'


export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render () {
        return(
            <div>
                <Header />
                <Objectives />
                <About />
                <Prices />
                <Message />
                <Footer />
            </div>
        )
    }

}