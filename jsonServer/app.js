// //RUN JSON SERVER MOCK API FIRST: npm start

var coursesApi = 'http://localhost:3000/courses'

var listCoursesBlock = document.querySelector('.list-courses')
var inputCourseName = document.querySelector('input[name="courses-name"]')
var inputCourseDescription = document.querySelector('input[name="courses-description"]')
var buttonSubmit = document.querySelector('.courses-submit')

var htmls = ''

//function
var getCourses = (callback) => {
    fetch(coursesApi)
        .then(response => response.json())
        .then(callback)
}

var renderCourses = courses => {
    htmls = courses.map(course => {
        return `
            <li>
                <h4>${course.id}</h4>
                <p>${course.name}</p>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourses(${course.id})">Xoá</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}

var createCourses = (data, callback) => {
    var options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then(response => response.json())
        .then(callback)
}

var handleDeleteCourses = (id) => {
    var options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi+'/'+id, options)
        .then(response => response.json())
        .then(() => {
            getCourses(renderCourses)
        })
}

var handleCreateCourses = () => {
    buttonSubmit.addEventListener('click', () => {
        getCourses(courses => {
            let newId = courses.length > 0 ? parseInt(courses[courses.length - 1].id) + 1 : 1
            
            var formData = {
                id: String(newId),
                name: inputCourseName.value,
                description: inputCourseDescription.value
            };

            createCourses(formData, () => {
                getCourses(renderCourses);
            })
            console.log(formData);
            
        })
    })
}

var start = () => {
    getCourses(renderCourses)
    handleCreateCourses()
}

start();