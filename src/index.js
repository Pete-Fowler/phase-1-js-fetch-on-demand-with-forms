const init = () => {
  const summary = document.querySelector('p');
  const title = document.querySelector('h4');

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = e.target.searchByID.value;
    

    fetch(`http://localhost:3000/movies/${value}`)
    .then(res => res.json())
    .then(data => {
      title.textContent = data.title;
      summary.textContent = data.summary;
    });
  }); 


}

document.addEventListener('DOMContentLoaded', init);