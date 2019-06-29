const bcrypt = require('bcrypt');
const saltRounds = 10;
const {session} = require('express-session');

module.exports = {
    login: (req, res, next)=>{
        const {session} = req;
        const db = req.app.get('db');
        const {username, password} = req.body;
        let catchUser = {};
    
        db.user_table.findOne({username})
        .then((user)=>{
            if(!user){
                throw('Username not found')
            }
            catchUser = user;
            return bcrypt.compare(password, user.password )
        })
        .then((isMatch)=>{
            if(!isMatch){
                throw(`Your credentials don't match our records.`)
            }
            delete catchUser.password
    
            req.session.user = catchUser;
            res.send({success:true, user:catchUser})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
    },

    register: (req, res, next)=>{
        const db = req.app.get('db');
        const {session} =req;
        const {email, password, username} = req.body;
    
        db.user_table.findOne({email})
        .then((user)=>{
            if(user){
                throw('User already exists. Please login')
            }
            return bcrypt.hash(password, 10)
        })
        .then((hash)=>{
            return db.user_table.insert({email, password:hash, username})
        })
        .then((user)=>{
            delete user.password
            req.session.user = user
            res.send({success:true, user})
        })
        .catch((err)=>{
            res.send({success:false, err})
        })
    },

    logout: (req, res, next)=>{
        req.session.destroy();
        res.send({success:true})
    },

    isLoggedIn: (req, res, next)=>{
        const db = req.app.get('db');
        const {session} = req; 
        if (session.user){ 
                db.user_table.findOne({email})
                .then((user) => {
                    return db.user_table.findOne({id: session.user.id})
                })
        } else {
            res.send(false)
        }
    }
};