import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Suryansh Kumar',
        email: 'suryansh@kumar.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Prabhakar Pandey',
        email: 'prabhakar@pandey.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users