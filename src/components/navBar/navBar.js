import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import feedbackLogo from '../../assets/images/feedbackLogo.jpg';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand>
                        <img
                            src={feedbackLogo}
                            alt=""
                            width="300"
                        />{' '}
                    </Navbar.Brand>
                </Navbar>
                <br />
            </>
        );
    }
}
