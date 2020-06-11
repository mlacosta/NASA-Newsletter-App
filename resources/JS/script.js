const apiKey = 'ZrlOrpRipBYYDVLJLcYPqlbAjToE2UB5bVL4CaBx';
const apdURL = 'https://api.nasa.gov/planetary/apod'
const apdBtn = document.getElementById('apd');
const apdImg = document.getElementById('apd_img');

const getApd = async () =>{

    try{
        const endpoint = `${apdURL}?api_key=${apiKey}`
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            apdImg.src = jsonResponse['url'];
        }
    }catch(e){
        alert(error);
    }
    
}

apdBtn.addEventListener('click',getApd)
