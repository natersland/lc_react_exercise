import CardLayout from "@/common/components/card_layout";
import { CodeBlockSnippet } from "@/common/utils/code_block";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const StateUpdate = () => {
  const [person, setPerson] = useState({ name: "", age: 8, address: "" });

  const updateData = () => {
    setPerson({ name: "Giant", age: 10, address: "Tokyo" });
  };

  return (
    <CardLayout
      children={
        <>
          <h1>State Update</h1>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Address: {person.address}</p>
          <Button className="mt-4" onClick={updateData}>
            Update Data
          </Button>
        </>
      }
      header_text="State Update"
      source_code_url="" // TODO add source code url
      code_snippet={CodeBlockSnippet.state_update}
    ></CardLayout>
  );
};

export default StateUpdate;
