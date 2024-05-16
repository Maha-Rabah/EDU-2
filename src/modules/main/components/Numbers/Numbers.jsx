import React from 'react'
import './NumberStyle.css';

// const [numberdata, setNumberdata] = useState([]);

// useEffect(() => {
//   fetch("https://api.edu-bridge.org.uk/statistics")
//     .then((response) => {
//       return response.json();
//     })
//     .then((numberdata) => {
//       setNumberdata(numberdata);
//     });
// }, []);

const Numbers = ({title,numoptions}) => {
  return (
    <div className='Numbers'>
      <div className="container">
        <h2 className='title'>{title}</h2>
        <div className="info">
        <ul>
            {numoptions.map((option,i) => (
                <li className='num'key={i}>{option}</li>
            ))}
        </ul> 
        </div> 
        </div>
    </div>
  )
}

export default Numbers