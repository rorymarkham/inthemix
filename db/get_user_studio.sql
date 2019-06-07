select * from user_studio
join users on users.user_id = user_studio.user_id
where users.user_id = ${id}