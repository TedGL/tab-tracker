import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', creedentials)
    }
}

// AuthenticationService.register({
//     email: 'test@tester.com',
//     password: '123456'
// })