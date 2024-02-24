import PropTypes from "prop-types";
import cx from "classnames";

export const IconButton = ({
  className,
  icon,
  onClick,
  disabled,
  ...props
}) => (
  <button
    onClick={onClick}
    className={cx("flex items-center justify-center", className)}
    {...props}
  >
    {icon}
  </button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  className: "",
  icon: null,
  onClick: () => {},
  disabled: false,
};
