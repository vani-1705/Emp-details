const employees = [
  { id: 1, name: "Abhimanyu", department: "HR" },
  { id: 2, name: "Vani", department: "IT" },
  { id: 3, name: "Sameer", department: "Finance" }
];

const tbody = document.querySelector("#employeeTable tbody");

employees.forEach(emp => {
  const row = `<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>${emp.department}</td>
  </tr>`;
  tbody.innerHTML += row;
});