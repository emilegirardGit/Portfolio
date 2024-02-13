export const fetchSkills = async (title: String) => {
    try {
        const response = await fetch(`https://portfolio-backend-5bzt.onrender.com/api/v1/skills/${title}`, {
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
