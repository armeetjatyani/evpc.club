import React from 'react'

export default function Bitsheet() {
  return (
    <>
        <div className="flex items-center justify-center w-full">
            <div className="w-[90%] sm:w-[70%] space-y-8">
                <h1 className="text-3xl font-black">BIT Sheet</h1>
                <h2 className="text-xl font-black-light">The BIT sheet tracks the attendence of all EVPC members. Please let one of the officers know if any information on the BIT sheet is inaccurate.</h2>
                <div style={{width: "100%", height: "7px", backgroundColor: "rgb(167 139 250"}}></div>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0a3HlE13BPtUp4q1ZSuKJtBE9JfQ67m9ll-esOMnR1BrES6N9fbD5COxmZptb2D64C41DLbGd7ErO/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                style = {{width: "100%", height: "700px", }}
                ></iframe>
            </div>
        </div>
    </>
  )
}
