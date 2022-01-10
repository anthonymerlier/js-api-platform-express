const casual = require("casual")
let users = [];

for(let i = 0; i < 100; i++){
    users.push({
        _id: casual._uuid(),
        firstName: casual.first_name,
        lastName: casual.last_name,
        email: casual.email,
    })
}

module.exports = users;