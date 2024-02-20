const mongoose = require("mongoose");

const votingSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    group: {
        type: String,
        required: false,
    },
    // creator: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      }],
  });

const Voting = mongoose.model("Voting",votingSchema);
module.exports = Voting;