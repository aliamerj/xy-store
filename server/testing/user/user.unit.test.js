const User = require('../../modules/user.module');
const { getUser } = require('../../routes/user/user.controller');

// controller
describe('controller.getUser', ()=>{
    it('should return user in given id', ()=>{
        User.findById('123') = jest.fn().mockReturnValue({_id: '123' , username : 'ali'})

        expect(getUser).toBe({_id: '123' , username : 'ali'})
    })
    
})

