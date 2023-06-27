import Comment from "./Commetn";

const comments = [
    {id:'홍길동', comment: '안녕하세요 리액트입니다'},
    {id:'이인제', comment: '리액트 재미없어요'},
    {id:'윤인성', comment: '저도 배우고 싶어요'}
];

function CommnetList(){
    return(
        <div>
            {
            comments.map(function(v,i){
                return (<Comment id= {v.id} comment = {v.comment} />);
            })
            }
        </div>
    )
}

export default CommnetList;