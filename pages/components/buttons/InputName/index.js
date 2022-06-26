import React from "react";

export default function InputName(props) {
  const { title } = props;
  return (
    <div>
      <input
        type="text"
        placeholder={title}
        className="
      py-3
      px-3
      w-full
      rounded-lg
      bg-input
      text-sm
       lg:max-w-2xl
          
      "
      />
    </div>
  );
}
