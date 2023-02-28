//TASK 1. Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm
var numbers=[4,3,9,12,7,1],counter=0,sum=0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%3==0) {
        counter++;
        sum+=numbers[i];
    }
    
}
console.log(sum/counter);
//TASK 2. Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm
var numbers2=[14,323,145,12,7,110],sum2=0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i]>=100) {
        sum2+=numbers2[i];
    }
    
}
console.log(sum2);


//TASK 3.Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm
var numbers3=[1.2, 3, 3, 12.4, 7, 10.5],counter3=0,max=numbers3[0],min=numbers3[0];
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i]>max) {
     max=numbers3[i];
    }
    if (numbers3[i]<min) {
        min=numbers3[i];
    }
}
console.log((max+min)/2);
//TASK 4.Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm
var strings=["Aliyev","Yusif","Zahid","Amal"],counter4=0;
for (let i = 0; i < strings.length; i++) 
    if (strings[i][0]=='A') {
   counter4++
}
console.log(counter4);

//TASK 5.Verilmis ishciler siyahisinda (ischiler obyekt seklindedir ve firstName,lastName,salary deyerleri var) maashi 500-den yuxari olan ishcileri ekrana cap eden alqoritm
var employee=[{firstName:"Aliyev",lastName:"Yusif",salary: 1000},{firstName:"Ehmed",lastName:"Cabbarov",salary: 300},{firstName:"Rufet",lastName:"Penehov",salary: 700}]
   for (let i = 0; i < employee.length; i++) {
    if (employee[i].salary>500) {
           console.log(employee[i].firstName+" "+employee[i].lastName);
    }
   }
