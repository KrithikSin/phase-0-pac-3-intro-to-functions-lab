function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let upperCase = string.toUpperCase();
    console.log(upperCase);
    return upperCase;
}

function logWhisper(string) {
    let lower = string.toLowerCase();
    console.log(lower);
    return lower;
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }

    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }

    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }       
}