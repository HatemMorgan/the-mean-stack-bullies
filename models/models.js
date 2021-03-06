
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Db = require('../db.js');

Db.init(function(){
console.log("here");
});

var outgoingflightSchema = schema({
            flightNumber      : String,
            aircraftType      : String,
            aircraftModel     : String,
            departureDateTime : String,
            arrivalDateTime   : String,
            origin            : String,
            destination       : String,
            cost              : Number, 
            seats             : Number, 
            currency          : String,
            class             : String,
            Airline           : String
});


var reservationSchema = schema({
    inFlight_id:String,
    outFlight_id:String,
    bookingRefNumber:String

});


var pesonSchema = schema({
            firstName      : String,
            secondName     : String,
            age            : Number,
            nationality    : String,
            passportNumber : String,
            issueDate      : Date,
            bookingRefNumber:String,
            expiryDate     : Date
});

var ingoingflightSchema = schema({
            flightNumber      : String,
            aircraftType      : String,
            aircraftModel     : String,
            departureDateTime : String,
            arrivalDateTime   : String, 
            seats             : Number,
            origin            : String,
            destination       : String,
            cost              : Number,
            currency          : String,
            class             : String,
            Airline           : String
});
var bookingSchema = schema({
    trip:{type:String,default:null},
    from: String,
    To: String,
    DepartureDate: Date,
    ReturnDate: Date,
    NumberOfAdults: Number,
    NumberOfChildren: Number,
    Email:{type:String,default:null}

});



var airportSchema = schema({
    iata:String,
    lon: {type:String,default:null},
    iso: String,
    status: Number,
    city:{type:String,default:""},
    name: String,
    continent: String,
    type: String,
    lat: {type:String,default:null},
    size: String

});


var paymentSchema = schema({
      visa:Boolean,
      MasterCard: Boolean,
      CardHolderName: String,
      CardHolderNo: Number,
      Cvv: Number,
      ExpiryDate: Date,
      bookingRefNumber:String


});




mongoose.model('Airport', airportSchema);
mongoose.model('outFlight', outgoingflightSchema);
mongoose.model('Reservation', reservationSchema);
mongoose.model('Booking', bookingSchema);
mongoose.model('Payment', paymentSchema);
mongoose.model('inFlight', ingoingflightSchema);
mongoose.model('Person', pesonSchema);





