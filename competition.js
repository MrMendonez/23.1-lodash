var studentsOfDoom = [
        {
            "name": "Bern",
            "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
        },
        {
            "name": "Hillary",
            "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
        },
        {
            "name": "Trump",
            "lairs": [{"name":"New York"}]
        },
        {
            "name": "Cruz",
            "lairs": [{"name": "Washington"}, {"name": "New York"}]
        }
    ]

// Using basic JS or Jquery log the first lair for each of the names listed.


for(var i = 0; i < studentsOfDoom.length; i++){
 console.log(studentsOfDoom[i].lairs[0].name);
}
