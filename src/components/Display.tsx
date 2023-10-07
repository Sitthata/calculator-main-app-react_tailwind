
type DisplayProps = {
  display?: string;
  setDisplay: (value: string | undefined) => void;
};

const Display = ({ display = "0" }: DisplayProps) => {
  return (
    <div className="bg-dark-main-bg-300 p-[1rem] py-5 rounded-lg text-right">
      <h1 className="text-4xl text-neutral-100">{display}</h1>
    </div>
  );
};

export default Display;
