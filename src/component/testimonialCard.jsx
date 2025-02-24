function TestimonialCard(props){
    return(
        <>
            <div>
                    <h2>Customer: {props.person.name[0]}</h2>
                    <h5>review: {props.person.remark[0]}</h5>
            </div>
            <div>
                    <h2>Customer: {props.person.name[1]}</h2>
                    <h5>review: {props.person.remark[1]}</h5>
            </div>
        </>
    )
}

export default TestimonialCard