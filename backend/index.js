const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 5000;
const multer = require("multer");


app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.listen(port, async () => {
    console.log("Server is Running");
    await mongoose.connect('mongodb+srv://gameconnect:gameconnect123@cluster0.s5afgka.mongodb.net/dbGameConnect');
    console.log("db connection established");
});

const PATH = "./public/images";
const upload = multer({
    storage: multer.diskStorage({
        destination: PATH,
        filename: function (req, file, cb) {
            let origialname = file.originalname;
            let ext = origialname.split(".").pop();
            let filename = origialname.split(".").slice(0, -1).join(".");
            cb(null, filename + "." + ext);
        },
    }),
});


app.get("/Sample", (req, res) => {
    res.send({
        message: "Hai",
    });
});

//SchemaUploadGame

const uploadGameSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    uploadfile: {
        type: String,
    },
});
const UploadGame = mongoose.model('uploadGame', uploadGameSchema);

app.post('/UploadGame',
    upload.fields([
        { name: "file", maxCount: 1 },
    ]), async (req, res) => {
        var fileValue = JSON.parse(JSON.stringify(req.files));
        var uploadfile = `http://127.0.0.1:${port}/images/${fileValue.file[0].filename}`;

        const { name, desc } = req.body
        const uploadGame = new UploadGame({
            name,
            desc,
            uploadfile,

        })
        await uploadGame.save()
        res.send({ message: 'game inserted successfully' })

    })

//UploadGame Select

app.get('/UploadGame', async (req, res) => {
    const uploadGame = await UploadGame.find()
    res.send(uploadGame)
})

//SchemaAdmin

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});
const Admin = mongoose.model('admin', adminSchema);

app.post('/Admin', async (req, res) => {
    const { name, email, password } = req.body
    const admin = new Admin({
        name,
        email,
        password
    })
    await admin.save()
    res.send({ message: 'Admin inserted successfully' })

})


//Admin Select

app.get('/Admin', async (req, res) => {
    const admin = await Admin.find()
    res.send(admin)
})

//Admin Select by one 

app.get('/Admin/:Id', async (req, res) => {
    const Id = req.params.Id
    const admin = await Admin.findOne({ _id: Id })
    res.send(admin)
})

// Admin delete
app.delete('/Admin/:Id', async (req, res) => {
    const Id = req.params.Id
    const admin = await Admin.findByIdAndDelete({ _id: Id })
    res.send(admin)
})

// Admin Update
app.put('/Admin/:Id', async (req, res) => {
    const Id = req.params.Id
    const { name, email, password } = req.body
    const admin = await Admin.findByIdAndUpdate(Id, {
        name,
        email,
        password
    }, { new: true })
    res.send(admin)

})


//SchemaType

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});
const Type = mongoose.model('type', typeSchema);

app.post('/Type/', async (req, res) => {
    const { name } = req.body
    const type = new Type({
        name,

    })
    await type.save()
    res.send({ message: 'Type inserted successfully' })

})

//Type Select

app.get('/Type', async (req, res) => {
    const type = await Type.find()
    res.send(type)
})

//Type Select by one 

app.get('/Type/:Id', async (req, res) => {
    const Id = req.params.Id
    const type = await Type.findOne({ _id: Id })
    res.send(type)
})

// Type delete
app.delete('/Type/:Id', async (req, res) => {
    const Id = req.params.Id
    const type = await Type.findByIdAndDelete({ _id: Id })
    res.send(type)
})

// Type Update
app.put('/Type/:Id', async (req, res) => {
    const Id = req.params.Id
    const { name } = req.body
    const type = await Type.findByIdAndUpdate(Id, {
        name,

    }, { new: true })
    res.send(type)

})


//SchemaUser

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    userBio: {
        type: String,
    },
    userStatus: {
        type: String,
    },

});
const User = mongoose.model('user', userSchema);

app.post('/User', async (req, res) => {
    const { name, email, username, password } = req.body
    console.log(req.body);
    const user = new User({
        name,
        email,
        username,
        password
    })
    await user.save()
    res.send({ message: 'user inserted successfully' })

})

//user Select

app.get('/User', async (req, res) => {
    const user = await User.find()
    res.send(user)
})

//User Select by one 

app.get('/User/:Id', async (req, res) => {
    const Id = req.params.Id
    const user = await User.findOne({ _id: Id })
    res.send(user)
})

