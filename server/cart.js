module.exports = {
	addToCart: (req, res, next) => {
		const db = req.app.get('db');
		const cartObject = {
			user_id: req.session.user.id,
			product_id: req.body.product.id,
			purchased: false,
			date_added: new Date().toUTCString()
		};

		db.cart
			.insert(cartObject)
			.then(newItemInCart => {
				return db.Get_Cart_Product_By_User_Id({ id: req.session.user.id });
			})
			.then(cartItems => {
				res.send({ success: true, cartItems });
			})
			.catch(err => {
				res.send({ success: false, err });
			});
	},
	getCart: (req, res, next) => {
		const db = req.app.get('db');
		db.Get_Cart_Product_By_User_Id({ id: req.session.user.id })
			.then(cartItems => {
				res.send({ success: true, cartItems });
			})
			.catch(err => {
				res.send({ success: false, err });
			});
	},
	removeFromCart: (req, res, next) => {
		const db = req.app.get('db'); 
		db.cart.destroy({id:req.params.id})
			.then((res)=>{
				return db.Get_Cart_Product_By_User_Id({ id: req.session.user.id })
			})
			.then(cartItems => {
				res.send({ success: true, cartItems });
			})
			.catch(err => {
				res.send({ success: false, err });
			});
	}
};