import React from "react";
import { WidgetProps, utils } from "@spectrumrjsf1/core";
import { useMuiComponent } from "../MuiComponentContext";

const { getSubmitButtonOptions } = utils;
const SubmitButton: React.FC<WidgetProps> = props => {
  const { Box, Button } = useMuiComponent();
  const {
    submitText,
    norender,
    props: submitButtonProps,
  } = getSubmitButtonOptions(props.uiSchema);
  if (norender) return null;
  return (
    <Box marginTop={3}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        {...submitButtonProps}>
        {submitText}
      </Button>
    </Box>
  );
};

export default SubmitButton;
