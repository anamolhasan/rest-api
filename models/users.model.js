const {v4: uuidv4} = require('uuid')

const users = [
    {
        id: uuidv4(),
        username: 'anamolhasa',
        email: 'anam@hasan.com'
    },
    {
        id: uuidv4(),
        username: 'mojahid',
        email: 'mojagid@hasan.com'
    },
    {
        id: uuidv4(),
        username: 'shave',
        email: 'shave@hasan.com'
    },    
]
module.exports = users