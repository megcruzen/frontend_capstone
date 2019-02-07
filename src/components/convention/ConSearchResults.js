import React, { Component } from 'react'
import { Media, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import "../CosBuddy.css"
import thumb from "./64x64.jpg"
import AppManager from "../../modules/AppManager"

export default class ConSearchName extends Component {

    state = {
        searchQuery: "",
        conventions: [],
        modal: false
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleSearch = evt => {
        evt.preventDefault();
        this.searchConventions(this.state.searchQuery)
        .then(() => this.props.history.push("/conventions/search"));
    }

    searchConventions = (searchQuery) => {
        const newSearchResults = {}
        return AppManager.searchConventions(searchQuery)
        .then(response => newSearchResults.conventions = response)
        .then(() => this.setState(newSearchResults))

        // .then(conventions => {
        //     this.setState({ conventions: newSearchResults })
        // })
    }

    addConToList = (result) => {
        const newUserCon = {
            userId: 1,
            conventionId: result.id
        }
        this.props.addUserConvention(newUserCon)
        this.toggle();
    }

    render() {
        return (
            <tr>
                <td>
                    <Media className="pt-2 px-2">
                        <Media left href="#" className="mr-3">
                            <Media object src={thumb} className="thumb" alt="" />
                        </Media>
                        <Media body className="d-flex flex-wrap justify-content-between align-items-center">
                            <div className="con_details">
                                <h4>{this.props.result.name}</h4>
                                {this.props.result.startDate} - {this.props.result.endDate}
                                <br />
                                {this.props.result.city}, {this.props.result.state}
                            </div>
                            <div>
                                <Button color="primary" onClick={(() => this.addConToList(this.props.result))}>Add to My Conventions</Button>
                            </div>
                        </Media>
                    </Media>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalBody>
                            <strong>{this.props.result.name}</strong> was added to your conventions!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Add Another Convention</Button>
                            <Button color="primary" onClick={(() => this.props.history.push("/conventions/"))}>Return to My Conventions</Button>
                        </ModalFooter>
                    </Modal>
                </td>
            </tr>
        )
    }
}