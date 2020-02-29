import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


class Listproperty extends Component {

    render() {

        const detail = this.props.item
        console.log(detail)




        return (
            <React.Fragment>
                <Grid  >
                    <Grid.Row>
                        <ul>
                            <Grid.Column>
                                {detail.map((item, i) => {
                                    {
                                        return (
                                            <li key={i}>{item}</li>
                                        )
                                    }
                                })}
                            </Grid.Column>
                        </ul>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Listproperty