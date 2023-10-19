const loadData = async (btnH) =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    try{
        const res = await fetch(url);
        const items=await res.json();
        displayLoadData(items.data.tools,btnH);
        
    }
    catch(error){
        console.log('Your Error is ',error);
    }
}

const displayLoadData= (items,btnH) =>{
    console.log(items);
    const rowContainer =document.getElementById('row-container');
    rowContainer.innerHTML='';
    if (btnH !==true) {
        items=items.slice(0,6);
    }
    
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
                                <button onclick="laodModalDetails('${item.id}')" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#showDetails">Details</button>
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


const laodModalDetails =async(id)=>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    try {
        const res =await fetch(url);
        const dataid =await res.json();
        showModalDetails(dataid.data);
    } catch (error) {
        console.log(error);
    }

}

const showModalDetails = (dataId) =>{
    console.log(dataId);

    const features=Object.values(dataId.features);
    console.log(features);

    const showModalConatainer=document.getElementById('showDetails');
    showModalConatainer.innerHTML='';

    const showModal=document.createElement('div');
    showModal.classList.add('modal-dialog');
    showModal.classList.add('modal-lg');
    showModal.innerHTML=`
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="d-flex justify-content-center align-item-center">
                        <div class="modal-body w-50 p-3  bg-warning-subtle border-danger rounded">
                            <h1 class="fs-5">${dataId.description}</h1>
                            
                            <div class="d-flex justify-content-around align-item-center p-4">
                                <div class="w-32% fs-5 bg-light-subtle border rounded">
                                    <h2 class="fs-4 p-2">${dataId.pricing[0].price}</br>${dataId.pricing[0].plan}</h2>
                                </div>
                                <div class="w-32% bg-light-subtle border rounded">
                                <h2 class="fs-4 p-2">${dataId.pricing[1].price}</br>${dataId.pricing[0].plan}</h2>
                                </div>
                                <div class="w-32% bg-light-subtle border rounded">
                                <h2 class="fs-4 p-2">${dataId.pricing[2].price}</br>${dataId.pricing[0].plan}</h2>
                                </div>
                            </div>


                            <div class="d-flex justify-content-between align-item-center ">
                                <div>
                                <h5 class="card-title">Features :</h5>
                                <p class="card-text">
                                    <ul>
                                        <li>${features[0].feature_name}</li>
                                        <li>${features[1].feature_name}</li>
                                        <li>${features[2].feature_name}</li>
                                     </ul>
                                </p>
                                </div>
                                <div>
                                    <h5 class="card-title">Integrations :</h5>
                                    <p class="card-text">
                                        <ul>
                                            <li>${dataId.integrations[0]}</li>
                                            <li>${dataId.integrations[1]}</li>
                                            <li>${dataId.integrations[2]}</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="modal-body w-50 p-3 border-danger rounded">
                        <img src="${dataId.image_link[0] ? dataId.image_link[0] : dataId.image_link[1]}" class="card-img-top img-fluid border rounded" alt="...">
                        <h2>${dataId.input_output_examples[0].input}</h2>
                        <p>${dataId.input_output_examples[0].output}</p>
                        <span>Webside:<a class="text-decoration-none" href="${dataId.website}">${dataId.website}</a></span>
                        
                        </div>
                    </div>
                </div>
    `;
    showModalConatainer.appendChild(showModal);

}

document.getElementById('show-all-btn').addEventListener('click',function(){
    loadData(true);
});

 loadData();