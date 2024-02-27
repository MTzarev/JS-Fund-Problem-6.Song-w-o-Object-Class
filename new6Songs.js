function new6Songs(input) {
    let numOfSongs = input.shift();
    let typeOfSongs = input.pop();
    let newArr = [];
    for (let i = 0; i < numOfSongs; i++) {
        if (input[i].includes(typeOfSongs)) {
            newArr.push(input[i]);

        } else if (typeOfSongs === "all") {
            newArr = input;
        }
        
    }
    let name = [];

    for (let i = 0; i < newArr.length; i++) {
        let title = newArr[i].split(`_`);
        name.push(title[1]);

    }

    console.log(name.join(`\n`));
}
// new6Songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// );
new6Songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
new6Songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);