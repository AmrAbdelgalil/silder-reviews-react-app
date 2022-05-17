import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [autoSilder, setAutoSilder] = useState(true);
  const [value, setValue] = useState(0);

  const { id, image, name, title, quote } = people[value];

  function nextReview() {
    setAutoSilder(false);
    setValue((prevValue) => {
      if (prevValue === people.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  }

  function prevReview() {
    setAutoSilder(false);
    setValue((prevValue) => {
      if (prevValue === 0) {
        return people.length - 1;
      }
      return prevValue - 1;
    });
  }

  function autoReview() {
    setValue((prevValue) => {
      if (prevValue === people.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  }

  useEffect(() => {
    const auto = setTimeout(autoReview, 2000);
    if (autoSilder === false) {
      clearTimeout(auto);
    }
  });

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article>
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <h4 className="title">{title}</h4>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" onClick={prevReview}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextReview}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
