import React from "react";
import './display.css';

const Display = ({ value }) => {
    let output = "";
    let decimal = "";
    let isNeg = false;
    if (value === "0") {
        output = value;
    } else {
        if (value.includes(".")) {
            output = value.substring(0, value.indexOf("."));
            decimal = value.substring(value.indexOf("."));
            if (decimal.length > 8) {
                decimal = parseFloat(value).toPrecision(10 - output.length + 1).toString().substring(value.indexOf("."));
            }
        } else {
            output = value;
        }
        if (parseFloat(value) < 0) {
            isNeg = true;
            output = output.substring(1);
        }
    
        if (isNeg) {
            output = "-" + parseFloat(output).toLocaleString() + decimal;
        } else {
            output = parseFloat(output).toLocaleString() + decimal;
        }
    }
    
    return (
        <p contentEditable="false">
            {output}
        </p>
    );
}

export default Display;