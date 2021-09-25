import React from 'react';
import { Link } from 'react-router-dom';

const LinkToTopButton = () => {
  const onClick = () => {
    localStorage.clear();
  };
  return (
    <>
      <button className="button is-warning" onClick={onClick}>
        <Link to="/">TopPageに戻る</Link>
      </button>
    </>
  );
};

export default LinkToTopButton;
