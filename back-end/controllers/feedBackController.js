const FeedBack = require("../models/Feedback.Model");
require("dotenv").config();
const nodemailer = require("nodemailer");
const User = require("../models/User.Model")

exports.getAllFeedBacks = async (req, res, next) => {
  try {
    const feedBacks = await FeedBack.find({});
    res.status(200).json(feedBacks);
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

exports.sendEmailFeedBack = async (req, res, next) => {
  try {
    const { email, content, subtitle } = req.body;
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const err = new Error("Email không chính xác hoặc không tồn tại");
      err.statusCode = 400;
      return next(err);
    } else {
      let config = {
        service: "gmail",
        auth: {
          user: `${process.env.EMAIL}`,
          pass: `${process.env.EMAILPASS}`,
        },
      };
      let transporter = nodemailer.createTransport(config);
      await transporter.sendMail({
        from: "reactflix.cinema@gmail.com",
        to: email,
        subject: subtitle,
        text: `
          Chào bạn! \
          Tài khoản người dùng ${email}\
          ${content}
          Cảm ơn bạn đã góp ý,\
          React Flix Cinema`,
      });
      res.status(200).json({ checkSend: true });
    }
  } catch (error) {
    console.log(error);
  }
};
