import React from "react";
import { WidgetProps } from "@spectrumrjsf1/core";
import { utils } from "@spectrumrjsf1/core";

import { useMuiComponent } from "../MuiComponentContext";

const { schemaRequiresTrueValue } = utils;

const CheckboxWidget = (props: WidgetProps) => {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const { Checkbox, FormControlLabel } = useMuiComponent();
  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue(schema);

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);

  return (
    <FormControlLabel
      control={
        <Checkbox
          id={id}
          checked={typeof value === "undefined" ? false : Boolean(value)}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
        />
      }
      label={label || ""}
    />
  );
};

export default CheckboxWidget;
