function photographerFactory(data) {
    const { name, portrait,city,tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const taglineText  = document.createElement( 'p' );
        h2.textContent = name;
        h3.textContent = city;
        taglineText.textContent = tagline;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(taglineText);
        return (article);
    }
    return { name, picture,city,tagline, getUserCardDOM }
}

