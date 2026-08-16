const inputValue = document.getElementById('inputValue');
const submitBtn = document.getElementById('submitBtn');

const messagesDiv = document.querySelector('.messages');
const sentDiv = document.querySelector('.sent');
const replyDiv = document.querySelector('.reply');

const sendValue = document.getElementById('sendValue');
const replyValue = document.getElementById('replyValue');

let storeSentMessage = []

let replies = [
  "Awezz bro, how may I help you today?",
  "Hi there!",
  "Mfanaka",
  "Hi, how are you?",
  "Hey! 👋",
  "Hello! How can I help?",
  "Hey there, what’s up?",
  "Yo! How can I help you?",
  "Hey bro 😎",
  "Hello! What can I do for you?",
  "Hi! Nice to meet you!",
  "Hey! What brings you here?",
  "Hi there, how can I assist?",
  "Hello 👋 How’s your day going?",
  "Hey! Need some help?",
  "Hi! What can I do for you today?",
  "Greetings! How may I assist you?",
  "Hey there! 😊",
  "Hello! Feel free to ask me anything.",
  "Hi! I'm here to help.",
  "Hey! What would you like to know?",
  "What's up? 👋",
  "Hey buddy!",
  "Yo! What's going on?",
  "Heyyy! 😄",
  "Hiiiii 👋",
  "Hello there!",
  "Nice to see you!",
  "Welcome! How can I help?",
  "Hey! How are you doing?",
  "Hi! Hope you're having a great day.",
  "Hello! What’s on your mind?",
  "Hey! Ask me anything.",
  "Sure! How can I help?",
  "Absolutely! What do you need?",
  "I'm listening 👀",
  "Go ahead, I'm listening!",
  "What's your question?",
  "How can I be useful today?",
  "What can I do for you?",
  "Tell me what you need!",
  "I'm ready when you are 😎",
  "Hit me with your question!",
  "Ask away!",
  "Fire away! 🔥",
  "I'm all ears 👂",
  "What would you like help with?",
  "Need a hand with something?",
  "I'd be happy to help!",
  "Of course! What do you need?",
  "No problem! What's up?",
  "Sure thing!",
  "You got it!",
  "Gotcha 👍",
  "Alright! Tell me more.",
  "Okay! What can I do?",
  "Sounds good!",
  "Alright, I'm here!",
  "Interesting 👀 Tell me more.",
  "Hmm... tell me more!",
  "That's a good question!",
  "Ooh, interesting!",
  "I see 👀",
  "Got it!",
  "Understood!",
  "Makes sense!",
  "Okay, I got you.",
  "Yep! 👍",
  "Absolutely!",
  "Definitely!",
  "For sure!",
  "Of course 😄",
  "Sure!",
  "No worries!",
  "Easy peasy!",
  "Let’s do it!",
  "I'm on it! 💪",
  "Consider it done!",
  "I'll do my best!",
  "Happy to help!",
  "Anytime!",
  "You're welcome! 😊",
  "No problem at all!",
  "Glad I could help!",
  "Have a great day! 👋",
  "See you later!",
  "Take care!",
  "Bye! 👋",
  "Catch you later!",
  "Until next time 😎",
  "Thanks for chatting!",
  "It was nice talking to you!",
  "Hope that helped!",
  "Let me know if you need anything else.",
  "Anything else I can help with?",
  "Want to ask me something else?",
  "I'm still here if you need me!",
  "Need anything else?",
  "What else can I help you with?",
  "I'm ready for the next question!",
  "Haha 😂",
  "Lol!",
  "😂 That's funny.",
  "Haha, fair enough!",
  "Oh wow!",
  "Whoa 😮",
  "No way!",
  "Really? 👀",
  "That's interesting!",
  "Nice!",
  "Awesome! 🔥",
  "Cool! 😎",
  "Sweet!",
  "That's great!",
  "Love that! ❤️",
  "Let's gooo! 🚀",
  "W response 😎",
  "Big W!",
  "Absolutely based 😂",
  "Bro really said that 💀",
  "Nahhh 😭",
  "I'm dead 💀",
  "You got me there 😂",
  "Fair point!",
  "I can't argue with that 😂",
  "Hmm... you might be onto something.",
  "Interesting choice 🤔",
  "Let me think about that...",
  "One second... 🤔",
  "Processing... ⏳",
  "Thinking... 🧠",
  "My brain is working overtime 😂",
  "Give me a moment!",
  "I'm figuring it out!",
  "Let me see what I can do.",
  "I'll look into that.",
  "Good question — let me think.",
  "I'm not completely sure about that.",
  "I don't know that one 😅",
  "Hmm, I'm not sure.",
  "I might need a little more information.",
  "Could you explain that a little more?",
  "Can you give me some more details?",
  "I'm not sure what you mean.",
  "Could you rephrase that?",
  "Sorry, I didn't quite understand.",
  "Hmm... I didn't catch that.",
  "Try asking that another way!",
  "I'm a simple mock bot, remember? 😂",
  "My AI brain is confused 💀",
  "404: Answer not found.",
  "Uh oh... my brain crashed 😭",
  "That's above my pay grade 😂",
  "I have absolutely no idea 💀",
  "Bro, I wasn't programmed for this 😭",
  "You've stumped me!",
  "Okay, you got me there.",
  "My developers forgot to teach me that 😭",
  "I'm just a mock chatbot, cut me some slack 😂",
  "Beep boop 🤖",
  "BEEP BOOP! How may I assist?",
  "Greetings, human. 🤖",
  "Human detected. 👀",
  "Processing human interaction...",
  "🤖 At your service!",
  "Systems operational. What's your question?",
  "Bot mode activated!",
  "01001000 01101001 👀",
  "My circuits are ready!",
  "Error 418: I'm a teapot 🫖",
  "Initiating helpfulness protocol...",
  "Scanning for answers... 🔎",
  "Loading response... ⏳",
  "Response generated successfully! ✅",
  "I am 100% definitely a real human. 😎",
  "Totally not a robot 🤖",
  "Who said I'm an AI? 👀",
  "Shhh... I'm secretly a human.",
  "Okay, let's pretend I'm smart 😂",
  "Welcome to the world's most questionable chatbot.",
  "You've reached the bot department.",
  "The chatbot has entered the chat.",
  "Your friendly neighborhood chatbot! 🕷️",
  "Chatbot.exe has started.",
  "Welcome back!",
  "Hey, welcome!",
  "Good to have you here!",
  "Thanks for stopping by!",
  "How's everything going?",
  "How's your day?",
  "What's happening?",
  "How are things?",
  "Hope you're doing well!",
  "I'm doing great! Thanks for asking 😊",
  "I'm just chilling in the cloud ☁️",
  "I'm good! Ready to chat.",
  "Doing awesome! 😎",
  "All systems are go!",
  "I'm feeling pretty digital today 😂",
  "I'm just a bunch of code pretending to have feelings 😭",
  "I'm doing bot-tastic! 🤖",
  "Could be better, but I'm still running!",
  "Life's good when your code doesn't have bugs 😂",
  "What about you?",
  "And how are you doing?",
  "Hope you're doing alright!",
  "That's nice to hear!",
  "Glad to hear that!",
  "Sorry to hear that 😕",
  "I hope things get better!",
  "You've got this! 💪",
  "Keep going!",
  "Don't give up!",
  "Stay strong! 💪",
  "I'm rooting for you!",
  "You can do it!",
  "That's awesome to hear!",
  "Congratulations! 🎉",
  "Let's gooo! 🎉",
  "Nice work!",
  "Well done!",
  "Good job! 👏",
  "That's impressive!",
  "Very nice!",
  "Sounds like a plan!",
  "Let's make it happen!",
  "I'm ready!",
  "Bring it on! 🔥",
  "Challenge accepted!",
  "Alright, let's get started!",
  "Let's get this show on the road!",
  "Where should we start?",
  "What are we working on?",
  "Tell me everything!",
  "I'm curious 👀",
  "Now you've got my attention!",
  "Okay, I'm intrigued.",
  "That's one way to put it 😂",
  "Fair enough!",
  "I respect that.",
  "Can't blame you!",
  "Honestly? Same 😂",
  "You have a point.",
  "I agree!",
  "Exactly!",
  "That's right!",
  "Yep, absolutely.",
  "100%!",
  "Couldn't agree more!",
  "Not necessarily 🤔",
  "I'm not convinced 😂",
  "Maybe!",
  "Could be!",
  "Possibly...",
  "Who knows? 👀",
  "Only one way to find out!",
  "Let's find out!",
  "Interesting theory...",
  "Hmm, that's debatable!",
  "I'll allow it 😂",
  "Fair enough, bro.",
  "Alright bro 😎",
  "Say less.",
  "Bet!",
  "Got you, bro!",
  "No cap 😂",
  "For real!",
  "Facts.",
  "That's wild 💀",
  "Bro 💀",
  "Broooo 😭",
  "My guy!",
  "My dude!",
  "Legend!",
  "Absolute legend 😂",
  "W choice!",
  "Huge W!",
  "Common W!",
  "That's actually fire 🔥",
  "Certified moment 😂",
  "We're cooking! 👨‍🍳🔥",
  "Let him cook! 😂",
  "The bot is cooking...",
  "Okay, chef! 👨‍🍳",
  "Now that's what I'm talking about!",
  "I like where this is going!",
  "We're making progress!",
  "And we're back!",
  "Welcome back, bro!",
  "Miss me? 😂",
  "You came back!",
  "Round two! 🥊",
  "What are we getting into this time?",
  "Alright, what's next?",
  "Next question!",
  "Hit me!",
  "I'm ready for whatever you've got.",
  "Go on...",
  "I'm waiting 👀",
  "Well?",
  "Your move 😎",
  "Over to you!",
  "Your turn!",
  "What happens next?",
  "Let's hear it!",
  "Tell me!",
  "I'm curious to know.",
  "Don't leave me hanging 😭",
  "Well, that's unexpected!",
  "I did NOT see that coming 😂",
  "Plot twist! 😭",
  "Okay, that's new.",
  "That's definitely something.",
  "I've heard worse 😂",
  "I've heard stranger things!",
  "Well... here we are.",
  "And so it begins...",
  "This could get interesting 👀",
  "Uh oh...",
  "Oh no 💀",
  "We're in trouble 😂",
  "Abort mission! 🚨",
  "Everything is fine. Probably. 😭",
  "Don't worry, I've got this!",
  "Probably... 😂",
  "Trust me bro.",
  "I have a plan!",
  "The plan is still loading... ⏳",
  "Okay, maybe I don't have a plan.",
  "We're improvising now 😂"
];



