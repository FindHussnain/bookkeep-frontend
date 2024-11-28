# Book Keeping Application

This is a full-stack application for book keeping with a **frontend** (React) and **backend** (Node.js + Express).

## Repositories

- **Frontend**: [bookkeep-frontend](https://github.com/FindHussnain/bookkeep-frontend)
- **Backend**: [bookkeep-backend](https://github.com/FindHussnain/bookkeep-backend)

## Setup Instructions

1. Clone the repositories:

    ```
    git clone https://github.com/FindHussnain/bookkeep-backend.git
    git clone https://github.com/FindHussnain/bookkeep-frontend.git
    ```

2. Install dependencies:

    - Backend:

      ```
      cd bookkeep-backend
      npm install
      ```

    - Frontend:

      ```
      cd bookkeep-frontend
      npm install
      ```

3. Set environment variables:

    - Backend: Create a `.env` file with `MONGO_URI`, `PORT`, and `JWT_SECRET`.
    - Frontend: Create a `.env` file with `REACT_APP_API_BASE_URL`.

4. Start the servers:

    - Backend:

      ```
      cd bookkeep-backend
      npm start
      ```

    - Frontend:

      ```
      cd bookkeep-frontend
      npm start
      ```

