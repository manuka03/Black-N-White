const Test = ()=>{
    let list= [];
    const Hi = ({num})=>{
        for (let i = 0 ; i<num ; i++){
            list = list.concat(<div key={i}>Hi</div>)
        }
        return(
            <div>
                {list}
            </div>
        )
    }
    return(
        <div>
            <Hi num='7' />
        </div>
    )
}

export default Test;