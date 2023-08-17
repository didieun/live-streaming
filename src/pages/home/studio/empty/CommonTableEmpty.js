import React, {Component} from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
import {
    ActionBox,
    EmptyButtonStyle, EmptyButtonStyle2,
    EmptySubText,
    EmptyTableBox,
    EmptyTitleText
} from "../../main/styles/MainStyle";

class CommonTableEmpty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { image, title, message, action, actionText1, actionText2, onClick, onClick2 } = this.props;

        return (
            <TableBody>
                <TableRow>
                    <TableCell colSpan={10}>
                        <EmptyTableBox>
                            {image}
                            <EmptyTitleText>
                                {title}
                            </EmptyTitleText>
                            <EmptySubText>
                                {message}
                            </EmptySubText>
                            {action &&
                                <ActionBox>
                                    <EmptyButtonStyle onClick={onClick} disableRipple>
                                        {actionText1}
                                    </EmptyButtonStyle>
                                    {actionText2 &&
                                        <EmptyButtonStyle2 onClick={onClick} disableRipple>
                                            {actionText2}
                                        </EmptyButtonStyle2>
                                    }
                                </ActionBox>
                            }
                        </EmptyTableBox>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }
}

export default CommonTableEmpty;