// User delete
app.delete('/User/:Id', async (req, res) => {
    const Id = req.params.Id
    const user = await User.findByIdAndDelete({ _id: Id })
    res.send(user)
})

// Type User
app.put('/User/:Id', async (req, res) => {
    const Id = req.params.Id
    const { name, email, username, userBio, userStatus,
    } = req.body
    const user = await User.findByIdAndUpdate(Id, {
        name,
        email,
        username,
        userBio,
        userStatus,

    }, { new: true })
    res.send(user)

})



//SchemaPost


const postSchema = new mongoose.Schema({
    file: {
        type: String,
    },
    caption: {
        type: String,
    },
    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },


});
const Post = mongoose.model('post', postSchema);

app.post('/Post', async (req, res) => {
    const { file, caption, userId } = req.body
    const post = new Post({
        file,
        caption,
        userId,
    })
    await post.save()
    res.send({ message: 'post inserted successfully' })

})

//Post Select

app.get('/Post', async (req, res) => {
    const post = await Post.find()
    res.send(post)
})

//Post Select by one 

app.get('/Post/:Id', async (req, res) => {
    const Id = req.params.Id
    const post = await Post.findOne({ _id: Id })
    res.send(post)
})
// Post delete
app.delete('/Post/:Id', async (req, res) => {
    const Id = req.params.Id
    const post = await Post.findByIdAndDelete({ _id: Id })
    res.send(post)
})

// Post Update
app.put('/Post/:Id', async (req, res) => {
    const Id = req.params.Id
    const { file,
        caption,
        userId,
    } = req.body
    const post = await Post.findByIdAndUpdate(Id, {
        file,
        caption,
        userId,

    }, { new: true })
    res.send(post)

})

//SchemaLike


const likeSchema = new mongoose.Schema({
    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },
    dateTime: {
        type: String,
    },



});


const Like = mongoose.model('like', likeSchema);

app.post('/Like', async (req, res) => {
    const { userId, dateTime } = req.body
    const like = new Like({
        userId,
        dateTime
    })
    await like.save()
    res.send({ message: 'like inserted successfully' })

})

// Like delete
app.delete('/Like/:Id', async (req, res) => {
    const Id = req.params.Id
    const like = await Like.findByIdAndDelete({ _id: Id })
    res.send(like)
})

// Like Update
app.put('/Like/:Id', async (req, res) => {
    const Id = req.params.Id
    const { userId,
        dateTime
    } = req.body
    const like = await Like.findByIdAndUpdate(Id, {
        userId,
        dateTime
    }, { new: true })
    res.send(like)

})

//SchemaComment


const commentSchema = new mongoose.Schema({
    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },
    content: {
        type: String,
    },



});
const Comment = mongoose.model('comment', commentSchema);

app.post('/Comment', async (req, res) => {
    const { userId, content } = req.body
    const comment = new Comment({
        userId,
        content
    })
    await comment.save()
    res.send({ message: 'comment inserted successfully' })

})

//Comment Select

app.get('/Comment', async (req, res) => {
    const comment = await Comment.find()
    res.send(comment)
})

//Comment Select by one 

app.get('/Comment/:Id', async (req, res) => {
    const Id = req.params.Id
    const comment = await Comment.findOne({ _id: Id })
    res.send(comment)
})

// comment delete
app.delete('/Comment/:Id', async (req, res) => {
    const Id = req.params.Id
    const comment = await Comment.findByIdAndDelete({ _id: Id })
    res.send(comment)
})

// comment Update
app.put('/Comment/:Id', async (req, res) => {
    const Id = req.params.Id
    const { userId,
        content
    } = req.body
    const comment = await Comment.findByIdAndUpdate(Id, {
        userId,
        content
    }, { new: true })
    res.send(comment)

})
//SchemaDeveloper


const developerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    proof: {
        type: String,
    },
    password: {
        type: String,
    },



});
const Developer = mongoose.model('developer', developerSchema);

app.post('/Developer',
    upload.fields([
        { name: "file", maxCount: 1 },
    ]), async (req, res) => {
        var fileValue = JSON.parse(JSON.stringify(req.files));
        var proof = `http://127.0.0.1:${port}/images/${fileValue.file[0].filename}`;

        const { name, email, password, } = req.body
        const developer = new Developer({
            name,
            email,
            proof,
            password,

        })
        await developer.save()
        res.send({ message: 'Developer inserted successfully' })

    })


