export const Parent = () => {
    const data = "huhuhuhu"
    return (
        <Third getData={data}/>
    )
} 

function Third({getData}){
    console.log("Parent gave me this: ",getData)
}