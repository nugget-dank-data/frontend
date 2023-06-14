import React, { useState } from 'react';

const Competitivesets = () => {
  const [compsets, setCompsets] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [compsetName, setCompsetName] = useState('');

  const handleAddCompset = () => {
    const newCompset = { name: compsetName };
    setCompsets([...compsets, newCompset]);
    setCompsetName('');
  };

  const handleEditCompset = (index) => {
    setEditingIndex(index);
  };

  const handleUpdateCompset = (index, updatedCompset) => {
    const updatedCompsets = [...compsets];
    updatedCompsets[index] = updatedCompset;
    setCompsets(updatedCompsets);
    setEditingIndex(-1);
  };

  const handleDeleteCompset = (index) => {
    const updatedCompsets = compsets.filter((_, i) => i !== index);
    setCompsets(updatedCompsets);
  };

  const renderCompsets = () => {
    return compsets.map((compset, index) => {
      if (editingIndex === index) {
        return (
          <div key={index} className="compset-item">
            <input
              type="text"
              value={compsetName}
              onChange={(e) => setCompsetName(e.target.value)}
            />
            <button onClick={() => handleUpdateCompset(index, { name: compsetName })}>
              Update
            </button>
            <button onClick={() => setEditingIndex(-1)}>Cancel</button>
          </div>
        );
      } else {
        return (
          <div key={index} className="compset-item">
            <p>{compset.name}</p>
            <button onClick={() => handleEditCompset(index)}>Edit</button>
            <button onClick={() => handleDeleteCompset(index)}>Delete</button>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <div className="crud">
        {renderCompsets()}
        <div className="compset-item">
          <input
            type="text"
            value={compsetName}
            onChange={(e) => setCompsetName(e.target.value)}
          />
          <button onClick={handleAddCompset}>Add New Compset</button>
        </div>
      </div>
    </div>
  );
};

export default Competitivesets;
