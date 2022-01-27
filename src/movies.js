const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map ( (cadaDirector) => {
    return cadaDirector.director
  })
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const peliculasDramaStSpielberg = movies.filter ( (dramaStSpielberg) => {
    if (dramaStSpielberg.genre.includes("Drama") && dramaStSpielberg.director === "Steven Spielberg"){
      return true;
    }

})
return peliculasDramaStSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies){
    if (movies.length === 0) {
      return 0;
    }
  
  let totalScores = movies.reduce((acum, elem) => {
    if (elem.score === undefined) {
      return acum

    } else {
      return acum + elem.score
    }
  }, 0)
  let averageScore = totalScores/movies.length;
  return Number (averageScore.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies){
  if (movies.length === 0) {
    return 0;
  }

let totalDramaScores = movies.reduce((acum, elem) => {
  if (elem.score === undefined) {
    return acum
  } else if (elem.genre.includes("Drama")) {
    return acum + elem.score
  } else {
    return acum
  }
}, 0)

const peliculasDrama = movies.filter ( (dramaMovie) => {  
  if (dramaMovie.genre.includes("Drama")){
    return true;
  }
})

if (peliculasDrama.length === 0) {
  return 0
}

let averageDramaScore = totalDramaScores/peliculasDrama.length;
return Number (averageDramaScore.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    return 0;
  }

  let copyMovies = JSON.parse(JSON.stringify(movies))

  let sortedMovies = copyMovies.sort( (first, second) => {
    if (first.year > second.year) {
      return 1
    } else {
      return -1 
    }
  })
  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if (movies.length === 0) {
    return 0;
  }
  
  let copyMovies = JSON.parse( JSON.stringify( movies ) )

  let onlyTitles =  copyMovies.map ( (unaPelicula) => {
    return unaPelicula.title
  })

  let sortedMovies = onlyTitles.sort()

  if (sortedMovies.length <20) {
    return sortedMovies
  } 

  let deletedMovies = sortedMovies.splice(20, sortedMovies.length-20)
  return sortedMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
