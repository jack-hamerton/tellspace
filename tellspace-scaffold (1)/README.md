# TellSpace — Scaffold (Frontend + Backend + Docker)

This repository is a scaffold for **TellSpace** with:
- Frontend: React + TypeScript (Vite) with component skeleton matching your data flow tree.
- Backend: FastAPI (Python) with JWT auth skeleton and basic routers.
- Database: PostgreSQL (via docker-compose).
- Docker Compose: brings up `frontend`, `backend`, and `postgres`.
- PayPal redirect placeholders and feature stubs for Study payment / Advert subscription.

**What this scaffold provides**
- Folder structure matching your requested tree (components/pages present, many as skeletons).
- JWT flow: register/login (returns JWT). Frontend stores token.
- OTP / PIN fields block paste (client-side).
- Screenshot blocker component (CSS overlay).
- Example `.env.example` and `docker-compose.yml`.
- Ready-to-run locally via Docker Compose.

**How to run (quick)**
1. Copy `.env.example` -> `.env` and fill values.
2. `docker-compose up --build`
3. Frontend: http://localhost:3000
   Backend (FastAPI): http://localhost:8000/docs

**Notes**
- This is a scaffold. Business logic like StudyAI, real moderation, production-grade security, and PayPal server integration are **stubbed** with clear TODOs.
- IP restriction for admin route is included as a middleware placeholder (configure your IP and secrets).

Enjoy — use this as a starting point and iterate. 
