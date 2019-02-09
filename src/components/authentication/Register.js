import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, Jumbotron } from 'reactstrap';
import "../CosBuddy.css";
import AppManager from '../../modules/AppManager';

export default class Register extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        id: ""
    }

    constructor(props) {
        super(props);
        this.state = {
            nameModal: false,
            emailModal: false,
            welcomeModal: false,
        };
        this.toggleUsername = this.toggleUsername.bind(this);
        this.toggleEmail = this.toggleEmail.bind(this);
        this.toggleWelcome= this.toggleWelcome.bind(this);
    }

    toggleUsername() {
        this.setState(prevState => ({ nameModal: !prevState.nameModal }));
    }

    toggleEmail() {
        this.setState(prevState => ({ emailModal: !prevState.emailModal }));
    }

    toggleWelcome() {
        this.setState(prevState => ({ welcomeModal: !prevState.welcomeModal }));
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructUser = evt => {
        evt.preventDefault();
        AppManager.getAllUsers()
        .then(allUsers => {
            let usernameArray = allUsers.filter(user => {
                console.log(user.username, this.state.username)
                return (user.username === this.state.username)
            })
            let emailArray = allUsers.filter(user => {
                console.log(user.email, this.state.email)
                return (user.email === this.state.email)
            })
            if (usernameArray.length > 0) {
                this.toggleUsername();
            }
            else if (emailArray.length > 0) {
                this.toggleEmail();
            }
            else {
                // alert(`Welcome, ${this.state.username}!`)
                this.toggleWelcome();

                let d = new Date();
                let timestamp = d.getTime();

                const newUser = {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    timestamp: timestamp,
                    usertype: "cosplayer"
                }
                this.props.addUser(newUser)
                    // .then(() => {
                    //     AppManager.getAllUsers()
                    //         .then(() => {
                    //         this.props.history.push("/conventions")
                    //         })
                    // })
            }
        })
    }


    render() {
        return (
            <section className="register">
                    <h2>Create an Account</h2>

                    <Form onSubmit={this.constructUser}>
                        <FormGroup>
                            <Label for="username" hidden>Username</Label>
                            <Input type="username" name="username" id="username" placeholder="Username"
                            onChange={this.handleFieldChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email" hidden>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email"
                            onChange={this.handleFieldChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" hidden>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password"
                            onChange={this.handleFieldChange} required />
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>

                    <Modal isOpen={this.state.nameModal} toggleUsername={this.toggleUsername} className={this.props.className}>
                        <ModalBody>Sorry, the username <strong>{this.state.username}</strong> is taken.</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleUsername}>OK</Button>{' '}
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.emailModal} toggleEmail={this.toggleEmail} className={this.props.className}>
                        <ModalBody>That email is already associated with an account.</ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleEmail}>OK</Button>{' '}
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.welcomeModal} toggleEmail={this.toggleWelcome} className={this.props.className}>
                        <ModalBody>
                            <Jumbotron className="text-center">
                                <h1 className="display-3 text-center">Welcome to CosBuddy!</h1>
                                <p className="lead text-center">We're glad you're here.</p>
                                <Button color="primary" onClick={() => this.props.history.push("/conventions")}>Continue</Button>
                        </Jumbotron>
                        </ModalBody>
                    </Modal>


            </section>
        )
    }
}