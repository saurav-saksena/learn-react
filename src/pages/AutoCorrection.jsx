import React, { useState } from 'react'
const corrections = {
    realy: "really",
    wierd: "weird",
    hapy: "happy",
    gld: "glad",
    welcom: "welcome"
};
export default function AutoCorrection() {
    const [state, setState] = useState("");

    const handleTextArea = (e) => {
        let strTmp;
        let arr = e.target.value.split(" ");
        // console.log(arr)
        Object.keys(corrections).forEach((element) => {
            let i = arr.filter((item) => item === element)[0];
            // let j = arr.filter((item) => item === "");
            if (i === element && arr[arr.length - 1] === "") {
                strTmp = e.target.value.replace(i, corrections[i]);
            }
        });
        if (strTmp) {
            setState(strTmp);
        } else {
            setState(e.target.value);
        }
    };
    return (
        <div className='white--ground'>
            Auto Correction !
            <pre>

                {state}
            </pre>

            <div className="text-center">
                <textarea
                    spellCheck="false"
                    data-testid="textarea"
                    onChange={handleTextArea}
                    value={state}
                    rows={10}
                    cols={80}
                    className="card"
                />
            </div>
        </div>
    )
}
