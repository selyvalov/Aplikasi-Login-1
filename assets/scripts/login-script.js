/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElelemnt}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement  untuk tampilan input email.
* @constant {HTMLElelemnt}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElelemnt}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi sementara
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi sementara
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Comment : menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan 
  * @constant {string}
  */
  const email = inputEmailElement.value;
  
   /**
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan 
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  
  /* Comment : memastikn bahwa nilai email dan password sesuai dengan yang disimpan */
  if (email == expectedEmail && password == expectedPassword) {
   
    /* Comment : Jika sesuai maka proggram akan dipindah ke halaman home */
    goToHome();
  } else {
    
    /* Comment : namun jika tidak sesuai  maka akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});
