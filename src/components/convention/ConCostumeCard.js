import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ConCostumeCard extends Component {
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

    removeCostumeAndDeleteItems = (conCostumeId) => {
        this.props.deleteConCostume(this.props.conCostume.id)
    }

    deleteItems = (conCostumeId) => {
        let conCostumeItems = this.props.conCostumeItems;
        return conCostumeItems.filter(conItem => conItem.conCostumeId === conCostumeId).map(item =>
            this.props.deleteConCostumeItem(item.id)
        )
    }

    render() {

        return (
            <div className="con_costume_card">
                <Card key={this.props.conCostume.costume.id} className="mb-3">
                    <CardImg top width="100%" src={this.props.conCostume.costume.image} alt={this.props.conCostume.costume.name} />
                    <CardBody className="d-flex justify-content-between">
                        <div>
                            <CardSubtitle className="text-uppercase subtitle mt-1">{this.props.conCostume.costume.series}</CardSubtitle>
                            <CardTitle><h3>{this.props.conCostume.costume.name}</h3></CardTitle>
                            <CardText className="outfit mt-1"><i class="fas fa-user-circle"></i> {this.props.conCostume.costume.outfit}</CardText>
                        </div>
                        <div>
                            <i className="fas fa-times-circle delete" onClick={this.toggle} style={{cursor:'pointer'}}></i>
                        </div>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Remove Convention</ModalHeader>
                    <ModalBody>
                        Are you sure you want to remove <strong>{this.props.conCostume.costume.name}</strong> from this convention?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.removeCostumeAndDeleteItems(this.props.conCostume.id)}>Yes, Please Remove</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}