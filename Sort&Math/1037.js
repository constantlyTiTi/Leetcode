var isBoomerang = function(points) {
    
    let bx1 = points[0][0] - points[1][0] ;
    let by1 = points[0][1] - points[1][1] ;
    
    let bx2 = points[0][0] - points[2][0] ;
    let by2 = points[0][1] - points[2][1] ;
    
    if(bx1 * by2 == bx2 * by1){
        return false;
    }
    

    return true;
};