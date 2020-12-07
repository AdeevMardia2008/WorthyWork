var canvas,database;
var welcomeScreen,signUpScreen,loginScreen,congratulationsScreen,donateScreen,thankYouScreen,contactScreen,dateScreen,profileScreen;
var user;
var allUsers;
var userValidation;
var login=false;
var donationItems="";

function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  welcomeScreen=new Welcome();
  welcomeScreen.display();
}


function draw(){
  
}
