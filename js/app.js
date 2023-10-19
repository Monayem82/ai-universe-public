const loadData = async () =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    try{
        const res = await fetch(url);
        const items=await res.json();
        displayLoadData(items.data.tools);
        
    }
    catch(error){
        console.log('Your Error is ',error);
    }
}

const displayLoadData= items =>{
    console.log(items);
    const rowContainer =document.getElementById('row-container');
    rowContainer.innerHTML='';
    items=items.slice(0,6);
    items.forEach(item =>{
        const colDiv=document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML=`
                <div class="card h-100">
                    <img src="${item.image ? item.image :'Image not found'}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Features :</h5>
                        <p class="card-text">
                            <ol>
                                <li>${item.features[0]}</li>
                                <li>${item.features[1]}</li>
                                <li>${item.features[2]}</li>
                    	     </ol>
                        </p>
                        <hr>
                        <div class="d-flex justify-content-between 
                        align-items-center">
                            <div>
                              <h5 class="card-title">${item.name}</h5>
                              <p class="card-text">${item.published_in}</p>
                            </div>
                            <div>
                                <button onclick="showModalDetails()" class="btn btn-info">Details</button>
                            </div>
                            
                        </div>
                      
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>    
        
        `;



        rowContainer.appendChild(colDiv);
    })
}

const showModalDetails = () =>{
    
}

loadData();