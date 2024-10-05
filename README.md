# Task Manager API

Welcome to the Task Manager API! This application allows users to manage tasks with features for creating, reading, updating, and deleting tasks.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create a Task](#create-a-task)
  - [Get All Tasks](#get-all-tasks)
  - [Get Task by ID](#get-task-by-id)
  - [Update Task by ID](#update-task-by-id)
  - [Delete Task by ID](#delete-task-by-id)
- [Validation](#validation)

## Installation

To install this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
2. Install the dependencies:    
   npm install
3. Start the server:
   npm start
The server will run on http://localhost:3000.

## Usage

You can use tools like Postman to interact with the API endpoints. Below are the available endpoints.

## API Endpoints
# Create a Task
    Endpoint: POST /tasks
    Request Body:
    {
        "title": "Task Title",
        "description": "Task Description",
        "completed": false
    }  
    Response:
    {
        "id": 1,
        "title": "Task Title",
        "description": "Task Description",
        "completed": false
    } 
# Get All Tasks
    Endpoint: GET /tasks
    Response:
    [
    {
        "id": 1,
        "title": "Task Title",
        "description": "Task Description",
        "completed": false
    }
    ]  
# Get Task by ID
    Endpoint: GET /tasks/:id
    Response:
    {
        "id": 1,
        "title": "Task Title",
        "description": "Task Description",
        "completed": false
    }

# Update Task by ID
    Endpoint: PUT /tasks/:id
    Request Body:  
    {
        "title": "Updated Title",
        "description": "Updated Description",
        "completed": true
    }
    Response:
    {
        "id": 1,
        "title": "Updated Title",
        "description": "Updated Description",
        "completed": true
    }

# Delete Task by ID
    Endpoint: DELETE /tasks/:id
    Response: 204 No Content 

## Validation
This API uses validation to ensure that required fields are provided when creating or updating tasks. If validation fails, a 400 Bad Request response will be returned with error messages.
