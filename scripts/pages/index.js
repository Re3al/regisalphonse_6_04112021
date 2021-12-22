 async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json

            return jsonData;
    }

    async function displayData(photographers) {
        //recupere la section du DOM contenant les photographes
        const photographersSection = document.querySelector(".photographer_section");
        const factory = new FactoryBuilder();
        

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);

     
        });
            //console.log(photographers[0].tags.find(l => l =="travel"));
              

              
        
    };

    async function init() {
        // Récupère les datas des photographes

        let deux = 2;
        console.log(deux);
        const { photographers } = await getPhotographers();
        displayData(photographers);

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

    

function filters(){
    
}

