// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let k1;
    let array = [];
    let copy = currency;
    if (copy >10000){
        k1 = {
            error : "You are rich, my friend! We don't have so much coins for exchange"
        }
    }
    else{
        const c1=50, c2=25, c3=10, c4=5, c5=1;
        let constarray = [c1,c2,c3,c4,c5];
        let s1=0, s2=0, s3=0, s4=0, s5=0;
        let arrays =[s1,s2,s3,s4,s5];
        for (let i=0; i<5; i++)
        {
            while(copy>=constarray[i]){
                arrays[i]++;
                copy -=constarray[i];
            }
        }
        k1 = {
            H : arrays[0],
            Q : arrays[1],
            D : arrays[2],
            N : arrays[3],
            P : arrays[4]
        }
        if (k1.H == 0){
            delete k1.H;
        }
        if (k1.Q == 0){
            delete k1.Q;
        }
        if (k1.D == 0){
            delete k1.D;
        }
        if (k1.N == 0){
            delete k1.N;
        }
        if (k1.P == 0){
            delete k1.P;
        }
    }
    return k1;
}
