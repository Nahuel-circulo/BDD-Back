import express from 'express'
import cors from 'cors'
import { createItinerarioRouter } from '../routes/itinerarioRouter.js'

export class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000

    // Agregar los paths
    this.paths = {
      itinerarios: '/api/itinerarios'
    }

    // this.conectarDB;

    this.middlewares()

    this.routes()
  }

  // async conectarDB() {}

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes () {
    this.app.use(this.paths.itinerarios, createItinerarioRouter())
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server running on port http://localhost:${this.port}`)
    })
  }
}
