# Travel Booking System - Frontend

React 19 + Vite application with role-based routing, authentication, and data fetching.

## Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool
- **React Router v7** - Routing
- **Zustand** - State Management
- **React Query** - Data Fetching
- **Axios** - HTTP Client

## Project Structure

```
src/
├── api/                    # API clients
│   ├── axiosClient.js      # Axios instance with interceptors
│   ├── auth.api.js         # Authentication API
│   ├── tour.api.js         # Tours API
│   └── news.api.js         # News API
├── hooks/                  # Custom React hooks
│   ├── useAuth.js          # Authentication hooks
│   ├── useTours.js         # Tours data hooks
│   └── useNews.js          # News data hooks
├── store/                  # Zustand stores
│   ├── auth.store.js       # Auth state (persisted)
│   ├── ui.store.js         # UI state
│   ├── filter.store.js     # Filter state
│   └── booking.store.js    # Booking state
├── routes/                 # Routing configuration
│   ├── router.jsx          # Router setup
│   └── ProtectedRoute.jsx  # Auth guard component
├── pages/                  # Page components
│   ├── frontend/           # User-facing pages
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── TourListPage.jsx
│   │   ├── TourDetailPage.jsx
│   │   └── ProfilePage.jsx
│   └── admin/              # Admin pages
│       ├── DashboardPage.jsx
│       ├── AdminTourListPage.jsx
│       ├── AdminAddTourPage.jsx
│       ├── AdminEditTourPage.jsx
│       └── AdminTourDetailPage.jsx
├── App.jsx                 # Root component
└── main.jsx               # Entry point
```

## Features

### Authentication & Authorization

- Login/Register with JWT tokens
- Protected routes with role-based access
- Persistent auth state (localStorage)
- Auto-redirect on unauthorized access

### State Management

- **Auth Store**: User authentication state
- **UI Store**: Global UI state (sidebar, notifications)
- **Filter Store**: Search and filter state
- **Booking Store**: Tour booking state

### Data Fetching

- React Query for server state management
- Automatic caching and refetching
- Optimistic updates
- Error handling

### Routing

- Public routes: Home, Login, Register, Tours
- Protected routes: Profile (authenticated users)
- Admin routes: Dashboard, Tour Management (admin only)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## API Integration

The app expects the following API endpoints:

### Auth

- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Get user profile

### Tours

- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get tour by ID
- `POST /api/tours` - Create tour (admin)
- `PUT /api/tours/:id` - Update tour (admin)
- `DELETE /api/tours/:id` - Delete tour (admin)

### News

- `GET /api/news` - Get all news
- `GET /api/news/:id` - Get news by ID
- `POST /api/news` - Create news (admin)
- `PUT /api/news/:id` - Update news (admin)
- `DELETE /api/news/:id` - Delete news (admin)

## Authentication Flow

1. User logs in via `/login`
2. Backend returns user object and JWT token
3. Token stored in localStorage and Zustand store
4. Token automatically attached to API requests via axios interceptor
5. On 401 response, user is logged out and redirected to login

## Role-Based Access

### User Roles

- `user` - Regular user (can browse and book tours)
- `admin` - Administrator (full access to admin panel)

### Protected Routes

- Any authenticated user can access `/profile`
- Only `admin` role can access `/admin/*` routes

## Development Notes

- React Query DevTools are enabled in development mode
- All API calls go through the centralized axios client
- Authentication token is auto-injected into request headers
- Zustand stores use middleware for persistence and dev tools
- ESLint configured for React 19 and modern JavaScript

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Future Enhancements

- [ ] Add pagination for tour lists
- [ ] Implement search and filters
- [ ] Add booking functionality
- [ ] Integrate payment gateway
- [ ] Add reviews and ratings
- [ ] Implement real-time notifications
- [ ] Add image upload functionality
- [ ] Implement multi-language support
