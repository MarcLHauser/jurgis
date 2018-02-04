var map = {
    
    "Lithuania" : {
        place: "Lithuania",
        question: "You are Jurgis, a 27-year-old Lithuanian man who has fallen in love with Ona, a 16-year-old girl. Do you want to go to America with her and her family? Answer 'yes()' or 'no()'",
        yes: "New York",
    },
    
    "New York" : {
        place: "New York",
        question: "You arrive in New York. A man in a blue uniform says he knows a place you can stay at. Do you follow him to a hotel?",
        yes: "Hotel",
    },
    
    "Hotel" : {
        place: "Hotel",
        question: "The man makes you pay enormous fees to get out. Once you get out of the hotel, you remember that your friend got rich in Chicago. Do you want to go to Chicago?",
        yes: "Lithuania",
    }
};

var player = {
    name: "Jurgis",
    alive: true,
    location: map.Lithuania,
    place: null,
    causeDeath: "a cough",
};

var ask = function(){
    
    if(player.alive){
       
        console.log(player.location.question);
        return "";
    
    } else {
    
        console.log("You have died in " + player.place + " of " + player.causeDeath);
        return "Game Over.";
    }

};



var yes = function(){

    player.location = map[player.location.yes];
    return ask();
};

var no = function(){
    player.alive = false;
    player.causeDeath = "cold climate";
    return ask();
};

ask();