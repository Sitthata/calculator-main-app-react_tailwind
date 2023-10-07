type DisplayProps = {
  display: {
    currentValue: string;
    previousValue: string;
    operator: string | null;
  };
};

const Display = ({ display }: DisplayProps) => {
  return (
    <div className="bg-dark-main-bg-300 p-[1rem] py-5 rounded-lg text-right">
      <h1 className="text-4xl text-neutral-100">{display.currentValue}</h1>
      <p className="text-xl text-neutral-100">
        {display.previousValue === "0" ? " " : display.previousValue}
      </p>
    </div>
  );
};

export default Display;
