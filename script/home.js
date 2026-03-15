console.log("Home page initialized.");

function setActiveButton(activeId) {
    document.getElementById('all-btn').className = 'btn btn-outline btn-ghost btn-primary';
    document.getElementById('open-btn').className = 'btn btn-outline btn-ghost btn-primary';
    document.getElementById('closed-btn').className = 'btn btn-outline btn-ghost btn-primary';
    document.getElementById(activeId).className = 'btn btn-primary';
}

function loadAll(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res=>res.json())
    .then(data=>{
        displayAll(data.data);
        setActiveButton('all-btn');
    })
}

function loadOpen(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res=>res.json())
    .then(data=>{
        const openIssues = data.data.filter(issue => issue.status === 'open');
        displayAll(openIssues);
        setActiveButton('open-btn');
    })
}

function loadClosed(){
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res=>res.json())
    .then(data=>{
        const closedIssues = data.data.filter(issue => issue.status === 'closed');
        displayAll(closedIssues);
        setActiveButton('closed-btn');
    })
}

// {
//     "id": 1,
//     "title": "Fix navigation menu on mobile devices",
//     "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "help wanted"
//     ],
//     "priority": "high",
//     "author": "john_doe",
//     "assignee": "jane_smith",
//     "createdAt": "2024-01-15T10:30:00Z",
//     "updatedAt": "2024-01-15T10:30:00Z"
// }

const displayAll=(data)=>{

    console.log(data);
    let count=document.getElementById('issue-count');
    count.innerText=data.length;

    const cardContainer=document.getElementById('card-container');
    cardContainer.innerHTML="";
    data.forEach(issue => {
        const card=document.createElement('div');
        card.innerHTML=`
                  <div class="card shadow-sm rounded-md border-t-4 ${issue.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'} bg-[#FFFFFF] p-4 min-h-80">
                <div class=" flex items-center justify-between ">
                    <img src="${issue.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" alt="">
                    <button class="btn btn-soft ${issue.priority === 'high' ? 'btn-error' : issue.priority === 'medium' ? 'btn-warning' : ''} rounded-full px-6">${issue.priority === 'high' ? 'High' : issue.priority === 'medium' ? 'Medium' : 'Low'}</button>
                </div>
                <div>
                    <h2 class="text-lg font-semibold mt-2">${issue.title}</h2>
                    <p class="text-sm text-[#64748B] mt-1">${issue.description}</p>
                    <div class="mt-2 flex justify-start gap-2">
                        ${issue.labels.map((label, index) => {
                            // Default button classes
                            let btnClass = 'btn btn-soft btn-outline rounded-full';
                            // Add color only to first and second buttons
                            if (index === 0) {
                                btnClass += ' btn-warning';
                            } else if (index === 1) {
                                btnClass += ' btn-error';
                            }
                            // Other buttons stay with default outline
                            return `<button class="${btnClass}">${label}</button>`;
                        }).join('')}
                    </div>
                   <hr class="mt-3 border-t border-[#64748B30]">
                    <p class="text-sm text-[#64748B] mt-2">#${issue.id} by ${issue.author}</p>
                    <p class="text-sm text-[#64748B] mt-2">${new Date(issue.createdAt).toLocaleDateString()}</p>
                </div>

 
            </div>




        `
        cardContainer.appendChild(card);
    });
}
loadAll();
