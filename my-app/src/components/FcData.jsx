import { useState, useEffect } from "react";
import axios from 'axios';

export const FcData = (props) => {
  const [fcData, setFcData] = useState([]);
  const [crestImgs, setCrestImgs] = useState([]);
  console.log(fcData);
  useEffect(() => {
    console.log(`props FC ID: ${props.fcId}`);
    if(props.fcId){
      axios.get(`https://xivapi.com/freecompany/${props.fcId}?data=FCM`)
      .then((response) => {
        setFcData(response.data);
        setCrestImgs(response.data.FreeCompany.Crest);
      });
    }
  }, []);
  return (
    <table id="fc">
      <tbody>
        <tr>
          <td className="v_top">
            <div id="crest">
              <ul>
                <li id="crest_1">{crestImgs[0]}</li>
                <li id="crest_2">{crestImgs[1]}</li>
                <li id="crest_3">{crestImgs[2]}</li>
              </ul>
            </div>
          </td>
          <td>
            <p id="location"></p>
            <h3 id="fc_name">{/* {FcName} */}</h3>
            <p id="fc_slogan"></p>
            <p id="description"></p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
