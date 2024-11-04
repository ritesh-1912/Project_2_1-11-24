var state={
    taskList:[
        {
            imageURL:"",
            taskTitle:"",
            taskType:"",
            taskDesc:""
        },
        {
            imageURL:"",
            taskTitle:"",
            taskType:"",
            taskDesc:""
        },
        {
            imageURL:"",
            taskTitle:"",
            taskType:"",
            taskDesc:""
        },
        {
            imageURL:"",
            taskTitle:"",
            taskType:"",
            taskDesc:""
        },
        {
            imageURL:"",
            taskTitle:"",
            taskType:"",
            taskDesc:""
        },
    ],
};
const state={
    taskList:[],
}

// DOM Operations
const taskContents=document.querySelector(".task_contents");
const taskModal=document.querySelector(".task_modal_body");

// Template for card on screen
const htmlTaskContent = ({id, title, description, type, url }) => `
    <div class = 'col-md-6 col-lg-4 mt-3' id= ${id}>
        <div class = 'card shadow-sm task_card'>
            <div class = 'card-header' d-flex justify-content-end task_card_header'>
            <button type='button' class='btn btn-outline-light mr-2' name=${id}><i class='fas fa-pencil-alt name=${id}'></i>
            </button>

            <button type='button' class='btn btn-outline-danger mr-2' name=${id}><i class='fas fa-trash-alt name=${id}'></i>
            </button>
            </div>
            <div class = 'card-body'>
            ${
                url && 
                `<img width= '100%' src= ${url} alt= "Card Image" class= 'card-img-top md-3 rounded-lg'/>`
            }
            <h4 class= 'card-title task_card_title'>${title}</h4>
            <p class='description trim-3-lines text-muted'>${description}</p>
                <div class= 'tags text-white d-flex flex-wrap'>
                    <span>class ='badge text-bg-primary m-1' ${type}</span>
                </div>
            </div>
                <div class= 'card-footer'>
                    <button type= 'button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
                </div>
        </div>
    </div>
`;

// Modal Body on-click

const htmlModalContent = ({id, title, description, url }) => {
    const date = newDate(parseInt(id));
    return `
    <div id =${id}>
        ${
            url && 
            `<img width= '100%' src= ${url} alt= "Card Image" class= 'img-fluid place_holder_image mb-3'/>`
        }
        <strong class = 'text-muted text-sm'>Created on: ${date.toDateString()}</strong>
        <h2 class = 'my-3'>${title}</h2>
        <p class = 'text-muted'>${description}</p>
    </div>`;
};

const updateLocalStorage =() => {
    localStorage.setItem(
        "task",
        JSON.stringify({
            tasks: state.taskList,
        })
    );
};