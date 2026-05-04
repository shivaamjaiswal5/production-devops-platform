const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Production DevOps Platform Live!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/load', (req, res) => {
  console.log('Load test hit');
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {  // CPU spike for HPA
    sum += Math.sqrt(i);
  }
  res.json({ status: 'computed', result: sum.toFixed(2), timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});