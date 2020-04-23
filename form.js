const form = document.forms[0]

form.addEventListener("submit", event => {
    event.preventDefault();
    new FormData(form);
    console.log(form)
})

document.addEventListener("formdata", event => {
    const body = Object.fromEntries(event.formData.entries());
    console.log(body)
    const jsonBody = JSON.stringify(body);
    console.log(jsonBody)
    const request = new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com/users/");
    request.send(jsonBody)

      request.onload = function() {
    const jsonResponse = JSON.parse(this.response);
    document.body.innerHTML += `Response from the server: ${jsonResponse.status}`;
  };
})