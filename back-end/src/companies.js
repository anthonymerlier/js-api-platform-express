const casual = require("casual")
let companies = [];

for(let i = 0; i < 100; i++){
    companies.push({
        _id: casual._uuid(),
        companyName: casual.company_name,
        companyAddress: casual.address
    })
}

module.exports = companies;