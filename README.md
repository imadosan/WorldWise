# 🌎 WorldWise

<div align='center'>

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![REACT Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![VITE Badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Netlify Badge](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

![screenshot #1](public/screenshots/screenshot1.png)
![screenshot #2](public/screenshots/screenshot2.png)

## Description

A React application designed to help you monitor your travels and create a visual log of your adventures

## Features

### Interactive World Map

- WorldWise displays a world map with markers for all the cities that the user has added to their list. 🌍

### City List

- WorldWise displays a list of all the cities that the user has added. The list includes 🏙️
  - City name
  - Country flag
  - Date of visit

### City Form

- When the user clicks on a city on the map or in the list, WorldWise displays a form with information about the city, including 📝
  - City name
  - Country flag
  - Date of visit
  - Notes about the trip

### Add City

- The user can add a city to their list by filling out the city form and clicking the ➕ button. A marker will then appear on the map for the new city

### Remove City

- The user can remove a city from their list by clicking the ❌ button next to the city in the list. The marker for the city will then be removed from the map

### Current User Geolocation

- The user can click the "USE YOUR POSITION" button to navigate the map to their current geolocation📍

### Login and Logout Functionality

- WorldWise allows users to log in and out of their accounts 🔐

### Local Storage

- The list of cities is persisted in local storage, ensuring the user's list is preserved even if they close the browser or navigate to a different page 💾

### Tab Component

- WorldWise has a tab component that displays a list of cities and corresponding countries that the user added. This allows users to quickly switch between different views of their list 📑

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- Leaflet library
- Vite

## Installation

To run this project locally, you can follow these steps:

1. Clone the repository:
   ```
   $ https://github.com/imadosan/WorldWise.git
   ```
2. Open the project folder in your code editor of choice.
3. Install dependencies and packages
   ```
   $ npm install
   ```
4. Run the application
   ```
   $ npm run dev
   ```
