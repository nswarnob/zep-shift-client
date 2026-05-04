# 🚚 Zep Shift Client

A modern, full-featured parcel delivery and logistics management platform built with React and Vite. Zep Shift provides seamless parcel tracking, booking, and delivery management across Bangladesh.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.2-blue?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-blue?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-12.6.0-orange?logo=firebase)

## ✨ Features

### 📦 Core Features

- **Parcel Tracking**: Real-time tracking with interactive maps
- **Send Parcel**: Easy-to-use interface for booking parcels
- **Rider Portal**: Dedicated portal for delivery riders
- **User Dashboard**: Personal parcel management and history
- **Coverage Map**: View service coverage across districts
- **24/7 Support**: Always available customer support

### 🔐 Authentication & Security

- Firebase Authentication (Email/Password & Social Login)
- Protected Routes (Private dashboard and rider portals)
- Secure token-based API requests

### 💼 Service Offerings

- **Express Delivery**: 4-6 hours in Dhaka
- **Standard Delivery**: 24-72 hours nationwide
- **Fulfillment Solutions**: Inventory management
- **Cash on Delivery**: 100% secure COD options
- **Corporate Logistics**: B2B solutions
- **Return & Reverse Logistics**: Easy returns

### 🎨 User Experience

- Smooth page transitions and animations
- Responsive design (mobile, tablet, desktop)
- Interactive carousel and image galleries
- Collapsible FAQs with smooth animations
- Customer testimonials and reviews
- Service statistics and company timeline

---

## 🛠 Tech Stack

### Frontend Framework

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Fast build tool and dev server
- **React Router 7.9.6** - Client-side routing

### Styling

- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **DaisyUI 5.5.5** - Component library
- **React Icons 5.5.0** - Icon library

### State Management & Data

- **TanStack React Query 5.90.11** - Server state management
- **Axios 1.13.2** - HTTP client

### Forms & Validation

- **React Hook Form 7.66.1** - Form management

### Backend Services

- **Firebase 12.6.0** - Authentication & backend services

### UI Components & Effects

- **Swiper 12.0.3** - Carousel/slider
- **React Responsive Carousel 3.2.23** - Image carousel
- **React Toastify 11.0.5** - Toast notifications
- **SweetAlert2 11.26.3** - Modal alerts
- **React Leaflet 5.0.0-rc.2** - Maps integration

### Development Tools

- **ESLint 9.39.1** - Code quality
- **Babel** - JavaScript transpilation (via Vite)

---

## 📁 Project Structure

```
zep-shift-client/
├── src/
│   ├── Components/          # Reusable components
│   │   └── Logo/
│   ├── Context/             # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── Firebase/            # Firebase configuration
│   │   └── firebase.init.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.jsx      # Authentication hook
│   │   └── useAxiosSecure.jsx # Secure API calls
│   ├── layouts/             # Layout components
│   │   ├── AuthLayout.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── Rootlayout.jsx
│   ├── Pages/               # Page components
│   │   ├── About/           # Company information
│   │   ├── Auth/            # Login & Register
│   │   ├── Coverage/        # Service coverage map
│   │   ├── Dashboard/       # User dashboard
│   │   ├── Demo/            # Feature demo
│   │   ├── Home/            # Landing page
│   │   ├── Rider/           # Rider portal
│   │   ├── sendParcel/      # Parcel booking
│   │   ├── Services/        # Service offerings
│   │   └── Shared/          # Navbar, Footer
│   ├── routes/              # Router configuration
│   │   ├── router.jsx
│   │   └── PrivateRoutes.jsx
│   ├── assets/              # Static assets
│   ├── index.css            # Global styles & animations
│   └── main.jsx             # Entry point
├── public/                  # Static files
│   └── Service-center.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nswarnob/zep-shift-client.git
   cd zep-shift-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_API_BASE_URL=your_backend_url
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Run ESLint to check code quality
npm run lint

# Preview production build locally
npm run preview
```

---

## 🔐 Authentication

Zep Shift uses Firebase Authentication with multiple login options:

- **Email/Password**: Traditional login with email verification
- **Social Login**: Google, Facebook, and other social providers
- **Private Routes**: Protected pages require authentication

### Authentication Context

The `AuthProvider` wraps the entire application and provides:

- `user` - Current authenticated user
- `login()` - Login with credentials
- `register()` - Create new account
- `logout()` - Sign out

---

## 🗺️ Routes

| Route                  | Type    | Description                               |
| ---------------------- | ------- | ----------------------------------------- |
| `/`                    | Public  | Landing page with hero, features, reviews |
| `/about`               | Public  | Company info, mission, team, timeline     |
| `/services`            | Public  | Service offerings and pricing plans       |
| `/demo`                | Public  | Feature demo and platform overview        |
| `/map`                 | Public  | Service coverage map                      |
| `/send-parcel`         | Public  | Parcel booking form                       |
| `/login`               | Auth    | User login page                           |
| `/register`            | Auth    | User registration page                    |
| `/dashboard/my-parcel` | Private | User parcel history & management          |
| `/rider`               | Private | Rider portal & delivery management        |

---

## 🎨 Animations & UX

The application includes smooth animations:

- **Page Transitions**: Fade-in + slide-up effect on page load
- **Button Hover**: Lift effect with shadow enhancement
- **Card Hover**: Scale and shadow transitions
- **FAQ Collapse**: Smooth slide-down animation
- **Input Focus**: Soft focus effects

---

## 🔄 API Integration

The application communicates with the backend via:

- **Axios**: HTTP requests with interceptors
- **React Query**: Server state management and caching
- **useAxiosSecure Hook**: Automatic token injection for secured endpoints

---

## 📱 Responsive Design

Built mobile-first with breakpoints for:

- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

---

## 🐛 Code Quality

- **ESLint**: Configured for React best practices
- **Tailwind CSS**: Utility-first CSS for consistency
- **React Hooks**: Functional components throughout

---

## 📚 Documentation

For additional information, see:

- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Feature implementation details
- [DESIGN_REFINEMENT.md](./DESIGN_REFINEMENT.md) - Design decisions
- [VISUAL_OVERVIEW.md](./VISUAL_OVERVIEW.md) - Visual component guide
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Quick reference guide

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 📞 Support

For support, email nswarnob@gmail.com or open an issue on GitHub.

---

## 🙌 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS and DaisyUI
- Powered by Firebase
- Icons from React Icons

---

**Last Updated**: May 2026  
**Version**: 0.0.0
