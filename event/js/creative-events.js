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
    if(counter >= 1){
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
    'mock-placement':{
        description:'For a job, everyone has to go through interviews. So, we have a special event for undergraduates, if you want to test your abilities in interviews then this event that is “MOCK PLACEMEMNT” is for you where you will not only gain experience but if you perform well you can also win some exciting cash prizes. In this participants have to gone through specified rounds and procedure for wining, for various Branch of engineering this platform gives an excellent opportunity to perform.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'knowledge-hunt':{
        description:'During a shark tank competition, participants present their business ideas or prototypes to a panel of judges, who evaluate them based on factors such as market potential, profitability, and feasibility. The judges then provide feedback, guidance, and sometimes funding to the best ideas and teams.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:''
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'hunky-brains':{
        description:'In this event participant have to make vlog in limited duration of college campus combining various aspects of college.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'readathon':{
        description:'It is very innovative and creative competition specifically led for students ( school students ) , while having conversation with A , A says “innovation leads to progress ” and suggest B take part in “ junior Scientist ” a state science Exhibition , one of the best events of PRAGYAA which provides students of school a platform to explore their innovative minds',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'space-buzz':{
        description:'Every team need to win on auction table before playing on actual ground, if u also  have some skills to win, take participation in this crazy event',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'junior-scientist':{
        description:'involve solving complex mathematical problems, conducting experiments or simulations, or presenting research findings related to mathematical concepts. Participants may compete individually or as part of a team and may be judged on their accuracy, speed, and creativity in solving mathematical problems.The problems presented in mathematics events can cover a wide range of topics, including algebra, geometry, trigonometry, calculus, number theory, and statistics. ',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'talking-pen':{
        description:'Blogging refers to writing, photography, and other media that is self-published online. “TALKING PEN” provides an opportunity to the individuals to write diary-style entries which would let them share their contents. Exciting cash prizes are waiting for the most effective and influencing blogger. And don’t worry there are multiple languages from which you can choose to shape your imagination.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'animation-express':{
        description:'Are you a comic book fan? Do you also like writing them? Then grab a ticket and get on this fun and exciting Express. In this event you have to use your imagination and sketch a “DOODLE” from the given conditions and in next round participants have to make a small comic script using their sketched doodle as the main character in the previous round.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'be-an-entrepreneur':{
        description:'An entrepreneur is an individual who sets up a new business, bearing most of the risks and enjoying most of the rewards. Entrepreneurs who prove to be successful in taking on the risks of a startup are rewarded with profits, fame and continued growth opportunities. Is your dream to become an entrepreneur? Can you solve the real problems faced by startups? This event gives you an opportunity to present your ideas on how you can solve them and also an experience for the same.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'vector-art':{
        description:'Our college youth is keen interested in making vector art of famous cricketers, youtubers ,other  famous personalities. If you are one of those, then here’s a platform for you artists to explore and enhance your skills. One with a more clearer, accurate and resemblant vector image can win the event.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NJgQihsGhUQhqAyAMHlqslzt1pIQSXbB/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
}