CREATE TABLE bike(
    id serial primary key,
    name varchar(100) not null,
    desc varchar(100) not null,
    price decimal not null,
    quantity int,
    img_url varchar
);