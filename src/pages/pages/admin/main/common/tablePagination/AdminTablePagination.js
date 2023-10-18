import React from 'react';
import {
    TablePaginationBox, SpanStyle
} from "./styles/AdminTablePaginationStyle";
import {ReactComponent as ArrowDownIcon} from "../../../../common/images/ArrowDownIcon.svg";

function AdminTablePagination(props) {
    const {count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, rowsPerPageOptions} = props;

    return (
       <div>
           <TablePaginationBox
               rowsPerPageOptions={rowsPerPageOptions ? rowsPerPageOptions : [10, 15, 25]}
               component="div"
               count={count}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               SelectProps={{
                   IconComponent: ArrowDownIcon,
                   MenuProps: {
                       PaperProps: {
                           sx: {
                               '&.MuiPaper-root':{
                                   boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
                                   border: '1px solid #bbb',
                                   boxSizing:'border-box',
                                   '& *': {
                                       fontFamily: 'Inter !important',
                                       letterSpacing: '-0.2px'
                                   },
                                   '& ul': {
                                       padding: '6px 0',
                                       '& li': {
                                           fontSize: '0.875rem'
                                       }
                                   }
                               },
                           }
                       }
                   }
               }}
               // labelRowsPerPage={'페이지당 행 수 :'}
               labelDisplayedRows={({ count, page }) => {
                   return <SpanStyle><span>{page + 1}</span> / {Math.ceil(count / rowsPerPage)}</SpanStyle>
               }}
           />
       </div>
    );
}

export default AdminTablePagination;