import React from "react";
import { FieldProps } from "@spectrumrjsf1/core";

import { useMuiComponent } from "../MuiComponentContext";

const TitleField = ({ title }: FieldProps) => {
  const { Box, Divider, Typography } = useMuiComponent();
  return (
    <Box mb={1} mt={1}>
      <Typography variant="h5">{title}</Typography>
      <Divider />
    </Box>
  );
};

export default TitleField;
