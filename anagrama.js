//si tienen distinta longitud no son anagramas
//si son cadenas vacias no son anagramas
//si son iguales no son anagramas
function esAnagrama(str1, str2){
    let letras1, letras2, cmp = false;
    //elimina espacios y aseguramos minúsuclas
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    //si tienen distinta longitud no son anagramas
    //si son cadenas vacias no son anagramas
    if(str1.length !== str2.length || str1 == str2){
       cmp = false;
    }
    else{
        //convierte en arrays, los ordena y los compara
        letras1 = str1.split('').sort();
        letras2 = str2.split('').sort();
        cmp = letras1.every(function(v,i){return v==this[i]}, letras2);
    }
    return cmp;
  }
  //Otra solución
  function esAnagrama2(str1, str2){
    let comp = false, ind=0;
    //elimina espacios y aseguramos minúsuclas
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    if(str1.length !== str2.length || str1 == str2){
        comp = false;
    }
    else{
        do{
          //Comprueba que todas las letras de str2 están en str1        
          //Ve elimando las letras de str1 para detectar repetidas
          comp = str1.includes(str2[ind]);
          str1 = str1.replace(str1[ind],'');
        }while (++ind< str1.length & comp);
    }
    return comp;
  }