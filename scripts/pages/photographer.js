//Mettre le code JavaScript lié à la page photographer.html


//recupere l'id de la page 
const pageId = function(){
    return new URL(location.href).searchParams.get('id');
}


async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers[pageId] );
};

init();
