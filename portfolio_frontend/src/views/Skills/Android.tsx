import React from 'react';
import Nav from '../../components/Nav';
import '../../css/Skills.css';

const Android = () => {
    return (
        <div className='skill'>
            <Nav />
            <h1>Android</h1>
            <div className="skill-grid">
                <div className="skill-card">
                    <h2>Android Studio</h2>
                    <p>Developed a comprehensive understanding of Android Studio, the official Integrated Development Environment (IDE) for Android app development. Learned to navigate the Android Studio interface, use the emulator for testing, and leverage the debugging tools to troubleshoot applications. Became proficient in managing project dependencies and configuring build variants to streamline the development process. Gained experience in using the layout editor to design user interfaces and the profiler to optimize app performance.</p>
                </div>
                <div className="skill-card">
                    <h2>Kotlin</h2>
                    <p>Mastered Kotlin, a statically typed programming language that boosts productivity and developer happiness. Embraced its concise syntax, which reduces boilerplate code and improves code readability. Learned to utilize Kotlin's powerful features such as coroutines for asynchronous programming, extension functions for enhancing existing classes, and null safety to prevent runtime null pointer exceptions. Applied Kotlin for Android development to create robust and efficient applications.</p>
                </div>
            </div>
        </div>
    );
}

export default Android;