# CarHaven

CarHaven is a user-friendly car buying and selling platform designed specifically for college students. It simplifies the used car search by filtering listings based on student budgets and offers a unique **price score model** to help users assess deal quality. Additionally, it features an FAQ guide tailored to the car buying process in Cuyahoga County, making the experience accessible even for first-time buyers.

---

## Architecture

CarHaven follows a typical three-tier architecture with separate frontend, backend, and database layers:

![Architecture Diagram](design.png)

- **Frontend:** Built using React and TypeScript.
- **Backend:** Developed in Java Spring Boot, serving REST APIs.
- **Database:** PostgreSQL accessed via DrizzleORM.

---

## Getting Started / Installation

To run CarHaven locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-repo>/carHaven.git
   cd carHaven
   ```

2. **Frontend (client):**
   ```bash
   cd AutoHaven
   npm install
   npm run dev
   ```

3. **Backend (Java Spring Boot):**
   - Open the `server` folder in an IDE (e.g., IntelliJ).
   - Ensure PostgreSQL is running and the connection is configured in `application.properties`.
   - Run the main `Application.java` class.


---

## Usage / Examples

CarHaven is designed for non-technical users. Once registered, users can:

- **Search cars** using filters (Price, Make, Model, Mileage, etc.)
- **Like** listings to save them to their profile
- **Sell** a car by filling out a form
- **View car details** and contact the seller directly
- **Read a financing & buying guide** specific to Cuyahoga County

> Example: A student logs in, filters by "Toyota under $10,000", likes a few listings, views detailed info, and messages the seller.

---

## Folder Structure Overview

```plaintext
carHaven/
│
├── client/               # Frontend React app
│   └── src/
│       ├── pages/        # Main route pages (home, listing, car-detail)
│       ├── components/   # UI components, grouped by feature
│       │   ├── car/      # Car-related components (sell, view)
│       │   ├── layout/   # Header, footer
│       │   ├── messages/ # Messaging system
│       │   └── ui/       # Like button, dropdowns, etc.
│       ├── lib/          # Helper functions (e.g., price score)
│       └── hooks/        # Custom hooks (e.g., toasts)
│
├── server/               # Java Spring Boot backend
│   ├── controller/       # REST endpoints
│   ├── service/          # Business logic
│   ├── repository/       # DB access
│   └── model/            # Entity models
│
├── tests/                # (Included under components/ui/) Unit tests for buttons, labels, car cards
```

---

## Tech Stack / Dependencies

**Frontend:**
- React + TypeScript
- Radix UI (for design components)
- Shadcn/UI
- Tailwind CSS

**Backend:**
- Java Spring Boot
- PostgreSQL
- DrizzleORM

**Other Tools:**
- Replit (for testing/demo)
- React Query
- Vite

---

## 👥 Contribution

| Member      | Role             | Contributions |
|-------------|------------------|----------------|
| Deep        | Frontend Lead    | Built UI components, core page functionality |
| Danny       | DB & Debugging   | Setup PostgreSQL, ORM integration, debugging |
| Attiksh     | Backend & PM     | Built backend logic, managed timeline, handled writeups and coordination |

We worked cross-functionally as needed — roles evolved organically as the project progressed.

---

## Development Retrospective

- **What went well:**
  - Clear weekly progress due to scheduled demos.
  - Simple, focused feature set helped reduce scope creep.

- **Mistakes & Improvements:**
  - Early challenges integrating frontend, backend, and DB could’ve been resolved faster with shared mock APIs or better interface planning.
  - Heavy documentation slowed development at times; maintaining developer journals may have helped balance both.

---

## License

*This project is currently not licensed. Placeholder: [License Placeholder](mailto:license@example.com)*