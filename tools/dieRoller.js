let results;


function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

function addToResults(num) {
  let result = num.toString();
  if (!results[result]) results[result] = 1;
  else results[result] = results[result] + 1;
}

function rollXofY(numberOfDice, dieMax) {
  if (!numberOfDice || !dieMax) return;
  for (let i = 0; i < numberOfDice; i++) addToResults(getRandomInt(dieMax));
}

function handlePenaltyDice(numberOfDice) {
  let i = 8;
  while (numberOfDice > 0) {
    let num = i.toString();
    if (results[num] && results[num] > 0) {
      useHighestDie();
      numberOfDice--;
    }
    i--;
  }
}

function calcSkillCheckTotal() {
  let total = 0;
  for (let i = 5; i > 0; i--) total += useHighestDie();
  return total;
}

function useHighestDie() {
  let highDie;
  for (let i = 8; i > 0; i-- ) {
    let res = i.toString();
    if (results[res] && results[res] > 0) {
      results[res] = results[res] -1;
      highDie = i;
      i = 0;
    }
  }
  return highDie || 0;
}

function skillCheck(primaryAttribute, primarySkill, bonusDice, penaltyDice) {
  results = {};
  rollXofY(primaryAttribute, 4);
  rollXofY(primarySkill, 8);
  rollXofY(bonusDice + penaltyDice, 6);
  if (penaltyDice) handlePenaltyDice(penaltyDice);
  return calcSkillCheckTotal();
}

function averageSkillCheck(primaryAttribute, primarySkill, bonusDice, penaltyDice, x) {
  let tots = 0;
  for (let i = x; i > 0; i--) {
    tots += skillCheck(primaryAttribute, primarySkill, bonusDice, penaltyDice);
  }
  return (tots/x).toFixed(2);
}

module.exports = {
  skillCheck: skillCheck,
  averageSkillCheck: averageSkillCheck
};
