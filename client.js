$(document).ready(readyNow);

function readyNow() {
  console.log('JQ');
  function makeItRain() {
    for (let i = 0; i < employees.length; i++) {
      let compRep = compensationReporter(employees[i]);
      console.log(compRep);
      console.log(compRep.toString());
      $('#bonusOut').append('<li>' + compRep.name + ': $' + compRep.totalCompensation + '</li>');
    }
  }
$('#button').on('click', makeItRain);
}


class Employee {
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee('Atticus', '2405', '47000', 3); // this creates a new object
const jem = new Employee('Jem', '62347', '63500', 4);
const scout = new Employee('Scout', '6243', '74750', 5);
const robert = new Employee('Robert', '26835', '66000', 1);
const mayella = new Employee('Mayella', '89068', '35000', 2);

const employees = [atticus, jem, scout, robert, mayella]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

for (let i = 0; i < employees.length; i++) {
  let compRep = compensationReporter(employees[i]);
  console.log(compRep);
  $('#bonusOut').append('<li>' + compRep + '</li>');
}

function compensationReporter(employee) {
  let comp = bonusCalculator(employee);
  let compReport = {
    name: employee.name,
    bonusPercentage: comp[0],
    totalCompensation: comp[1],
    totalBonus: comp[2]
  }
  return compReport;
}

function bonusCalculator(employee) {
  let bonusPercent = 0;
  let salary = parseInt(employee.annualSalary);
  switch (employee.reviewRating) {
    case 3:
      bonusPercent = 4;
      break;
    case 4:
      bonusPercent = 6;
      break;
    case 5:
      bonusPercent = 10;
      break;
    default:
      break;
  }

  if (employee.employeeNumber.length === 4) {
    bonusPercent += 5;
  }

  if (salary > 65000) {
    bonusPercent--;
  }

  bonusPercent = Math.min(bonusPercent, 13);

  bonusPercent = Math.max(bonusPercent, 0);

  let totalBonus = salary * (bonusPercent / 100);
  return [bonusPercent, salary + totalBonus, totalBonus];
}
