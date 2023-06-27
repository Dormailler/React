function Comment(props){
    return (
    <div>
    <img src="https://ssl.pstatic.net/melona/libs/1445/1445651/6210a10e183c4be489c8_20230428173507872.jpg" style={{width:50, height : 50, borderRadius : 25}}/>
    <span>{props.id}</span>
    <sapn>{props.Comment}</sapn>
    </div>
    )
}

export default Comment;