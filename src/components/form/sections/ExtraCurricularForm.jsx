import React, { useContext } from 'react';
import { ResumeContext } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'react-feather';

const ExtraCurricularForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleAddItem = () => {
    setResumeData(prevData => ({
      ...prevData,
      extraCurricular: [...prevData.extraCurricular, { id: Date.now(), description: '' }]
    }));
  };

  const handleChange = (e, id) => {
    const { value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      extraCurricular: prevData.extraCurricular.map(item =>
        item.id === id ? { ...item, description: value } : item
      )
    }));
  };

  const handleDeleteItem = id => {
    setResumeData(prevData => ({
      ...prevData,
      extraCurricular: prevData.extraCurricular.filter(item => item.id !== id)
    }));
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Extra-Curricular Activities</h3>
      {resumeData.extraCurricular.map(item => (
        <div key={item.id} className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="Activity Description"
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
        <span>Add Activity</span>
      </button>
    </div>
  );
};

export default ExtraCurricularForm; 