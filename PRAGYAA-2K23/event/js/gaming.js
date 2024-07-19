const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const btnNext = document.querySelector('.nextBtn');
const btnPrev = document.querySelector('.prevBtn');
const cardWidth = cards[0].clientWidth;
const modal = document.querySelector('#modal');
const contact_modal = document.querySelector('#contact-modal');
const description = document.querySelector('#description');
const rule_list = document.querySelector('#rule-list');
const close = document.querySelector('.btn-close');
const contact = document.querySelector('.btn-contact');
const contact_close = document.querySelector('.btn-contact-close');
const contact_1 = document.querySelector('#contact-name-1');
const contact_no_1 = document.querySelector('#contact-number-1');
const contact_2 = document.querySelector('#contact-name-2');
const contact_no_2 = document.querySelector('#contact-number-2');
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var counter = 0;
var limiter = cards.length - 3;

var currentEvent = {};

if(isMobile){
    btnNext.classList.add('hidden');
    btnPrev.classList.add('hidden');
}

btnNext.addEventListener('click', () => {
    if(counter < limiter){
        counter++;
    }
    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -cardWidth * counter +"px)";
});

btnPrev.addEventListener('click', () => {
    if(counter >= limiter-1){
        counter--;
    }
    cardContainer.style.transition = "transform 0.4s ease-in-out";
    cardContainer.style.transform = "translateX("+ -cardWidth * counter +"px)";
});

cardContainer.addEventListener('click', (event) => {
    const target = event.target.id;
    if(target)
    {
        currentEvent = events[target];
        description.innerHTML = currentEvent.description;
        
        currentEvent.rules.forEach((rule)=>{
            var node = document.createElement("li");
            var textnode = document.createTextNode('- '+rule); 
            node.appendChild(textnode);
            node.classList.add('text-gray-200');
            rule_list.appendChild(node);
        });
        
        modal.classList.remove('hidden');
        
    }
});

close.addEventListener('click', () => {
    modal.classList.remove('animate__rollIn');
    modal.classList.add('animate__rollOut');
    contact_modal.classList.add('hidden');
    setTimeout(()=>{
        modal.classList.add('hidden');
        modal.classList.remove('animate__rollOut');
        modal.classList.add('animate__rollIn');
        rule_list.innerHTML = '';
    }, 1000);
});

contact.addEventListener('click', () => {
    contact_1.innerHTML = currentEvent.contact[0].name;
    contact_no_1.innerHTML = currentEvent.contact[0].number;
    contact_2.innerHTML = currentEvent.contact[1].name;
    contact_no_2.innerHTML = currentEvent.contact[1].number;
    contact_modal.classList.remove('hidden');
});

contact_close.addEventListener('click', () => {
    contact_modal.classList.remove('animate__zoomIn');
    contact_modal.classList.add('animate__zoomOut');
    setTimeout(()=>{
        contact_modal.classList.add('hidden');
        contact_modal.classList.remove('animate__zoomOut');
        contact_modal.classList.add('animate__zoomIn');
    }, 1000);
});

const events = {
    'master-blocks':{
        description:'VEX Arena 3.0 is the ultimate virtual reality experience for everyone! Dive deep into the action in thrilling virtual jousting, all while roaming freely. Explore virtual environments of up to 2500 m2 with or against your friends! Armed with your blasters, compete against other players in multiple game modes to become the champion of the arena. Accumulate points and start climbing the ranks to be the best VEX Arena player in the world!',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1h4vIjjeoH2Nx1HxFxcN4YRt0dUBhGYxD/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shashank Gitte',
                number:'7498527117'
            }, 
            {
                name:'',
                number:'',
            }
        ]
    },
    'civil-innovators-ppt':{
        description:'Think of yourself as the prodigy of Valorant? Here’s an opportunity to prove that your team is better than others. Compete against the likes of yourself, who consider themselves the best. Fight against them to prove your dominance and emerge as the Champions of Valorant.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1h4vIjjeoH2Nx1HxFxcN4YRt0dUBhGYxD/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shashank Gitte',
                number:'7498527117'
            }, 
            {
                name:'',
                number:'',
            }
        ]
    },
    'build-it-up':{
        description:'"COD" is a popular multiplayer online battle royale-style game where players battle it out to be the last person standing. A COD game competition is a tournament-style event where players compete against each other to determine who is the best at the game. Players are usually divided into teams or compete as individuals. The objective is to eliminate all other players and be the last person standing on the map.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1h4vIjjeoH2Nx1HxFxcN4YRt0dUBhGYxD/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shashank Gitte',
                number:'7498527117'
            }, 
            {
                name:'',
                number:'',
            }
        ]
    },
    'civi-q':{
        description:'“Smash Karts”  is a thrilling and action-packed competition that involves players driving around a virtual arena in their own customized karts while trying to eliminate opponents by smashing them with various weapons and power-ups. The objective of the competition is to be the last player standing and earn the highest score possible.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1h4vIjjeoH2Nx1HxFxcN4YRt0dUBhGYxD/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shashank Gitte',
                number:'7498527117',
            }, 
            {
                name:'',
                number:'',
            }
        ]
    },
    'civil-contractors-league':{
        description:'Have you ever noticed the beauty of highways. Then you might have a question that how these highways are to be developed? Which machinery are used? & many more questions, then stop…..'+
        'Without thinking too much let us take the opportunity that we have created for you guys. This event will expose your management skills, technical knowledge, presence of mind, real problems solutions techniques and many more. This will give you an experience about how these construction firm plans are executed to their desired structure.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1h4vIjjeoH2Nx1HxFxcN4YRt0dUBhGYxD/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shashank Gitte',
                number:'7498527117'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },

}