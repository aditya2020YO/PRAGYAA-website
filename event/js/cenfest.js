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
        description:'Students will design and build their own bridges out of popsicle sticks. The competition is open for all Degree and Diploma students, of all the branches. Students may form teams in groups of 2 to 4(max). Team members can be from different academic years or branches.',
        rules:[
           'refer this link',
            'https://drive.google.com/file/d/199hBMjumhz3GzEZpR_IC_9WyhUUKYOla/view?usp=share_link',
        
            

        ],
        contact:[
            {
                name:'Prajwal Sarawade',
                number:'+919579241764'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'civil-innovators-ppt':{
        description:'Miniature Model Making Competition wherein participants actually get to experience the process of constructing a structure right from its foundation to finishing. The competition is open for all Degree and Diploma students, of all the branches. Students may form teams in groups of 2 to 5(max). Team members can be from different academic years or branches',
        rules:[
            'refer this link',
            'https://drive.google.com/file/d/199hBMjumhz3GzEZpR_IC_9WyhUUKYOla/view?usp=share_link',
        
            
        ],
        contact:[
            {
                name:'Prajwal Sarawade',
                number:'+919579241764'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'build-it-up':{
        description:'In Clash of Concrete participants have to design a most efficient and sustainable concrete mix proportion. The competition is open for all Degree and Diploma students, of all the branches. Students may form teams in groups of 3(max). Team members can be from different academic years or branches.',
        rules:[
            'refer this link',
            'https://drive.google.com/file/d/199hBMjumhz3GzEZpR_IC_9WyhUUKYOla/view?usp=share_link',
        
            
        ],
        contact:[
            {
                name:'Prajwal Sarawade',
                number:'+919579241764'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'civi-q':{
        description:'It is a national-level quiz competition which would test and tease participants’ brains accompanied with lots of fun and entertainment. Try getting yourself tested, or be assured that Civi-Q would make you know what you didn’t.',
        rules:[
            'refer this link',
            'https://drive.google.com/file/d/199hBMjumhz3GzEZpR_IC_9WyhUUKYOla/view?usp=share_link',
        
        ],
        contact:[
            {
                name:'Prajwal Sarawade',
                number:'+919579241764'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },
    'civil-contractors-league':{
        description:'Have you ever noticed the beauty of highways. Then you might have a question that how these highways are to be developed? Which machinery are used? & many more questions, then stop…..'+
        'Without thinking too much let us take the opportunity that we have created for you guys. This event will expose your management skills, technical knowledge, presence of mind, real problems solutions techniques and many more. This will give you an experience about how these construction firm plans are executed to their desired structure.',
        rules:[
            'refer this link',
            'https://drive.google.com/file/d/199hBMjumhz3GzEZpR_IC_9WyhUUKYOla/view?usp=share_link',
        ],
        contact:[
            {
                name:'Prajwal Sarawade',
                number:'+919579241764'
            }, 
            {
                name:'',
                number:''
            }
        ]
    },

}