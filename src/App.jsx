import { useState } from 'react'

function App() {
  let [Color, setColor] = useState("#18181b");
  let [fontColor,setFont]=useState("#FFFFFF")

  //to change background colour on any key press
  window.addEventListener("keypress",(key)=>{

    console.log(key.key)
    if(key.key==="a"){         //Alizarin
      setColor("#e32636")
    }
    if(key.key==="b"){         //blue
      setColor("#0000FF")
    }
    if(key.key==="c"){         //cyan
      setColor("#00FFFF")
    }
    if(key.key==="d"){         //Dandelion
      setColor("#f0e130")
    } 
    if(key.key==="e"){         //Emerald
      setColor("#50C878")
    }
    if(key.key==="f"){         //Fuchsia
      setColor("#FF00FF")
    }
    if(key.key==="g"){         //green
      setColor("#008000")
    }
    if(key.key==="h"){         //Harlequin
      setColor("#3fff00")
    }
    if(key.key==="i"){        //Indigo
      setColor("#4B0082")
    }
    if(key.key==="j"){        //Jade 
      setColor("#00a86b")
    }
    if(key.key==="k"){        //Khaki
      setColor("#F0E68C")
    }
    if(key.key==="l"){        //Lavender
      setColor("#E6E6FA")
    }
    if(key.key==="m"){        //Maroon
      setColor("#800000")
    }
    if(key.key==="n"){        //Navajo 
      setColor("rgb(255, 222, 173)")
    }
    if(key.key==="o"){        //Orange
      setColor("#FFA500")
    }
    if(key.key==="p"){        //Peach
      setColor("#FFE5B4")
    }
    if(key.key==="q"){        //Quartz Grey
      setColor("#6C675F")
    }
    if(key.key==="r"){        //Ruby
      setColor("#73525C")
    }
    if(key.key==="s"){        //Spring bud
      setColor("#83ba37")
    }
    if(key.key==="t"){        //Tan
      setColor("#D2B48C")
    }
    if(key.key==="u"){        //Ultramarine
      setColor("#0437F2")
    }
    if(key.key==="v"){        //Violet
      setColor("#8F00FF")
    }
    if(key.key==="w"){ 
      setFont("black")                                    //White
      setColor("#FFFFFF")
    }
    if(key.key==="x"){        //Xanthic
      setColor("#EEED09")
    }
    if(key.key==="y"){        //Yellow
      setColor("#FFFF00")
    }
    if(key.key==="z"){        //Zucchini
      setColor("#044022")
    }
  })

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center text-white ' style={{backgroundColor:Color}} >

        <div className='text-white text-3xl'>
          <h1 >Click any letter on the keyboard to change backcround color</h1>
        </div>

        {/* to change bg on button click */}
        {/* <div id="changer" className='w-[80%] h-[10%] bg-black rounded-2xl flex flex-wrap items-center justify-between pl-3.5 pr-3.5'>
          <button onClick={()=>{setColor("rgb(185 28 28)")}} className='w-[10%] h-[80%] rounded-lg bg-red-600'>red</button>
          <button onClick={()=>{setColor("rgb(21 128 61)")}} className='w-[10%] h-[80%] rounded-lg bg-green-700'>green</button>
          <button onClick={()=>{setColor("rgb(29 78 216)")}} className='w-[10%] h-[80%] rounded-lg bg-blue-700'>blue</button>
          <button onClick={()=>{setColor("rgb(234 179 8)")}} className='w-[10%] h-[80%] rounded-lg bg-yellow-500'>yellow</button>
          <button onClick={()=>{setColor("rgb(91 33 182)")}} className='w-[10%] h-[80%] rounded-lg bg-violet-800'>violet</button>
          <button onClick={()=>{setColor("rgb(63 63 70)")}} className='w-[10%] h-[80%] rounded-lg bg-zinc-700'>zinc</button>
        </div> */}

       </div>
    </>
  )
}

export default App
