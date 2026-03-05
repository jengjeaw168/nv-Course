const { Course } = require('../models')

module.exports = {
  // get all course
  async index (req, res) {
    try {
      const courses = await Course.findAll()
      res.send(courses)
    } catch (err) {
      res.status(500).send({
        error: 'The courses information was incorrect'
      })
    }
  },

  // create course
  async create (req, res) {
    try {
      const course = await Course.create(req.body)
      res.send(course.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create course incorrect'
      })
    }
  },

  // edit course, suspend, active
  async put (req, res) {
    try {
      await Course.update(req.body, {
        where: {
          id: req.params.courseId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update course incorrect'
      })
    }
  },

  // delete course
  async remove (req, res) {
    try {
      const course = await Course.findOne({
        where: {
          id: req.params.courseId
        }
      })

      if (!course) {
        return res.status(403).send({
          error: 'The course information was incorrect'
        })
      }

      await course.destroy()
      res.send(course)
    } catch (err) {
      res.status(500).send({
        error: 'The course information was incorrect'
      })
    }
  },

  // get course by id
  async show (req, res) {
    try {
      const course = await Course.findByPk(req.params.courseId)
      res.send(course)
    } catch (err) {
      res.status(500).send({
        error: 'The course information was incorrect'
      })
    }
  }
}