//Developer Select

app.get('/Developer', async (req, res) => {
    const developer = await Developer.find()
    res.send(developer)
})

//developer Select by one 

app.get('/Developer/:Id', async (req, res) => {
    const Id = req.params.Id
    const developer = await Developer.findOne({ _id: Id })
    res.send(developer)
})
// developer delete
app.delete('/Developer/:Id', async (req, res) => {
    const Id = req.params.Id
    const developer = await Developer.findByIdAndDelete({ _id: Id })
    res.send(developer)
})

// developer Update
app.put('/Developer/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        name,
        email,
        proof,
        password,
    } = req.body
    const developer = await Developer.findByIdAndUpdate(Id, {
        name,
        email,
        proof,
        password,
    }, { new: true })
    res.send(developer)

})
//Schemagenre


const genreSchema = new mongoose.Schema({

    name: {
        type: String,
    },
});
const Genre = mongoose.model('genre', genreSchema);

app.post('/Genre', async (req, res) => {
    const { name } = req.body
    const genre = new Genre({
        name
    })
    await genre.save()
    res.send({ message: 'genre inserted successfully' })

})
//Genre Select

app.get('/Genre', async (req, res) => {
    const genre = await Genre.find()
    res.send(genre)
})

//Genre Select by one 

app.get('/Genre/:Id', async (req, res) => {
    const Id = req.params.Id
    const genre = await Genre.findOne({ _id: Id })
    res.send(genre)
})
// Genre delete
app.delete('/Genre/:Id', async (req, res) => {
    const Id = req.params.Id
    const genre = await Genre.findByIdAndDelete({ _id: Id })
    res.send(genre)
})

// Genre Update
app.put('/Genre/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        name,

    } = req.body
    const genre = await Genre.findByIdAndUpdate(Id, {
        name,

    }, { new: true })
    res.send(genre)

})
//SchemaGame


const gameSchema = new mongoose.Schema({
    developerId: {
        ref: 'developer',
        type: mongoose.Schema.Types.ObjectId,
    },
    file: {
        type: String,
    },
    date: {
        type: String,
    },
    details: {
        type: String,
    },
    genreId: {
        ref: 'genre',
        type: mongoose.Schema.Types.ObjectId,
    },



});
const Game = mongoose.model('game', gameSchema);

app.post('/Game', async (req, res) => {
    const { developerId, file, date, details, genreId, } = req.body
    const game = new Game({
        developerId,
        file,
        date,
        details,
        genreId,

    })
    await game.save()
    res.send({ message: 'Game inserted successfully' })

})
//game Select

app.get('/Game', async (req, res) => {
    const game = await Game.find()
    res.send(game)
})

//game Select by one 

app.get('/Game/:Id', async (req, res) => {
    const Id = req.params.Id
    const game = await Game.findOne({ _id: Id })
    res.send(game)
})
// game delete
app.delete('/Game/:Id', async (req, res) => {
    const Id = req.params.Id
    const game = await Game.findByIdAndDelete({ _id: Id })
    res.send(game)
})

// game Update
app.put('/Game/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        developerId,
        file,
        date,
        details,
        genreId,

    } = req.body
    const game = await Game.findByIdAndUpdate(Id, {
        developerId,
        file,
        date,
        details,
        genreId,

    }, { new: true })
    res.send(game)

})

//SchemReviewHead


const reviewHeadSchema = new mongoose.Schema({

    gameData: {
        type: String,
    },




});
const ReviewHead = mongoose.model('reviewHead', reviewHeadSchema);

app.post('/ReviewHead', async (req, res) => {
    const { gameData } = req.body
    const reviewHead = new ReviewHead({
        gameData

    })
    await reviewHead.save()
    res.send({ message: 'reviewHead inserted successfully' })

})
//reviewHead Select

app.get('/ReviewHead', async (req, res) => {
    const reviewHead = await ReviewHead.find()
    res.send(reviewHead)
})

//ReviewHead Select by one 

app.get('/ReviewHead/:Id', async (req, res) => {
    const Id = req.params.Id
    const reviewHead = await ReviewHead.findOne({ _id: Id })
    res.send(reviewHead)
})

// ReviewHead delete
app.delete('/ReviewHead/:Id', async (req, res) => {
    const Id = req.params.Id
    const reviewHead = await ReviewHead.findByIdAndDelete({ _id: Id })
    res.send(reviewHead)
})

