class CardDOM
{


    
    getUser(idUser){
    


        switch (idUser) {
            case 243:
              return this.user = 'Mimi'
              break;

            case 930:
              return this.user = 'Ellie Rose'
              break;

            case 82:
              return this.user = 'Tracy'
              break;

            case 930:
              return this.user = 'Mimi'
              break;

            case 527:
              return this.user = 'Nabeel'
              break;

            case 925:
              return this.user = 'Rhode'
              break;

            case 195:
              return this.user = 'Marcel'
              break;
              default:
            return this.user = "user";
           
        }
    }
 
    



    getUserCardDOM(data) {
    const picture = `assets/photographers/${data._portrait}`;

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const a = document.createElement( 'a' );
        const divA = document.createElement( 'a' );
        divA.setAttribute("href", "photographer.html?id=" + data._id); 
        a.setAttribute("href", "photographer.html?id=" + data._id); 
        a.innerHTML = data._name;     
        h2.appendChild(a);
        const h3 = document.createElement( 'h3' );
        const taglineText  = document.createElement( 'p' );
        const priceText  = document.createElement( 'p' );
        /*h2.textContent = name;*/
        h3.textContent = data._city;
        taglineText.textContent = data._tagline;
        priceText.textContent = data._price + "€/jour";
        article.href= "photographer.html?id=" + data._id;
        article.appendChild(divA);
        divA.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        
        
        return (article);
    }
    getMediatype()
    {
      if(data.hasOwnProperty('video'))
      {
        return `assets/photographers/${userId}/${data._video}`;
      }
      else if(data.hasOwnProperty('photo'))
      {
        return `assets/photographers/${userId}/${data._image}`;
      }
    }
    getMediaCardDOM(data) {
    
        const userId = this.getUser(data._photographerId);
        const picture = `assets/photographers/${userId}/${data._image}`;
        const video = `assets/photographers/${userId}/${data._video}`;
        const article = document.createElement( 'article' );

        if(data._image)
        {
          
          const img = document.createElement( 'img' );
          img.setAttribute("src", picture);
          img.classList.add("artist-thumbnail");
            article.appendChild(img);
   
          let imgAricle = data.image;
        }
        if(data._video)
        {
         
          
          const videotag = document.createElement( 'video' );
          videotag.classList.add("video_artwork");
          const videosource = document.createElement( 'source' );
          videosource.setAttribute("src", video);
          article.appendChild(videotag);
          videotag.appendChild(videosource);
   
          let imgAricle = data.image;
        }
        

        const h2 = document.createElement( 'h2' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", "photographer.html?id=" + data._id); 
        a.innerHTML = data._title;     
        h2.appendChild(a);
        const h3 = document.createElement( 'h3' );
        const likes  = document.createElement( 'p' );
        let likesImg = document.createElement('img');
        likesImg.src ="/assets/images/heart.svg"
        likesImg.classList.add('artist-likes')
        h3.textContent = data._city;
        likes.textContent = data._likes;
        article.classList.add("artist-post");
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(likes);
        likes.appendChild(likesImg);

      

                
            return (article);
        }


        getCurrentUserCardDOM(data){
          const div = document.createElement( 'div' );
          const portrait = `assets/photographers/${data.portrait}`;
          const imgTag = document.createElement( 'img' );
          imgTag.setAttribute("src", portrait);
          imgTag.classList.add("roundimage");
          const nameTag = document.createElement( 'h2' );
          const name = data.name;
          nameTag.innerHTML = name;
          const taglineTag = document.createElement( 'p' );
          const tagline = data.tagline;
          taglineTag.innerHTML = tagline;
          const cityTag = document.createElement( 'h3' );
          const button = document.createElement( 'button' );
          button.setAttribute("onclick", "displayModal()");
          button.innerHTML = "Contactez-moi";
          button.classList.add('contact_button');
          cityTag.textContent = data.city;
          photographerHeader.appendChild(div);
          div.appendChild(nameTag);
          div.appendChild(cityTag);
          div.appendChild(taglineTag);
          photographerHeader.appendChild(button);
          photographerHeader.appendChild(imgTag);
    }

}




