import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ConCostumeCard from "./ConCostumeCard"

export default class ConventionCostumeList extends Component {

    // Set initial state
    state = {
        userConventionId: "",
        costumeId: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Create the conCostume object
    constructConnection = evt => {
        evt.preventDefault()
        const conCostume = {
            costumeId: Number(this.state.costumeId),
            userConventionId: this.props.myConventionId
        }

        // console.log("conCostume:", conCostume)
        // POST the conCostume object
        this.props.addCostumeToCon(conCostume)
    }

    render() {
        return (
            <section className="convention_costume_list">
                <div className="d-sm-flex justify-content-between flex-wrap align-items-center mb-3 mt-4">
                    <h4 className="text-center">Costume List</h4>
                </div>
                <div className="costume_selector d-flex flex-wrap">
                    <Form onSubmit={(() => console.log("Add!"))} className="d-flex w-75 mr-2">
                        <FormGroup className="w-100 mr-2">
                            <Label hidden for="costumeName">Genre</Label>
                            <Input type="select" required name="costumeId" id="costumeId"
                            onChange={this.handleFieldChange}>
                            <option value="">Select a costume</option>
                                {
                                    this.props.costumes.map(costume => <option key={costume.id} id={costume.id} value={costume.id}>{costume.name} ({costume.outfit})</option>)
                                }
                            </Input>
                        </FormGroup>
                        <div><Button color="primary" onClick={this.constructConnection}>Add</Button></div>
                    </Form>
                    <div>
                        <Button color="primary" onClick={() => this.props.history.push("/costumes/new")}>Create New Costume</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                {
                    this.props.conCostumes.map(conCostume =>
                        <ConCostumeCard key={conCostume.id} conCostume={conCostume} {...this.props} />
                    )
                }
                </div>
            </section>
        )
    }
}