// Difficulty: 2

//De-structuring

// const array = [1, 2, 3];
// const[value1] = array;
// const[value1, value2] = array;
// const[value1, value2, value3] = array;

function getStudents(classroom) {
    let { hasTeachingAssistant, classList } = classroom;
    let teacher, teachingAssitant, students;

    if (hasTeachingAssistant) {
        [teacher, teachingAssitant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(
    getStudents({
        hasTeachingAssistant: true,
        classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
    })
);