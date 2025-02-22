
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
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
    "email": "employee2@example.com",
    "password": "123",
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
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Design Homepage",
        "task_description": "Create a new homepage layout for the website.",
        "task_date": "2025-02-21",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Write Blog Post",
        "task_description": "Write a blog post about UI/UX best practices.",
        "task_date": "2025-02-23",
        "category": "Content",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Bug Fixing",
        "task_description": "Fix reported bugs in the mobile app.",
        "task_date": "2025-02-21",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Security Audit",
        "task_description": "Perform a security audit on the platform.",
        "task_date": "2025-02-24",
        "category": "Security",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Update Dependencies",
        "task_description": "Update project dependencies and remove vulnerabilities.",
        "task_date": "2025-02-25",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Product Demo",
        "task_description": "Prepare for the upcoming product demo.",
        "task_date": "2025-02-27",
        "category": "Presentation",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Social Media Strategy",
        "task_description": "Plan the social media strategy for the next quarter.",
        "task_date": "2025-02-22",
        "category": "Marketing",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "SEO Optimization",
        "task_description": "Optimize website SEO for better ranking.",
        "task_date": "2025-02-24",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Prepare Report",
        "task_description": "Prepare the monthly performance report.",
        "task_date": "2025-02-26",
        "category": "Reporting",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];



const admin= [
  {
      "id": 100,
      "email": "admin@example.com",
      "password": "123"
    }
]

export const setLocalStorage=()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
} 

export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  //console.log(JSON.parse(data))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}