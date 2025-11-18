# Hotel Booking System

A dynamic hotel booking application built with React and TypeScript.
Allows users to select destinations, hotels, meal plans, and calculates total costs.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/azadev3/hotel-reservation-system.git
   cd hotel-reservation-system
   npm install
   npm run dev
   ```

## Technology & Architecture

- React.js + TypeScript + Vite
- State Management: Context API
- Styling: SCSS + Mobile responsive design
- i18n for translations

## Architecture Decisions

- **Component-Based Architecture:** The app is divided into reusable components (FormSection, DaysTable, Summary) to improve maintainability and readability.
- **State Management:** Context API is used to manage global state (config and daysData) because the state is not too complex, avoiding unnecessary Redux overhead.
- **Data Mocking:** All data (countries, hotels, meals, board types) is stored in mock files for simplicity. This can later be replaced with API calls.
- **Translation (i18n):** Implemented using react-i18next to support multiple languages and improve scalability.
- **Responsive Design:** SCSS + media queries are used to make the app mobile-friendly and ensure good UX across devices.
- **Pricing Logic:** Meal rules and total price calculation are centralized in helper functions for consistency and easy maintenance.

## Known Limitations & Future Improvements

- **Backend Integration:** Currently uses mock data. Future improvement: connect to real API for dynamic hotel and meal data.
- **User Authentication:** No login or user session management implemented. Could add authentication for personalized bookings.
- **Validation & Error Handling:** Basic validation implemented. Could add more robust form validation and better user feedback.
- **Performance Optimization:** Currently suitable for small datasets. For large datasets, pagination and lazy loading can be optimized.
- **Export/Print Functionality:** Not yet implemented. Future improvement: allow users to export booking summary as PDF.
- **Unit Testing:** No automated tests yet. Could add Jest/React Testing Library tests for components and business logic.
