function fun(n){
    //let count = 0 
    if ( n == 0 || n == 1 ){
        return 1;
    }

        if(n<0){
            return 0;
        }

        else{
            return fun(n-1) + fun (n-2);
        }
    
}
console.log(fun(9))












