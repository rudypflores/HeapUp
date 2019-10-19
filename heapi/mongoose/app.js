async function route() {
    var mongoose = require('mongoose');
    
    mongoose.connect('mongodb+srv://avu1:Anvu23198@cluster0-oj2tn.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // console.log("true")
    });

    var profilesSchema = new mongoose.Schema({
        name:  String,
        gender: String,
        current_age: Number,
        height : Number,
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
     //const an = new profiles({
         //name:  "An",
         //gender: "male",
         //current_age:   21,
         //records : [{
             //weight: 144,
             //bench: 144,
             //squat: 144,
             //deadlift: 144,
             //age: 19
         //},{
             //weight: 144,
             //bench: 144,
             //squat: 144,
             //deadlift: 144,
             //age: 20
         //}]
     //});
     //await an.save()

    //delete part
    //let docDel = await profiles.deleteOne({name: 'An'})
    // console.log(docDel.deletedCount)

    // find part
    let get_profile = await profiles.findOne({ name: 'An' }).lean();
    records = get_profile['records'];
    records.forEach(element => {
        console.log(element['age'])
    });
    
    var friend = {
        weight: 144,
        bench: 144,
        squat: 144,
        deadlift: 144,
        age: 20
    }

    get_profile.records.push(friend);
    

    await profiles.updateOne(
        { _id: get_profile._id },
        { $push: { records: friend }}
        // done
    );

    // get_profile.save(done);
    
    
    db.close()
    
}

route()