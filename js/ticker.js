var messages = [
    'Never trust a cop in a raincoat',
    'Beware of enthusiasm and of love, both are temporary and quick to sway',
    'If asked if you care about the world\'s problems, look deep into the eyes of he who asks, he will never ask you again',
    'Never give your real name',
    'If ever asked to look at yourself, don\'t look',
    'Never do anything the person standing in front of you can\'t understand',
    `Never create anything, it will be misinterpreted, it will chain you and follow you for the rest of your life`,
    `We can't stop here, this is bat country!`,
    `Once you get locked into a serious drug collection, the tendency is to push it as far as you can`,
    `Too weird to live, too rare to die`,
    `You better take care of me Lord, if you don't you're gonna have me on your hands`,
    `No, this is not a good town for psychedelic drugs. Reality itself is too twisted`,
    `Hallucinations are bad enough. But after awhile you learn to cope with things like seeing your dead grandmother crawling up your leg with a knife in her teeth`,
    `Turn the goddam music up! My heart feels like an alligator`,
];

function setTicker() {
    var number = Math.round(Math.random() * messages.length -1);

    for (let i=1; i<=7; i++) {
        var ticker = document.getElementById('ticker'+i);
        ticker.innerHTML = messages[number];
    }
}

setInterval(setTicker, 7000);
