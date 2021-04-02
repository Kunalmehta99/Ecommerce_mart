import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'kunal',
    email: 'kunal@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'kunalm',
    email: 'kunalm@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
