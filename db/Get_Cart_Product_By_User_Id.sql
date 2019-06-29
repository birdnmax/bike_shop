select c.id, b.price, b.name, b.img_url, b.description, c.date_added 
from cart as c
join bike as b on c.bike_id = b.id
where user_id = ${id}