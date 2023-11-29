# Trip Feedback System

## Overview

The Trip Feedback System is designed to facilitate the submission and review of feedback for trips. It caters to two distinct user roles: Traveler and Transport Manager. Travelers can submit feedback for specific trips, providing responses to customizable questions and optional comments. Transport Managers have the authority to review feedback from individual travelers, access overall trip feedback, obtain aggregated feedback for all trips, and evaluate the overall feedback for a particular driver.

## Features

### For Travelers:

- **Feedback Submission:**
  - Travelers can submit feedback for a specific trip.
  - Feedback includes responses to customizable questions and optional comments.
  - Each trip is uniquely identified by a trip ID.
  - Travelers provide feedback specifically on the driver of the trip.

### For Transport Managers:

- **Feedback Review:**
  - View all feedback provided by individual travelers.
  - Access overall feedback for a specific trip.
  - Obtain aggregated feedback for all trips.
  - Evaluate overall feedback for a particular driver.

### Authentication:

- **Traveler Authentication:**
  - Travelers need to sign up using the `/api/auth/signup` endpoint.
  - After signing up, travelers can log in using the `/api/auth/signin` endpoint.
  - Travelers can sign out using the `/api/auth/signout` endpoint.

- **Transport Manager Authentication:**
  - Transport Managers need to sign up using the `/api/auth/signup` endpoint.
  - After signing up, transport managers can log in using the `/api/auth/signin` endpoint.
  - Transport Managers can sign out using the `/api/auth/signout` endpoint.

## Routes

### Traveler Routes:

#### 1. Submit Feedback for a Trip

- **Endpoint:** `/api/postfeedback`
- **Method:** `POST`
- **Data Parameters:**
  - `tripId` (String): Unique identifier for the trip.
  - `driverName` (String): Name of the driver for the trip.
  - `rating` (Number): Rating provided by the traveler for the trip.
  - `driverRating` (Number): Rating provided by the traveler specifically for the driver.
  - `customQuestionResponses` (Object): Responses to customizable feedback questions.
  - `optionalComments` (String): Optional comments provided by the traveler.

### Transport Manager Routes:

#### 1. View All Feedback for Individual Travelers

- **Endpoint:** `/api/getfeedback/all`
- **Method:** `GET`
- **Returns:** Array of feedback objects, each containing information about a specific traveler's feedback.

#### 2. View Overall Feedback for a Specific Trip

- **Endpoint:** `/api/getfeedback/:tripid`
- **Method:** `GET`
- **Path Parameter:**
  - `tripid` (String): Unique identifier for the trip.
- **Returns:** Array of feedback objects, each associated with the specified trip ID.

#### 3. Obtain Aggregated Feedback for All Trips

- **Endpoint:** `/api/aggregate`
- **Method:** `GET`
- **Returns:** Array of aggregated feedback data, including average ratings and total trips for each driver.

#### 4. Evaluate Overall Feedback for a Particular Driver

- **Endpoint:** `/api/feedback/:driver`
- **Method:** `GET`
- **Path Parameter:**
  - `driver` (String): Name of the driver.
- **Returns:** Array of feedback objects, each associated with the specified driver.

### Authentication Routes:

#### 1. Traveler Sign Up

- **Endpoint:** `/api/auth/signup`
- **Method:** `POST`
- **Data Parameters:**
  - `email` (String): Email address of the traveler.
  - `password` (String): Password for the traveler.
  - `roles` (Array): Array containing the role "traveler."

#### 2. Traveler Sign In

- **Endpoint:** `/api/auth/signin`
- **Method:** `POST`
- **Data Parameters:**
  - `email` (String): Email address of the traveler.
  - `password` (String): Password for the traveler.

#### 3. Traveler Sign Out

- **Endpoint:** `/api/auth/signout`
- **Method:** `POST`

#### 4. Transport Manager Sign Up

- **Endpoint:** `/api/auth/signup`
- **Method:** `POST`
- **Data Parameters:**
  - `email` (String): Email address of the transport manager.
  - `password` (String): Password for the transport manager.
  - `roles` (Array): Array containing the role "transportManager."

#### 5. Transport Manager Sign In

- **Endpoint:** `/api/auth/signin`
- **Method:** `POST`
- **Data Parameters:**
  - `email` (String): Email address of the transport manager.
  - `password` (String): Password for the transport manager.

#### 6. Transport Manager Sign Out

- **Endpoint:** `/api/auth/signout`
- **Method:** `POST`

## Constraints

### User Authentication:

- Travelers and Transport Managers operate with distinct credentials to ensure secure access to their respective functionalities.

### Trip ID Uniqueness:

- Each trip is assigned a unique trip ID, facilitating accurate tracking and feedback association.

## Getting Started

To get started with the Trip Feedback System, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/trip-feedback-system.git
  ```
## Change to the project directory:

```bash
cd trip-feedback-system
```

### Install dependencies
```bash
npm install
```

### Configuration
##Set up the database connection:
1 .Open the config/db.config.js file.
2. Configure the database connection settings as needed.

## Configure authentication settings:
1. Open the config/auth.config.js file.
2. Adjust authentication settings as required.

### Running the Application
## Start the application:
```bash
npm start
```
### Access the application:
The application will be accessible at http://localhost:8080.

### Contributing
We welcome contributions from the community. If you'd like to contribute to the Trip Feedback System, please follow our contribution guidelines.

### License
This project is licensed under the MIT License.
