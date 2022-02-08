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


let medias = [];
//recupere la section du DOM contenant les photographes
async function displayDataCurrentUser()
{
    const currentPhotographer = currentPhotographers[0];

    const currenttemplateCard = new CardDOM(currentPhotographer); 

    currenttemplateCard.getCurrentUserCardDOM(currentPhotographer);


    //modal de contact 
let contactArtist = document.querySelector("header h2");
contactArtist.innerHTML = "Contactez moi " + currentPhotographers[0].name;
}
async function displayCurrentDataSection()
{
    let allLikes = [];
    mediasData.forEach((data)=>
    {
        
        console.log(data)
        allLikes.push(data.likes);
    });

    let dataSection = document.createElement('div');
    dataSection.classList.add('datasection');
    dataSection.innerHTML = `
    <p>${allLikes}<img class="artist-likes" src="/assets/images/heart.svg""></p>
    <p></p>
    `;
    document.body.appendChild(dataSection);
    
}
async function displayData(data) {
    //recupere la div contenant les cartes de photographe
    const photographersSection = document.querySelector(".all-posts");

   
    if(data)
    {
        medias = data;
    }
    else{
        medias = mediasData.map((el)=>{
           
              if(el.hasOwnProperty('video'))
             {
                return  new FactoryBuilder(el, "videoArtwork");
             }
             else if(el.hasOwnProperty('image'))
             {
                return  new FactoryBuilder(el, "photoArtwork");
             }
           });
    }

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
    medias.forEach((media) => {
        const templateCard = new CardDOM(media);
        const userCardDOM = templateCard.getMediaCardDOM(media);
        photographersSection.appendChild(userCardDOM); 
    });            
};

async function init() {
    // Récupère les datas des photographes
    displayData();
    displayDataCurrentUser();
    //recuperer les articles
    let articles = document.getElementsByClassName('artist-post');
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

    //nom de la proprieter utilisée pour le tri
    let sortProperty = "";

    let sortingSelect = document.querySelector('#sorting-select');
    sortingSelect.addEventListener("click",(e)=>{
            
        const allPosts = document.getElementsByClassName('all-posts');
        allPosts[0].innerHTML = "";   
        if(e.target.value == "popularite")
        {
            sortProperty = "_likes";
        }
        else if(e.target.value == "titre")
        {
            sortProperty = "_title";
        }
        else if(e.target.value == "date"){
                sortProperty = "_date";
        }
        displayData(sortArrayBy(medias,sortProperty,desc));
        LightBox.init();
        
    });
    displayCurrentDataSection();
}

init();

