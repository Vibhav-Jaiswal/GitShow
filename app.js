const userNameInput = document.getElementById('userName');
const showDetailsButton = document.getElementById('showDetails');
const profileInfoDiv = document.getElementById('profileInfo');
const reposInfoDiv = document.getElementById('reposInfo');



//******** using async and await *************.

// Function to fetch and display repository information
function showReposInfo(userName){

    // Fetch repositories data from GitHub API
    fetch(`https://api.github.com/users/${userName}/repos`)
         .then(res => res.json()) // Convert response to JSON
         .then(projects => {
            console.log(projects); // Log the projects data for reference
            
             // Iterate through each project and create repository cards
            for(let i=0;i<projects.length;i++){
                reposInfoDiv.innerHTML +=

                // Insert HTML template for displaying repository details
                `
                <div class="card">
                    <div class="card-body">
                        <div class="card_title">${projects[i].name}</div>
                        <div class="card_subTitle">${projects[i].language}</div>
                        <div class="card-text">
                          <button>
                             <a href=${projects[i].html_url}>
                               Do Checkout Projects.
                             </a>
                          </button>
                        </div>
                    </div>
                </div>
    
                `
            }
         })
}


// Add event listener for the "Show Details" button
showDetailsButton.addEventListener('click', async () => {
    const userName = userNameInput.value;

     // Fetch user data from GitHub API
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json(); // Convert response to JSON
          
    // Call functions to display profile and repository information
    showProfile(data);  
    showReposInfo(userName);
})

// Function to display user profile information
function showProfile(data){
    profileInfoDiv.innerHTML = 

            // Insert HTML template for displaying profile details

            `
            <div class="card">
                <div class="card-img">
                    <img src="${data.avatar_url}" alt="${data.name}">
                </div>
                <div class="card-body">
                    <div class="card_title">${data.name}</div>
                    <div class="card_subTitle">${data.login}</div>
                    <div class="card-text">
                        <p>${data.bio}</p>
                        <p>${data.followers} followers ${data.following} following</p>

                        <button>
                            <a href=${data.html_url}>
                               Do Checkout Projects.
                            </a>
                        </button>

                    </div>
                </div>
            </div>

            `
}

// Asynchronous function to fetch and display repository information
async function showReposInfo(userName){

        // Fetch repositories data from GitHub API
       const res = await fetch(`https://api.github.com/users/${userName}/repos`)
       const projects = await res.json(); // Convert response to JSON
        
        // Iterate through each project and create repository cards
       for(let i=0;i<projects.length;i++){
            reposInfoDiv.innerHTML +=
            // Insert HTML template for displaying repository details

            `
            <div class="card">
                <div class="card-body">
                    <div class="card_title">${projects[i].name}</div>
                    <div class="card_subTitle">${projects[i].language}</div>
                    <div class="card-text">
                    <button>
                        <a href=${projects[i].html_url}>
                        Do Checkout Projects.
                        </a>
                    </button>
                    </div>
                </div>
            </div>

            `
        }
}



// *******   Using then and catch *******************.

// function showReposInfo(userName){
//     fetch(`https://api.github.com/users/${userName}/repos`)
//          .then(res => res.json())
//          .then(projects => {
//             console.log(projects);
//             for(let i=0;i<projects.length;i++){
//                 reposInfoDiv.innerHTML +=
//                 `
//                 <div class="card">
//                     <div class="card-body">
//                         <div class="card_title">${projects[i].name}</div>
//                         <div class="card_subTitle">${projects[i].language}</div>
//                         <div class="card-text">
//                           <button>
//                              <a href=${projects[i].html_url}>
//                                Do Checkout Projects.
//                              </a>
//                           </button>
//                         </div>
//                     </div>
//                 </div>
    
//                 `
//             }
//          })
// }

// showDetailsButton.addEventListener('click',() => {
//     const userName = userNameInput.value;

//     // request the data from server: fetch api
//     fetch(`https://api.github.com/users/${userName}`)
//          .then((res) => res.json())
//           .then((data) => {
//             // console.log(data);
//             profileInfoDiv.innerHTML = 
//             `
//             <div class="card">
//                 <div class="class-img">
//                     <img src="${data.avatar_url}" alt="${data.name}">
//                 </div>
//                 <div class="card-body">
//                     <div class="card_title">${data.name}</div>
//                     <div class="card_subTitle">${data.login}</div>
//                     <div class="card-text">
//                         <p>${data.bio}</p>
//                         <p>${data.followers} followers ${data.following} following</p>

//                         <button>
//                             <a href=${data.html_url}>
//                                Do Checkout Projects.
//                             </a>
//                         </button>

//                     </div>
//                 </div>
//             </div>

//             `

//             showReposInfo(userName);
//         })

// })


// Promises, resolve, reject, pending
// const p = new Promise((resolve, reject) => {
//     const x = 1 + 5;
//     if(x === 2){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// })

// // then will be executed when promise resolve, otherwise catch will be executed
// p.then((data) => console.log(data)).catch((err) => console.log(err))