import React from "react";
import Image from "next/image";
const Searchbar = ({ place }) => {
  return (
    <div className="rounded-[24px] border-2 font-normal text-xl w-full p-2 flex justify-end mt-8">
      <input
        className="text-right outline-none"
        type="text"
        placeholder={place.placeholder}
      />
      <Image className="pl-2" src="/mag.svg" width="25" height="25" alt="mag" />
    </div>
  );
};

export default Searchbar;
