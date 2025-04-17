# Gabriel Saban Portfolio

A modern personal portfolio website showcasing Python automation and full-stack development services, projects, and contact information.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Full-Stack**: Next.js frontend with FastAPI backend
- **Contact Form**: Interactive form that submits to the backend API
- **Project Showcase**: Highlighted projects with descriptions and tech stack
- **Services Section**: Clear display of offered services and skills

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks

### Backend
- FastAPI
- Python 3.10+
- Pydantic for data validation

## Project Structure

```
/portfolio-site
├── frontend/             → Next.js frontend
│   ├── src/              → Source code
│   │   ├── app/          → App Router (Next.js)
│   │   └── components/   → Reusable UI components
│   └── public/           → Static assets
├── backend/              → FastAPI backend
│   ├── app/
│   │   ├── main.py       → FastAPI entrypoint
│   │   └── models/       → Pydantic models (future)
│   └── requirements.txt  → Python dependencies
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- Git

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Run development server
npm run dev
```

The frontend will be available at http://localhost:3000.

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file from example
cp .env.example .env
# Edit .env file to add your email credentials

# Run development server
uvicorn app.main:app --reload --port 8000
```

The backend API will be available at http://localhost:8000.

### Setting Up Email for Contact Form

The contact form can send emails through a standard SMTP server (Gmail, etc.):

1. Create a `.env` file in the backend directory using the provided `.env.example`
2. For Gmail, you'll need to:
   - Use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) rather than your regular password
   - Set `EMAIL_HOST_USER` to your Gmail address
   - Set `EMAIL_HOST_PASSWORD` to your App Password
3. Update `CONTACT_EMAIL` to the email where you want to receive contact form submissions

If you don't configure email credentials, the contact form will still appear to work for testing purposes (messages will be logged but not sent).

## Deployment

This site is designed to be deployed to gabrielsaban.com. Recommended deployment options:

- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Render, Railway, or DigitalOcean

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Gabriel Saban - contact@gabrielsaban.com
