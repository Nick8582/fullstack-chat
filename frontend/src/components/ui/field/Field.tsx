import clsx from "clsx";
import React, { forwardRef } from "react";

import { TypeInputProps } from "@/components/ui/field/field.types";

import cl from "./Field.module.scss";

// eslint-disable-next-line react/display-name
const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, style, Icon, className, ...rest }, ref) => {
    return (
      <label className={clsx(cl.field, className)} style={style}>
        {Icon && (
          <div className={cl.icon}>
            <Icon />
          </div>
        )}
        <input ref={ref} {...rest} />
        {error && <div className={cl.error}>{error.message}</div>}
      </label>
    );
  }
);

export default Field;
