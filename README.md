# OET Sri Lanka - Occupational English Test Preparation Platform

A comprehensive web platform for healthcare professionals preparing for the Occupational English Test (OET) in Sri Lanka. Built with React, TypeScript, and React Router.

## Overview

OET Sri Lanka provides specialized English language training for doctors, nurses, and healthcare professionals. The platform offers detailed information about OET preparation courses, skill-specific guidance, and educational resources across all four language competencies: Listening, Reading, Writing, and Speaking.

## Features

- **Course Packages**: Browse and search through specialized OET preparation seminars
- **Skills Section**: In-depth articles and guidance for each OET sub-test
- **Responsive Design**: Fully mobile-responsive layout
- **Search Functionality**: Filter packages by title or keywords
- **Contact Integration**: Direct WhatsApp and email contact options

## Tech Stack

- React 19
- TypeScript
- React Router DOM (client-side routing)
- CSS Modules
- React Icons
- Vite (build tool)

## Project Structure
```
src/
├── components/
│   ├── blog/          # Article display components
│   ├── card/          # Package card components
│   ├── footer/        # Footer with social links
│   ├── packages/      # OET package listings
│   ├── skills/        # Skill-specific pages (Listening, Reading, Writing, Speaking)
│   ├── data/          # TypeScript data files (packages and articles)
│   ├── Home.tsx       # Landing page with search
│   ├── Skills.tsx     # Skills overview and navigation
│   └── Contact.tsx    # Contact information
├── App.tsx            # Main routing configuration
└── App.css / index.css # Global styles
```

## Data Structure

The application uses TypeScript interfaces for type safety:

- **PackageType**: Course package information (title, description, fee, duration, contact)
- **ArticleType**: Educational articles (title, lead, body, conclusion, associated skills)

## Deployment

Built with Vite for optimized production builds. Deploy to any static hosting service.
```bash
npm run build
```

## Contact

For inquiries about OET preparation courses:
- **WhatsApp**: +94714683687
- **Email**: srilankaoet@gmail.com

For inquiries about the website:
- **Email**: anjaneew@gmail.com

## License

© 2025 Anjanee S. Wijewardana. All rights reserved.

## Acknowledgments

This project serves both as a portfolio piece and a functional business website for OET preparation services in Sri Lanka.
```
