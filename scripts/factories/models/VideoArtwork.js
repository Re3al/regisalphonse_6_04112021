class VideoArtwork{
    constructor(data)
    {
        this._video = data.video;
        this._id = data.id;
        this._title = data.title;
        this._photographerId = data.photographerId;
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
    get portrait(){
        return this._portrait;
    }

    get likes(){
        return this._likes;
    }
    get date(){
        return this._date;
    }
    get tagline(){
        return this._tagline;
    }
    get price(){
        return this._price;
    }

}