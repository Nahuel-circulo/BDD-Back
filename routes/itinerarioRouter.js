import { Router } from 'express'
import { ItinerarioController } from '../controllers/itinerarioController.js'

export const createItinerarioRouter = () => {
  const itinerarioRouter = Router()

  const itinerarioController = new ItinerarioController()

  itinerarioRouter.get('/', itinerarioController.getAll)

  return itinerarioRouter
}
