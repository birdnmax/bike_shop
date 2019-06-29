select c.id, p.price, p.name, p.image_url, p.description, c.date_added 
from cart as c
join product as p on c.product_id = p.id
where user_id = ${id}