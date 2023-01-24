import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder10: "rounded-radius10",
};
const variants = {
  FillGray5004c: "bg-gray_500_4c text-white_A700",
  OutlineBlack9002a: "bg-white_A700 shadow-bs text-black_900_89",
  FillDeeppurpleA20033: "bg-deep_purple_A200_33 text-black_900_b2",
  OutlineBlack900: "border border-black_900 border-solid text-black_900",
};
const sizes = {
  sm: "pr-[15px] py-[15px]",
  md: "p-[16px]",
  lg: "p-[19px]",
  xl: "pl-[19px] py-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder5", "RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillGray5004c",
    "OutlineBlack9002a",
    "FillDeeppurpleA20033",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder5",
  variant: "FillGray5004c",
  size: "lg",
};

export { Button };
