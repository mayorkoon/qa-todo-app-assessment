import React, { useState, useEffect } from 'react';

function TodoPage({ logout }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');
const [toast, setToast] = useState('');
const [loading, setLoading] = useState(false);


  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    setItems(data.data);
  };

  const addItem = async () => {
    if (!text.trim()) {
      setError('Please enter a task.');
      return;
    }
    const res = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newItem = await res.json();
    
    setItems([...items, newItem.data]);
    setText('');
    showToast('Item added successfully!');

  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, { method: 'DELETE' });
    setItems(items.filter(i => i.id !== id));
    showToast('Item removed successfully!');

  };

  const saveEdit = async (id) => {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: editText }),
    });
    const updated = await res.json();

    setItems(items.map(i => (i.id === id ? updated.data : i)));
    setEditingId(null);
    showToast('Item updated!');
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleLogOut = () => {
    setLoading(true)
    setTimeout(() => logout(), 3000);

  }

  return (
<div className="todo-container">
  <button className="logout-btn" onClick={handleLogOut} disabled={loading}>
    {loading ? <div className="spinner"></div> : 'Logout'}
  </button>

  <div className="todo-card">
    <h2>Todo App</h2>

    <div className="input-group">
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          setError('');
        }}
        placeholder="Add new item"
      />
      <button className="add-btn" onClick={addItem}>Add</button>
    </div>
    {error && <p className="error-text">{error}</p>}

    <ul className="todo-list">
      {items?.map((i, index) => (
        <li key={`${i.id + index}`}>
          <span className="text">
            {editingId === i.id ? (
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
            ) : (
              i.text
            )}
          </span>
          <div className="btn-group">
            {editingId === i.id ? (
              <button className="save-btn" onClick={() => saveEdit(i.id)}>Save</button>
            ) : (
              <button className="edit-btn" onClick={() => {
                setEditingId(i.id);
                setEditText(i.text);
              }}>Edit</button>
            )}
            <button className="delete-btn" onClick={() => deleteItem(i.id)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {toast && <div className="toast">{toast}</div>}
</div>



  );
}

export default TodoPage;
