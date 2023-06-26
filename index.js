
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
var scooters1 = new scooters( 2015, "red", "swoosh");

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
var drivers1 = new drivers( "Allison", "16 years", "2 years");

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
var pickupLocation1 = new PickupLocation( "123 Broadway", "New York City");