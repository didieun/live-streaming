import React from 'react';
import {
    ListIcon,
    ListText,
    ListItem,TextStyle, TagBox, TagBoxIn,
} from "./styles/SideStyle";
import {Box, List, Typography} from "@mui/material";
import {ReactComponent as ForYouIcon} from "../../common/images/ForYouIcon.svg";
import {ReactComponent as FollowingIcon} from "../../common/images/FollowingIcon.svg";

function MainSide({open, menu, handleClickMenu, handleClickTag}) {
    const sideMenuList =
        [
            {
                icon: <ForYouIcon/>,
                name: 'For You',
                value: 'foryou'
            },
            {
                icon: <FollowingIcon/>,
                name: 'Favorites',
                value: 'favorites'
            },
        ]
    const tagList =
        [
            {tag: 'tag1'},
            {tag: 'tag2'},
            {tag: 'tagtagtagtgtagt3'},
            {tag: 'tagtagtagtagtagtagtagtagtagtag4'},
            {tag: 'tag5'},
            {tag: 'tag6'},
            {tag: 'tag7'},
            {tag: 'tag8'},
        ]

    return (
        <Box>
            <List>
                {sideMenuList.map((list, i) => (
                    <ListItem
                        key={i}
                        onClick={() => handleClickMenu(list.value)}
                        select={menu === list.value}
                        disableRipple
                    >
                        <ListIcon>{list.icon}</ListIcon>
                        {open ?
                            <ListText primary={list.name} />
                            :
                            null
                        }
                    </ListItem>
                ))}
            </List>

            {open &&
                <>
                    <TextStyle>Trending Tags</TextStyle>
                    <TagBox onClick={() => handleClickTag('tag')}>
                        {tagList.map((tag, i) => (
                        <TagBoxIn key={i} disableRipple>
                            <Typography>#{tag.tag}</Typography>
                        </TagBoxIn>
                        ))}
                    </TagBox>
                </>
            }
        </Box>
    );

}

export default MainSide;