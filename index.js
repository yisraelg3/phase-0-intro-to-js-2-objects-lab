// Write your solution in this file!
const employee = {name : 'Joe Schmoe', streetAddress : '770 Eastern Parkway'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({},employee, {[key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const temp = Object.assign({},employee,);
    delete temp[key];
    return temp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}