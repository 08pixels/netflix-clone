
var url = "https://gist.githubusercontent.com/08pixels/43c92042cd549c142c157ecd2acdc950/raw/f82ab92537dd3dab22ea00b709fa0bfa63989a66/data.json";

function renderMovies(movies) {
    var container = document.querySelector(".replace");
    var containerBody = "";

    console.log(container);

    for (var movie of movies) {
        containerBody += (
            `<div class="item">
                <img class="box-filme" src="${movie.banner}" alt="" srcset="">
            </div>`
        )
    }

    container.innerHTML = containerBody;
}

function getMovies() {
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        renderMovies(data);
        console.log(data);
      }).catch(function() {
        console.log("vishhhh");
      });
}
