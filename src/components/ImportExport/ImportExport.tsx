import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

function ImportExport(props: Props) {
  const { changeHandler } = props;

  return (
    <FormControl display={"flex"} justifyContent={"flex-end"} m={2}>
      <FormLabel border="1px" borderColor="gray.200" p={2}>
        Import
      </FormLabel>
      <Input
        display="none"
        accept=".csv"
        type="file"
        onChange={changeHandler}
      />
      <FormLabel border="1px" borderColor="gray.200" p={2}>
        Export
      </FormLabel>
      <Input display="none" type="file" />
    </FormControl>
  );
}

export default ImportExport;
