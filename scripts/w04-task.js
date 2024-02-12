/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Juan Betancourt",
    photo: 'images/profilePic.png',
    favoriteFoods: [
        'fried chicken',
        'pasta with meatballs',
        'icecream',
    ],
    placesLived: [],
    hobbies: [
        'play videogames',
        'watch series',
        'learn new languages'
    ],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        length: '6 years',
        place: 'Guasipati',
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = 'images/profilePic.png';
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(element => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = element.place;
    dd.textContent = element.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
