const apiKey = 'ZrlOrpRipBYYDVLJLcYPqlbAjToE2UB5bVL4CaBx';
const apdURL = 'https://api.nasa.gov/planetary/apod';
const marsURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';

const apdBtn = document.getElementById('apd');
const apdImg = document.getElementById('apd_img');
const apdInfo = document.getElementById('apd_info');
const cancelBtn = document.getElementById('cancel');
const rightBox = document.getElementById('right-box');
const main = document.querySelector('.main');
const restoreBtn = document.getElementById('restore');
const camera = document.getElementById('camera');
const marsBtn = document.getElementById('martian')
const marsImg = document.getElementById('mars_img');
let hidden = false;

const getApd = async () =>{

    try{
        const endpoint = `${apdURL}?api_key=${apiKey}`
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            apdImg.src = jsonResponse['url'];
            apdImg.style.display = 'Block';
            apdInfo.style.display = 'Block';
            apdInfo.innerHTML = '<h3>Astronomy Picture of the Day</h3><br>' + jsonResponse['explanation'];
            
        }
    }catch(e){
        alert(error);
    }
    
}

const getMars = async ()=>{
    const cameraVal = camera.options[camera.selectedIndex].value; 

    try{
        const endpoint = `${marsURL}sol=1000&camera=${cameraVal}&api_key=${apiKey}`;
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            const roverPhotos = jsonResponse['photos'][0]['img_src'];
            marsImg.src = roverPhotos;
            marsImg.style.display = 'Block';

        }
    }catch(e){
        alert('Image not available');
    }
}

/*apdBtn.addEventListener('click',getApd)*/
cancelBtn.addEventListener('click',()=>{
    rightBox.style.display = 'None';
    main.style.display = 'block';
    restoreBtn.style.display = 'block';
    hidden = true;
})

getApd();
getMars();

apdBtn.style.display = 'None';

restoreBtn.addEventListener('click',()=>{
    rightBox.style.display = 'Block';
    main.style.display = 'Grid';
    event.target.style.display = 'None';
    hidden = false;
})

marsBtn.addEventListener('click',getMars);

window.onresize = ()=>{
    
    if (event.target.innerWidth > 890){
        rightBox.style = '';
        if (hidden){
            rightBox.style.display = 'None';
            restoreBtn.style.display = 'Block';
            main.style.display='block';
        }else{
            main.style.display='grid';
        }
        
    }else{
        rightBox.style.display = 'None';
        restoreBtn.style.display = 'None';
        main.style.display='block';
    }
}