import "./App.css";
import { SetStateAction, useState } from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import MainTable from "./components/MainTable/MainTable";
import SearchLine from "./components/SearchLine/SearchLine";
import StatusLine from "./components/StatusLine/StatusLine";
import TypeLine from "./components/TypeLine/TypeLine";
import FileName from "./components/FileName/FileName";
import ImportExport from "./components/ImportExport/ImportExport";
import { ChangeEvent } from "react";
import Papa, { ParseResult } from "papaparse";

function App() {
  const [tableRows, setTableRows] = useState<string[]>([""]);
  const [parsedData, setParsedData] = useState<unknown[]>([]);
  const [values, setValues] = useState<string[][]>([]);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files !== null) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          const rowsArray: string[][] = [];
          const valuesArray: string[][] = [];
          results.data.map((value: any) => {
            rowsArray.push(Object.keys(value));
            valuesArray.push(Object.values(value));
          });
          setParsedData(results.data);
          setTableRows(rowsArray[0]);
          setValues(valuesArray);
        },
      });
    }
  };
  return (
    <Grid templateColumns="repeat(5,1fr)" gap={6}>
      <GridItem rowSpan={1} colSpan={5}>
        <SearchLine />
      </GridItem>
      <GridItem rowStart={2}>
        <FileName />
      </GridItem>
      <GridItem rowStart={2} colStart={2}>
        <StatusLine />
      </GridItem>
      <GridItem rowStart={2} colStart={3}>
        <TypeLine />
      </GridItem>
      <GridItem rowStart={2} colStart={5}>
        <ImportExport changeHandler={changeHandler} />
      </GridItem>
      <GridItem rowStart={5} colStart={2} colEnd={6}>
        <MainTable tableRows={tableRows} values={values} />
      </GridItem>
    </Grid>
  );
}

export default App;
