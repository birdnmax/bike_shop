CREATE TABLE user_table(
    id serial primary key,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);