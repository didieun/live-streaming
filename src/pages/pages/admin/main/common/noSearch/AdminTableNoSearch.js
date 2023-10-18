import React from 'react';
import {TableBody, TableCell, TableRow} from "@mui/material";
// 공통 css
import {EmptyTableBox, EmptySubText} from "../../styles/AdminMainStyle";

function AdminTableNoSearch() {

    return (
        <TableBody>
            <TableRow>
                <TableCell colSpan={10}>
                    <EmptyTableBox>
                        <EmptySubText>
                            No results were found.
                        </EmptySubText>
                    </EmptyTableBox>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}

export default AdminTableNoSearch;