// // Object hardcode

function person1(firstName, lastName, birthYear, address, disease){
    personObj = {
        First_Name: firstName,
        Last_Name: lastName,
        Birth_year: birthYear,
        Address: address,
        Disease: disease,
        Age: 2021 - birthYear
    }
    return personObj;
}

// Normal function

function person2(firstName, lastName, birthYear, address, disease){
    First_Name = firstName;
    Last_Name = lastName;
    Birth_Year = birthYear;
    Address = address;
    Disease = disease;
    Age = 2021 - birthYear;

    console.log(First_Name, Last_Name, Birth_Year, Address, Disease, Age);
}

// // Constructor function

function personList(firstName, lastName, birthYear, address, disease){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.address = address;
    this.disease = disease;

    this.Age = 2021 - this.birthYear;

    console.log(this);
}

console.log(person1('Prasan', 'Tamang', '2002', 'sitapaila', 'idiot'));
person2('Prasan', 'Tamang', '2002', 'sitapaila', 'idiot');
let person = new personList('ram', 'gadha', '2006', 'Kirtipur', 'pagal');