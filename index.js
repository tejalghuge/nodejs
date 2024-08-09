const marks = [40,50,70,800,100,150,200,250,300,350,400]

let largest = marks[0]

for(const num of marks)
{
    if(num > largest){
        largest = num
    }
}
console.log(largest)