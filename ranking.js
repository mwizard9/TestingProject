// Define a function to calculate the average rating of a photo
function getAverageRating(photo) {
    if (!photo.votes || photo.votes.length == 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < photo.votes.length; i++) {
      sum += photo.votes[i];
    }
    return sum / photo.votes.length;
  }
  
  // Define a function to add a vote to a photo
  function addVote(photo, rating) {
    if (!photo.votes) {
      photo.votes = [];
    }
    photo.votes.push(rating);
  }
  
  // Define a function to sort an array of photos by average rating
  function sortPhotosByRating(photos) {
    photos.sort(function(a, b) {
      return getAverageRating(b) - getAverageRating(a);
    });
  }
  
  // Example usage:
  
  // Define some photos
  var photo1 = {
    name: "Sunset at the Beach",
    votes: [5, 4, 5, 5,5,5]
  };
  var photo2 = {
    name: "Mountain Landscape",
    votes: [3, 4, 5]
  };
  var photo3 = {
    name: "Cityscape at Night",
    votes: [5, 5,4,5,4,4]
  };
  var photos = [photo1, photo2, photo3];
  
  // Add a new vote to photo2
  addVote(photo2, 4);
  
  // Sort the photos by average rating
  sortPhotosByRating(photos);
  
  // Print the sorted list of photos and their ratings
  for (var i = 0; i < photos.length; i++) {
    console.log(photos[i].name + ": " + getAverageRating(photos[i]));
  }
  
  // Output:
  // Cityscape at Night: 5
  // Sunset at the Beach: 4.75
  // Mountain Landscape: 4
  