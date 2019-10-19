async function route() {
    var mongoose = require('mongoose');
    
    mongoose.connect('mongodb+srv://avu1:Anvu23198@cluster0-oj2tn.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // console.log("true")
    });
    

    var Schema = mongoose.Schema;
    var name;

    var profilesSchema = new Schema({
        name:  String,
        gender: String,
        current_age: Number,
        records : [{
            weight: Number,
            bench: Number,
            squat: Number,
            deadlift: Number,    
            date_entered: { type: Date, default: Date.now },
            age: Number
        }]
    });

    var profiles = mongoose.model('Profiles', profilesSchema);

    //insert part
    // const an = new profiles({
    //     name:  "Tru",
    //     gender: "male",
    //     current_age:   21,
    //     records : [{
    //         weight: 144,
    //         bench: 144,
    //         squat: 144,
    //         deadlift: 144,
    //         age: 19
    //     },{
    //         weight: 144,
    //         bench: 144,
    //         squat: 144,
    //         deadlift: 144,
    //         age: 20
    //     }]
    // });
    // await an.save()

    //delete part
    // let docDel = await profiles.deleteOne({name: 'An'})
    // console.log(docDel.deletedCount)

    // find part
    let doc = await profiles.findOne({ name: 'An' }).lean();
    console.log(doc['name'])
    
    db.close()
    
}

route()