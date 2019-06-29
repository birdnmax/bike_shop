create table cart (
    id serial primary key not null,
    user_id int REFERENCES user_table(id) not null,
    bike_id int REFERENCES bike_list(id) not null,
    purchased boolean,
    date_added date not null
)