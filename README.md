
# Dictionary App

This project is a simple dictionary application built with React that allows users to search for the definition of a word using the Merriam-Webster API.

## Features

- Users can enter any word in the input field to retrieve its definition.
- If a definition is found, it is displayed on the page.
- If no definition is found, an appropriate error message is displayed.
- The app is styled to be user-friendly and provides a simple interface.

## Technologies Used

- React: Front-end JavaScript library for building the user interface.
- Merriam-Webster API: Provides word definitions.

## Setup and Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/leon-hub101/dictionary-app.git
   ```
2. Navigate to the project directory:

   ```sh
   cd dictionary-app
   ```
3. Install the dependencies:

   ```sh
   npm install
   ```
4. Create a `.env` file in the root of the project and add your Merriam-Webster API key:

   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```

   You can obtain an API key by signing up at [https://www.dictionaryapi.com/](https://www.dictionaryapi.com/).
5. Start the development server:

   ```sh
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Enter a word in the input field and click the **Search** button.
- The app will display the definition of the word if found.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
