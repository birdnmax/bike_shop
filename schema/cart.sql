CREATE TABLE cart(
    id serial primary key not null,
    user_id int references user_table(id) not null,
    bike_id int references bike(id) not null,
    purchased boolean
)