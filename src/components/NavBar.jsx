/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Navbar } from "react-bootstrap";

// This component renders the Navbar of our application
export function NavBar( props ){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> 
                <h1>Synergy Hub</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text> 
                    <Button style={{ display: props.showButton }} variant="success" onClick={ async () => { props.login(); }}>
                        Connect to Metamask
                    </Button>
                    <div style={{ display: props.showButton === "none" ? "block" : "none" }}>
                        Signed in as: 
                        <a href="#"> 
                            { props.username }
                        </a>
                    </div>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}