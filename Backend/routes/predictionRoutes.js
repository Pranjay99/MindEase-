import express from 'express';
import Prediction from '../models/prediction.model.js';
const router = express.Router();

// Save Prediction
router.post('/', async (req, res) => {
  const { userId, test_type, result } = req.body;
  try {
    // Create a new prediction
    const prediction = new Prediction({ user: userId, test_type, result });
    await prediction.save();
    res.status(201).json({ message: 'Prediction saved successfully', prediction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save prediction' });
  }
});

// Get Prediction History for a User
router.get('/:userId', async (req, res) => {
  try {
    // Fetch predictions for a user sorted by creation date
    const predictions = await Prediction.find({ user: req.params.userId }).sort({ created_at: -1 });
    res.status(200).json(predictions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch predictions' });
  }
});

export default router;
