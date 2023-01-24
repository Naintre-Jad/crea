import React from "react";
const variantClasses = {
  h1: "font-thin md:text-[48px] sm:text-[48px] text-[70px]",
  h2: "sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-normal sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "font-light sm:text-[26px] md:text-[28px] text-[30px]",
  h6: "text-[20px]",
  body1: "font-medium text-[18px]",
  body2: "text-[16px]",
  body3: "font-normal text-[14px]",
  body4: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
