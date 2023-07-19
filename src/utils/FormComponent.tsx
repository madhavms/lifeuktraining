import { LinkNewsLettterContentItem } from "../assets/LinksNewsLetterContent";
import React from "react";

const FormComponent = (item: LinkNewsLettterContentItem) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="text-[#0F5276] text-lg md:text-xl lg:text-2xl font-bold mb-6">{item.heading}</div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {item.fields?.map((field, index) => (
          <input
            className="mb-4 h-12 w-full md:w-auto rounded border border-[#0F5276] pl-2"
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <div className="flex justify-center items-center">
        <button className="bg-[#0F5276] text-white rounded w-52 md:w-[24ch] h-10 mb-16" type="submit">{item.buttonText}</button>
        </div>
      </form>
    </>
  );  
};

export default FormComponent;