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
    'tricky-circuits':{
        description:'This event provides insight into complex circuits and your ability to understand and Solve them through a very unique concept in which participants must solve the messed Up circuit and drink from the glass provided with each incorrect attempt.',
        rules:[
            'refer this', 
            'https://drive.google.com/file/d/1t6Pum_NrpNkxoK7Wz8SxbQh76-Ge9zHy/view?usp=share_link',

        ],
        contact:[
            {
                name:'Shantanu Mathpati',
                number:'9307515039'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'papel-electrica':{
        description:'In this 21st century, we are in habit of using electronic devices but now its time to test your skills in basic electrical and electronics. This event’s objective is to test your skills in basic electrical and electronic circuits. Apply your theoretical knowledge and practical skills to conquer this event .',
        rules:[
            'refer this', 
            'https://drive.google.com/file/d/1t6Pum_NrpNkxoK7Wz8SxbQh76-Ge9zHy/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shantanu Mathpati',
                number:'9307515039'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'circuital-dilemma':{
        description:'Challenge offers a 360-degree cycle of learning and understanding of the innovation. So if you have some extraordinary product do participate and explore the world of innovation with competitors.',
        rules:[
            'refer this', 
            'https://drive.google.com/file/d/1t6Pum_NrpNkxoK7Wz8SxbQh76-Ge9zHy/view?usp=share_link',
        ],
        contact:[
            {
                name:'',
                number:''
            }, 
            {
                name:'Shantanu Mathpati',
                number:'9307515039'
            }
        ]
    },
    'lit-up-here':{
        description:'Quiz gives us an instant idea of how much knowledge we have and how much there is room for gathering it more. Students get to showcase their talent as well as knowledge here. Get ready to lit up here!!!',
        rules:[
            'refer this', 
            'https://drive.google.com/file/d/1t6Pum_NrpNkxoK7Wz8SxbQh76-Ge9zHy/view?usp=share_link',
        ],
        contact:[
            {
                name:'Shantanu Mathpati',
                number:''
            }, 
            {
                name:'Shantanu Mathpati',
                number:''
            }
        ]
    },

}