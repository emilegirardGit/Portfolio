import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skills.css';
import { fetchSkills } from '../../api/fetchSkills';

const Csharp = () => {
     return (
        <div className='skill'>
            <Nav />
            <h1>C Sharp</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>C#</h2>
                    <p>Developed a strong foundation in C# programming, understanding its powerful features within the .NET ecosystem. Mastered essential concepts such as generics, delegates, events, and tasks, which are fundamental to writing efficient and maintainable code. Learned to leverage the robust type system and exception handling to build resilient applications. Explored various .NET libraries to enhance functionality, from file I/O to network communications. Applied best practices for clean code and embraced the use of design patterns to solve complex problems elegantly.</p>
                </div>
                <div className="skill-card">
                    <h2>ASP.NET</h2>
                    <p>Acquired skills in building dynamic web applications using ASP.NET. Learned to create robust MVC and Web API applications, handling user input, and server-side logic efficiently. Gained experience in implementing authentication and authorization using ASP.NET Identity. Understood the importance of middleware in the request pipeline and how to use dependency injection for better testing and maintainability.</p>
                </div>
                <div className="skill-card">
                    <h2>WPF</h2>
                    <p>Developed a deep understanding of Windows Presentation Foundation (WPF) for building rich desktop applications. Became adept at using XAML for UI design, implementing MVVM (Model-View-ViewModel) pattern for maintainable code structure. Learned to create custom controls, animations, and data binding to build responsive and user-friendly interfaces.</p>
                </div>
                <div className="skill-card">
                    <h2>Unity 2D</h2>
                    <p>I have acquired a solid foundation in developing 2D games, from understanding Unity's versatile editor and mastering the workflow of importing and managing assets, to creating and animating sprites. I learned to design engaging levels using the Scene view, implement game logic through scripting in C#, and optimize game performance for a smooth player experience. Experimenting with Unity's physics engine allowed me to add realistic movement and collisions, while mastering UI elements enabled me to create intuitive game interfaces. My experience with Unity 2D has not only enhanced my technical skills in game development but also fueled my creativity in bringing imaginative game worlds to life.</p>
                </div>
            </div>
        </div>
    );
}

export default Csharp;