// ReviewHead Update
app.put('/ReviewHead/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        gameData

    } = req.body
    const reviewHead = await ReviewHead.findByIdAndUpdate(Id, {
        gameData

    }, { new: true })
    res.send(reviewHead)

})

//SchemReviewBody


const reviewBodySchema = new mongoose.Schema({

    content: {
        type: String,
    },
    dateTime: {
        type: String,
    },
    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },
    reviewHeadId: {
        ref: 'reviewHead',
        type: mongoose.Schema.Types.ObjectId,
    },




});
const ReviewBody = mongoose.model('reviewBody', reviewBodySchema);

app.post('/ReviewBody', async (req, res) => {
    const { content, dateTime, userId, reviewHeadId } = req.body
    const reviewBody = new ReviewBody({
        content,
        dateTime,
        userId,
        reviewHeadId
    })
    await reviewBody.save()
    res.send({ message: 'reviewBody inserted successfully' })

})

//ReviewBody Select

app.get('/ReviewBody', async (req, res) => {
    const reviewBody = await ReviewBody.find()
    res.send(reviewBody)
})

//reviewBody Select by one 

app.get('/ReviewBody/:Id', async (req, res) => {
    const Id = req.params.Id
    const reviewBody = await ReviewBody.findOne({ _id: Id })
    res.send(reviewBody)
})

// reviewBody delete
app.delete('/ReviewBody/:Id', async (req, res) => {
    const Id = req.params.Id
    const reviewBody = await ReviewBody.findByIdAndDelete({ _id: Id })
    res.send(reviewBody)
})

// reviewBody Update
app.put('/ReviewBody/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        content,
        dateTime,
        userId,
        reviewHeadId

    } = req.body
    const reviewBody = await ReviewBody.findByIdAndUpdate(Id, {
        content,
        dateTime,
        userId,
        reviewHeadId

    }, { new: true })
    res.send(reviewBody)

})
//SchemReviewLike


const reviewLikeSchema = new mongoose.Schema({

    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },
});
const ReviewLike = mongoose.model('reviewLike', reviewLikeSchema);

app.post('/ReviewLike', async (req, res) => {
    const { userId } = req.body
    const reviewLike = new ReviewLike({
        userId
    })
    await reviewLike.save()
    res.send({ message: 'reviewLike inserted successfully' })

})

// ReviewLike delete
app.delete('/ReviewLike/:Id', async (req, res) => {
    const Id = req.params.Id
    const reviewLike = await ReviewLike.findByIdAndDelete({ _id: Id })
    res.send(reviewLike)
})

// reviewLike Update
app.put('/ReviewLike/:Id', async (req, res) => {
    const Id = req.params.Id
    const { userId
    } = req.body
    const reviewLike = await ReviewLike.findByIdAndUpdate(Id, {
        userId
    }, { new: true })
    res.send(reviewLike)

})


//SchemaFeedback


const feedbackSchema = new mongoose.Schema({

    content: {
        type: String,
    },
    userId: {
        ref: 'user',
        type: mongoose.Schema.Types.ObjectId,
    },
    gameId: {
        ref: 'game',
        type: mongoose.Schema.Types.ObjectId,
    }
});
const Feedback = mongoose.model('feedback', feedbackSchema);

app.post('/Feedback', async (req, res) => {
    const { content, userId, gameId } = req.body
    const feedback = new Feedback({
        content,
        userId,
        gameId
    })
    await feedback.save()
    res.send({ message: 'feedback inserted successfully' })

})


//Feedback Select

app.get('/Feedback', async (req, res) => {
    const feedback = await Feedback.find()
    res.send(feedback)
})

//feedback Select by one 

app.get('/Feedback/:Id', async (req, res) => {
    const Id = req.params.Id
    const feedback = await Feedback.findOne({ _id: Id })
    res.send(feedback)
})
// feedback delete
app.delete('/Feedback/:Id', async (req, res) => {
    const Id = req.params.Id
    const feedback = await Feedback.findByIdAndDelete({ _id: Id })
    res.send(feedback)
})

// Feedback Update
app.put('/Feedback/:Id', async (req, res) => {
    const Id = req.params.Id
    const {
        content,
        userId,
        gameId
    } = req.body
    const feedback = await Feedback.findByIdAndUpdate(Id, {
        content,
        userId,
        gameId
    }, { new: true })
    res.send(feedback)

})