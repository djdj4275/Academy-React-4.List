import {Component} from 'react';

class ListClass extends Component {
    constructor(props) {
        super(props);
        this.numbers = ["봄","여름","가을","겨울"];
        // map을 통해서 동일한 컴포넌트 또는 엘레멘트 넣어서 새로운 배열로 저장
        this.listItems = this.numbers.map( (number,index) => <li key={index}>{number}</li> );
        this.state = {
            // 배열값을 사용해줄때는 값을 위한 id 값을 추가
            season : [
                { id : 1, text : "봄"},
                { id : 2, text : "여름"},
                { id : 3, text : "가을"},
                { id : 4, text : "겨울"}
            ],
            // 값을 받아올 값
            inputText : {
                text : "",
                id : 5,
            },
            // 아래 학생을 table 태그로 출력하세요
            students : [
                { id : 1, name : "홍길동"},
                { id : 2, name : "성춘향"},
                { id : 3, name : "Jhon"}
            ]
        }
    }
    // onClick에 들어가는 이벤트는 동일하게 작성

    // 바뀐 값을 가져오는 함수
    changeText = (e) => {
        [e.target.name] = e.target.value;
    }

    // 배열에 값을 넣는 함수
    getText = () => {}


    render() {
        const { season } = this.state;
        const listSeason = season.map((s) => <li key={s.id}>{s.text}</li>)
        const { students } = this.state;

        return (
            <div>
                <ul>{listSeason}</ul>
                <ol>{season.map((s) => <li key={s.id}>{s.text}</li>)}</ol>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>이름</td>
                        </tr>
                        {students.map((students)=>(
                            <tr key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <input
                type="text"
                name="text"
                onChange={this.changeText}
                >
                </input>
                <button
                onClick={this.getText}
                >
                    추가
                </button>
            </div>
        );
    }
}

export default ListClass;