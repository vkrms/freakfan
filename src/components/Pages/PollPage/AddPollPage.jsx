import React, { useState } from 'react';

const AddPollForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [imageURL, setImageURL] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would perform API integration to save the poll data
    // This is a simplified example without API integration
    console.log('Question:', question);
    console.log('Options:', options);
    console.log('Image URL:', imageURL);

    // Reset the form fields after submission
    setQuestion('');
    setOptions(['', '']);
    setImageURL('');
  };

  return (
    <div className='add-poll-wapper'>
      <h2>Add Poll</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Question:</span>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        <label className='options-wapper'>
          <span>Options:</span>
          <div className='options-wapper-inner'>
            {options.map((option, index) => (
                <input key={index}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                />
            ))}
          </div>
        </label>
        <label>
          <span>Image URL:</span>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
        <button className='btn gradient-btn gradientcolor' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPollForm;
