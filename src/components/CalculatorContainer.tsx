import { useState } from "react";
import CalculatorHeader from "./CalculatorHeader";
import Display from "./Display";
import KeyPads from "./KeyPads";

const CalculatorContainer = () => {
  const [display, setDisplay] = useState<string | undefined>(undefined);
  const handleClick = (value: string) => {
    if (value === "DEL") {
      if (!display) return;
      if (display.length === 1) return setDisplay(undefined);
      setDisplay(display.slice(0, -1));
      return;
    }
    if (!display) return setDisplay(value);
    setDisplay(display + value);
  };
  return (
    <div className="flex flex-col items-center mt-[2rem] outline outline-1">
      <div className="min-w-[30rem]">
        <CalculatorHeader />
        <Display display={display} setDisplay={setDisplay}/>
        <KeyPads onClick={handleClick} />
      </div>
    </div>
  );
};

export default CalculatorContainer;
