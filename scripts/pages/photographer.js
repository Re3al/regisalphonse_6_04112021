//Mettre le code JavaScript lié à la page photographer.html


//recupere l'id de la page 
const pageId = new URLSearchParams(window.location.search);
const artistId = pageId.get('id');

const photographerHeader = document.querySelector(".photograph-header");


const mediasData = jsonData.media.filter((el)=>{
    return el.photographerId == artistId;
})


const currentPhotographers = jsonData.photographers.filter((el)=>{
    return el.id == artistId;
});



//recupere la section du DOM contenant les photographes
async function displayData() {



    const currentPhotographer = currentPhotographers[0];

    const currenttemplateCard = new CardDOM(currentPhotographer); 

    currenttemplateCard.getCurrentUserCardDOM(currentPhotographer);



//const currenttemplateCard = new CardDOM(currentPhotographer); 
//const currentuserCardDOM = currenttemplateCard.getCurrentUserCardDOM(currentPhotographer);

//photographerHeader.appendChild(currentuserCardDOM);


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
    
    medias = videos.concat(photos);
    let desc = false;

    function sortArrayBy(array, sort,desc)
    {
        array.sort(function (a,b) {
            if(a[sort] < b[sort]) return -1;
    

            if(a[sort] > b[sort]) return 1;
            return 0;
            
        });
        if(desc) array.reverse();
        return array;
    }
    console.log(sortArrayBy(medias,'_title',desc));
    //console.log("=======");
    //console.log(arrays);
    
    medias.forEach((media) => {
        const templateCard = new CardDOM(media);
 
        const userCardDOM = templateCard.getMediaCardDOM(media);

        photographersSection.appendChild(userCardDOM);
        

 
    });          
    
};

async function init() {
    // Récupère les datas des photographes
    displayData();
    //tri des medias
    //recuperer les articles
    let articles = document.getElementsByClassName('artist-post');
    //recuperer le click du selcect 
    let sortingSelect = document.querySelector('#sorting-select');
    sortingSelect.addEventListener("click",(e)=>{
    //console.log(e.target.value);
    //conditions

    //trier les articles en fonction du nom de l'image

    });







    //filters
    document.querySelectorAll(".home_filters a").forEach(tagDOM=>{
        tagDOM.addEventListener("click", (e)=>{
            let container = document.getElementsByClassName("photographer_section")[0];
              container.innerHTML = "";

             const currentDOMtag =  e.target.innerHTML;

              const tag = e.target.dataset.filter;

              const vals = photographers.filter(el => el.tags.find(l => l == tag));

              displayData(vals);
        });
    });
};

init();


