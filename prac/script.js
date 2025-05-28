const employee={
    employeeName:"Muhammad Raheel",
    position:"Developer",
    salary:300000,
    experience:"Two years",

    increaseSalary(){
        this.salary=(this.salary*0.1)+this.salary;
        console.log(`Your salary is increasing 10% and your new salary is ${this.salary}`);
    },

    promote(){
          this.position="Senior Developer";
          console.log(`You are promoting to ${this.position}`);

          this.salary+=10000;

          console.log(`Your new salary is ${this.salary}`);

    }
};

console.log(employee.employeeName);
console.log(employee.position);
console.log(employee.salary);
console.log(employee.experience);   
employee.increaseSalary();
employee.promote();