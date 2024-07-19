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
    if(counter >= limiter){
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
    'code-in-less':{
        description:'”.',
        rules:[
           
        ],
        contact:[
            {
                name:'Shashank',
                number:'7498527117'
            }, 
            {
                name:'Shashank',
                number:''
            }
        ]
    },
    'reverse-coding':{
        description:'Get ready to unleash your coding power in a team coding contest like no other! This contest brings together groups of 3 to 4 coders to tackle some of the interesting coding problems in a race against time. With your teammates by your side, you will have to use your combined skills and knowledge to conquer the obstacles and write efficient, high-quality code. The clock is ticking, and the pressure is on as you work together to beat the competition and emerge as the Victorious team. But this contest is about more than just winning. It is about collaboration, creativity, and pushing the limits of what you can accomplish together. So gather your team, get ready to code, and get ready to conquer. ',
        rules:[
             'refer this',
             'https://drive.google.com/file/d/1NaMTWaWVHjPIHwr7drY1pyxAjVAf3VM0/view?usp=share_link',
            
        ],
        contact:[
            {
                name:'Shashank',
                number:'7498527117'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'app-idea':{
        description:'Get ready for a coding extravaganza! where you will put your coding skills to the test in a solo challenge. In this contest, you will be given a set of problems to solve using your programming expertise. The goal is to write efficient and accurate code to solve given problems in the shortest amount of time. The contestant with the most correct solutions and the fastest overall time will be declared the winner.  This is your chance to showcase your coding skills and prove that you have what it takes to be the best. So gear up and get ready to code  your way to victory!',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1NaMTWaWVHjPIHwr7drY1pyxAjVAf3VM0/view?usp=share_link',
            
        ],
        contact:[
            {
                name:'Shashank',
                number:'7498527117'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'code-talk':{
        description:'A 1vs1 coding contest is an electrifying competition that brings together the best coders to showcase their skills and push the limits of their abilities. With each round, the stakes get higher, and the challenges become more intense as the contestants fight to become the ultimate coding champion. The competition is designed to be fast paced, exciting, and challenging, with each round bringing new challenges. Whether you are a seasoned pro or just starting out, this 1vs1 coding contest is the perfect platform to test your skills, push your limits, and prove that you have what it takes to be the best coder in the game. So gear up, get ready, and get set for the ultimate coding showdown!',
        rules:[
            'refer this',
             'https://drive.google.com/file/d/1NaMTWaWVHjPIHwr7drY1pyxAjVAf3VM0/view?usp=share_link',
            
        ],
        contact:[
            {
                name:'Shashank',
                number:'7498527117'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    

}