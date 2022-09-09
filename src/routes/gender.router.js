import { Router } from "express"
import Character from '../database/managers/character.manager.js'


const characterService = new Character()
const router = Router()