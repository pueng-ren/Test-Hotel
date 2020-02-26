import React,{Component} from 'react'
import logo from '../bg.jpg'
import { Header} from 'semantic-ui-react'

class Head extends Component{
    render(){
        return (
            <React.Fragment>
                <Header className='body' as='h2' style={{backgroundImage: `url(${logo})`,height:'500px' }}> </Header>
            </React.Fragment>
        )
    }
}

export default Head