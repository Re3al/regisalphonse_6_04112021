class PhotoArtwork{
    constructor(data)
    {
        this._id = data.id;
        this._title = data.title;
        this._photographerId = data.photographerId;
        this._image = data.image;
        this._likes = data.likes;
        this._date = data.date;
        this._tags = data.tags;
        this._price = data.price;
    }
    
    get name(){
        return this._name;
    }
    get id(){
        return this._id;
    }
    get photographerId(){
        return this._photographerId;
    }
    get image(){
        return this._image;
    }

    get likes(){
        return this._likes;
    }
    get date(){
        return this._date;
    }
    get tags(){
        return this._tags;
    }
    get price(){
        return this._price;
    }

}