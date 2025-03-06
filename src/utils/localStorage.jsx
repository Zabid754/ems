const employees = [
  {
    "id": 1,
    "first_name": "John",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
    "tasks": [
      {
        "task_title": "Fix website bug",
        "task_description": "Resolve the UI issue on the login page.",
        "task_date": "2025-02-21",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Client Meeting",
        "task_description": "Discuss the project scope with the client.",
        "task_date": "2025-02-22",
        "category": "Meeting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Code Review",
        "task_description": "Review the pull requests submitted by the team.",
        "task_date": "2025-02-23",
        "category": "Code Review",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "first_name": "Alice",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
    "tasks": [
      {
        "task_title": "Update Documentation",
        "task_description": "Update the API documentation for the latest version.",
        "task_date": "2025-02-21",
        "category": "Documentation",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Team Standup",
        "task_description": "Daily standup meeting with the team.",
        "task_date": "2025-02-22",
        "category": "Meeting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix API endpoint",
        "task_description": "Resolve the issue with the user authentication API.",
        "task_date": "2025-02-24",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Server Maintenance",
        "task_description": "Perform routine maintenance on the production server.",
        "task_date": "2025-02-25",
        "category": "IT Support",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

// Function to calculate task count
// const calculateTaskCount = (tasks) => {
//   return tasks.reduce(
//     (count, task) => {
//       if (task.active) count.active++;
//       if (task.new_task) count.new_task++;
//       if (task.completed) count.completed++;
//       if (task.failed) count.failed++;
//       return count;
//     },
//     { active: 0, new_task: 0, completed: 0, failed: 0 }
//   );
// };

// // Add task count for each employee
// employees.forEach(employee => {
//   employee.task_count = calculateTaskCount(employee.tasks);
// });

const admin = [
  {
    "id": 100,
    "first_name": "Admin",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

//console.log(getLocalStorage());
