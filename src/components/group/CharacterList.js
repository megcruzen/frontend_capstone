import React, { Component } from 'react';
import { Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import Collapsible from 'react-collapsible';
import { CollapsibleHead, CollapsibleContent } from 'react-collapsible-component';
import CharacterCard from './CharacterCard'

export default class CharacterList extends Component {

    state = {
        name: "",
        user: "",
        groupId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    addCharacter = event => {
        event.preventDefault();
        event.target.reset();

        const newCharacter = {
            name: this.state.character,
            user: "",
            groupId: Number(this.props.group.id)
        }

        this.props.addCharacter(newCharacter);
    }

    render() {

        return (
                <div className="character_list mb-2">
                        <CollapsibleHead isExpanded={true}>Character List</CollapsibleHead>
                        <CollapsibleContent isExpanded={true}>
                            <Table>
                                <tbody>
                                {
                                    this.props.characters.filter(character => character.groupId === this.props.group.id)
                                    .map(character =>
                                        <CharacterCard character={character} deleteCharacter={this.props.deleteCharacter} updateCharacter={this.props.updateCharacter} groupId={this.props.group.id} />
                                    )
                                }
                                </tbody>
                            </Table>
                            <Form onSubmit={this.addCharacter} className="d-flex">
                                <FormGroup className="w-100 mr-2">
                                    <Label for="character" hidden>Character Name</Label>
                                    <Input type="text" required name="character" id="character"
                                    onChange={this.handleFieldChange} placeholder="Add character" />
                                </FormGroup>
                                <div><Button color="primary">Add</Button></div>
                            </Form>
                        </CollapsibleContent>

                </div>

        )
    }
}