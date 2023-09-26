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
  let counter = 0;
  let largestSize = {name: 0};
  for (let gameKey in game) {
    let teamObj = game[gameKey]

    //teamObj is the team, keys are the aspects of a team.
    for (let key in teamObj) {
      if (key === 'players') {

        //for the specified player, 
        for (let individual in teamObj[key]) {
          if(teamObj.players[individual]["shoe"] > largestSize.name) {
            debugger
            largestSize.name = teamObj.players[individual]["shoe"];
            //largestSize["name"] = largestSize[individual];
          }
        }
      }
    }
  }
  return largestSize;
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
*/

console.log(bigShoeRebounds());