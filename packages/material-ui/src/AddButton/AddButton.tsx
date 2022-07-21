import React from "react";
import { AddButtonProps } from "@spectrumrjsf1/core";

import { useMuiComponent } from "../MuiComponentContext";

const AddButton: React.FC<AddButtonProps> = props => {
  const { AddIcon, Button } = useMuiComponent();

  return (
    <Button {...props} color="secondary">
      <AddIcon /> Add Item
    </Button>
  );
};

export default AddButton;
