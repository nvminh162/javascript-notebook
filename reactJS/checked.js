import { useState } from "react";

const courses = [
  { id: 1, name: 'HTML CSS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
  { id: 4, name: 'NodeJS' },
]

function App() {
  const [checked, setChecked] = useState([])
  console.log(checked);

  const handleChangeRadio = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    const selectedCourses = courses.filter(course => checked.includes(course.id));
    console.log(selectedCourses);
    
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            id={`course-${course.id}`}
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleChangeRadio(course.id)}
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