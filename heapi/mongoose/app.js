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
     const an = new profiles({
         name:  "Tru",
         gender: "male",
         current_age:   11,
         records : [{
             weight: 133,
             bench: 133,
             squat: 133,
             deadlift: 133,
             age: 1
         },{
            weight: 133,
            bench: 133,
            squat: 133,
            deadlift: 133,
            age: 1
         }]
     });
     await an.save()

    //delete part
    //let docDel = await profiles.deleteOne({name: 'An'})
    // console.log(docDel.deletedCount)

    // find part
    let get_profile = await profiles.findOne({ name: 'An' }).lean();
    records = get_profile['records'];
    records.forEach(element => {
        // console.log(element['age'])
    });
    
    let all = await profiles.find({}).lean()
    console.log(all)

    // var userMap = {};
    //     users.forEach(function(user) {
    //         userMap[user._id] = user;
    //       });
    //       console.log(userMap)
    // })

    var friend = {
        weight: 144,
        bench: 144,
        squat: 144,
        deadlift: 144,
        age: 20
    }

    

    // await profiles.updateOne(
    //     { _id: get_profile._id },
    //     { $push: { records: friend }}
    // );

    // get_profile.save(done);
    
    
    db.close()
    
}

route()