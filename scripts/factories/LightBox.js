class LightBox{
    static init(){
        const anchors = Array.from(document.querySelectorAll(".artist-post img"));
        const images = anchors.map(anchor=>anchor.getAttribute('src'));
        anchors.forEach((element) =>{
            element.addEventListener('click', (e)=>{
                new LightBox(e.target.currentSrc, images);
                console.log("clicked")
                
            })
        })
    }
    constructor(imageTag, images)
    {
        this.element = this.buildDOM(imageTag);
        this.images = images;
        document.body.appendChild(this.element);
        this.closeModal();
        this.imageTag = imageTag;
    }
 
    buildDOM(imageTag)
    {
        const dom = document.createElement('div');
        dom.classList.add('lightboxModal');
        dom.innerHTML = `<button class="lighbox_close">Fermer
        </button>
        <button class="lighbox_next">Suivant</button>
        <button class="lighbox_previous">Précédent</button>
        <div class="lighbox_container">
        <img src="${imageTag}" alt="">
        </div>
        `;
        dom.style.display = "block";
        dom.querySelector(".lighbox_next").addEventListener('click', this.next.bind(this));
        //dom.querySelector(".lighbox_previous").addEventListener('click', this.previous.bind(this.images));
        return dom;
    }
    loadImage(imageTag)
    {
        this.imageTag = imageTag;
        const image = new Image();
        const container = this.element.querySelector('.lighbox_container');
        container.innerHTML = "";
        image.onload = () =>
        {
            container.appendChild(image);
            this.imageTag = imageTag;
        }
        image.scr=imageTag;
    }
    closeModal(){
        const dom = document.querySelector('.lightboxModal');
        const closeLightBox = document.querySelector('.lighbox_close');

        closeLightBox.addEventListener('click',()=>{
            //dom.style.display = "none";
            document.body.removeChild(dom);
        })
    }
    next(e){

        console.log("======")
        console.log(this.images);
        const i = this.images.findIndex(image => image == this.imageTag);
        

        if(i== this.images.length - 1){
            i = -1;
        }
        this.loadImage(this.images[i+1])

    }
    previous(e){

    }
}

LightBox.init();