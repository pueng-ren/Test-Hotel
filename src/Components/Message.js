import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleError = (props) => {
    return (
        <Message negative>
            <Message.Header>{props.Header}</Message.Header>
            <p>{props.Body}</p>
        </Message>
    )
}

export default MessageExampleError
