import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skills.css';

const IOS = () => {
    return (
        <div className='skill'>
            <Nav />
            <h1>IOS</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Swift</h2>
                    <p>Attained proficiency in Swift, Apple's powerful and intuitive programming language for iOS. Learned to write safer, more reliable code by embracing Swift’s modern syntax, which is designed to be clear and concise. Gained experience in leveraging Swift's advanced features like optionals, generics, and closures to write robust and high-performing applications. Developed a strong understanding of memory management in Swift with automatic reference counting (ARC).</p>
                </div>
                <div className="skill-card">
                    <h2>UIKit</h2>
                    <p>Developed a deep understanding of UIKit, the essential framework for constructing and managing a graphical, event-driven user interface on iOS. Learned to design and implement complex user interfaces with UIViews and UIViewControllers. Became adept at handling user interaction through various UI components like buttons, sliders, and switches, and navigational elements like tab bars and navigation controllers. Mastered the use of Auto Layout for creating flexible and adaptive UIs that work across multiple device sizes.</p>
                </div>
                <div className="skill-card">
                    <h2>XCode</h2>
                    <p>Acquired comprehensive skills in using Xcode, Apple's IDE for software development on macOS. Learned to navigate and utilize Xcode's suite of tools effectively for building, testing, and debugging iOS and macOS applications. Became familiar with Interface Builder for visually designing interfaces and the asset catalog for managing app resources. Gained experience with Xcode's profiling tools to optimize performance and memory usage, and its version control integration for collaborative development.</p>
                </div>
            </div>
        </div>
    );
}

export default IOS;