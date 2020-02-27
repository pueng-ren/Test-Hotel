import React, { Component } from 'react'
import { Grid,Button  } from 'semantic-ui-react'
import { Form, Input} from 'semantic-ui-react-form-validator'


class BodyBooking extends Component {

    render() {
        return (
            <React.Fragment  >
                <h3>HOTEL : </h3>
                <h3>Meditation room : </h3>
                <hr className="margin2" />
                <Form
                    ref="form"
                    onSubmit={this.onSubmit}
                >
                    <Grid columns={2}  >
                        <Grid.Row  >
                            <Grid.Column>
                                <span>Date Start : </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    type="date"
                                    name="DateStart"
                                    // value={this.state.Name}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    placeholder='Name'
                                />
                            </Grid.Column>


                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <span>Date End : </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    type="date"
                                    name="DateEnd"
                                    // value={this.state.Name}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    placeholder='Name'
                                />
                            </Grid.Column>


                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <span>Number Of Room : </span>
                            </Grid.Column>
                            <Grid.Column>
                                <Input
                                    type="number"
                                    name="number"
                                    max='5'
                                    min='1'
                                    // value={this.state.Name}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    placeholder='number'
                                />
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row centered>        
                            <Button type='submit'>Submit</Button>
                        </Grid.Row>



                    </Grid>
                </Form>

            </React.Fragment>
        )
    }

}



export default BodyBooking