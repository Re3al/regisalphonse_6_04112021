class LightBox {
    static init(){
        const anchors = Array.from(document.querySelectorAll(".artist-post .artist-thumbnail"));
        const images = anchors.map(anchor=>anchor.getAttribute('src'));
        //initialiser l'id du media cliqué 
        let imageId;
        anchors.forEach((element) =>{
            element.addEventListener('click', (e)=>{
                let currentSrc = e.target.currentSrc.replace(window.location.origin + '/', '');
                new LightBox(decodeURI(currentSrc), images,1);
                console.log("clicked");
                
            })
        })
    }
    //imageTag correspond à l'image courrante 
    //images contient l'ensemble des images
    constructor(imageTag, images,id)
    {
        this.element = this.buildDOM(imageTag);
        this.images = images;
        document.body.appendChild(this.element);
        this.closeModal();
        this.imageTag = imageTag;
        this.getCurrentImage()
    }

    buildDOM(imageTag)
    {
        const dom = document.createElement('div');
        dom.classList.add('lightboxModal');
        
        dom.innerHTML = `
        <button class="lighbox_previous">Précédent</button>
        <div class="lighbox_container">
        <img src="${imageTag}" alt="">
        <p id="currentTitleImage">Mon text</p>
        
        </div>
        <button class="lighbox_close">Fermer</button>
        <button class="lighbox_next">Suivant</button>
        `;
        dom.style.display = "flex";
        console.log(medias)
        dom.querySelector(".lighbox_next").addEventListener('click', this.next.bind(this));
        dom.querySelector(".lighbox_previous").addEventListener('click', this.previous.bind(this));
        //dom.querySelector(".lighbox_previous").addEventListener('click', this.previous.bind(this.images));
        return dom;
    }
    getCurrentImage()
    {   
        let currentImageTag = this.imageTag.replace("assets/photographers/Mimi/","");
        let currentImage = currentImageTag.replace(".jpg","");
        document.getElementById("currentTitleImage").innerHTML = currentImage;
        

        //const currentImage = jsonData.media.filter((el)=>{el.title == 623534343 })[0]
    }

    loadImage(imageTag)
    {
        this.imageTag = imageTag;
        const image = document.createElement('img');
        const container = this.element.querySelector('.lighbox_container');
        container.innerHTML = "";
        image.src=imageTag;
        
        image.onload = () =>
        {      
            this.imageTag = imageTag;
        }
        container.appendChild(image);
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
        let i = this.images.findIndex(image => image == this.imageTag);
        if(i== this.images.length - 1){
            i = -1;
        }
        this.loadImage(this.images[i+1])
        

    }
    previous(e){
        let i = this.images.findIndex(image => image == this.imageTag);
        if(i== 0){
            i = this.images.length;
        }
        this.loadImage(this.images[i-1])
    }
}

LightBox.init();