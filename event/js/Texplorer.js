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
            'refer this',
            'https://drive.google.com/file/d/17lbjHaZQhBj0aTiJgWXsMKBkWxp5b0y_/view?usp=share_link',
        ],
        contact:[
            {
                name:'Vinay Sharma',
                number:'9987953644'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'reverse-coding':{
        description:'Style your partner is an event in which participants are supposed to design and build 3 attires based on any genre and display it on your partner. Extra credits will be assigned for your new innovative ideas.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/17lbjHaZQhBj0aTiJgWXsMKBkWxp5b0y_/view?usp=share_link',
        ],
        contact:[
            {
                name:'Vinay Sharma',
                number:'987953644'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'app-idea':{
        description:'Quiz is based on textile technology and engineering.',
        rules:[
             
            'refer this',
            'https://drive.google.com/file/d/17lbjHaZQhBj0aTiJgWXsMKBkWxp5b0y_/view?usp=share_link',
        ],
        contact:[
            {
                name:'Vinay Sharma',
                number:'9987953644'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'code-talk':{
        description:'Participants have to select any one topic from the provided list(related to textile technology) and present ppt.',
        rules:[
            'refer this',
            'https://drive.google.com/file/d/17lbjHaZQhBj0aTiJgWXsMKBkWxp5b0y_/view?usp=share_link',
        ],
        contact:[
            {
                name:'Vinay Sharma',
                number:'9987953644'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    

}