const FeedBack = require("../models/Feedback.Model");

exports.getAllFeedBacks = async (req, res, next) => {
  const feedBacksCount = await FeedBack.countDocuments();
  try {
    const feedBacks = await FeedBack.find({}).populate("author");
    res.status(200).json({ feedBacks, feedBacksCount });
  } catch (error) {
    res.json(error);
  }
};

exports.getOneFeedBack = async (req, res, next) => {
  try {
    
    const { feedBackId } = req.params;
    const feedBack = await FeedBack.findById(feedBackId);
    res.status(200).json(feedBack);
  } catch (error) {
    res.json(error);
  }
};

exports.createFeedBack = async (req, res, next) => {
  try {
    const feedBack = await FeedBack.create({ ...req.body });
    res.status(200).json(feedBack);
  } catch (error) {
    res.json(error);
  }
};

exports.updateFeedBack = async (req, res, next) => {
  try {
    const { feedBackId } = req.params;
    const feedBack = await FeedBack.findByIdAndUpdate(feedBackId, {
      ...req.body,
    });
    res.status(200).json(feedBack);
  } catch (error) {
    res.json(error);
  }
};

exports.deleteFeedBack = async (req, res, next) => {
  try {
    const { feedBackId } = req.params;
    await FeedBack.findByIdAndDelete(feedBackId);
    res.status(200).json({
      status: "success",
      message: "FeedBack has been deleted",
    });
  } catch (error) {
    res.json(error);
  }
};
