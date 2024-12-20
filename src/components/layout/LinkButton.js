import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ to, text, variant = "primary", className = "" }) {
    const baseStyle = "px-6 py-3 font-bold rounded-md transition duration-300 ease-in-out";

    const variants = {
        primary: "bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:border-white border-2 border-orange-500",
        secondary: "bg-transparent text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
        // Espaço para futuras variantes
    };

    return (
        <Link className={`${baseStyle} ${variants[variant]} ${className}`} to={to}>
            {text}
        </Link>
    );
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,  // Permite a passagem de classes adicionais
};

export default LinkButton;
