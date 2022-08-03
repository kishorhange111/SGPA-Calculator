let Credits1 = document.getElementById("Grade1");
let Marks1 = document.getElementById("Creadits1")
let GPA1 = document.getElementById("GPA1");
let Credits2 = document.getElementById("Grade2");
let Marks2 = document.getElementById("Creadits2")
let GPA2 = document.getElementById("GPA2");
let Credits3 = document.getElementById("Grade3");
let Marks3 = document.getElementById("Creadits3")
let GPA3 = document.getElementById("GPA3");
let Credits4 = document.getElementById("Grade4");
let Marks4 = document.getElementById("Creadits4")
let GPA4 = document.getElementById("GPA4");
let Credits5 = document.getElementById("Grade5");
let Marks5 = document.getElementById("Creadits5")
let GPA5 = document.getElementById("GPA5");
let Credits6 = document.getElementById("Grade6");
let Marks6 = document.getElementById("Creadits6")
let GPA6 = document.getElementById("GPA6");
let Credits7 = document.getElementById("Grade7");
let Marks7 = document.getElementById("Creadits7")
let GPA7 = document.getElementById("GPA7");
let Credits8 = document.getElementById("Grade8");
let Marks8 = document.getElementById("Creadits8")
let GPA8 = document.getElementById("GPA8");
let Credits9 = document.getElementById("Grade9");
let Marks9 = document.getElementById("Creadits9")
let GPA9 = document.getElementById("GPA9");

Credits1.addEventListener('change', updateValue1);
Credits2.addEventListener('change', updateValue2);
Credits3.addEventListener('change', updateValue3);
Credits4.addEventListener('change', updateValue4);
Credits5.addEventListener('change', updateValue5);
Credits6.addEventListener('change', updateValue6);
Credits7.addEventListener('change', updateValue7);
Credits8.addEventListener('change', updateValue8);
Credits9.addEventListener('change', updateValue9);
const CreaditArray = ["O", "A+", "A", "B+", "B", "C", "P", "F", "AB", "NP", "NF"];
const Grade = [10, 9, 8, 7, 6, 5, 4, 0, 0, 0, 0];

let Num = 0;
let Den = 0;
let cnt = 0;
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let flag7 = false;
let flag8 = false;
let flag9 = false;
const num = [];
const den = [];
function updateValue1(e) {
    const index = CreaditArray.findIndex((el) => el === Credits1.value.toUpperCase() );
    if (index != -1) {
        GPA1.value = Marks1.value * Grade[index];
        num[0]= parseInt(GPA1.value);
        den[0]= parseInt(Marks1.value);
        flag1 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue2(e) {
    const index = CreaditArray.findIndex((el) => el === Credits2.value.toUpperCase() );
    if (index != -1) {
        GPA2.value = Marks2.value * Grade[index];
        num[1]= parseInt(GPA2.value);
        den[1]= parseInt(Marks2.value);
        flag2 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue3(e) {
    const index = CreaditArray.findIndex((el) => el === Credits3.value.toUpperCase() );
    if (index != -1) {
        GPA3.value = Marks3.value * Grade[index];
        num[2]= parseInt(GPA3.value);
        den[2]= parseInt(Marks3.value);
        flag3 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue4(e) {
    const index = CreaditArray.findIndex((el) => el === Credits4.value.toUpperCase() );
    if (index != -1) {
        GPA4.value = Marks4.value * Grade[index];
        num[3]= parseInt(GPA4.value);
        den[3]= parseInt(Marks4.value);
        flag4 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue5(e) {
    const index = CreaditArray.findIndex((el) => el === Credits5.value.toUpperCase() );
    if (index != -1) {
        GPA5.value = Marks5.value * Grade[index];
        num[4]= parseInt(GPA5.value);
        den[4]= parseInt(Marks5.value);
        flag5 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue6(e) {
    const index = CreaditArray.findIndex((el) => el === Credits6.value.toUpperCase() );
    if (index != -1) {
        GPA6.value = Marks6.value * Grade[index];
        num[5]= parseInt(GPA6.value);
        den[5] = parseInt(Marks6.value);
        flag6 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue7(e) {
    const index = CreaditArray.findIndex((el) => el === Credits7.value.toUpperCase() );
    if (index != -1) {
        GPA7.value = Marks7.value * Grade[index];
        num[6]= parseInt(GPA7.value);
        den[6]= parseInt(Marks7.value);
        flag7 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue8(e) {
    const index = CreaditArray.findIndex((el) => el === Credits8.value.toUpperCase() );
    if (index != -1) {
        GPA8.value = Marks8.value * Grade[index];
        num[7]= parseInt(GPA8.value);
        den[7]= parseInt(Marks8.value);
        flag8 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function updateValue9(e) {
    const index = CreaditArray.findIndex((el) => el === Credits9.value.toUpperCase() );
    if (index != -1) {
        GPA9.value = Marks9.value * Grade[index];
        num[8]= parseInt(GPA9.value);
        den[8]= parseInt(Marks9.value);
        flag9 = true;
    }
    else {
        alert("Please Enter Valid Creadits");
    }
}
function fun(){
    if(flag1&&flag2&&flag3&&flag4&&flag5&&flag6&&flag7&&flag8&&flag9){
        let Num = 0;
        let Den = 0;
        for (let i = 0; i < num.length; i++) {
            Num += parseInt(num[i]);
        }
        for(let i = 0;i<den.length;i++){
            Den += parseInt(den[i]);
        }
        let sum = document.getElementById("sum");
        let ans = (Num/Den).toPrecision(3);
        sum.innerText = "Your SGPA : "+ans;
    }
    else{
        alert("Please Enter All Subject");
    }

}
