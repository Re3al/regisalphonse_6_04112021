class FactoryBuilder{

    create = (data) => 
    {
        if(data.type === 'photograph')
        {
            const factoryProduct = new Photographer(data);
        }
        else if(data.type === 'artwork')
        {
            const factoryProduct =  new ArtworK(data);
        }
        return factoryProduct;
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
        return (article);
    }

}
//module.exports = FactoryBuilder;