 async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json

            return  jsonData;
    }

    //recupere la section du DOM contenant les photographes
    async function displayData() {
        //recupere la div contenant les cartes de photographe
        const photographersSection = document.querySelector(".photographer_section");
        const photographersData = await getPhotographers();

  
        const photographersObject = photographersData.photographers.map(element =>  new FactoryBuilder(element, "photographer"));

        photographersObject.forEach((photographer) => {
            const templateCard = new CardDOM(photographer);
            
            const userCardDOM = templateCard.getUserCardDOM(photographer);
            console.log('===');
            console.log(templateCard.getUserCardDOM(photographer));
            photographersSection.appendChild(userCardDOM);

     
        });
            //console.log(photographers[0].tags.find(l => l =="travel"));
              

              
        
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

