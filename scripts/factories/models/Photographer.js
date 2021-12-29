class Photographer{
    constructor(data)
    {
        this._name = data.name;
        this._id = data.id;
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