import React, { useState, useMemo } from "react";
import Pagination from "../Pagination/Pagination";
import "./mainTable.scss";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
interface Props {
  values: string[][];
  tableRows: string[];
}

let PageSize = 10;

function MainTable(props: Props) {
  const { values, tableRows } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return values.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, values]);
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableRows.length === 0 ? (
              tableRows.map((row) => {
                return <Th>{row}</Th>;
              })
            ) : (
              <>
                <Th>TRANSACTIONID</Th>
                <Th>STATUS</Th>
                <Th>TYPE</Th>
                <Th>CLIENTNAME</Th>
                <Th>AMOUNT</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {values.length !== 0 ? (
            currentTableData.map((val, index) => {
              console.log("i am here");
              return (
                <Tr key={index}>
                  {val.map((value, i) => {
                    return <Td key={i}>{value}</Td>;
                  })}
                </Tr>
              );
            })
          ) : (
            <>
              <Tr>
                <Td>1</Td>
                <Td>Cancelled</Td>
                <Td>Refill</Td>
                <Td>Flynn Whitley</Td>
                <Td>$95.75</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Pending</Td>
                <Td>Withdrawal</Td>
                <Td>Kevin Wiley</Td>
                <Td>$42.05</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>Completed</Td>
                <Td>Withdrawal</Td>
                <Td>Hayden Puckett</Td>
                <Td>$56.88</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>Cancelled</Td>
                <Td>Withdrawal</Td>
                <Td>Ivan Noble</Td>
                <Td>$94.57</Td>
              </Tr>
              <Tr>
                <Td>5</Td>
                <Td>Pending</Td>
                <Td>Withdrawal</Td>
                <Td>Abraham Justice</Td>
                <Td>$84.71</Td>
              </Tr>
            </>
          )}
        </Tbody>
      </Table>
      <Pagination
        className="pagination-bar"
        values={values}
        currentPage={currentPage}
        totalCount={values.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </TableContainer>
  );
}

export default MainTable;
