import { showStatus } from "../resSatus/status.js";
import { reviewTable } from "../table/reviewTable.js";
import { Op } from "sequelize";

export const addReview = async (req, res) => {
  try {
    const { name, pros, cons } = req.body;
    if (!name || !pros || !cons) {
      // return res.status(500).json({
      //   esssage:"all data needed",
      //   success:false
      // })
      return showStatus(res, 400, "all data is needed", false);
    }
    const data = await reviewTable.create({ name, pros, cons });
    return showStatus(res, 200, "data added successfully", true, data);
  } catch (error) {
    return showStatus(res, 500, error.message, false);
  }
};

export const showReview = async (req, res) => {
  try {
    const data = await reviewTable.findAll();
    if (!data) {
      return showStatus(res, 500, "data cant be found", false);
    }

    return showStatus(res, 200, "all review are featched", true, data);
  } catch (error) {
    return showStatus(res, 500, error.message, false);
  }
};

export const deleteReview = async (req, res) => {};

export const findByName = async (req, res) => {
  try {
    const {name} = req.query;

    const project = await reviewTable.findOne({ where: { name: {[Op.like]:`%${name}%`} } });
    if (project === null) {
      return showStatus(res, 404, "data cant be found", false);
    } else {
      return showStatus(res, 200, "data got", true, project);
    }
  } catch (error) {
    return showStatus(res, 500, error.message, false);
  }
};
