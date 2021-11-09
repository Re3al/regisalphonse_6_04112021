//recupere les donnes presentes dans mon fichier json

let url ="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
fetch(url,{mode:"no-cors"}).then(function(resp){
    return resp.json();
}).then(function(data)
{
    console.log(data)
});


//mock du fichier json (2)
let photographers = [
    {
      "name": "Mimi Keel",
      "id": 243,
      "city": "London",
      "country": "UK",
      "tags": ["portrait", "events", "travel", "animals"],
      "tagline": "Voir le beau dans le quotidien",
      "price": 400,
      "portrait": "MimiKeel.jpg"
    },
    {
      "name": "Ellie-Rose Wilkens",
      "id": 930,
      "city": "Paris",
      "country": "France",
      "tags": ["sports", "architecture"],
      "tagline": "Capturer des compositions complexes",
      "price": 250,
      "portrait": "EllieRoseWilkens.jpg"
    }];