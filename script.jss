$(document).ready(function(){
    console.log("I asked the document and it's ready");

    var bikes = [];
        
    class Bike {
        constructor(type, name, sizes, colors) {
            this.type = type,
            this.name = name,
            this.sizes = sizes,
            this.colors = colors
            bikes.push(this);
        }
    }

    let cityMale = new Bike("cityMale", "stadsfiets heren", ["50", "57", "61"], ["blue", "red", "pink"]);
    let cityFemale = new Bike("cityFemale", "stadsfiets dames", ["50", "57"], ["blue", "yellow", "pink"]);
    let electrMale = new Bike("electrMale", "electrische fiets heren", ["50", "57", "61"], ["blue"]);
    let electrFemale = new Bike("electrFemale", "electrische fiets dames", ["43", "50", "57"], ["green", "red", "pink"]);
    let portable = new Bike("portable", "plooifiets", [], ["black", "red", "pink"]);

    let accessoires = ["fietsbel", "lichtjes", "slot", "diefstalverzekering"];

    var text = '<h3>kies eerst uw fiets</h3>';
    bikes.forEach(function(item){
        text += '<input class="w3-radio" type="radio" name="type" value="'+item.type+'"><label for="'+item.type+'">'+item.name+'</label><br></br>';
    });
    $( "#types" ).html( text );

    var text = '<h3>kies uw extras</h3>';
    accessoires.forEach(function(accessoire){
        text += '<input class="w3-check" type="checkbox" name="option" value="'+accessoire+'"><label for="'+accessoire+'">optie '+accessoire+' </label><br><br>';
    });        
    $( "#options" ).html( text );
    
    var price = '<h3>bereken uw prijs</h3>'
    price += '<p>hier komt dan de prijs</p>'
    $( "#price" ).html( price );


    $('input:radio[name="type"]').change( function(){
        console.log("I asked the radio-buttons, and it told me you've made a change");
        var chosenType = $("input[name='type']:checked").val();
        console.log(chosenType);
        bikes.forEach(function(bike){
            if(bike.type == chosenType){
                var text = '<h3>kies uw grootte</h3>';
                if(bike.sizes.length == 0){
                    text += '<input class="w3-radio" type="radio" name="size" value="no-size"><label for="no-size">Deze fiets heeft een uniform formaat. Klik om verder te gaan.</label><br><br>';
                }else{
                bike.sizes.forEach(function(size){
                    text += '<input class="w3-radio" type="radio" name="size" value="'+size+'"><label for="'+size+'">'+size+'</label><br><br>';
                });
                }
            }
            $( "#size" ).html( text );
        });

        bikes.forEach(function(bike){
            if(bike.type == chosenType){
                var text = '<h3>kies een kleur</h3>';
                bike.colors.forEach(function(color){
                    text += '<label><input class="w3-radio" name="color" type="radio" value="'+color+'"><span class="color" style="background-color:'+color+';"></span></label><br><br>';
                });
                $( "#color" ).html( text );
            }
        });
    
    });





});