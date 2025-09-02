## ASOS E‑Commerce

Full‑stack e‑commerce application inspired by ASOS. It provides product browsing, cart and wishlist management, checkout with orders and payments, and an admin‑ready backend API. The stack is split into an ASP.NET Core Web API backend and an Angular frontend.

## ASOS E‑Commerce Live Demo  (https://whimsical-salamander-37f28d.netlify.app/#/home)

### Features
- **Product catalog**: brands, categories, product types, images
- **User**: registration/login, profile, persistent cart and wishlist
- **Cart & Wishlist**: add/update/remove items
- **Checkout**: orders, payments, statuses
- **Responsive UI**: Angular SPA consuming the API

## Technologies
- **Backend**: .NET 8, ASP.NET Core Web API, Entity Framework Core, C#
- **Database**: SQL Server (via EF Core Migrations)
- **Frontend**: Angular (TypeScript, RxJS), SCSS/CSS, HTML
- **Build/Tooling**: Node.js + npm, Angular CLI

## Project Structure
```
ASOS E-Commerce/
├─ ASOS-back-end/
│  ├─ ASOS.APIs/                 # ASP.NET Core Web API layer (controllers, Program.cs)
│  ├─ ASOS.BL/                   # Business layer (DTOs, Managers, Services, Helpers)
│  └─ ASOS.DAL/                  # Data access layer (EF Core, Context, Repositories, Migrations)
└─ ASOS-front-end/               # Angular application (src/app, assets, environments)
```

Key backend folders:
- `ASOS.APIs/Controllers`: API endpoints (Products, Cart, Orders, Payment, Users, Men/Woman sections)
- `ASOS.BL/Managers`: business logic services per domain
- `ASOS.BL/DTOs`: data transfer objects returned/accepted by the API
- `ASOS.DAL/Context`: EF Core `StoreContext`
- `ASOS.DAL/Repositories`: generic and domain repositories
- `ASOS.DAL/Migrations`: EF Core migrations and model snapshot

Key frontend folders:
- `ASOS-front-end/src/app`: Angular modules, components, services
- `ASOS-front-end/src/assets`: images and static assets
- `ASOS-front-end/src/environments`: environment configs
