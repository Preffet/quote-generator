const QUOTES = [
        {
            quote: "Through others we become ourselves.",
            author: "Lev S. Vygotsky"
        },
        {
            quote: "Success comes from the inside out. In order to change what is on the outside, you must first change what is on the inside.",
            author: " Idowu Koyenikan"
        },
        {
            quote: "Every moment of one’s existence, one is growing into more or retreating into less.",
            author: "Norman Mailer"
        },
        {
            quote: "Create with the heart; build with the mind.",
            author: "Criss Jami"
        },
        {
            quote: "The only person you are destined to become is the person you decide to be.",
            author: "Ralph Waldo Emerson"
        },
        {
            quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
            author: "Hemingway"
        },
        {
            quote: "Try to be a rainbow in someone's cloud.",
            author: "Maya Angelou"
        },
        {
            quote: "Surround yourself with only people who are going to lift you higher. ",
            author: "Oprah Winfrey"
        },
        {
            quote: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you.",
            author: "Lupita Nyong'o"
        },
            {
            quote: "I don't harp on the negative because if you do, then there's no progression.There's no froward movement. You got to always look on the bright side of things, and we are in control. Like, you have control over the choices you make.",
            author: "Taraji P. Henson"
            },
                        {
            quote: "Life is what happens when you’re busy making other plans.",
            author: "John Lennon"
            },
            {
            quote: "You only live once, but if you do it right, once is enough.",
            author: "Mae West"
            },

            {
            quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
            author: "Thomas A. Edison"
            },
            {
            quote: "Never let the fear of striking out keep you from playing the game.",
            author: "Babe Ruth"
            },
            {
            quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
            author: "Steve Jobs"
            },
            {
            quote: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"      
            },
            {
            quote: "Life is not a problem to be solved, but a reality to be experienced.",
            author: "Soren Kierkegaard"
            },
            {
            quote: "“Instead of worrying about what you cannot control, shift your energy to what you can create.”",
            author: "Roy T. Bennett"
            },
                {
            quote: "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.",
            author: "Roy T. Bennett"
            },
            {
            quote: "Start where you are. Use what you have. Do what you can.",
            author: "Arthur Ashe"
            },
            {
            quote: "Do what is right, not what is easy nor what is popular.",
            author: "Roy T. Bennett"
            },
        ]
        window.onload = init;
        /*when the page loads*/
        var randomIndex = Math.floor(Math.random()*QUOTES.length) 
        function init(){
        getNewQuote();
        }

        function getRandomDarkColour(){
        return "hsl(" + 360 * Math.random() + ',' +
                    (60 + 10 * Math.random()) + '%,' +
                    (25 + 10 * Math.random()) + '%)'
        }
        /*get a new quote*/
        function getNewQuote()
        {
        /*generate a new random number*/
        /*which is different from the last 'randomIndex' */
        let tempRandom=randomIndex;
        while(tempRandom==randomIndex){
            tempRandom=Math.floor(Math.random()*QUOTES.length); 
        }
        randomIndex = tempRandom;

        /*get the text element*/
        document.getElementById("text").innerText = QUOTES[randomIndex].quote;
        /*get the author*/
        document.getElementById("author").innerText = "- "+QUOTES[randomIndex].author; 
        /*get a link to tweet the quote*/
        let twitterLink = "https://twitter.com/intent/tweet?&text=" + QUOTES[randomIndex].quote +" -"+ QUOTES[randomIndex].author;
        document.getElementById("tweet-quote").href = twitterLink
        /*get random colour*/
        var colour = getRandomDarkColour()
        document.body.style.background = colour;
        document.getElementById("new-quote").style.background = colour;
        document.getElementById("twitter-ico").style.color = colour;
        }