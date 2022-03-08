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
contactArtist.innerHTML = "Contactez moi <br>" + currentPhotographers[0].name;
}
//affiche un encart avec la populairité et le prix journalier de l'artiste

    let allLikesarray = [];
    mediasData.forEach((data)=>
    {
        allLikesarray.push(data.likes);
    });
    let allLikes = allLikesarray.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue;
    },0);
async function displayCurrentDataSection()
{    
    let dataSection = document.createElement('div');
    dataSection.classList.add('datasection');
    dataSection.innerHTML = `
    <p class"alllikes">${allLikes}</p><img class="artist-likes" src="/assets/images/heart.svg"">
    <p>${currentPhotographers[0].price} €/ jour</p>
    `;
    document.body.appendChild(dataSection);
}
async function displayData(data) {
    //recupere la div contenant les cartes de photographe
    const photographersSection = document.querySelector(".all-posts");
    photographersSection.setAttribute("aria-label", "main");
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
 

    const allLikesTags = document.getElementsByClassName('artist-likes');
    async function updateLikes(update)
    {
        if(update = "up")
        {
            //recuperer l'objet en fonctin de l'id du like => id de l'objet 

            //ajouter un parametre 

        }
    }

for(let el of allLikesTags){
    el.addEventListener("click",(e)=>{

            e.target.classList.toggle('far');
            e.target.classList.toggle('fas');
            let currentLikeCount = document.getElementsByClassName('likes')[1];
            console.log(allLikes)
            let allLikesText = document.querySelector(".datasection p");

            const currentMediaIndex = medias.findIndex((el)=>{
                return el.id == e.target.dataset.identifier;
            });
            let allMediaPrice = document.getElementsByClassName('likes');
            allMediaFilteredPrice = Array.from(allMediaPrice)
            .filter(filteredprice => filteredprice.dataset.identifier == e.target.dataset.identifier)

            if(e.target.classList.contains("fas"))
            {
                console.log('clické')  
                //au clic le coeur incrémentation de 1 like
                let likesCount = medias[currentMediaIndex].likes+1;
                allLikesText.innerHTML = allLikes++;

                console.log(likesCount);
            
            
                currentLikeCount.innerHTML = likesCount;
            //document.getElementsByClassName('likes')[1].innerHTML = 102;       
            //le nombre de coeur global monte de 1
            }
            else{
            //    e.target.classList.replace('fas', "far");
                console.log('déclické')      
                let likesCount = medias[currentMediaIndex].likes;
                console.log(likesCount);    
                currentLikeCount.innerHTML = likesCount;  
                allLikesText.innerHTML = allLikes--;   
            }
            

            //au clic le coeur se remplit 

            //le nombre de coeur global monte de 1
            
        })
    }
    displayCurrentDataSection();
}

init();

