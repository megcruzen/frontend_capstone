import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../CosBuddy.css";


export default class Login extends Component {

    // Set initial state
    state = {
        name: "",
        email: "",
        id: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    // Set session storage for login submit
    handleRegister = (e) => {
        e.preventDefault();
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                id: this.state.id
            })
        );
    }

    render() {
        return (
            <section className="login">
                    <h1 className="text-center">Welcome to CosBuddy!</h1>

                    {/* onSubmit={this.handleRegister} */}

                    <div className="login_form my-4">
                        <Form inline onSubmit={() => console.log("Sign in!")}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="username" hidden>Username</Label>
                                <Input type="text" name="username" id="username"
                                onChange={this.handleFieldChange} required placeholder="username" />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="password" hidden>Password</Label>
                                <Input type="password" name="password" id="password"
                                onChange={this.handleFieldChange} required placeholder="password" />
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                        </Form>
                    </div>

                    <div className="text-center">
                        New to CosBuddy? <a href="#" onClick={() => this.props.history.push("/register")} className="link">Sign up now!</a>
                    </div>

            </section>
        )
    }
}