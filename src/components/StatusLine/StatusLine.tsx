import React from "react";
import { Select } from "@chakra-ui/react";

interface Props {}

function StatusLine(props: Props) {
  const {} = props;

  return (
    <Select placeholder="Status" m={2}>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </Select>
  );
}

export default StatusLine;