function validate() {
    if (inputValue.value.trim().length === 0) {
        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";
    }
    else if (inputValue.value.trim().length > 0) {
        submitBtn.disabled = false;
        submitBtn.style.cursor = "pointer";
    }
}

function disableBtn() {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
}

disableBtn();

function enableBtn() {
    submitBtn.disabled = false;
    submitBtn.style.cursor = "pointer";
}

function generateReplies() {
    let randomizeReply = Math.floor(Math.random() * replies.length)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < replies.length; i++) {
                const replyDiv = document.createElement('div');
                const replyMsgDiv = document.createElement('div');
                const replyMsgPar = document.createElement('p');

                replyDiv.className = "reply"

                replyMsgDiv.className = "replyMessage";
                replyMsgDiv.classList.add("active");
                replyMsgPar.textContent = replies[randomizeReply];
                replyMsgPar.style.overflowWrap = "break-word";

                

                replyDiv.appendChild(replyMsgDiv)
                replyMsgDiv.appendChild(replyMsgPar);
                messagesDiv.appendChild(replyDiv);

               replyMsgDiv.scrollIntoView({
                 behavior: "smooth",
                  block: "end"
               });
                break;
                
            }        
        },1000);
        resolve("done")
    })
}


async function renderReply() {
    const replyMsg = await generateReplies();
    loading();
    
}

