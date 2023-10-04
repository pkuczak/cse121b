/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Paul Kuczak",
    photo: "images/my-photo.jpg",
    favoriteFoods: [
        'Pizza',
        'Ceviche',
        'Pineapple',
        'Ribeye Steak'
    ],
    hobbies: [
        'Volleyball',
        'Hiking',
        'Tennis',
        'Gardening'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Owen Sound, ON',
        length: '20 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Ukraine',
        length: '2 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Toronto, ON',
        length: '10 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

