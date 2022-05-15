import {useEffect, useState} from "react";

function App() {
    const [places, setPlaces] = useState();
    const placesCount = 50;

    useEffect(() => {
        const a = [];
        let step = 10;
        for (let i = 0; i < placesCount; i++) {
            const y = Math.floor(i / (step)) * 42;
            const x = i % step * 42;
            a.push(<button key={i}
                         style={{left: x, top: y}}
                         className={"absolute hover:bg-yellow-300 rounded-sm overflow-hidden flex items-center justify-center border border-gray-300 w-10 h-10"}>{i}</button>);
        }
        setPlaces(a);
    }, [])

    return (
        <div className="h-screen flex items-center justify-center w-full">
            <img className={"w-40 mr-6"}
                 src={"/1200px-Chambéry_Savoie_Mont-Blanc_handball_logo.svg.png"}/>
            <div className={"flex justify-end flex-col"}>
                <div className={"w-[420px] h-[210px] relative"}>{places}</div>
                <button className={"bg-black border-0 mt-1 text-white py-2 hover:bg-yellow-300 hover:text-black"}>Acheter</button>
            </div>
        </div>
    );
}

export default App;
