import React from "react";
import PropTypes from "prop-types";

export default function AdminButton({
    label,
    loadingLabel,
    onClick,
    type,
    loading,
}) {
    return (
        <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
            type={type}
            onClick={onClick}
            disabled={loading}
          >
            {loading ? loadingLabel : label}
          </button>
    );
}

AdminButton.propTypes = {
    label: PropTypes.string.isRequired,
    loadingLabel: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    loading: PropTypes.bool,
};