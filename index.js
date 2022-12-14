/* Your Code Here */

function createEmployeeRecord(employee){

    const EmployeeRecordObject = {
         "firstName": employee[0],
         "familyName": employee[1],
         "title": employee[2],
         "payPerHour": employee[3],
         "timeInEvents": [],
         "timeOutEvents": []
    }
     
      return EmployeeRecordObject;
}


function createEmployeeRecords (employees) {
    return employees.map(employee => createEmployeeRecord(employee))  
}


function createTimeInEvent (date) {

   const day = [...date];
   day.splice(10);

   const hour = [...date];
   hour.splice(0, 11);

   const timeInEvent = {
       type: 'TimeIn',
       hour: Number(hour.join('')),
       date: day.join('')
   };

   this.timeInEvents.push(timeInEvent);
   return this
}


function createTimeOutEvent (date) {

   const day = [...date];
   day.splice(10);

   const hour = [...date];
   hour.splice(0, 11);

   const timeOutEvent = {
       type: 'TimeOut',
       hour: Number(hour.join('')),
       date: day.join('')
   };

   this.timeOutEvents.push(timeOutEvent);
   return this
}


function hoursWorkedOnDate (dateTimeString) {

   const hoursWorkedIn = this.timeInEvents.find( hours => hours.date === dateTimeString) 
   const hoursWorkedOut = this.timeOutEvents.find( hours => hours.date === dateTimeString)
    return (hoursWorkedOut.hour - hoursWorkedIn.hour) * 0.01
}


function wagesEarnedOnDate (dateTimeString) {
   return hoursWorkedOnDate.call(this, dateTimeString) * this.payPerHour;
}


function findEmployeeByFirstName(array,name){

    let employeeFirstNameArray = []

    array.forEach(employee =>{
        if(employee.firstName === name){
            employeeFirstNameArray.push(employee);
        }
    })

    return employeeFirstNameArray[0];
}

function calculatePayroll(array){

    let sum = 0

    for ( let i = 0 ; i < array.length; i++ ){
        sum += allWagesFor.call(array[i])
    }

    return sum
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
