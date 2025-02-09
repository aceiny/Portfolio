# My Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects I've worked on.

## Live Demo
```bash
https://yxne.tech
```
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This portfolio is built using Next.js and is designed to be a modern, responsive, and visually appealing representation of my work. It includes sections for featured projects, technical skills, and contact information.

## Features

- **Featured Projects:** Highlights key projects with descriptions, technologies used, and links to live demos and source code.
- **Technical Expertise:** Showcases my technical skills and areas of expertise.
- **Responsive Design:** The website is fully responsive and works well on all devices.
- **Animations:** Uses Framer Motion for smooth and engaging animations.
- **Project Pages:** Dedicated pages for each project with detailed information, screenshots, and client testimonials.
- **Competitions & Achievements:** A dedicated page showcasing my participation and achievements in various competitions.
- **Education:** Details about my educational background, degrees, and certifications.


## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building performant web applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds static typing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide React](https://lucide.dev/) - Icon library
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system
- [Redis](https://redis.io/) - In-memory data structure store, used as a cache and message broker
- [NestJS](https://nestjs.com/) - A framework for building efficient, scalable Node.js server-side applications
- [OpenAI](https://openai.com/) - Artificial intelligence research and deployment company
- [Docker](https://www.docker.com/) - Platform for developing, shipping, and running applications in containers
- [Nginx](https://www.nginx.com/) - Web server and reverse proxy

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.tsx   # Dynamic project pages
│   │   └── page.tsx       # Projects listing page
│   └── globals.css        # Global CSS styles
├── components/
│   ├── sidebar.tsx        # Sidebar component
│   ├── tech-stack.tsx     # Tech stack component
│   └── ui/                # UI components (using Shadcn UI)
├── constants/
│   ├── data.ts            # Personal and portfolio information
│   ├── projects.ts        # Project data
│   └── tachStack.ts       # Tech stack data
├── public/                # Static assets (images, fonts, etc.)
├── styles/
│   └── globals.css        # Global CSS styles (legacy)
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/aceiny/Portfolio.git
    cd Portfolio
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## Deployment

This project can be deployed to various platforms, including:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Azure](https://azure.microsoft.com/)

Follow the deployment instructions for your chosen platform.  Typically, this involves connecting your repository to the platform and configuring the build and deployment settings.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.

## Contact

Zeraibi Ahmed Yassine

- [Email](mailto:yzeraibi2000@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/yacine-zeraibi-1b8307300)
- [GitHub](https://github.com/aceiny)