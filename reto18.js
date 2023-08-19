function parejas(){
    let n=5;
    let array=[1,5,3,4,2]
    let tarjeta=2
    let pares=[]
    let alert=true

        for(let i=0;i<n;i++){
            for(let j=i+1;j<n;j++){
                if((array[i]==array[j]==tarjeta)||!((0<=array[i])&&(array[i]<=2*10**9))){
                    alert=false  

                }
            }  
        }
        if ((6<=n)&&n<=(10**5)&&(alert==true)&&(1<=tarjeta)&&(tarjeta<=10**9)){
                for(let i=0;i<n;i++){
                    for(let j=i+1;j<n;j++){
                    if((array[i]-array[j]==tarjeta)||(array[j]-array[i]==tarjeta)){
                        pares.push(array[i],array[j]);
                    }
                }
                
            }
        }
        todo=pares.length/2
        console.log(todo)
        console.log(alert)  
    }
    parejas()