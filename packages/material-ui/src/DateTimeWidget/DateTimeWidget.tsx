import React from "react";
import { utils } from "@spectrumrjsf1/core";
import { WidgetProps } from "@spectrumrjsf1/core";

const { localToUTC, utcToLocal } = utils;

const DateTimeWidget = (props: WidgetProps) => {
  const { registry } = props;
  const { TextWidget } = registry.widgets;
  const value = utcToLocal(props.value);
  const onChange = (value: any) => {
    props.onChange(localToUTC(value));
  };

  return (
    <TextWidget
      type="datetime-local"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      value={value}
      onChange={onChange}
    />
  );
};

export default DateTimeWidget;
