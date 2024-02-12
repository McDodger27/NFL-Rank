const teams = [
    {name: 'Cardinals', place: 'Arizona', conference: 'NFC', wins: 1, helmet: 'cardinals.png', color1: 'red', color2: 'white'},
    {name: 'Falcons', place: 'Atlanta', conference: 'NFC', wins: 1, helmet: 'falcons.png', color1: 'red', color2: '#555'},
    {name: 'Ravens', place: 'Baltimore', conference: 'AFC', wins: 1, helmet: 'ravens.png', color1: '#665', color2: 'rgb(55, 14, 157)'},
    {name: 'Bills', place: 'Buffalo', conference: 'AFC', wins: 1, helmet: 'bills.png', color1: 'rgb(37, 92, 211)', color2: 'red'},
    {name: 'Panthers', place: 'Carolina', conference: 'NFC', wins: 1, helmet: 'panthers.png', color1: '#555', color2: 'rgb(15, 148, 231)'},
    {name: 'Bears', place: 'Chicago', conference: 'NFC', wins: 1, helmet: 'bears.png', color1: 'rgb(255, 132, 0)', color2: 'rgb(20, 12, 87)'},
    {name: 'Bengals', place: 'Cincinnati', conference: 'AFC', wins: 1, helmet: 'bengals.png', color1: 'rgb(255, 132, 0)', color2: '#555'},
    {name: 'Browns', place: 'Cleveland', conference: 'AFC', wins: 1, helmet: 'browns.png', color1: 'rgb(255, 132, 0)', color2: 'rgb(103, 31, 31)'},
    {name: 'Cowboys', place: 'Dallas', conference: 'NFC', wins: 1, helmet: 'cowboys.png', color1: 'white', color2: 'rgb(20, 12, 87)'},
    {name: 'Broncos', place: 'Denver', conference: 'AFC', wins: 1, helmet: 'broncos.png', color1: 'rgb(255, 132, 0)', color2: 'rgb(20, 12, 87)'},
    {name: 'Lions', place: 'Detroit', conference: 'NFC', wins: 1, helmet: 'lions.png', color1: 'rgb(73, 184, 253)', color2: 'gray'},
    {name: 'Texans', place: 'Houston', conference: 'AFC', wins: 1, helmet: 'texans.png', color1: 'red', color2: 'rgb(20, 12, 87)'},
    {name: 'Packers', place: 'Green Bay', conference: 'NFC', wins: 1, helmet: 'packers.png', color1: 'rgb(7, 79, 7)', color2: 'rgb(250, 189, 5)'},
    {name: 'Colts', place: 'Indianapolis', conference: 'AFC', wins: 1, helmet: 'colts.png', color1: 'white', color2: 'blue'},
    {name: 'Jaguars', place: 'Jacksonville', conference: 'AFC', wins: 1, helmet: 'jaguars.png', color1: 'teal', color2: 'white'},
    {name: 'Chiefs', place: 'Kansas City', conference: 'AFC', wins: 1, helmet: 'chiefs.png', color1: 'rgb(250, 189, 5)', color2: 'red'},
    {name: 'Raiders', place: 'Las Vegas', conference: 'AFC', wins: 1, helmet: 'raiders.png', color1: '#555', color2: 'white'},
    {name: 'Chargers', place: 'Los Angeles', conference: 'AFC', wins: 1, helmet: 'chargers.png', color1: 'rgb(73, 184, 253)', color2: 'rgb(250, 189, 5)'},
    {name: 'Rams', place: 'Los Angeles', conference: 'NFC', wins: 1, helmet: 'rams.png', color1: 'blue', color2: 'rgb(250, 189, 5)'},
    {name: 'Dolphins', place: 'Miami', conference: 'AFC', wins: 1, helmet: 'dolphins.png', color1: 'white', color2: 'teal'},
    {name: 'Vikings', place: 'Minnesota', conference: 'NFC', wins: 1, helmet: 'vikings.png', color1: 'rgb(250, 189, 5)', color2: 'rgb(55, 14, 157)'},
    {name: 'Patriots', place: 'New England', conference: 'AFC', wins: 1, helmet: 'patriots.png', color1: 'lightgray', color2: 'rgb(20, 12, 87)'},
    {name: 'Saints', place: 'New Orleans', conference: 'NFC', wins: 1, helmet: 'saints.png', color1: 'rgb(188, 161, 93)', color2: 'white'},
    {name: 'Giants', place: 'New york', conference: 'NFC', wins: 1, helmet: 'giants.png', color1: 'blue', color2: 'white'},
    {name: 'Jets', place: 'New York', conference: 'AFC', wins: 1, helmet: 'jets.png', color1: 'darkgreen', color2: 'white'},
    {name: 'Eagles', place: 'Philadelphia', conference: 'NFC', wins: 1, helmet: 'eagles.png', color1: 'rgb(13, 75, 47)', color2: 'white'},
    {name: 'Steelers', place: 'Pittsburgh', conference: 'AFC', wins: 1, helmet: 'steelers.png', color1: '#444', color2: 'rgb(250, 189, 5)'},
    {name: '49ers', place: 'San Francisco', conference: 'NFC', wins: 1, helmet: '49ers.png', color1: 'maroon', color2: 'rgb(188, 161, 93)'},
    {name: 'Seahawks', place: 'Seattle', conference: 'NFC', wins: 1, helmet: 'seahawks.png', color1: 'limegreen', color2: 'rgb(20, 12, 87)'},
    {name: 'Buccaneers', place: 'Tampa Bay', conference: 'NFC', wins: 1, helmet: 'buccaneers.png', color1: 'darkred', color2: 'darkgray'},
    {name: 'Titans', place: 'Tennessee', conference: 'AFC', wins: 1, helmet: 'titans.png', color1: 'rgb(73, 184, 253)', color2: 'rgb(20, 12, 87)'},
    {name: 'Commanders', place: 'Washington', conference: 'NFC', wins: 1, helmet: 'commanders.png', color1: 'maroon', color2: 'rgb(250, 189, 5)'}
];

let nfc = teams.filter(team => team.conference === 'NFC');
let afc = teams.filter(team => team.conference === 'AFC');

const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2'); 
const results = document.querySelector('.results');
const nfcResults = document.querySelectorAll('.nfc li'); 
const afcResults = document.querySelectorAll('.afc li'); 
const favResult = document.querySelector('h3');
const h1 = document.querySelector('.header');
const lock = document.querySelector('.lock');
const h2 = document.querySelector('h2');
const favLogo = document.querySelector('.fav');

let fav = teams[0];

let team1 = teams[Math.floor(Math.random() * 32)];
let team2 = teams[Math.floor(Math.random() * 32)];