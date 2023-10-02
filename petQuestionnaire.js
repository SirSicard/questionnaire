const readQuestions = () => {
    const data = fs.readFileSync('questions.json', 'utf8');
    return JSON.parse(data);
  };