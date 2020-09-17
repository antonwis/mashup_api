import { Employee } from "../types.ts";

let employees: Employee[] = [
  {
    firstName: "Mauno",
    lastName: "Ahonen",
    address: "Kummelikatu 1",
    phone: {
      home: "09-123456",
      work: "020-500500",
    },
  },
  {
    firstName: "Matti",
    lastName: "Näsä",
    address: "Motivaatio 404",
    phone: {
      home: "09-715517",
      work: "0700123123",
    },
  },
  {
    firstName: "Raimo",
    lastName: "Vormisto",
    address: "Mogadishu",
    phone: {
      home: "666-SATAN",
      work: null,
    },
  },
  {
    firstName: "Timo",
    lastName: "Silakka",
    address: "Malmö",
    phone: {
      home: "112-404",
      work: null,
    },
  },
];

// @desc    Get all employees
// @route   GET /api/test/
const getEmployees = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: employees,
  };
};

// @desc    Get a specific employee
// @route   GET /api/test/:name
const getEmployee = (
  { params, response }: { params: { name: string }; response: any },
) => {
  const employee: Employee | undefined = employees.find((e) =>
    e.firstName === params.name || e.lastName === params.name
  );

  if (employee) {
    response.status = 200;
    response.body = {
      success: true,
      data: employee,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Not found",
    };
  }
};

// @desc    Add a new employee
// @route   POST /api/test/
const addEmployee = async ({ request, response }: { request: any, response: any }) => {
  const body = await request.body()
 
  if(!request.hasBody) {
    response.status = 400
    response.body = {
      success: false,
      msg: "No data"
    }
  } else {
    const employee: Employee = await body.value
    employees.push(employee)
    response.status = 201
    response.body = {
      success: true,
      data: employee
    }
  }
};

// @desc    Update employee data
// @route   PUT /api/test/
const updateEmployee = ({ response }: { response: any }) => {
  response.body = "add";
};

// @desc    Delete employees
// @route   DELETE /api/test/
const deleteEmployee = ({ response }: { response: any }) => {
  response.body = "delete";
};
export { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee };
