import React, { FC } from "react";

import "./_button.scss"

interface ButtonProps {
  buttonLabel?: string;
  onClick?: () => void;
  buttonType?: string;
  buttonSize?: string;
  variant?: string;
  icon?: string;
  iconAlignment?: string;
  altText?: string;
  extraClass?: string;
  disabled?: boolean;
  submitType?: string;
  formId?: string | undefined;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    buttonLabel = "",
    onClick,
    buttonType = "primary",
    buttonSize = "md",
    variant = "button",
    icon = "",
    iconAlignment = "right",
    altText = "",
    extraClass = "",
    disabled = false,
    submitType = "button",
    formId = undefined,
  } = props;

  return (
    <button
      className={`s-button s-button--${buttonType} s-button--${buttonSize} s-button--${variant} ${extraClass} ${
        disabled ? "s-button--disabled" : null
      } s-button--icon-${iconAlignment}`}
      // type={formId ? "submit" : submitType}
      form={formId}
      // onClick={!disabled ? onClick : null}
    >
      <span className={`s-button__text--${buttonSize}`}>{buttonLabel}</span>
      {icon && (
        <img
          className={`s-button__icon--${buttonSize}`}
          src={icon}
          alt={altText}
        />
      )}
    </button>
  );
};

export default Button;