export function moviesList(){

    return{
        type:'MOVIE_LIST',
        payload:[
            {id:1, name: 'Mission Impossible'},
            {id:2, name: ' Death Race'},
            {id:3, name:  'Pacific Rim'}
        ]
    }
}