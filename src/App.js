import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import './App.css';
import logo from 'E:\\Augmedix_knowledge_app\\augmedix\\src\\logo.png';
import image from './image.jpg';
import image4 from './image4.png';
import image3 from './image3.png';

const App = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(() => {
    const storedValue = localStorage.getItem('isFormSubmitted');
    return storedValue ? storedValue === 'true' : false;
  });


  const options1 = ['power issues', 'monitor issues', 'device issues', 'Audio issues', 
  'Internet issue','Workstation Slow Issue', 'Account Locked out Issue']
  const options2 = {
    'power issues': ['power option 1', 'power option 2', 'power option 3'],
    'monitor issues': ['monitor resolution', 'monitor framesize', 'monitor color', 'monitor not starting'],
    'device issues': ['device option 1', 'device option 2', 'device option 3'],
  };
  const options3 = {
    'monitor resolution': ['First check the resolution of the monitor from the workstation.', 'resolution option 2', 'resolution option 3'],
    'monitor framesize': ['framesize option 1', 'framesize option 2', 'framesize option 3'],
    'monitor color': ['Reset the monitor using monitor options', 'color option 2', 'color option 3'],
    'monitor not starting': ['Check the cable connection at both ends of the cable',
    'Check the VGA or HDMI or Displayport cable connection', 'Check the power adapter of the monitor',
    'Turn on and off using the monitor power button.']
    // Add options for other issues as needed
  };

  const [answer, setAnswer] = useState({
    text: '',
    image: '',
    list: [],
  });


  useEffect(() => {
    localStorage.setItem('isFormSubmitted', isFormSubmitted.toString());
  }, [isFormSubmitted]);

  useEffect(() => {
    // Initialize local storage if not present
    if (localStorage.getItem('isFormSubmitted') === null) {
      localStorage.setItem('isFormSubmitted', 'false');
    }
  }, []);

  const handleOption1Change = (option) => {
    setSelectedOption1(option);
    setIsSubmitEnabled(false);
  };

  const handleOption2Change = (option) => {
    setSelectedOption2(option);
    setIsSubmitEnabled(false);
  };

  const handleOption3Change = (option) => {
    setSelectedOption3(option);
    setIsSubmitEnabled(true);
  };

  const handleSubmit = () => {
    // Perform action based on selected options
    console.log(`Selected Options: ${selectedOption1} > ${selectedOption2} > ${selectedOption3}`);

    // Set different answers based on selected options in dropdown 3
    let answerObject = {
      text: '',
      image: '',
      list: [],
    };

    switch (selectedOption3) {
      case 'First check the resolution of the monitor from the workstation.':
        answerObject.text = 'Do the followings:';
        answerObject.image = image4;
        answerObject.list = ['Click Right mouse on the desktop', 'Check display resolution  if it is in the recommended resolution.'];
        break;
      case 'resolution option 2':
        answerObject.text = 'Answer Two for resolution option 2';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'resolution option 3':
        answerObject.text = 'Answer Three for resolution option 3';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'framesize option 1':
        answerObject.text = 'Answer Three for framesize  option 1';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'framesize option 2':
        answerObject.text = 'Answer Three for framesize  option 2';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'framesize option 3':
        answerObject.text = 'Answer Three for framesize  option 3';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'Reset the monitor using monitor options':
        answerObject.text = 'Go to the below settings';
        answerObject.image = image
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'color option 2':
        answerObject.text = 'Answer Three for color  option 2';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      case 'color option 3':
        answerObject.text = 'Answer Three for color  option 3';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
      // Add cases for other options as needed

      default:
        answerObject.text = 'Default answer for other options';
        answerObject.image = 'E:\\Augmedix_knowledge_app\\augmedix\\src\\image solution 1.jpg';
        answerObject.list = ['Go to monitor settings', 'Go to other settings', 'select "factory reset" '];
        break;
    }


    setAnswer(answerObject);
    setIsFormSubmitted(true);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <div className="dropdown">
          <DropdownMenu options={options1} 
          onChange={handleOption1Change} 
          selectedOption={selectedOption1} 
          heading="Category"/>
        </div>
        <div className="dropdown">
          <DropdownMenu options={options2[selectedOption1] || []} 
          onChange={handleOption2Change} 
          selectedOption={selectedOption2} 
          heading="Sub-category"/>
        </div>
        <div className="dropdown">
          <DropdownMenu options={options3[selectedOption2] || []} 
          onChange={handleOption3Change} 
          selectedOption={selectedOption3} 
          heading="Issue"/>
        </div>
        <div className="button">
          <button onClick={handleSubmit} disabled={!isSubmitEnabled}>
            Submit
          </button>
          </div>
        {isFormSubmitted && (
          <div className="textbox">
            <p>{answer.text}</p>
            {answer.image && 
            <img src={answer.image} 
            alt="Answer Image" 
            style={{ maxWidth: '100%'}} />}
            {answer.list.length > 0 && (
              <ul>
                {answer.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default App;
