console.log('Advanced debugging example running.')
debugger

const game = gameObject();

function getSpecifiedPlayer(name) {
  for (let gameKey in game) {
    let teamObj = game[gameKey]

    //teamObj is the team, keys are the aspects of a team.
    for (let key in teamObj) {
      if (key === 'players') {

        //for the specified player, return their points.
        for (let individual in teamObj[key]) {
          if (individual === name){
            return teamObj[key][individual];
          }
        }
      }
    }
  }
}
function numPointsScored(name) {
  const player = getSpecifiedPlayer(name);
  return player.points;
}
function shoeSize(name) {
  const player = getSpecifiedPlayer(name);
  return player.shoe;
}
function teamColors(name) {
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    if(teamObj.teamName === name) {
      return teamObj.colors;
    }
  }
}
function teamNames() {
  let teamNamesList = [];
for (let gameKey in game) {
  teamNamesList.push(game[gameKey].teamName);
  }
  return teamNamesList;
}
function playerNumbers(name) {
  let playerNumbersList = [];
  for (let gameKey in game) {
    if (game[gameKey].teamName === name){
      let teamObj = game[gameKey]
      for (let key in teamObj) {
        if (key === 'players') {

          //for add each players number to an array
          for (let individual in teamObj[key]) {
              playerNumbersList.push(teamObj[key][individual].number);
          }
        }
      }
    }
  }
  return playerNumbersList;
}
function playerStats(name) {
  const player = getSpecifiedPlayer(name);
  let playerStat = {};

  for(let stats in player){
    playerStat[stats] = player[stats];
  }
  return playerStat;
}
function bigShoeRebounds() { 

  //vars needed
  let shoeSize = 0;
  let nameOf = '';
  let largestSize = {}

  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let key in teamObj) {
      if (key === 'players') {

        //for each player, if their shoe is larger assign shoeSize and nameOf
        for (let individual in teamObj[key]) {
          if(shoeSize < teamObj.players[individual]["shoe"]) {
            shoeSize = teamObj.players[individual]["shoe"];
            nameOf = individual;
          }
          return teamObj.players[individual]['rebounds'];
        }
      }
    }
  }
}
function mostPointsScored() {
  let playerPoints = 0;
  let nameOf = '';
  let mostPoints = {}

  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let key in teamObj) {
      if (key === 'players') {
        for (let individual in teamObj[key]) {
          if(playerPoints < numPointsScored(individual)) {
            playerPoints = numPointsScored(individual);
            nameOf = individual;
          }
        }
      }
    }
  }
  mostPoints[nameOf] = playerPoints;
  return mostPoints;
}
function winningTeam() {
  let teamPoints1 = 0;
  let teamPoints2 = 0;
  let teamScores = {};

  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let key in teamObj) {
      if (key === 'players') {
        for (let individual in teamObj[key]) {
          if(gameKey === 'home'){
            teamPoints1 += numPointsScored(individual);
          } else if( gameKey === 'away'){
            teamPoints2 += numPointsScored(individual);
          }
        }
      }
    }
    if(gameKey === 'home'){
      teamScores[gameKey] = teamPoints1;
    } else if( gameKey === 'away'){
      teamScores[gameKey] = teamPoints2;
      if (teamPoints1 > teamPoints2) {
        debugger
        return `${teamPoints1} to ${teamPoints2}, home wins!`
      }else{
        return `${teamPoints1} to ${teamPoints2}, away wins!`
      }
    }
  }
}
function playerWithLongestName() {
  let longestName = 0;
  let nameOf = '';
  let playerNameLength = {}
  

  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let key in teamObj) {
      if (key === 'players') {
        for (let individual in teamObj[key]) {
          if(longestName < individual.replace(' ', '').length) {
            longestName = individual.replace(' ', '').length;
            nameOf = individual;
          }
        }
      }
    }
  }
  playerNameLength[nameOf] = longestName;
  return playerNameLength;
}
function doesLongNameStealATon() {
  let playerSteals = 0;
  let nameOf = '';

  let longestName = 0;
  let longNameOf = '';

  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let key in teamObj) {
      if (key === 'players') {
        for (let individual in teamObj[key]) {
          if(playerSteals < teamObj['players'][individual]['steals']) {
            playerSteals = teamObj['players'][individual]['steals'];
            nameOf = individual;
          }
          if(longestName < individual.replace(' ', '').length) {
            longestName = individual.replace(' ', '').length;
            longNameOf = individual;
          }
        }
      }
    }
  }
  console.log(nameOf, longNameOf);
  console.log(playerSteals, longestName)
  return nameOf === longNameOf;
}


//tests
let playerCheck = "Alan Anderson";
let teamCheck = "Brooklyn Nets";
/*
console.log(`Points Scored: ${numPointsScored(playerCheck)}`);
console.log(`Shoes Size: ${shoeSize(playerCheck)}`);
console.log(`Team Colors: ${teamColors(teamCheck)}`);
console.log(`Team Names: ${teamNames()}`);
console.log(`Team Player Numbers: ${playerNumbers(teamCheck)}`);
console.log(playerStats(playerCheck));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
*/
console.log(doesLongNameStealATon());