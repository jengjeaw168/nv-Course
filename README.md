# Project: nv-Course

This project is a variation of the nv-webblog68 project, extended with a new model: **Course**.

## New Model: Course

### Schema
- **title**: STRING\n- **description**: TEXT\n- **instructor**: STRING\n- **price**: FLOAT\n- **duration**: INTEGER

## New Controller
A dedicated controller `CourseController` has been added to handle CRUD operations for `Course`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/courses` - Get all courses
- **POST** `/course` - Create a new course
- **GET** `/course/:courseId` - Get a course by ID
- **PUT** `/course/:courseId` - Update a course
- **DELETE** `/course/:courseId` - Delete a course

## Usage
Follow standard setup instructions for Client and Server.
