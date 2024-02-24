import cx from "classnames";
import PropTypes from "prop-types";

export const Typography = ({
  className,
  children,
  tag,
  align,
  bold,
  semiBold,
  brand,
  size,
  ...props
}) => {
  const Component = tag;
  const wrapperClassName = cx({
    "font-bold": bold,
    "font-semibold": semiBold || tag === "strong",
    "font-sans tracking-wide": brand,
    "text-left": align === "left",
    "text-center": align === "center",
    "text-right": align === "right",
    "text-xs": size === "xs",
    "text-sm": size === "sm" || tag === "small",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
    "text-2xl": size === "2xl",
    "text-3xl": size === "3xl",
  });

  return (
    <Component className={cx(wrapperClassName, className)} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "small",
    "em",
    "strong",
  ]),
  align: PropTypes.oneOf(["left", "right", "center"]),
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  brand: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
};

Typography.defaultProps = {
  className: "",
  children: null,
  tag: "p",
  align: "left",
  bold: null,
  semiBold: null,
  brand: null,
  size: null,
};
