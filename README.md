## NestJS UFC Application

This repository contains the Docker Compose setup and instructions to quickly set up a NestJS application with a PostgreSQL database for a Fighters platform.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started

1. Clone the repository:

2. Create a `.env` file in the root directory and configure your PostgreSQL credentials:

   ```env
   POSTGRES_DB=UFC_DATABASE
   POSTGRES_USER=root
   POSTGRES_PASSWORD=root
   ```

3. Start the application using Docker Compose:

   ```sh
   docker-compose up -d
   ```

   This will start the PostgreSQL database container.

4. Build and run your NestJS application:

   ```sh
   pnpm run start:dev
   ```

5. Access your NestJS application:

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access your NestJS UFC application.

### Features

- PostgreSQL database with the following environment variables:
  - Database name: UFC_DATABASE
  - User: root
  - Password: root

### API Endpoints

- You can access the API endpoints for fighters, fights, events, and rankings using the provided NestJS application.

### Customization

Feel free to customize the database configuration, NestJS application, and entity models according to your UFC platform's requirements.
