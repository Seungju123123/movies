search(response.results)
onclick.function(#movieResults){
  let textbox = document.getElementById(#searchbox);
  let cardList = document.getElementsByName(card-list);
  cardList.innerHtml = "";
  let searchText = textbox.innerText;
  let searchMovies = search.filter(movie) => movie.name.includes(searchText);
  
}


/* 카드 리스트부분 */
window.onload = function () {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGMzZmYxMjU0OTAzMTcyZWQ1MzI0NDdhY2Q2YTgxNCIsInN1YiI6IjY2Mjc4ZDNiMjU4ODIzMDE2NDkxZWQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p4GGotgBN940L8SPmdHg66NMvE_NVOTJbHDBtYoiXOc'
    }
  };

  const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      let results = response.results;
      let cardlist = document.getElementsByClassName("card-list")[0];

      results.forEach(movie => {
        // 영화 카드 요소 만들기
        let movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.id = movie.id;

        // 영화 카드 구성
        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}">
          <h3 class="movie-title">${movie.original_title}</h3>
          <p>${movie.overview}</p>
          <p>Rating: ${movie.vote_average}</p>
        `;

        // 영화 카드에 클릭 이벤트 추가
        movieCard.addEventListener("click", () => {
        
        
          // 카드를 클릭하면 알넛창에 영화 ID 표시
          alert(`영화 ID: ${movie.id}`);
        });
        cardlist.appendChild(movieCard);
      });
    })
    .catch(err => console.error(err));
}