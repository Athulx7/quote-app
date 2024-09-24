import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useEffect, useState } from "react";


function App() {

  const [quotes,setQuotes] = useState(0)
  const fetchdata = async()=>{
    const result = await fetch('https://dummyjson.com/quotes')
     result.json().then((res)=>{
       //console.log(res)
       const finaldata = res.quotes
      //  console.log(finaldata)
      setQuotes(finaldata)
     })
  }
  useEffect(()=>{
    fetchdata()
  },[])

  
    const [index,setIndex] = useState(0)
    const handleNext = ()=>{
      const randome = Math.floor(Math.random() * quotes.length)
      setIndex(randome)
      
    }
    const handlePrevious = ()=>{
      setIndex(index > 0?index-1: 0)
    }


     
    const getDate = ()=>{
      const today = new Date()
      const month = today.getMonth()
      // console.log(month)

      const year = today.getFullYear()
      // console.log(year)

      const date = today.getDate()
      // console.log(date)
      
      return `${date}-${month}-${year}`
    }

    const [dates,setDates] = useState(getDate())

    
  

 
  return (
    <>
      <div className="main">
        <div className="container d-flex align-items-center justify-content-center">
          <h3 className=" fw-bold mt-5" style={{ color: "rgb(18, 91, 154)" }}>
            QUOTES OF THE DAY
          </h3>
        </div>
        <h6
          className="text-center fw-bold"
          style={{ color: "rgb(11, 132, 148)" }}
        >
          {dates}
        </h6>
        <hr />

        <div className="  ms-auto  me-auto centerdiv">
          <div className="heading ">
            <p className="quates text-center mt-5 p-4">
            " {
              quotes?quotes[index].quote :
              <p>nothing to display</p>
             }"
            </p>

            <div className="d-flex justify-content-center align-items-center">
              <div className="mt-3">
                <span className="d-flex fw-bold">
                  {/* <div className="line mt-2 "></div> */}
                  <h5
                    className="fw-bolder ms-2  "
                    style={{ color: "rgb(59, 48, 48)" }}
                  >

                   
                     {quotes?quotes[index].author:
                     <p>AUTHOR NAME</p>
                     }
                  </h5>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons  d-flex align-items-center justify-content-center mt-4">
          <button className="me-5 previous" onClick={handlePrevious}>
            <span className="p-2 fw-bold">
              {" "}
              <i class="fa-solid fa-angles-left me-2 "></i>previous quote
            </span>
          </button>
          <button className="ms-5 next " onClick={handleNext}>
            {" "}
            <span className="p-2 fw-bold">
              next quote <i class="fa-solid fa-angles-right ms-1 "></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
