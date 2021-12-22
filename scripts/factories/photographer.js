function photographerFactory(data) {
    const { name, portrait,city,tagline,price,id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const a = document.createElement( 'a' );
        a.setAttribute("href", "photographer.html?id=" + id); 
        a.innerHTML = name;     
        h2.appendChild(a);
        const h3 = document.createElement( 'h3' );
        const taglineText  = document.createElement( 'p' );
        const priceText  = document.createElement( 'p' );
        /*h2.textContent = name;*/
        h3.textContent = city;
        taglineText.textContent = tagline;
        priceText.textContent = price + "€";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        /*h2.insertAdjacentHTML('afterbegin',
        '<a href="`?id=${photographer.id}`;">');*/        
        return (article);
    }
    return { name, picture,city,tagline,price,id, getUserCardDOM }
}

