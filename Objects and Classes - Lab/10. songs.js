// function songInfo(arr) {
//     let numberOfSongs = arr.shift();
//     let listType = arr.pop();
//     let songs = {};

//     for (line of arr) {
//         let [type, name, duration] = line.split("_");
//         if (songs.hasOwnProperty(type)) {
//             songs[type].push(name)
//         } else {
//             songs[type] = [name]
//         }
//     }


//     if (listType === "all") {
//         for(s in songs){
//             for (title of songs[s]) {
//                 console.log(title)
//             }
//         }
//     } else {

//         for (s of songs[listType]) {
//             console.log(s)
//         }
//     }

// }

function songInfo(arr){
    class Song{
        constructor(type, name, time){
            this.type=type;
            this.name=name;
            this.time=time;
        }
    }

    let songs=[];
    let numberOfSongs=arr.shift();
    let typeSong=arr.pop();

    for (let index = 0; index < numberOfSongs; index++) {
        let [type, name, time]=arr[index].split("_");
        let song = new Song(type, name, time);
        songs.push(song); 
    }

    if (typeSong==="all"){
        songs.forEach((i) => console.log(i.name));
    }else{
        let filteredSongs= songs.filter((i)=>i.type===typeSong);
        filteredSongs.forEach((i)=> console.log(i.name))
    }
}

songInfo([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    
    


)