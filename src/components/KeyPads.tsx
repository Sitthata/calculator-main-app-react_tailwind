import Key from "./Key";

type KeyPadProps = {
  onClick: (value: string) => void;
};

const KeyPads = ({ onClick }: KeyPadProps) => {
  const keyPads = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];
  return (
    <div className="grid grid-cols-4 gap-4 p-5 mt-3 rounded-lg bg-dark-main-bg-200">
      {keyPads.map((key, index) => {
        return <Key key={index} label={key} action={() => onClick(key)} />;
      })}
      <Key
        label="Reset"
        action={() => onClick("C")}
        className="col-span-2 bg-dark-primary-100 !text-neutral-100 !border-dark-primary-200"
      />
      <Key
        label="="
        action={() => onClick("=")}
        className="col-span-2 bg-red-500 !text-neutral-100 !border-dark-secondary-200"
      />
    </div>
  );
};

export default KeyPads;
