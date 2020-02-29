import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


class Listproperty extends Component {
    // state=[
    //     NameProperty = [
    //         {
    //             name : 'Free High Speed Internet (WiFi)',
    //             icon : '',
    //             status : '0'
    //         },
    //         {
    //             name : 'Fitness Center with Gym / Workout Room',
    //             icon : '',
    //             status : '0'
    //         },
    //         {
    //             name : 'Pool',
    //             icon : '',
    //             status : '0'
    //         },
    //         {
    //             name : 'Rooftop terrace',
    //             icon : '',
    //             status : '0'
    //         },
    //         {
    //             name : 'Meeting rooms',
    //             icon : '',
    //             status : '0'
    //         }
    //     ]
    // ]

    render() {
        
        const detail=this.props.item
        



        return (
            <React.Fragment>
                <Grid  >
                    <Grid.Row>
                        <ul>
                            <Grid.Column>
                                {/* {detail.map((item, i) => { */}
                                    {/* return ( */}
                                        <li >{detail.Fitness}</li>
                                    {/* )
                                }
                                )} */}
                            </Grid.Column>


                        </ul>


                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Listproperty