// Write your solution in this file!
const employee = {
    name : "Mike",
    streetAddress : "12432 Potomac Hunt Road",

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {...employee, [key]: value};

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj [key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    
}