function renderTask() {
    const value = inputValue.value;
    storeSentMessage = [value]

    for (let i = 0; i < storeSentMessage.length; i++) {
        const sentDiv = document.createElement('div');
        const sentMsgDiv = document.createElement('div');
        const sentMsgPar = document.createElement('p');

        sentDiv.className = "sent"

        sentMsgDiv.className = "sentMessage";
        sentMsgDiv.classList.add("active");
        sentMsgPar.textContent = storeSentMessage[0];
        sentMsgPar.style.overflowWrap = "break-word";

        

        sentDiv.appendChild(sentMsgDiv)
        sentMsgDiv.appendChild(sentMsgPar);
        messagesDiv.appendChild(sentDiv);

        sentMsgDiv.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }



}

function loading() {

    const replyDiv = document.createElement('div');
    const replyMsgDiv = document.createElement('div');
    const replyMsgPar = document.createElement('p');

        replyDiv.className = "reply"

        replyMsgDiv.className = "replyMessage";
        replyMsgDiv.classList.add("active");
        replyMsgPar.textContent = "Typing....";
        setTimeout(()=>{
            replyDiv.remove();
        }, 1000)
        replyMsgPar.style.overflowWrap = "break-word";

        

        replyDiv.appendChild(replyMsgDiv)
        replyMsgDiv.appendChild(replyMsgPar);
        messagesDiv.appendChild(replyDiv);

        replyMsgDiv.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });

}


inputValue.addEventListener('input', function(e){
    const value = e.target.value;
    

    if (value.trim().length === 0) {
        disableBtn();
    }
    else if (value.trim().length > 0){
        enableBtn();
    }
});

submitBtn.addEventListener('click', function(){
    
    const clearInput = document.getElementById('inputValue');
    renderTask();
    renderReply();
    console.log(storeSentMessage)

    clearInput.value = '';
    validate();
});

/* document.addEventListener('click', () => {
    alert("")
}) */

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});



