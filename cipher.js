function cipher(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
      
    }
  }

 console.log(cipher("i love encryption"))
 console.log(cipher("V YBIR RAPELCGVBA"))
 console.log(cipher('veni vidi vici'))
 console.log(cipher("IRAV IVQV IVPV"))