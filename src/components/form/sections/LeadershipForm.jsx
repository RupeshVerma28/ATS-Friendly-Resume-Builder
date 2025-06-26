import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const LeadershipForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddItem = () => {
    setResumeData(prevData => ({
      ...prevData,
      leadership: [...prevData.leadership, { id: Date.now(), description: '' }]
    }));
  };

  const handleChange = (e, id) => {
    const { value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      leadership: prevData.leadership.map(item =>
        item.id === id ? { ...item, description: value } : item
      )
    }));
  };

  const handleDeleteItem = id => {
    setResumeData(prevData => ({
      ...prevData,
      leadership: prevData.leadership.filter(item => item.id !== id)
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Leadership</h3>
      {resumeData.leadership.map(item => (
        <div key={item.id} className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="Leadership Description"
            value={item.description}
            onChange={e => handleChange(e, item.id)}
            className="input-field"
          />
          <button
            type="button"
            onClick={() => handleDeleteItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddItem}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={20} />
        <span>Add Leadership</span>
      </button>
    </div>
  );
};

export default LeadershipForm; 