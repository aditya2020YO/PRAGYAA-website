const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
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

var currentEvent = {};


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
    'cadwar':{
        description:'It is a single-player game and a contest in which participants test what they know by answering questions on one or more topics about Hollywood movies.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1qb5GzBOsZ4q3hTc-_jN5MPljLbTzp6_R/view?usp=share_link',


        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'Shantanu ',
                number:'9307515039'
            }
        ]
    },
    'swipe-your-slide':{
        description:'You have to pass the holder through the loop. If it touches the loop, you will be disqualified.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1qb5GzBOsZ4q3hTc-_jN5MPljLbTzp6_R/view?usp=share_link',
            
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'Shantanu ',
                number:'9307515039'
            }
        ]
    },
    'mechwiz':{
        description:'It is a single-player game and a contest in which participants test what they know by answering questions on one or more topics about Hollywood movies.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/1qb5GzBOsZ4q3hTc-_jN5MPljLbTzp6_R/view?usp=share_link',
        ],
        contact:[
            {
                name:'Yash Kale',
                number:'7378671184'
            }, 
            {
                name:'Shantanu ',
                number:'9307515039'
            }
        ]
    },

}