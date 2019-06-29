CREATE TABLE bike_list(
    id serial primary key,
    name varchar(100) not null,
    description varchar(100) not null,
    price decimal not null,
    quantity int,
    img_url varchar
);