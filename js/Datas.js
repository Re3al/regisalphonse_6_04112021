//recupere les donnes presentes dans mon fichier json

let url ="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
fetch(url).then(function(resp){
    return resp.json();
}).then(function(data)
{
    console.log(data)
});