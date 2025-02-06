import { useState } from "react";

const courses = [
  { id: 1, name: 'HTML CSS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
  { id: 4, name: 'NodeJS' },
]

function App() {
  const [checked, setChecked] = useState()
  console.log(checked);

  const handleSubmit = () => {
    const selectedCourse = courses.find(item => item.id === checked);
    console.log('Selected course:', selectedCourse);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            id={`course-${course.id}`}
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          <label
            htmlFor={`course-${course.id}`}
          >
            {course.name}
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;