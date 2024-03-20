import { Request, Response } from "express";

const getAll = (req: Request, res: Response) => {
  // Implementation to fetch all items from MongoDB
};

const create = (req: Request, res: Response) => {
  // Implementation to create a new item in MongoDB
};

const update = (req: Request, res: Response) => {
  // Implementation to update an item in MongoDB
};

const remove = (req: Request, res: Response) => {
  // Implementation to delete an item from MongoDB
};

export default {
  getAll,
  create,
  update,
  remove,
};
