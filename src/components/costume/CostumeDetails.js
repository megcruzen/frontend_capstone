import React, { Component } from 'react'
import { Table, Row, Col, Media, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import "../CosBuddy.css";
import thumb from "./64x64.jpg"

import CostumeItemCard from "./CostumeItemCard"

export default class CostumeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const costume = this.props.costumes.find(costume => costume.id === parseInt(this.props.match.params.costumeId)) || {}
        return (
                <section key={costume.id} className="mr-2 mb-3 costume_details">
                    <Media className="pt-2">
                        <Media left href="#" className="mr-3">
                            <Media object src={thumb} className="thumb" alt="" />
                        </Media>
                        <Media body className="d-flex justify-content-between align-items-center">
                            <div className="costume_details">
                                <span className="text-uppercase series">{costume.series}</span>
                                <h4>{costume.name}</h4>
                                <span className="series">{costume.outfit}</span>
                            </div>
                            <div>
                            <i className="fas fa-edit mr-2 text-secondary" onClick={() => console.log("Edit!")}></i>
                            <i className="fas fa-times-circle text-danger" onClick={this.toggle} style={{cursor:'pointer'}}></i>
                            </div>
                        </Media>
                    </Media>
                    <Row className="items_and_notes">
                        <Col sm="4" className="mt-4">
                            <h3>Costume Items</h3>
                            <div className="item_input d-flex">
                                <div className="w-100 mr-2">
                                    <Form>
                                        <FormGroup>
                                            <Label for="itemName" hidden>Item Name</Label>
                                            <Input type="text" required name="itemName" id="itemName"
                                            onChange={this.handleFieldChange} placeholder="item name" />
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div>
                                    <Button color="primary">Go</Button>
                                </div>
                            </div>
                            <div className="items_box border">
                                <Table borderless striped>
                                    <tbody>
                                    {
                                    this.props.costumeItems
                                        .filter(item => item.costumeId === costume.id)
                                        .map(item =>
                                            <CostumeItemCard key={item.id} item={item} {...this.props} />
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col sm={{ size: 5, offset: 1 }} className="mt-4">
                            <h3>Notes</h3>
                            <FormGroup>
                                <Input type="textarea" name="notes" id="notes" rows="10" cols="40" placeholder="Enter notes here..." />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Remove Costume</ModalHeader>
                        <ModalBody>
                            Are you sure you want to delete <strong>{costume.name}</strong>?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => this.props.deleteCostume(costume.id).then(() => this.props.history.push("/costumes"))}>Yes, Please Delete</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </section>
        )
    }
}