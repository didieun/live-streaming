import React, {Component} from 'react';
import {Container, LoginButton, Message} from "./styles/CommonEmptyStyle";

class CommonEmpty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { message, onClick } = this.props;

        return (
            <Container>
                <Message>
                    {message}
                </Message>
                <LoginButton onClick={onClick} disableRipple>
                    Log In
                </LoginButton>
            </Container>
        );
    }
}

export default CommonEmpty;