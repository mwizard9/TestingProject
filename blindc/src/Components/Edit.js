import React, { useState } from 'react';

const Crud = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ]);

  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (id, updatedName) => {
    setData(
      data.map((item) => (item.id === id ? { ...item, name: updatedName } : item))
    );
    setEditId(null);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {editId === item.id ? (
            <input
              type="text"
              defaultValue={item.name}
              onBlur={(e) => handleUpdate(item.id, e.target.value)}
            />
          ) : (
            <p onClick={() => handleEdit(item.id)}>{item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Crud;
