import React, { useEffect, useState } from "react";
import './App.css';
import menu from "./assets/bg.jpg";
import Button from "./Button/Button";
import Display from "./Display/Display";

function App() {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  return (
    <div className="App">
      <div className="top">
        <div className="time">
          {time
            .getHours()
            .toString()
            .padStart(2, "0")}
          :
          {time
            .getMinutes()
            .toString()
            .padStart(2, "0")}
        </div>
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
      </div>
      {/* <p contentEditable="false">0</p> */}
      <Display value={value} />
      <div className="buttons">
        <Button
            onButtonClick={handleButtonPress}
            content="AC"
            type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="×" type="operator" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="−" type="operator" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />
        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" type="operator" />
      </div>
      <div className="bottom" />
    </div>
  );
}

export default App;
