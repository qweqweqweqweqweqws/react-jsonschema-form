import { FunctionComponent } from "react";
import { withTheme, FormProps } from "@spectrumrjsf1/core";

import Theme5 from "../Theme5";

const MuiForm5:
  | React.ComponentClass<FormProps<any>>
  | FunctionComponent<FormProps<any>> = withTheme(Theme5);

export default MuiForm5;
