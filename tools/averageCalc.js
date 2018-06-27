const dieRoller = require('./dieRoller');

function averageChart() {
  let result = '\n\n\t  0\t  1\t  2\t  3\t  4\t  5\t  6\t';
  for (let att = 1; att <= 8; att++) {
    result += '\n' + att + '\t'
    for (let i = 0; i <= 6; i++) {
      let ave = dieRoller.averageSkillCheck(att, i, null, null, 10000);
      result += ave + '\t';
    }
  }
  result += '\n\n'

  return result;
}


// console.log(averageChart());
console.log( dieRoller.skillCheck(5,1), dieRoller.skillCheck(5, 3), dieRoller.skillCheck(5, 5) );
