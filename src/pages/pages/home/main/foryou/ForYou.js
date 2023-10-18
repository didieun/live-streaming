import React, {Component} from 'react';
import {Container, TagBox, TagListBox, TitleText} from "./styles/ForYouStyle";
import {Typography} from "@mui/material";
import MainStreaming from "./MainStreaming";
import Channels from "./Channels";

class ForYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagList:[
                {tag: 'ALL'},
                {tag: 'tag1'},
                {tag: 'tag2'},
                {tag: 'tag3'},
                {tag: 'tag4'},
                {tag: 'tag5'},
                {tag: 'tag6'},
                {tag: 'tag7'},
                {tag: 'tag8'},
            ],
            tagSelect: 0
        };
    }

    handleClickTag = (value) => {
        this.setState({tagSelect: value});
    };

    render() {
        const { tagList, tagSelect } = this.state;

        return (
            <Container>
                <MainStreaming/>
                <TitleText>Recommended Channels</TitleText>
                <TagListBox>
                    {tagList.map((tag, i) => (
                        <TagBox
                            key={i}
                            onClick={() => this.handleClickTag(i)}
                            select={tagSelect === i}
                            disableRipple
                        >
                            <Typography>
                                {tag.tag === 'ALL' ?
                                    ''
                                    :
                                    '#'
                                }
                                {tag.tag}
                            </Typography>
                        </TagBox>
                    ))}
                </TagListBox>
                <Channels/>
            </Container>
        );
    }
}

export default ForYou;