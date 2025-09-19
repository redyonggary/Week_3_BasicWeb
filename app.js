let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

// 시작 칩 개수 정의
const STARTING_POKER_CHIPS = 100;

// 플레이어들의 포인트 초기화
let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

console.log(`Welcome! 챔피언십 타이틀은 ${playerOneName},
${playerTwoName}, ${playerThreeName} 중 한 명에게 주어집니다. 각
선수는 ${STARTING_POKER_CHIPS} 의 칩을 가지고 시작합니다. 흥미진진한
경기가 될 것입니다. 최고의 선수가 승리하길 바랍니다!`);

let gameHasEnded = false;

gameHasEnded =
    playerOnePoints + playerTwoPoints == 0 || // 플레이어3 우승
    playerTwoPoints + playerThreePoints == 0 || // 플레이어1 우승
    playerOnePoints + playerThreePoints == 0; // 플레이어2 우승
console.log("Game has ended: ", gameHasEnded);
