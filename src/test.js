import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const App = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const options1 = ['power issues', 'monitor issues', 'device issues'];
  const options2 = {
    'power issues': ['power option 1', 'power option 2', 'power option 3'],
    'monitor issues': ['monitor resolution', 'monitor framesize', 'monitor color'],
    'device issues': ['device option 1', 'device option 2', 'device option 3'],
  };
  const options3 = {
    'monitor resolution': ['resolution option 1', 'resolution option 2', 'resolution option 3'],
    'monitor framesize': ['framesize option 1', 'framesize option 2', 'framesize option 3'],
    'monitor color': ['color option 1', 'color option 2', 'color option 3'],
    // Add options for other issues as needed
  };

  const handleOption1Change = (option) => {
    setSelectedOption1(option);
    setSelectedOption2(null);
    setSelectedOption3(null);
    setIsSubmitEnabled(false);
  };

  const handleOption2Change = (option) => {
    setSelectedOption2(option);
    setSelectedOption3(null);
    setIsSubmitEnabled(false);
  };

  const handleOption3Change = (option) => {
    setSelectedOption3(option);
    setIsSubmitEnabled(true);
  };

  const handleSubmit = () => {
    // Perform action based on selected options
    // Display specific instructions
    console.log(`Selected Options: ${selectedOption1} > ${selectedOption2} > ${selectedOption3}`);
  };

  return (
    <div>
      <DropdownMenu options={options1} onChange={handleOption1Change} selectedOption={selectedOption1} />
      {selectedOption1 && options2[selectedOption1] && (
        <DropdownMenu options={options2[selectedOption1]} onChange={handleOption2Change} selectedOption={selectedOption2} />
      )}
      {selectedOption2 && options3[selectedOption2] && (
        <DropdownMenu options={options3[selectedOption2]} onChange={handleOption3Change} selectedOption={selectedOption3} />
      )}
      {selectedOption3 && (
        <button onClick={handleSubmit} disabled={!isSubmitEnabled}>
          Submit
        </button>
      )}
    </div>
  );
};

export default App;
