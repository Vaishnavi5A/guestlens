# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Backend — How to Run Locally

### Prerequisites
- Python 3.8+
- pip

### Setup & Run

1. Navigate to backend folder:
```bash
   cd backend
```

2. Create and activate virtual environment:
```bash
   python -m venv venv
   venv\Scripts\activate
```

3. Install dependencies:
```bash
   pip install -r requirements.txt
```

4. Create `.env` file (copy from example):
```bash
   copy .env.example .env
```

5. Run the server:
```bash
   uvicorn main:app --reload --port 8000
```

6. API is now running at:
   - Base URL: http://localhost:8000
   - Swagger Docs: http://localhost:8000/docs
   - Reviews API: http://localhost:8000/api/reviews

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | Get all reviews |
| GET | /api/reviews/{id} | Get single review |
| POST | /api/reviews | Create review |
| PUT | /api/reviews/{id} | Update review |
| DELETE | /api/reviews/{id} | Delete review |
| GET | /api/reviews/search/query | Search reviews |
