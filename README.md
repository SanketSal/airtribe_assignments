Certainly! Here's a detailed README for the above code:

---

# Task Manager API

The Task Manager API is a RESTful API built with Node.js and Express.js. It allows users to manage tasks by performing CRUD operations (Create, Read, Update, Delete). Tasks have attributes such as ID, title, description, completion status, and priority level.

## Getting Started

These instructions will help you set up and run the Task Manager API on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to have the following software installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd task-manager-api
```

3. Install the dependencies:

```
npm install
```

### Usage

1. Start the API server:

```
npm start
```

2. The server will start running on `http://localhost:3000`.

### API Endpoints

The Task Manager API provides the following endpoints:

#### GET /tasks

Retrieves all tasks.

#### GET /tasks/:id

Retrieves a single task by its ID.

#### POST /tasks

Creates a new task.

#### PUT /tasks/:id

Updates an existing task by its ID.

#### DELETE /tasks/:id

Deletes a task by its ID.

#### GET /tasks/priority/:level

Retrieves tasks based on priority level.

### Request and Response Format

#### Task Object

A task object has the following attributes:

- `id` (number): Unique identifier for the task.
- `title` (string): Title of the task.
- `description` (string): Description of the task.
- `completed` (boolean): Completion status of the task.
- `priority` (number): Priority level of the task.

#### Request Format

- **POST** and **PUT** requests require a request body in JSON format. The request body should contain the task attributes (`title`, `description`, `completed`, and `priority`).

#### Response Format

- All successful responses will have a status code of 200 OK, unless otherwise specified.
- The response body will be in JSON format, containing the requested data or the created/updated task object.
- If an error occurs, the response will have an appropriate error status code (e.g., 400 Bad Request, 404 Not Found) and an error message in the response body.

### Examples

#### Create a Task

```
POST /tasks

Request Body:
{
  "id": 1,
  "title": "Task 1",
  "description": "Description 1",
  "completed": false,
  "priority": 2
}

Response Body:
{
  "id": 1,
  "title": "Task 1",
  "description": "Description 1",
  "completed": false,
  "priority": 2
}
```

#### Retrieve All Tasks

```
GET /tasks

Response Body:
[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description 1",
    "completed": false,
    "priority": 2
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description 2",
    "completed": true,
    "priority": 1
  }
]
```

#### Update a Task

```
PUT /tasks/1

Request Body:
{
  "title": "Updated Task 1",
  "description": "Updated Description 

1",
  "completed": true,
  "priority": 3
}

Response Body:
{
  "id": 1,
  "title": "Updated Task 1",
  "description": "Updated Description 1",
  "completed": true,
  "priority": 3
}
```

#### Delete a Task

```
DELETE /tasks/1

Response Body:
{
  "id": 1,
  "title": "Updated Task 1",
  "description": "Updated Description 1",
  "completed": true,
  "priority": 3
}
```

#### Retrieve Tasks by Priority Level

```
GET /tasks/priority/2

Response Body:
[
  {
    "id": 1,
    "title": "Updated Task 1",
    "description": "Updated Description 1",
    "completed": true,
    "priority": 2
  },
  {
    "id": 3,
    "title": "Task 3",
    "description": "Description 3",
    "completed": false,
    "priority": 2
  }
]
```

### Error Handling

- If an invalid request is made (e.g., missing required attributes, invalid priority level), the API will respond with an appropriate error status code (e.g., 400 Bad Request) and an error message in the response body.

---

That's it! You now have a Task Manager API with support for filtering tasks based on priority level and sorting them by creation date. Feel free to customize and extend the code to suit your specific needs. Happy coding!
