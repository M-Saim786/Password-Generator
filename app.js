var password = document.getElementById("g-pass");
// copy = document.getElementById('copy')

const gpassword = () => {
  main =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=[];/.,+-*/";
  passleng = 12;
  pass = "";
  // Initialize password
  for (let i = 0; i < passleng; i++) {
    random = Math.floor(Math.random() * main.length);
    console.log(random);
    // pass  = pass + // yeh sirf assignment k liye h
    pass = pass + main.substring(random, random + 1);
    document.getElementById("g-pass").value = pass;
  }
  // char = ';'
  // console.log(char.charCodeAt())
};

const Copy = () => {
    // console.log(pass)

    // cpy = pass
 var  cpy = document.getElementById('g-pass')
cpy.select();
  navigator.clipboard.writeText(cpy.value);
};

// console.log(password)
// console.log(copy)
