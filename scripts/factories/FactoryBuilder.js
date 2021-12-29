class FactoryBuilder{

    constructor(data,type)
    {
        if(this.type === 'photographer')
        {
            return new Photographer(data);
        }
        else if(this.type === 'artwork')
        {
            const factoryProduct =  new ArtworK(data);
        }
        return new Artwork(data);

    }
}