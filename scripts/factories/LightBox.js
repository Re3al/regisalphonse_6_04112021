class LightBox{
    static init(){
        const anchors = document.querySelectorAll(".artist-post img");
        anchors.forEach((element) =>{
            element.addEventListener('click', (e)=>{
                new LightBox(e.target);
                console.log("clicked")
            })
        })
    }
    constructor(imageTag)
    {
        const element = this.buildDOM(imageTag);
        document.body.appendChild(element);
        this.closeModal()
    }
    buildDOM(url)
    {
        const dom = document.createElement('div');
        dom.classList.add('lightboxModal');
        dom.innerHTML = `<button class="lighbox_close">Fermer
        </button>
        <button class="lighbox_next">Suivant</button>
        <button class="lighbox_previous">Précédent</button>
        <div>
        <img src="assets/photographers/Ellie Rose/Sport_Next_Hold.jpg" alt="">
        </div>
        `;
        dom.style.display = "block";
        return dom;
    }
    closeModal(){
        const dom = document.querySelector('.lightboxModal');
        const closeLightBox = document.querySelector('.lighbox_close');

        closeLightBox.addEventListener('click',()=>{
            dom.style.display = "none";

        })
    }
}

LightBox.init();