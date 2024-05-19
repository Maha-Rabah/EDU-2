import React, { useEffect, useState }from 'react'
import './Educard.css'
import lens from '../../../assets/lens.png'
import yellow from '../../../../../assets/yellow.svg'
const Educard = () => {

  const [edudata, setEdudata] = useState([]);

      useEffect(() => {
    fetch("https://api.edu-bridge.org.uk/episodes")
      .then((response) => {
        return response.json();
      })
      .then((edudata) => {
        // console.log(edudata.data)
        setEdudata(edudata.data);
      });
  }, []);

  return (
    <div className='educards'>
        <div className="container">
        <img src={yellow} alt="" className='lenyelllow' />
        {edudata.length && edudata?.map(function (item) {
                return (
                  <>
                  <a href={item.url} className='lenscard' key={item.id}>
                      <img src={lens} alt="" />
                    <div className='lensname'>{item.name}</div>

                   </a>
                  </>
                );
            })}
        </div>
        </div>
  )
}

export default Educard