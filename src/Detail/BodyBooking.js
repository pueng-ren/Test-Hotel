import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { connect } from 'react-redux'
import {BookingActions} from '../store/action/BookingActions'


class BodyBooking extends Component {
    
   
    constructor(props){
        super(props)
        console.log(props)
    }
    state = {
        IdRoom: '',
        Hotel_name: '',
        DateStart: '',
        DateEnd: '',
        number: '',
        Loading: false,
        available: ''



    }

    componentDidMount() {
        const { id_hotel, Hotel, available } = this.props
        this.setState({ IdRoom: id_hotel, Hotel_name: Hotel, available: available })

    }


    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });

    }

    clearState() {
        const state = {
            IdRoom: '',
            Hotel_name: '',
            DateStart: '',
            DateEnd: '',
            number: '',
            Loading: false,
            available: ''
        }
        this.setState(state)
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { IdRoom, DateStart, DateEnd, number, Hotel_name } = this.state

        const data = {
            idBooking: new Date(),
            IdRoom: IdRoom,
            DateStart: DateStart,
            Hotel_name: Hotel_name,
            DateEnd: DateEnd,
            number: number,
        }


        this.props.BookingActions({data })

        this.clearState()
        // this.props.close()
    }




    render() {
        const { Hotel_name, available, Loading } = this.state
        // if(Loading){
        return (
            <React.Fragment  >

                <h3>{Hotel_name}</h3>
                <hr className="margin2" />
                <Form
                    ref="form"
                    onSubmit={this.handleSubmit}
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
                                    value={this.state.DateStart}
                                    onChange={this.handleFormChange}
                                    data-date-format="DD/MM/YYYY"
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
                                    value={this.state.DateEnd}
                                    min={this.state.DateStart}
                                    validators={['required']}
                                    data-date-format="DD/MM/YYYY"
                                    onChange={this.handleFormChange}
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
                                    max={available}
                                    min='1'
                                    value={this.state.number}
                                    validators={['required']}
                                    onChange={this.handleFormChange}
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
    // }

}

const mapDispatchToProps = (dispatch)=>{
    return {
        BookingActions:(booking)=> dispatch(BookingActions(booking))
    }
}



export default connect(null,mapDispatchToProps)(BodyBooking)