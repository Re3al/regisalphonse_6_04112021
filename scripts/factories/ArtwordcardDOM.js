class ArtwordcardDOM
{

    getUserCardDOM(data) {
    //const { name, portrait,city,tagline,price,id } = data;

    const picture = `assets/photographers/${data._portrait}`;

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", "photographer.html?id=" + data._id); 
        a.innerHTML = data._name;     
        h2.appendChild(a);
        const h3 = document.createElement( 'h3' );
        const taglineText  = document.createElement( 'p' );
        const priceText  = document.createElement( 'p' );
        /*h2.textContent = name;*/
        h3.textContent = data._city;
        taglineText.textContent = data._tagline;
        priceText.textContent = data._price + "€";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        /*h2.insertAdjacentHTML('afterbegin',
        '<a href="`?id=${photographer.id}`;">');*/        
        return (article);
    }
    //return { name, picture,city,tagline,price,id, getUserCardDOM 

}