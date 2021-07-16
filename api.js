function fetchData() {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const html = data.results
        .map((results) => {
          return `
    
     <div class="container">
     <div class="user-container">
     <p>
     <img src="${results.picture.thumbnail}" alt="${results.name.first} ${results.name.last}" class="image1"/>
     </p>
     </div>
     
     <div class="container2">
     <p>Full Name:${results.name.title} ${results.name.first} ${results.name.last}</p>
     <p>Email:${results.email}</p>
     <p>Address:${results.location.street.number},
     ${results.location.street.name},${results.location.city},
     <br/>
     ${results.location.state},${results.location.country},${results.location.postcode}
     </p>
     </div>
     
     </div>
     
     
     `;
        })
        .join("");
      console.log(html);
      document.querySelector("#root").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
