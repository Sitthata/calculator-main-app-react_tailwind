import { useState } from "react";
import CalculatorHeader from "./CalculatorHeader";
import Display from "./Display";
import KeyPads from "./KeyPads";

type CalculatorState = {
  currentValue: string;
  previousValue: string;
  operator: string | null;
};

const CalculatorContainer = () => {
  const initialState: CalculatorState = {
    currentValue: "0",
    previousValue: "0",
    operator: null,
  };
  const [calculatorState, setCalculatorState] =
    useState<CalculatorState>(initialState);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  // TODO:
  const handleNumber = (value: string) => {
    if (calculatorState.currentValue === "0") {
      setCalculatorState({
        ...calculatorState,
        currentValue: value,
      });
    } else {
      setCalculatorState({
        ...calculatorState,
        currentValue: calculatorState.currentValue + value,
      });
    }
  };
  // TODO:
  const handleOperator = (value: string) => {
    setCalculatorState({
      ...calculatorState,
      previousValue: calculatorState.currentValue,
      currentValue: "0",
      operator: value,
    });
  };

  // TODO:
  const handleEqual = () => {
    if (calculatorState.operator && calculatorState.previousValue) {
      let result = 0;
      switch (calculatorState.operator) {
        case "+":
          result =
            parseFloat(calculatorState.previousValue) +
            parseFloat(calculatorState.currentValue);
          break;
        case "-":
          result =
            parseFloat(calculatorState.previousValue) -
            parseFloat(calculatorState.currentValue);
          break;
        case "x":
          result =
            parseFloat(calculatorState.previousValue) *
            parseFloat(calculatorState.currentValue);
          break;
        case "/":
          if (calculatorState.currentValue === "0") return;
          result =
            parseFloat(calculatorState.previousValue) /
            parseFloat(calculatorState.currentValue);
          break;
        default:
          break;
      }
      setCalculatorState({
        currentValue: result.toString(),
        previousValue: "",
        operator: null,
      });
      setIsCalculated(true);
    }
  };

  const handleClick = (value: string) => {
    if (isCalculated) {
      if (!isNaN(parseInt(value))) {
        setCalculatorState({ ...initialState, currentValue: value });
        setIsCalculated(false);
        return;
      } else if (value !== "=") {
        setCalculatorState({ ...initialState, currentValue: "0" });
        setIsCalculated(false);
      }
    }

    if (!isNaN(parseInt(value))) {
      handleNumber(value);
    } else {
      switch (value) {
        // Reset
        case "C":
          setCalculatorState(initialState);
          break;
        // Delete
        case "DEL":
          setCalculatorState({
            ...calculatorState,
            currentValue: calculatorState.currentValue.slice(0, -1) || "0",
          });
          break;
        // Operator
        case "+":
        case "-":
        case "x":
        case "/":
          handleOperator(value);
          break;
        case "=":
          handleEqual();
      }
    }
  };
  return (
    <div className="flex flex-col items-center mt-[2rem]">
      <div className="md:min-w-[40rem] p-4">
        <CalculatorHeader />
        <Display display={calculatorState} />
        <KeyPads onClick={handleClick} />
      </div>
    </div>
  );
};

export default CalculatorContainer;
