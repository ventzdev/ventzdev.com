$(document).ready(function () {
  // function lenght
  let statutNom = false,
    phoneValide = false,
    emailValidation= false,
    textAreaValide = false;
  function lenth(str) {
    var z = 0;
    while (str[z] !== undefined) {
      z++;
    }
    return z;
  }

  // function good or bad
  function statut(name, maxlenght, nameEmtpy) {
    var NameLengh = lenth(nameEmtpy);
    if (!isNaN(nameEmtpy)) {
      name.classList.add("bad");
      name.classList.remove("good");
      statutNom = false;
    } else {
      if (NameLengh < maxlenght) {
        name.classList.add("bad");
        name.classList.remove("good");
        statutNom = false;
      } else if (NameLengh >= maxlenght) {
        name.classList.remove("bad");
        name.classList.add("good");
        statutNom = true;
      } else {
        name.classList.remove("bad");
        name.classList.remove("good");
        statutNom = false;
      }
    }
  }

  //   phone validation
  function telephoneValidation(name, maxlenght, phone) {
    var phoneV = lenth(phone);
    if (!isNaN(phone)) {
      if (phoneV < maxlenght) {
        name.classList.add("bad");
        name.classList.remove("good");
        phoneValide = false;
      } else if (phoneV >= maxlenght) {
        name.classList.remove("bad");
        name.classList.add("good");
        phoneValide = true;
      } else {
        name.classList.remove("bad");
        name.classList.remove("good");
        phoneValide = false;
      }
    } else {
      name.classList.remove("good");
      name.classList.add("bad");
      phoneValide = false;
    }
  }
  //   function email valide
  function isEmail(email) {
    var regEmail = new RegExp(
      "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$",
      "i"
    );
    return regEmail.test(email);
  }

  //   fin
  // nom
  $("#firstName").keyup(function () {
    let Names = document.querySelector("#firstName");
    var Name = $(this).val();
    statut(Names, 2, Name);
  });

  //prenom

  $("#lastName").keyup(function () {
    let lastNames = document.querySelector("#lastName");
    var lastName = $(this).val();
    statut(lastNames, 2, lastName);
  });
  // telephone

  $("#phone").keyup(function () {
    let phone = document.querySelector("#phone");
    var phoneValide = $(this).val().trim();
    telephoneValidation(phone, 8, phoneValide);
  });

  //   email
  $("#email").keyup(function () {
    let email = document.querySelector("#email");
    var emailValide = $(this).val();
    if (isEmail(emailValide)) {
      email.classList.remove("bad");
      email.classList.add("good");
      emailValidation= true;
    } else {
      email.classList.add("bad");
      email.classList.remove("good");
      emailValidation = false;
    }
  });

  //   texte area

  $("#message").keyup(function () {
    let message = document.querySelector("#message");
    var messages = $(this).val().trim();
    if (lenth(messages) > 0) {
      message.classList.remove("bad");
      message.classList.add("good");
      textAreaValide = true;
    } else {
      message.classList.add("bad");
      message.classList.remove("good");
      textAreaValide = false;
    }
  });

  var form = document.getElementById("my-form");
  async function handleSubmit(event) {
    event.preventDefault();
    if (statutNom == true && phoneValide == true && textAreaValide == true && emailValidation==true) {
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            status.innerHTML = "message Envoiyer avec success";
            form.reset();
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                status.innerHTML = data["errors"]
                  .map((error) => error["message"])
                  .join(", ");
              } else {
                status.innerHTML =
                  "Oops! There was a problem submitting your form";
              }
            });
          }
        })
        .catch((error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
        });
    } else {
     alert("Les donner saisir sont pas correct ou champs vide")
    }
  }

  form.addEventListener("submit", handleSubmit);
});
