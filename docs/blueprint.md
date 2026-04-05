# **App Name**: DevTube Academy

## Core Features:

- User Authentication: Secure user registration, login, and logout using email and password. Passwords are hashed with bcrypt, and sessions are managed via cookies.
- Whitelisted Access Control: Protect the course area, granting access only to 'isAuthorized' users. Unauthorized users are redirected to an access denied page.
- Course Content Display: Render lesson details including title, description, and an embedded YouTube video player for each lesson.
- Lesson Navigation: Display a sidebar with a list of lessons ordered by 'orderIndex'. Allow users to select lessons and automatically navigate to the next lesson.
- Database Management with Prisma: Utilize SQLite with Prisma ORM for storing user data (id, email, password, isAuthorized, createdAt) and lesson details (id, title, description, youtubeVideoId, orderIndex). Includes a seed script for example data.
- API & Route Handlers: Implement Next.js Route Handlers for user registration (/api/register), login (/api/login), logout (/api/logout), and fetching lesson data (/api/lessons).

## Style Guidelines:

- Primary color: A rich, deep indigo (#804DCC) for interactive elements and highlights, evoking professionalism and focus against dark backgrounds.
- Accent color: A soft, analogous blue (#B3D9FF) for secondary information, subtle distinctions, or hover states, ensuring harmonious visual balance.
- Backgrounds: Use Tailwind's 'bg-zinc-900' (#18181B) for the sidebar and 'bg-zinc-800' (#27272A) for the main content area, with white text for clear readability, creating a modern 'Netflix-style' dark aesthetic.
- Headline and Body text font: 'Inter' (sans-serif) for its modern, clean, and objective aesthetic, ensuring excellent legibility for both titles and longer descriptions in a learning context.
- Protective middleware or logic will ensure proper redirection based on authentication and authorization status for the /curso route.
- The 'curso' page features a fixed left sidebar with scrollable lesson list and a main content area for the video player, title, description, and a 'Next lesson' button.
- Subtle hover effects on sidebar lesson items and smooth transitions when loading new lesson content to enhance user experience without being distracting.