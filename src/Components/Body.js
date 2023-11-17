import React, { useState } from 'react'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }
 return (
        
            <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src='data:image/jpeg;base64,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' alt="" /> <br />
                <p>A butterfly is a (usually) day-flying insect of the order Lepidoptera.<br></br> They are grouped together in the suborder Rhopalocera.<br></br> Butterflies are closely related to moths,<br></br> from which they evolved about 56 million years ago.</p>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
        
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}></div>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/WJumea3vEpw'} height={200} controls />
                <div>
                 <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
        </div>
            </div>
        </div>
 )
}
export default Body