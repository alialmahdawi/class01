class Movie {
    constructor(title, director) {
      this.title = title;
      this.director = director;
    }
  
    getTitle() {
        Movie.call(this,title);
    }
  
    getDirector() {
        Movie.call(this,director);
    }
  
    addStar(star) {
      this.star = star;
    }
  
    getStars() {
        Movie.apply(this,[star]);
    }
  
    addWriter(writer) {
     this.writer = writer;
    }
  
    getWriters() {
        Movie.addWriter.call(this,writer)
    }
  
    addRating(rating) {
      this.rating = rating;
    }
  
    getAverageRating() {
        Movie.addRating.call(this,rating);
    }
  
  }
  
  class StaffMember {
    constructor(name, role, dateOfBirth) {
      this.name = name;
      this.role = role;
      this.dateOfBirth = dateOfBirth;
    }
  
    addMovie(movie) {
      this.movie = movie;
    }
  
    getName() {
      StaffMember.call(this,name);
    }
  
    getRole() {
        StaffMember.call(this,role);
    }
  
    getAge() {
        StaffMember.call(this,dateOfBirth);
    }
  }


  const myMovie = new Movie('The Count of Monte Cristo','Kevin Reynolds');

const firstActor = new StaffMember('Jim Caviezel','Edmond Dantes','1968');
myMovie.addStar(firstActor);
const secondActor = new StaffMember('Guy Pearce','Fernand Mondego','1967');
myMovie.addStar(secondActor);
 
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);