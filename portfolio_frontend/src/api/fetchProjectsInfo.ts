export const fetchProjectsInfo = async (title: String) => {
    try {
        const response = await fetch(`http://localhost:8000/api/v1/projects/${title}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
