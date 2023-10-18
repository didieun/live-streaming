import React from 'react';

// 공통 css
import {TextStyle, TitleText} from "../../main/styles/MainStyle";

function CommonTitle({title, subTitle}) {

    return (
        <div>
            <TitleText>{title}</TitleText>
            <TextStyle>{subTitle}</TextStyle>
        </div>
    );
}

export default CommonTitle;