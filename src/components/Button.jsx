import PropTypes from "prop-types";

function Button({ Title, variant, leftIcon, rightIcon, ...other }) {
  return (
    <div className="buttoncotainer">
      {" "}
      <p className="buttonTitle">{Title} </p>
      <button {...other} className={variant} type="button">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
            height: "40px",
          }}
        >
          {leftIcon}
          <p> Default </p>
          {rightIcon}
        </div>
      </button>
    </div>
  );
}

export default Button;
Button.propTypes = {
  variant: PropTypes.string,
  Title: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.nodes,
};
