import React, { useState } from "react";
import style from "./style.module.css";

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(searchTerm);
  };

  const setFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <>
      <div >
        <button className={isFocused === true ? style.buttonFoccussed : style.buttonSearch} onClick={() => setFocus()}>
          <div className={style.magnifyingGlassFoccussed} />
        </button>
        <form
          className={`${style.form} ${isFocused === true ? style.formFoccussed : ""}`}
          onSubmit={handleSubmit}
          onBlur={() => setFocus()}
        >
          <button type="submit" className={style.button}>
            <div className={style.magnifyingGlass} />
          </button>
          <input
            className={style.input}
            placeholder={placeholder}
            type="search"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className={style.cross} onClick={() => setFocus()}>X</div>
        </form>
      </div>
    </>
  );
}
