const express = require('express')
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const createUser = () => {
    const user ={
        password : faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('+355 68 ### ## ##') ,
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    }
    return user;
    
}

const createCompany =()=>{
    const company={
        _id: faker.datatype.uuid(),
        name:faker.name.fullName(),
        adress:{
            street: faker.address.street(),
            city:faker.address.city() ,
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return company;
}
const users = [];
const companies=[];

app.get("/api/users/", (req, res) => {

    res.json({ listaUser: users });
});
app.get("/api/users/new/", (req, res) => {
    const fakeUser = createUser()
    users.push(fakeUser)
    res.json( users );

});
app.get("/api/companies/",(req,res)=>{
    res.json({listaCompanies: companies})
});
app.get("/api/companies/new",(req,res)=>{
    const fakeComp= createCompany();
    companies.push(fakeComp);
    res.json(companies);
})

app.get("/api/user/company", (req,res)=>{
    const fakeComp= createCompany();
    companies.push(fakeComp);
    const fakeUser = createUser();
    users.push(fakeUser);
    res.json( {companies: companies, users: users} )
})

app.listen(port, () => console.log(`Listening on port: ${port}`));