
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
let scooters1 = new scooters( 2015, "red", "swoosh");

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
let drivers1 = new drivers( "Allison", "16 years", "2 years");

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
let pickupLocation1 = new PickupLocation( "123 Broadway", "New York City");