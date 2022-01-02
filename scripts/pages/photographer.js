//Mettre le code JavaScript lié à la page photographer.html


//recupere l'id de la page 
const pageId = new URLSearchParams(window.location.search);
const artistId = pageId.get('id');



const mediasData = jsonData.media.filter((el)=>{
    return el.photographerId == artistId;
})



//recupere la section du DOM contenant les photographes
async function displayData() {
    //recupere la div contenant les cartes de photographe
    const photographersSection = document.querySelector(".all-posts");

   

    videoData = mediasData.filter((el)=>{
        return el.hasOwnProperty('video')
       });
    photoData = mediasData.filter((el)=>{
        return el.hasOwnProperty('image')
       });
    
    const videos = videoData.map(element =>  new FactoryBuilder(element, "videoArtwork"));
    const photos = photoData.map(element =>  new FactoryBuilder(element, "photoArtwork"));
    console.log(photos);
    medias = videos.concat(photos);

    
    medias.forEach((media) => {
        const templateCard = new CardDOM(media);
        console.log(media);
        const userCardDOM = templateCard.getMediaCardDOM(media);

        photographersSection.appendChild(userCardDOM);

 
    });          
    
};

async function init() {
    // Récupère les datas des photographes
    displayData();

    //filters
    document.querySelectorAll(".home_filters a").forEach(tagDOM=>{
        tagDOM.addEventListener("click", (e)=>{
            let container = document.getElementsByClassName("photographer_section")[0];
              container.innerHTML = "";

             const currentDOMtag =  e.target.innerHTML;
             console.log(currentDOMtag);

              const tag = e.target.dataset.filter;

              const vals = photographers.filter(el => el.tags.find(l => l == tag));
              console.log(vals);

              displayData(vals);
        });
    });
};

init();


