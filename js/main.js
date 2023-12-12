
function getQuote(){
    var quote = ["What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?",
                "Anything worth dying for is certainly worth living for.",
                "Now that I knew fear, I also knew it was not permanent. As powerful as it was, its grip on me would loosen. It would pass.",
                "Freedom is the open window through which pours the sunlight of the human spirit and human dignity.",
                "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
                "Too much sanity may be madness — and maddest of all: to see life as it is, and not as it should be!",
                "There is no greater agony than bearing an untold story inside you.",
                "No matter how hard the past is, you can always begin again.",
                "It always seems impossible until it is done" 
        ]

        var author = ["-- ANGIE THOMAS",
                "-- JOSEPH HELLER",
                "-- LOUISE ERDRICH",
                "-- Herbert Hoover",
                "-- William Saroyan",
                "-- DON QUIXOTE",
                "-- MAYA ANGELOU",
                "-- Buddha.",
                "-- Nelson Mandela."
    ]
    var randomNum = Math.floor(Math.random()*quote.length);

    document.getElementById("quote").innerHTML= quote[randomNum];
    document.getElementById("author").innerHTML= author[randomNum];

}


getQuote();