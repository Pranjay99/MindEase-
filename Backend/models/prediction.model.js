import mongoose from 'mongoose';

const PredictionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  test_type: { 
    type: String, 
    enum: ['Stress', 'Anxiety', 'Depression'], 
    required: true 
  }, // Indicates the type of test
  result: { 
    type: String, 
    required: true 
  },
  result_type: { 
    type: String, 
    required: true 
  }, // Result level, e.g., "None", "Mild", "Moderate", "Severe"
  created_at: { type: Date, default: Date.now }, // Timestamp for when the prediction was made
});

const Prediction = mongoose.model('Prediction', PredictionSchema);

export default Prediction;
