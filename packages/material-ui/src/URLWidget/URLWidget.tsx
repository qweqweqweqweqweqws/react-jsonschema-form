import React from "react";
import { WidgetProps } from "@spectrumrjsf1/core";

const URLWidget = (props: WidgetProps) => {
  const { registry } = props;
  const { TextWidget } = registry.widgets;
  return <TextWidget type="url" {...props} />;
};

export default URLWidget;
