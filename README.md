 # User Management Dashboard ╰┈➤

## Introduction
The **User Management Dashboard** is a comprehensive platform designed for managing user data efficiently.

## Technology Stack
- **Frontend**: React, Chakra UI, Axios
- **User Data**:  JSONPlaceholder

## Deployed App
- **Frontend**: [User Management Dashboard (Live Link)](https://ajackus-user-management-dashboard-gamma.vercel.app/)

## Features
- **User Listing**: View a list of users with pagination supportand Skeleton loading implemented.
- **Search and Filter**: Search users by name or email and filter by department.
- **Add User**: Add new users with details like name, email, and department.
- **Edit User**: Update existing user information.
- **Delete User**: Remove users from the system.
- **Responsive Design**: Optimized for various devices, including desktops and mobiles.

## Design

### --Dashboard

### --User List

### --Add User Form

## Video Walkthrough of the project


## Directory Structure
```
User_Management_Dashboard_Ajackus/
├─ public/
│  ├─ assets/
│  ├─ components/
|  |  ├─ Navbar.jsx
|  |  |─ Sidebar.jsx
|  |  ├─ UserList.jsx
|  |  └─ UserModal.jsx
│  ├─ pages/
|  |  ├─ Dashboard.jsx
|  |  |─ OtherPage.jsx
|  |  └─ Settings.jsx
│  ├─ App.jsx
|  ├─ api.js
|  └─ main.jsx
└─ src/
└─ index.html/
└─ readme.md
```

## APIs Used
- **Get Users**: Fetch a list of users with pagination.
- **Add User**: Add a new user to the database.
- **Edit User**: Update an existing user's details.
- **Delete User**: Remove a user from the database.

---

## API Endpoints
| Method | Endpoint          | Description                     |
|--------|-------------------|---------------------------------|
| GET    | `/api/users`      | Fetch all users with pagination |
| POST   | `/api/users`      | Add a new user                  |
| PATCH    | `/api/users/:id`  | Update an existing user         |
| DELETE | `/api/users/:id`  | Delete a user                   |

## Design Decisions or Assumptions
- Clean and minimalist design for enhanced user experience.
- Utilization of React Chakra UI for dynamic and interactive user interface.

## Ajackus-User Management Dashboard! 📅🚀
