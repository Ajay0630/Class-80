var stud_names_array = [];
function submit() {
    var display_students_array = [];
    for (var i = 1; i <= 4; i++) {
        var name_of_the_student = document.getElementById("name_of_the_student_" + i).value;
        console.log(name_of_the_student);
        stud_names_array.push(name_of_the_student);
    }
    console.log(stud_names_array);
    var stud_length = stud_names_array.length;
    console.log(stud_length)
    for (var abcdefg = 0; abcdefg <= stud_length; abcdefg++) {
        display_students_array.push("<h4>Name -- " + stud_names_array[abcdefg] + "</h4>");
        console.log(display_students_array);
    }
    console.log(display_students_array);
    document.getElementById("display_name_with_commas").innerHTML = display_students_array;
    var removecommas = display_students_array.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}