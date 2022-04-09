let c = [73 , 67 , 33 , 68]

function gradingStudents(grades) {
  // Write your code here
 const newarr =  grades.map((e) => {
    let rest = e % 10;
    if (e > 35) {
      if (3 <= rest && rest <= 5) {
        e = Math.floor(e / 10) * 10 + 5;
        return e;
      } else if (8 <= rest&& rest <= 10) {
        e = Math.ceil(e / 10) * 10
        return e;
      } else {
        return e;
      }
    } else {
        return e
    }
    
  });
  return newarr;
}
console.log(gradingStudents(c));

