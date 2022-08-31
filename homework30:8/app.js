// Bài Tập

// 3.
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }

// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(getFullName); // 

// 4.
// console.log(`1. ${age}`); //undefined
// var age = 20;
// console.log(`2. ${age}`); // 20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`) //undefined
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27

// console.log(`5. ${getFullName(firstName, lastName)}`);  //undefined
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker

// 5.
// console.log(age); //undefined
// let age = 27;
// console.log(age)  // 27
// {
// console.log(firstName);  //undefined
// console.log(age); //27
// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";
// console.log(firstName); // Peter
// console.log(lastName); // Parker
// console.log(job); // Spider man
// }

// 6.
// a=2;
// var a;
// console.log(a); //2 

// 7.
// console.log(a); //undefined
// var a = 2;

//8.
// var a = 10;
// function foo() {
//     var a;
//     console.log(a); //undefined
//     a=2
// }
// foo();

//11. Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// function removeEnd(arr,n) { 
//     return arr.pop(n);
// }

// 12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     for(let i=0;i<=arr.length-1;i++){
//         return arr[i]=n
//         console.log(i);
//     }
// }

// 13. Cho 1 mảng
// const users = [
//     {
//         name: "Angeline Jolie" , 
//         age : 80
//     },
//     {
//         name: "Eric Jone",
//         age:2
//     },
//     {
//         name:"Paris Hilton",
//         age:5
//     },
//     {
//         name:"Kayne West",
//         age :16
//     },
//     {
//         name:"Bob Ziroll",
//         age:100
//     }
// ] 


// for (let i=0;i<users.length;i++){
//     let result1 = users[i].name
//     console.log(result1);
//     }


// 15. 
let result = add3AndMultiplyBy(2)(3)(4);

function add3AndMultiplyBy(num) {
    num = num + 3; 
    return function (num2) {
        num * num2;
        return function(num3){
            return num3*num2;
        }
    }
}
console.log(result);



