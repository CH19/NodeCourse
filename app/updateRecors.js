// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold',
    }
    };
  // Only change code below this line
function updateRecords(records, id, prop, value) {
    if(value){
        if(prop != 'tracks'){
            records[id][prop] = value
        }else{
            const arrTracks = !!records[id][prop] ? [...records[id][prop], value] : [value]
            records[id][prop] = arrTracks
        }
        return records[id][prop]
    }else{
        return delete records[id][prop]
    }
}
  

//   console.log(  updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(  updateRecords(recordCollection, 2468, 'tracks', 'Free'));
// console.log(  updateRecords(recordCollection, 1245, 'tracks', 'Adicted to Love'));
  console.log(recordCollection);