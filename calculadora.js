function calcular(a, b, op){
    if(isNaN(a) || isNaN(b)){
      res = null;
    }
    else{
      switch (op){
        case '+':
          res = a+b;
          break;
        case '*':
          res = a+b;
          break;
        case '/':
          res = b!=0?a/b:null;
          break;
        case '-':
          res = a-b;
          break;
        case '%':
          res = b!=0?a%b:null;
          break;
        default:
          res = null;
      }
    }
    return res
  }