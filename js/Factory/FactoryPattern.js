//design patter Factory

function photographer(name)
{
    this.name = name;
    this.id = id;
    this.image = image;
    this.likes = likes;
    this.date = date;
    this.tags = tags;
    this.price = price;
}

function PhotographerFactory()
{
    this.create = (name,id) =>
    {
        return new Photographer(name);
    }
}

const photographerFactory = new PhotographerFactory();
const photographers = [];



let tierce = 3;
