import React, { useState } from "react";
import './App.css';

// The main App component
function App() {
  // State to store the word entered by the user
  const [word, setWord] = useState("");
  
  // State to store the definition fetched from the API
  const [definition, setDefinition] = useState(null);
  
  // State to store any error message in case the API request fails
  const [error, setError] = useState(null);

  // Function to fetch the definition of the word from the Merriam-Webster API
  const fetchDefinition = async () => {
    const apiKey = process.env.REACT_APP_API_KEY; 
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${apiKey}`;
  
    try {
      // Fetch data from the API
      const response = await fetch(url);
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // If the API returns a definition, set the definition state, otherwise show an error
      if (data.length > 0 && data[0].shortdef) {
        setDefinition(data[0].shortdef[0]);
      } else {
        setError("No definition found.");
      }
    } catch (err) {
      setError("Error fetching the definition.");
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setError(null);     
    fetchDefinition();  
  };

  return (
    <div className="App">
      <div className="container">
      <h1>Dictionary</h1>
      <p>Come on, make my day.</p>
      <p>Give me your word.</p>
        
        {/* Form for user to input a word and trigger the API call */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)} // Update the word state as user types
            placeholder="Type a word"
          />
          <button type="submit">Search</button>
        </form>

        {/* Display error message if one exists */}
        {error && <p>{error}</p>}
        
        {/* Display the fetched definition if it exists */}
        {definition && <p>Definition: {definition}</p>}
      </div>
    </div>
  );
}

export default App;