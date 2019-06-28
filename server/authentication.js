const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    login: (req, res, next)=>{
        // get database context 
        const db = req.app.get('db');
        //Destructure things sent from the body.
        const {username, password} = req.body;
        //Check if the email corresponds to a user. 
    
        //Catch user
        let catchUser = {};
    
        db.user_table.findOne({username})
        .then((user)=>{
            if(!user){
                throw('Username not found')
            }
            //Compare the password
            //user.password will be the hash. 
            catchUser = user;
            return bcrypt.compare(password, user.password )
        })
        .then((isMatch)=>{
            // handle bad password
            if(!isMatch){
                throw(`You're credentials don't match our records.`)
            }
            //prepare user for frontend
            delete catchUser.password
    
            req.session.user = catchUser;
            res.send({success:true, user:catchUser})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
    },
    register: (req, res, next)=>{
        // get database context 
        const db = req.app.get('db');
        //Destructure things sent from the body.
        const {email, password, username} = req.body;
    
        // Handle if user already exists.
        db.user_table.findOne({email})
        .then((user)=>{
            if(user){
                throw('user already exists. Please login')
            }
            //encypt password
            return bcrypt.hash(password, 10)
        })
        .then((hash)=>{
            // add user to database *Make sure to save hash as password
            return db.user_table.insert({email, password:hash, username})
        })
        .then((user)=>{
            //Prepare user object to send back to frontend and set session
            delete user.password
            req.session.user = user
            res.send({success:true, user})
        })
        .catch((err)=>{
            //handle all erros
            res.send({success:false, err})
        })
    },
    logout: (req, res, next)=>{
        // this destroys the session and removes the user object.
        req.session.destroy();
        res.send({success:true})
    },
    isLoggedIn: (req, res, next)=>{
        //check to see if the user object is set to the session.
        // send back true of false.  
        if(req.session.user){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
       
    }
};