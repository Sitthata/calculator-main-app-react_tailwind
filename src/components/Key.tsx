import React from "react";

type keyProps = {
  label: string;
  action: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const Key = ({ label, action, className, ...props }: keyProps) => {
  return (
    <button
      className={"p-5 text-3xl rounded-lg text-dark-primary-200 bg-dark-secondary-300 border-b-[5px] border-neutral-400 " + className}
      onClick={action}
      {...props}
    >
      {label}
    </button>
  );
};

export default Key;
