class Photographer{
    constructor(data)
    {
        this._name = data.name;
        this._id = data.id;
        this._portrait = data.portrait;
        this._likes = data.likes;
        this._date = data.date;
        this._city = data.city;
        this._contry = data.contry;
        this._tagline = data.tagline;
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