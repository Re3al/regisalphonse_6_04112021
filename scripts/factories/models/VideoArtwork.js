class VideoArtwork extends PhotoArtwork{
    constructor(data)
    {
        super(this._video = this.video);
    }
    
    get video(){
        return this._video;
    }


}