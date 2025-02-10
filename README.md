# Connect My Doc (CMD)

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![Web API](https://img.shields.io/badge/Web%20API-0088CC?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Microservices](https://img.shields.io/badge/Microservices-005571?style=for-the-badge)
![GIT](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)
![JUnit](https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

## Overview
**Connect My Doc (CMD)** is an innovative healthcare platform that brings patients, doctors, and clinics together in one convenient interface. It allows patients to schedule appointments, access medical services, and manage their health records from anywhere.

## Features
- **Secure JWT-based Authentication**
- **Doctor & Patient Management**
- **Appointment Scheduling & Tracking**
- **Clinic & Department Management**
- **Diagnostics & Service Booking**
- **Microservices Architecture for Scalability**
- **Unit Testing using JUnit**
- **API Documentation with Swagger**

## Tech Stack
- **Backend:** Java, Spring Boot, Hibernate
- **Database:** MySQL
- **Security:** JWT Authentication
- **API:** Web API (RESTful)
- **Architecture:** Microservices
- **Version Control:** Git
- **Testing:** JUnit
- **Documentation:** Swagger

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/connect-my-doc.git
   ```
2. Navigate to the project directory:
   ```sh
   cd connect-my-doc
   ```
3. Build the project using Maven:
   ```sh
   mvn clean install
   ```
4. Run the application:
   ```sh
   mvn spring-boot:run
   ```

## API Usage
### Authentication
**Generate Token:**
```http
POST /api/auth/token
```
**Validate Token:**
```http
POST /api/auth/validate
```

### Appointment Management
**Book an Appointment:**
```http
POST /api/appointments/book
```
**View Appointments:**
```http
GET /api/appointments
```

## Configuration
Update `application.properties` with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/cmd_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

## License
This project is licensed under the MIT License.
