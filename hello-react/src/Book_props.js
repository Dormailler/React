const HeaderParts = (props) => {
    return (<div style={{backgroundColor:'red', color : 'white'}}>{props.title} 책의 가격은 {props.price} 입니다.</div>);
}
const BodyParts = (p) =>
(<div style={{border:'1px solid blue', margin:'0 auto', textAlign:'center'}}><h3>총페이지수 : {p.totalPage}</h3>{p.body}</div>)
const Book = (props) => 
(<div>
    <HeaderParts title= {props.title} price = {props.price}/>
    <BodyParts totalPage = {props.totalPage} body = {props.body} />
</div>);

export default Book;