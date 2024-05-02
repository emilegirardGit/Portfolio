import Nav from '../../components/Nav';

const Databases = () => {
    return (
        <div className='skill'>
            <Nav />
            <h1>Databases</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>MySQL</h2>
                    <p>I've learned to design and implement relational databases, enforce data integrity using foreign keys, and perform complex queries with joins. I've also gained experience in optimizing queries for performance and setting up replication for data redundancy and load balancing.</p>
                </div>
                <div className="skill-card">
                    <h2>MongoDB</h2>
                    <p>I've learned to work with BSON (Binary JSON) documents, create and manage collections, and perform CRUD operations. I've explored MongoDB's dynamic schema for unstructured data, implemented aggregation pipelines for data analysis, and understood indexing to optimize query performance.</p>
                </div>
                <div className="skill-card">
                    <h2>PostgreSQL</h2>
                    <p>I've learned about its powerful features such as transactional integrity using ACID properties, advanced indexing techniques like GIN and GiST, and the ability to handle complex queries and data types, including JSON and geometric data. I've also explored PostgreSQL's extensive support for custom functions and stored procedures.</p>
                </div>
                <div className="skill-card">
                    <h2>SQLite</h2>
                    <p>SQLite is a lightweight, disk-based database that doesn't require a separate server process. I've learned to use SQLite for embedded applications and local data storage for desktop and mobile applications. I've appreciated its simplicity for schema design, transaction management, and understanding how it's ideal for applications requiring a simple database system with minimal setup.</p>
                </div>
                <div className="skill-card">
                    <h2>Oracle</h2>
                    <p>Oracle Database is a comprehensive relational database management system known for its robustness and scalability. I've learned to work with PL/SQL for writing stored procedures and triggers, implement complex data warehousing operations, and utilize Oracle's advanced security features for data encryption and user access control.</p>
                </div>
                <div className="skill-card">
                    <h2>Azure</h2>
                    <p>I've learned about deploying and managing databases in the cloud, scaling resources dynamically, and implementing high availability with Azure's global infrastructure. I've also explored integrating Azure SQL Database with other Azure services for analytics and AI applications.</p>
                </div>
                <div className="skill-card">
                    <h2>Firebase</h2>
                    <p>Firebase, a platform developed by Google for creating mobile and web applications, includes a NoSQL cloud database. I've learned to use Firebase for real-time data synchronization across users and devices, implement user authentication, and leverage Firebase's cloud functions for serverless backend logic. I've also explored its analytics and crash reporting features to improve app quality.</p>
                </div>
            </div>
        </div>
    );
}

export default Databases;