import React from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
// 공통 css
import {EmptyTableBox, EmptySubText} from "../../main/styles/MainStyle";

function TableNoSearch() {

    return (
        <TableBody>
            <TableRow>
                <TableCell colSpan={10}>
                    <EmptyTableBox>
                        <EmptySubText>
                            There are no matching search results.
                        </EmptySubText>
                    </EmptyTableBox>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

export default TableNoSearch;