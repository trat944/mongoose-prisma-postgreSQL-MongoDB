![Database Project]

# Database Project: Users, Movies, and Genres

This project focuses on developing a database to manage information about users, movies, and film genres. Throughout the development process, different technologies have been used to implement the database in three distinct stages.

## Project Stages

### 1. Mongoose and MongoDB

In the first stage of the project, Mongoose, a data modeling library for MongoDB, a widely-used NoSQL database, was utilized.

#### Key Features:
- **Defined Schemas:** Defined schemas were created using Mongoose syntax to represent users, movies, and genres.
- **Basic Relationships:** Basic relationships between entities were established using references and/or document embedding.

![Mongoose and MongoDB Diagram]

### 2. Prisma and MongoDB

The second stage of the project involved transitioning to Prisma, a data modeling tool and ORM, while maintaining the database in MongoDB.

#### Key Features:
- **Prisma Models:** Models were defined using Prisma's data modeling language.
- **Prisma Client:** Prisma Client was used to generate MongoDB-specific SQL queries and operate on the database.
- **Smooth Migration:** A smooth transition from Mongoose to Prisma was achieved, leveraging Prisma's ORM features.

![Prisma and MongoDB Diagram]

### 3. PostgreSQL with Prisma

In the final stage of the project, the database was migrated to PostgreSQL, while maintaining the Prisma layer for data modeling and database operations.

#### Key Features:
- **PostgreSQL:** PostgreSQL was used as the relational database management system.
- **Schema Migrations:** Schema migrations were managed by Prisma.
- **Improved Performance:** Better performance and scalability were observed with PostgreSQL compared to MongoDB.

![Prisma and PostgreSQL Diagram]

## Potential Issues and Considerations

Throughout the project development, several challenges were encountered, and important considerations were taken into account.

### 1. Compatibility Between Database Systems
Migrating between database systems requires careful consideration of differences in SQL syntax, data types, and system-specific features.

### 2. Data Modeling
Defining complex relationships between entities can be challenging and requires a deep understanding of the problem domain and the capabilities of the data modeling tool used.

### 3. Performance
The choice of the database system and the way queries are designed can have a significant impact on application performance. Thorough performance testing and code optimization are important.

### 4. Schema Migrations
Effectively managing schema migrations is crucial to maintaining database integrity and avoiding issues during the deployment of new application versions.