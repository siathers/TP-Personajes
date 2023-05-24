import { router } from "passport-jwt";
import passport from "passport";
import Personaje from "/models/peliserie";
import { createCharacter, updateCharacter } from "../services/peliserieService";