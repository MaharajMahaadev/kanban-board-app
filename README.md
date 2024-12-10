# Kanban Board App

The **Kanban Board App** is a basic task management application built with React.js and CSS, featuring Material-UI icons for a polished and user-friendly interface. This app provides a visual way to organize tasks or work items in the form of cards. It allows grouping and sorting of cards based on different criteria such as users, priority, and status.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

---

## Overview

The **Kanban Board App** simplifies task management by allowing users to visualize tasks grouped by criteria such as **assigned user**, **priority**, or **status**. Cards representing tasks provide detailed information, such as task priority, current status, task description, card number, and the user to whom the task is assigned. 

The app supports dynamic grouping and sorting, ensuring that tasks can be easily organized and accessed as per the user’s requirements.

---

## Features

1. **Dynamic Grouping**:
   - Group cards by:
     - **User**: Cards are displayed under the users they are assigned to.
     - **Priority**: Cards are categorized by their priority levels.
     - **Status**: Cards are grouped by the current status of the task (e.g., "In Progress," "Completed").

2. **Sorting Options**:
   - **Priority Sorting**: Sort cards within each group by priority in **high-to-low** order.
   - **Alphabetical Sorting**: Sort cards by their titles in ascending order (A-Z).

3. **Card Details**:
   - Each card displays:
     - Task Priority
     - Current Status
     - Task Information
     - Card Number
     - Assigned User

4. **Responsive UI**:
   - The app is built with React.js and styled with CSS for a modern and responsive user interface.
   - **Material-UI icons** provide intuitive and quick visual cues.

---

## Tech Stack

### **Frontend**
- **React.js**: Used for building the user interface.
- **CSS**: For custom styling and responsive design.
- **Material-UI**: Icons and components for a clean and professional look.

### **Data Management**
- Data is fetched from a static `data.js` file, which contains an array of card objects with task details.

---

## Installation

### Prerequisites
- Node.js installed on your system

### Steps
1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Viewing Cards**:
   - Open the app to view cards grouped under the selected grouping criteria.

2. **Grouping Options**:
   - Use the **dropdown menu** to switch between grouping options:
     - **User**
     - **Priority**
     - **Status**

3. **Sorting**:
   - After selecting a grouping, sort the cards using the **sorting dropdown**:
     - **By Priority**: High-to-low or low-to-high.
     - **By Title**: A-Z alphabetical sorting.

4. **Card Details**:
   - Each card will display:
     - Priority (e.g., High, Medium, Low)
     - Status (e.g., In Progress, Completed)
     - Information (task description)
     - Card Number
     - Assigned User