import { useEffect, useState } from "react"

// function emitComment(id) {
//     setInterval(() => {
//         window.dispatchEvent(
//             new CustomEvent(`lesson-${id}`, {
//                 detail: `This is comment ${id}: ${Math.ceil(Math.random() * 100)}`
//             })
//         )
//     }, 1500)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)
// emitComment(4)
// emitComment(5)
// emitComment(6)

const lessons = [
    { id: 1, name: 'HTML CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'ReactJS' },
    { id: 4, name: 'NodeJS' },
    { id: 5, name: 'Springboot' },
    { id: 6, name: 'NextJS' },
]

function Content() {
    const [lessonId, setLessonId] = useState(1)
    const [comments, setComment] = useState([])

    useEffect(() => {
        const handleComment = ({ detail }) => {
            setComment(prevCmt => [...prevCmt, detail])
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)

    }, [lessonId])

    console.log(comments);


    return (
        <div
            style={{ marginLeft: 20 }}
        >
            <h3>Danh Sách khoá học</h3>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{ color: lesson.id === lessonId ? 'red' : 'green' }}
                        onClick={() => {
                            setLessonId(lesson.id)
                            setComment([])
                        }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
            <hr />
            <ul>
                {comments.map((comment, index) => (
                    <li
                        key={index}
                    >
                        {comment}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content