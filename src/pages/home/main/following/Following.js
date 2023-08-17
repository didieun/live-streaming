import React, {Component} from 'react';
import {Container} from "./styles/FollowingStyle";
import CommonEmpty from "../../empty/CommonEmpty";

class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { login, handleClickLogIn } = this.props;

        return (
            <Container>

                {login === false &&
                    <CommonEmpty
                        message={'즐겨찾는 채널을 팔로잉해보세요.'}
                        onClick={() => handleClickLogIn('login')}
                    />
                }
            </Container>
        );
    }
}

export default Following;