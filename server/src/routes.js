const isAuthenController = require('./controllers/isAuthenController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const BlogController = require('./controllers/BlogController')
const UploadController = require('./controllers/UploadController')

const CourseController = require('./controllers/CourseController')
const BookController = require('./controllers/bookController')
const fileUploadMiddleware = require('./middleware/fileUpload') // Import Middleware

module.exports = (app) => {
    // เส้นทางเดิมจากบทที่ 4 (ถ้าอยากเก็บไว้)
    // app.get('/status', (req, res) => res.send('server is running'))
    // เส้นทางใหม่สำหรับ User Management แบบ MVC
    app.get('/users', isAuthenController, UserController.index)
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
        // blog route
        // create blog
    app.post('/blog', BlogController.create)

    // edit blog, suspend, active
    app.put('/blog/:blogId', BlogController.put)

    // delete blog
    app.delete('/blog/:blogId', BlogController.remove)

    // get blog by id
    app.get('/blog/:blogId', BlogController.show)

    // get all blog
    app.get('/blogs', BlogController.index)

    // Route สำหรับ Upload โดยเฉพาะ
    // logic: เรียก middleware ก่อน -> ถ้าผ่าน -> เรียก controller
    app.post('/upload', fileUploadMiddleware, UploadController.upload)

    // Delete File Route (เพิ่มใหม่)
    app.post('/upload/delete', UploadController.deleteFile)

    // Course routes
    app.post('/course', CourseController.create)
    app.put('/course/:courseId', CourseController.put)
    app.delete('/course/:courseId', CourseController.remove)
    app.get('/course/:courseId', CourseController.show)
    app.get('/courses', CourseController.index)

    // Book routes
    app.post('/book', BookController.create)
    app.put('/book/:bookId', BookController.put)
    app.delete('/book/:bookId', BookController.remove)
    app.get('/book/:bookId', BookController.show)
    app.get('/books', BookController.index)
}