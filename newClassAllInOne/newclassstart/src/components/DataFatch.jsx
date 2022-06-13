export const Data = ({ peoples, mydata }) => {
    return <div>
        {/* feching data */}
        <div>{peoples.map((each) => {
            return <div>
                <p>{each.name} - {each.age} - {each.gender}</p>
            </div>
        })}</div>

        <div>{mydata.car} - {mydata.price} - {mydata.auto}</div>
    </div>
}