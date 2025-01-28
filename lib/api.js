export async function apiCall( userInput ) {
  try {
    const response = await fetch('https://humbly-star-drake.ngrok-free.app/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': true,
      },
      body: JSON.stringify({ query: userInput }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.response || 'No response received';
  } catch (error) {
    console.error('Error during API call:', error);
    return 'An error occurred while fetching the response.'
  }
}