/*const data = {
    type: 'MOVIES_LIST',
    payload: [
        {id:1, name: 'Mission Impossible'},
        {id:2, name: ' Death Race'},
        {id:3, name:  'Pacific Rim'}
    ]
}
*/

export default function(state = null, action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
    }
}