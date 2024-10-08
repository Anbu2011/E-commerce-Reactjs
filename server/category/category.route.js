import express from 'express'
import { getAllCategory } from './category.service';

const router = express.Router();

router.get('/home', getAllCategory)

router.get('/categories/:uniqueCategory', )