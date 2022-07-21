import React from "react";
import { WidgetProps } from "@spectrumrjsf1/core";

const EmailWidget = (props: WidgetProps) => {
  const { registry } = props;
  const { TextWidget } = registry.widgets;
  return <TextWidget type="email" {...props} />;
};

export default EmailWidget;
