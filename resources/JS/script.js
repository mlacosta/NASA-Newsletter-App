const apiKey = 'ZrlOrpRipBYYDVLJLcYPqlbAjToE2UB5bVL4CaBx';
const apdURL = 'https://api.nasa.gov/planetary/apod'
const apdBtn = document.getElementById('apd');
const apdImg = document.getElementById('apd_img');
const apdInfo = document.getElementById('apd_info');
const cancelBtn = document.getElementById('cancel');
const rightBox = document.getElementById('right-box');
const main = document.querySelector('.main');
const restoreBtn = document.getElementById('restore');

const getApd = async () =>{

    try{
        const endpoint = `${apdURL}?api_key=${apiKey}`
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            apdImg.src = jsonResponse['url'];
            apdImg.style.display = 'Block';
            apdInfo.style.display = 'Block';
            apdInfo.innerHTML = jsonResponse['explanation'];
        }
    }catch(e){
        alert(error);
    }
    
}

apdBtn.addEventListener('click',getApd)
cancelBtn.addEventListener('click',()=>{
    rightBox.style.display = 'None';
    main.style.display = 'block';
    restoreBtn.style.display = 'block';
})

restoreBtn.addEventListener('click',()=>{
    rightBox.style.display = 'Block';
    main.style.display = 'Grid';
    event.target.style.display = 'None';
})