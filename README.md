# Stockbit Movie App

A modern React + Redux Toolkit movie discovery app using the [OMDb API](http://www.omdbapi.com/).  
Built with **React 19**, **TypeScript**, **TailwindCSS**, and tested with **Vitest**.

---

## Preview

<img width="1862" height="855" alt="image" src="https://github.com/user-attachments/assets/91541bf4-f148-43ee-a6d3-34505144035b" />


---

## Features

- Search for movies with live suggestions
- View detailed movie information
- Infinite scroll / pagination for search results
- Global state management with Redux Toolkit
- Reusable components and custom hooks
- Fully typed with TypeScript
- Unit tests with Vitest and coverage reports

---

## Tech Stack

- **Frontend:** React 19, TypeScript, TailwindCSS
- **State Management:** Redux Toolkit
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **Testing:** Vitest
- **Build Tool:** Vite

---

## Project Structure

```
src/
├─ api/               # API calls (mockable)
├─ components/        # Reusable UI components
├─ features/
│  ├─ movies/
│  │  ├─ components/  # Feature specific components
│  │  ├─ hooks/       # Custom hooks
│  │  ├─ slices/      # Redux slices
│  │  └─ types/       # TypeScript interfaces
├─ hooks/             # App wide custom hooks
├─ services/          # Axios instance and global services
└─ App.tsx            # Main app entry
```

---

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Configure environment variables**

Create a `.env` file at the root:

```env
VITE_OMDB_BASE_URL=https://www.omdbapi.com
VITE_OMDB_API_KEY=YOUR_API_KEY
```

3. **Run development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Run tests**

```bash
npm run test
npm run test:coverage
```

---

## Testing & Quality



- All **global components**, **Redux slices**, and **custom hooks** are fully unit-tested
- **Mocking** for external APIs ensures deterministic tests
- Coverage reports generated via `vitest --coverage`
- Designed for maintainability and scalability

### Test Coverage

This application achieves a coverage rate of ~96%, ensuring that nearly all execution component interactions are well tested.

| File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **All files** | **96.52** | **94.36** | **96.36** | **96.32** | |
| 📂 **components** | **100** | **100** | **100** | **100** | |
| ↳ Button.tsx | 100 | 100 | 100 | 100 | |
| ↳ Card.tsx | 100 | 100 | 100 | 100 | |
| ↳ CloseButton.tsx | 100 | 100 | 100 | 100 | |
| ↳ DetailItem.tsx | 100 | 100 | 100 | 100 | |
| ↳ ErrorMessage.tsx | 100 | 100 | 100 | 100 | |
| ↳ Image.tsx | 100 | 100 | 100 | 100 | |
| ↳ Label.tsx | 100 | 100 | 100 | 100 | |
| ↳ Loading.tsx | 100 | 100 | 100 | 100 | |
| ↳ Modal.tsx | 100 | 100 | 100 | 100 | |
| ↳ NotFound.tsx | 100 | 100 | 100 | 100 | |
| ↳ TextField.tsx | 100 | 100 | 100 | 100 | |

---

## Conventions & Best Practices

- **TypeScript-first approach**: all slices, API responses, and components are fully typed
- **Hooks & reusable components** for cleaner abstraction
- **Redux Toolkit** for standardized state management patterns
- **TailwindCSS** with utility first design and `tailwind-merge` for class management

---

## Notes

- API requests are handled via `axiosInstance` with default params and base URL configured
- Custom hooks like `useMovieSearch` and `useMovieDetail` encapsulate state logic and side effects
- `SearchInput`, `Loading`, and `NotFound` are global reusable components

---

