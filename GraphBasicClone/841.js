/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    
    let visited = Array(rooms.length).fill(false);
    visited[0] = true;
    
    let checkRoom = (room) =>{

        if(room != 0){
            //set the room as visited
           visited[room] = true;
           //if all keys in the room have been used
           if(!rooms[room].some(r=>!visited[r])){
               return; 
           }
        }

        //check keys
        rooms[room].forEach(r=>{
            if(!visited[r]){
                checkRoom(r);
            }
    
        })
        
    }
    
   checkRoom(0);    
    
    return !visited.some(n=>!n);

};