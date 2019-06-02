import React from 'react';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <input
    className="NoteFilter"
    value={value}
    onChange={e => onChange(e.target.value)}
    type="text"
    placeholder="Search..."
  />
);

export default NoteFilter;