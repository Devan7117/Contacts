## React Contact List

This project is a simple React application that displays a contact list and allows searching for contacts by name and phone number. It utilizes React components and state management to dynamically filter and display the contacts based on user input.

## Demo

https://contacts-rocnod7i0-devan7117.vercel.app

### Components

The code consists of the following components:

1. `ContactList`: This is the main component that renders the contact list and handles the search functionality. It maintains the state for the displayed contacts and updates it based on the search query. The contact list is rendered using the `Contact` component.

2. `Contact`: This component represents an individual contact item and displays the contact's name, phone number, and image.

### Libraries and Plugins Used

The project does not utilize any external libraries or plugins beyond the core React framework. It leverages React for building the user interface and managing component-based architecture. The following dependencies are required to run the application:

- React: A JavaScript library for building user interfaces.
- ReactDOM: A package for rendering React components in the browser.

### Instructions

To run the application, follow these steps:

1. Install Node.js and npm (Node Package Manager) if they are not already installed on your system.

2. Clone the project repository and navigate to the project directory.

3. Install the project dependencies by running the following command:

   ```bash
   npm install
   ```

4. Start the development server by running the following command:

   ```bash
   npm start
   ```

   This will launch the application in your default browser at `http://localhost:3000`.

5. Enter a search query in the search field to filter the contacts based on the name or phone number.

### Conclusion

This React Contact List project demonstrates how to build a simple contact list application using React components and state management. It provides a basic structure that can be expanded upon to include additional features or functionalities as needed.
