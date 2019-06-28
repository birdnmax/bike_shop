insert into user_table (username, email, password)
values (${username}, ${email}, ${password});

select * from user_table where username = ${username}