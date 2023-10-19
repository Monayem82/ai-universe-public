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

    items.forEach(item =>{
        console.log(item);
    })
}

loadData();