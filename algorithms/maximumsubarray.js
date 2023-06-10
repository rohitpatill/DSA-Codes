// function max_sum(a,n){
//     let max_summ = Number.MIN_VALUE;
//     for(let i=0; i<n ; i++){
//          let sum = 0;
//          for( let j = i; j<n ; j++){
//             sum = sum + a[j];

//             if(sum> max_summ){
//                 max_summ = sum;
//             }
//          }
//     }
//     return max_summ;
// }
//  let a=[3,5,-7,5,-9,1]
//  let n=a.length;
//  console.log(max_sum(a,n));


 function maximmum_sabaray(arr, n){
    let max_sum = Number.MIN_VALUE;
    for(let i = 0 ; i<n ; i++){
        max_sum = 0;
        for(let j = i ; j<n ; j++){
           let  sum = max_sum + arr[j]
            if(sum>max_sum){
                max_sum = sum;
            }
        }
    }
    return max_sum;
 }

 let arr = [2,-4,5, 4,-5, 5, 2 , -4 , 2 ,4 ]
 let n = arr.length
 console.log(maximmum_sabaray( arr , n))