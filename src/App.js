import {useEffect, useState} from "react";

function App() {

    const [position, setPosition] = useState(0);

    function onScroll() {
        console.log(window.scrollY)
        setPosition(window.scrollY);
    }

    useEffect(() => {
        //scroll 이벤트에 Y값을 설정하는 함수 등록
        window.addEventListener("scroll", onScroll);

        //App Component가 unmount 되면(사용하지 않으면) 이벤트를 해제 해줘서 메모리 누수를 방지한다.
        return () => {
            window.removeEventListener("scroll", onScroll);
        }

    }, []);

    return (
        <div className="wrapper">
            <div
                className="bg bg1"
                style={{
                    backgroundPositionY: position / 2,
                }}
            >
                <div>Welcome</div>
            </div>
            <div
                className="bg bg2"
                style={{
                    backgroundPositionY: position / -3,
                }}
            >
                <div>Happy New Year</div>
            </div>
            <p
                className="desc"
                style={{
                    transform: `translateX(${-position}px)`,
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p
                className="desc2"
                style={{
                    transform: `translateX(${position}px)`,
                }}
            >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p
                className="desc3"
                style={{
                    opacity: (position - 730) / 50,
                }}
            >
                Duis aute irure dolor
            </p>
            <p
                className="desc3"
                style={{
                    opacity: (position - 860) / 50,
                }}
            >
                Lorem ipsum dolor sit amet
            </p>
            <p
                className="desc3"
                style={{
                    opacity: (position - 990) / 50,
                }}
            >
                Excepteur sint occaecat
            </p>
            <p
                className="desc3"
                style={{
                    opacity: (position - 1090) / 50,
                }}
            >
                sunt in culpa qui officia deserunt
            </p>
        </div>
    );
}

export default App;
