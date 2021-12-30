class FactoryBuilder{

    constructor(data,type)
    {
        if(this.type === 'photographer')
        {
            return new Photographer(data);
        }
        else if(this.type === 'artwork')
        {
            return new Artwork(data);
        }
        else
        {
            throw "Class non déninie";
            //return new Photographer(data);
        }
        

    }
}