import React, { useState } from 'react';
import { ButtonEnvironment } from '../components/Button.component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function OpDev({ options }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selected = options.find(option => option.name === event.target.value);
    setSelectedOption(selected.url);
    setTitle(selected.name);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.get(selectedOption)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleAddNewItem = () => {
    axios.post(selectedOption, { title: 'New Item' })
      .then(response => {
        setData([...data, response.data]);
      })
      .catch(error => console.error(error));
  };

  const handleEdit = (index) => {
    const editedItem = prompt('Edit item:', JSON.stringify(data[index], null, 2));
    if (editedItem !== null) {
      const updatedData = [...data];
      updatedData[index] = JSON.parse(editedItem);
      setData(updatedData);
    }
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleRedirect = () => {
    navigate('/'); 
  };

  return (
    <>
      <div>
        <h1 style={{ color: 'white' }}>Welcome OP - DEV!</h1>
      </div>
      <div>
        <button onClick={handleRedirect} style={{ margin: '10px' }}>
        Go to Index
        </button>
      </div>
      <ButtonEnvironment name="Version" />

      <div>
        <label htmlFor="options-select" style={{ color: 'white' }}>Choose an option:</label>
        <select id="options-select" onChange={handleSelectChange} defaultValue="">
          <option value="" disabled>Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleSubmit} disabled={!selectedOption}>Submit</button>
      </div>

      {loading && <p style={{ color: 'white' }}>Cargando...</p>}

      {data.length > 0 && (
        <div>
          <h2>{title}</h2>
          <button onClick={handleAddNewItem}>
            Nuevo <img src="https://cdn.icon-icons.com/icons2/1146/PNG/512/1486485579-add-create-new-math-sign-plus_81190.png" alt="+" style={{ width: '20px', height: '20px' }} />
          </button>
          <table>
            <thead>
              <tr>
                <th>Result</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ maxHeight: '100px', overflowY: 'scroll', whiteSpace: 'pre-wrap' }}>{JSON.stringify(item, null, 2)}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>
                      <img src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png" alt="Edit" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>
                      <img src="https://www.pngmart.com/files/3/Red-Cross-PNG-File.png" alt="Delete" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
