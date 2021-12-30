class FactoryBuilder{

    constructor(data,type)
    {
        if(type === 'photographer')
        {
            return new Photographer(data);
        }
        else if(type === 'photoArtwork')
        {
            return new PhotoArtwork(data);
        }
        else if(type === 'videoArtwork')
        {
            return new VideoArtwork(data);
        }
        else
        {
            throw "Class non déninie";
            //return new Photographer(data);
        }
        

    }
}