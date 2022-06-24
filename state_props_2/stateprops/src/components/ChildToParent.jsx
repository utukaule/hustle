//If parent need child data 

export const States = () => {
    const getData = (data) => {
        console.log("Got data from child", data)
    }
    return <>
        <First datafn={getData} />
    </>
}

function First({ datafn }) {
    const data = "Parent called me";

    return <>
        <button onClick={() => {
            datafn(data)
        }
        }>Trandfer Data to Parent</button>
    </>
}