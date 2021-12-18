class FactoryBuilder{

    constructor(data, type)
    {
        if(type === 'photographer')
        {
            return new Photographer(data);
        }
        else if(type === 'artwork')
        {
            return new ArtworK(data);
        }
        else{
            throw "Undifined object";
        }
    }

        getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const taglineText  = document.createElement( 'p' );
        const priceText  = document.createElement( 'p' );
        h2.textContent = name;
        h3.textContent = city;
        taglineText.textContent = tagline;
        priceText.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglineText);
        article.appendChild(priceText);

        photographers.forEach((photographer) => {
    
        //document.querySelectorAll('article h2').href += `?id=${photographer.id}`;
            
            });
        return (oarticle);
    }

}
module.exports = FactoryBuilder;