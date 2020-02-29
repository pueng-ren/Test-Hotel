import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { connect } from 'react-redux'
import { BookingActions } from '../store/action/BookingActions'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import DateDiff from 'date-diff'

class BodyBooking extends Component {


    constructor(props) {
        super(props)
        console.log(props)
    }

    state = {
        IdRoom: '',
        Room_name: '',
        DateStart: '',
        DateEnd: '',
        number: '',
        Loading: false,
        available: '',
        per_price: '',
    }

    componentDidMount() {
        const { id_hotel, Hotel, available, price } = this.props
        this.setState({ IdRoom: id_hotel, Room_name: Hotel, available: available, per_price: price })

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
            Room_name: '',
            DateStart: '',
            DateEnd: '',
            number: '',
            Loading: false,
            available: '',
            per_price: '',
        }
        this.setState(state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { IdRoom, DateStart, DateEnd, number, Room_name,price } = this.state

       
        const { props, state } = this;
        const { firebase } = props;
        var diff = new DateDiff(new Date(DateEnd), new Date(DateStart));
        const price_all=this.calculate(diff.days())

        const data = {
            Date: new Date().toLocaleDateString(),
            IdRoom: IdRoom,
            Hotel_name : this.props.hotel_name,
            DateStart: new Date(DateStart).toLocaleDateString(),
            Room_name: Room_name,
            DateEnd: new Date(DateEnd).toLocaleDateString(),
            number: number,
            price:price_all
        }

        this.props.BookingActions(data, firebase)

        this.clearState()
        this.props.close()
        // setTimeout(function() {
        //   }, 0);
    }

    calculate = (day) => {
        return (
            (parseInt(this.state.per_price) * parseInt(this.state.number)) * parseInt(day)
        )
    }




    render() {
        const { Room_name, available } = this.state
        // if(Loading){
        return (
            <React.Fragment  >

                <h3>{Room_name}</h3>
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
                            <Button type='submit' >Submit</Button>
                        </Grid.Row>



                    </Grid>
                </Form>

            </React.Fragment>
        )

    }
    // }

}
const mapStateToProps = state => ({
    authError: state.auth.authError,
    auth: state.firebase.auth,
});


const mapDispatchToProps = (dispatch) => {
    return {
        BookingActions: (booking) => dispatch(BookingActions(booking))
    }
}



export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(BodyBooking);
