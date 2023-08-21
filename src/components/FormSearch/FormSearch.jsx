import React from 'react';

const FormSearch = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find movie..."
      />
      <button>Find</button>
    </form>
  );
};

export default FormSearch;
