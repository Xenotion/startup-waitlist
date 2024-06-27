# Waitlist

## Overview

This is a full stack application designed to manage a waiting list for a future startup project. Users can join the waiting list by entering their email addresses. The front end is built with React, and the back end is powered by Express.

## Features

- **User Interface:** A responsive UI built with React.
- **Backend:** An Express server handling API requests and data storage.
- **Email Capture:** Users can join the waiting list by submitting their email addresses.
- **Data Fetching:** The application fetches and displays the waiting list data.

## Tech Stack

- **Front End:** React, TailwindCSS, Axios
- **Back End:** Express, Mongoose
- **Database:** MongoDB
- **Deployment:** Vercel
  
## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/waitinglist.git
   cd waitinglist
   ```

2. **Install dependencies for both front end and back end:**

   ```sh
   # Navigate to the front end directory
   cd waitinglist_frontend
   npm install

   # Navigate to the back end directory
   cd ../waitinglist_backend
   npm install
   ```

3. **Start the application:**

   ```sh
   # In the backend directory
   npm start

   # In the frontend directory (in a new terminal window)
   npm run dev
   ```

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Enter your email address to join the waiting list.
3. Check the backend console for the received email addresses.
