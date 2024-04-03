import React, { useRef } from 'react'
import axios from "axios";
import "../css/urloutput.css"
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

function UrlOutput({link}) {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData=async ()=>{
    try{
      setLoading(true)
      const res=await axios(`https://api.shrtco.de/v2/shorten?url=${link}`);
       setShortenLink(res.data.result.full_short_link)
    }catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    
  }
  useEffect(() => {
    if(link.length) {
      fetchData();
    }
  }, [link]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return   (
      <div className="linkoutput">
        <input type="text" id='result' value="Loading.." readOnly="readonly" ></input>
      </div>
    )
  }
  if(error) {
    return  ( <div className="linkoutput">
    <input type="text" id='result' value="Error" readOnly="readonly"  ></input>
  </div>)
  }
  return (
    <div>
       {shortenLink && (
        <div className="linkoutput">
          <input type="text" id='result' value={shortenLink} readOnly="readonly" ></input>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className="copybtn">{copied ? "Copied" :"Copy"}</button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  )
}
export default UrlOutput;

