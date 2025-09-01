import { useState} from "react";
import "./index.css"

function Faqs(){
    const[text1,setText1]=useState(false)
    const[text2,setText2]=useState(false)
    const[text3,setText3]=useState(false)
    const[text4,setText4]=useState(false)

    const btn1=()=>{ setText1(!text1) }
    const btn2=()=>{ setText2(!text2) }
    const btn3=()=>{ setText3(!text3) }
    const btn4=()=>{ setText4(!text4) }

    return(
        <div className="faq-container">
            <h1 className="faq-title">FAQs App</h1>

            <div className="faq-card">
                <div className="faq-header">
                    <h1 className="faq-question">What is React?</h1>
                    <button className="faq-toggle" onClick={btn1}>{text1?"-":"+"}</button>
                </div>
                {text1 && <div className="faq-answer"><p>React is a JavaScript library designed for building dynamic and interactive user interfaces (UIs), particularly for single-page applications. Developed and maintained by Facebook, React enables developers to create reusable UI components and efficiently manage updates to the DOM using its Virtual DOM mechanism.</p></div>}
            </div>

            <div className="faq-card">
                <div className="faq-header">
                    <h1 className="faq-question">Why use React?</h1>
                    <button className="faq-toggle" onClick={btn2}>{text2?"-":"+"}</button>
                </div>
                {text2 && <div className="faq-answer"><p>React is efficient, scalable, and easy to maintain. It helps build dynamic web apps with less code and better performance..</p></div>}
            </div>

            <div className="faq-card">
                <div className="faq-header">
                    <h1 className="faq-question">What are React components?</h1>
                    <button className="faq-toggle" onClick={btn3}>{text3?"-":"+"}</button>
                </div>
                {text3 && <div className="faq-answer"><p>Components are reusable, independent pieces of UI in React. They make code modular, readable, and easy to debug.</p></div>}
            </div>

            <div className="faq-card">
                <div className="faq-header">
                    <h1 className="faq-question">What is JSX?</h1>
                    <button className="faq-toggle" onClick={btn4}>{text4?"-":"+"}</button>
                </div>
                {text4 && <div className="faq-answer"><p>JSX is a syntax extension that lets you write HTML-like code inside JavaScript. It makes UI code cleaner and easier to understand.</p></div>}
            </div>
        </div>
    )
}
export default Faqs
