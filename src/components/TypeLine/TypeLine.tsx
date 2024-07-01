import React from "react";
import { Select } from "@chakra-ui/react";

interface Props {}

function TypeLine(props: Props) {
  const {} = props;

  return (
    <Select placeholder="Type" m={2}>
      <option value="Pending">Refill</option>
      <option value="Withdrawal">Withdrawal</option>
    </Select>
  );
}

export default TypeLine;
