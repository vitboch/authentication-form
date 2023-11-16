(() => {
  document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    console.log({ email, password });

    // sending email/password to server
    fetch("/authenticate", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // processing the response from the server
        console.log(data);
      })
      .catch((error) => {
        // error handling
        console.error(error);
      });
  });
})();
