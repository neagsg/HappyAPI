import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanages from '../models/Orphanages';

class OrphanagesController {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find()

    return response.json(orphanages);

  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id)

    return response.json(orphanage);

  }

  async create(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;

    const orphanages = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepository.save(orphanages);

    return response.status(200).json(orphanages);

    
  }
}

export default  new OrphanagesController;