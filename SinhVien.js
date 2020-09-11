window.onload = function () {
    var Student = {
        data: [],
        viewStudent: function () {

            var listStudent = this.data;
            for (var i = 0; i < listStudent.length; i++) {
                document.write("<div>" + listStudent[i].id + " " + listStudent[i].name + " " + listStudent[i].email + "</div>");
            }
        },
        addStudent: function (id, name, email) {

            var item = {
                id: id,
                name: name,
                email: email
            };
            this.data.push(item);
        },
        removeStudent: function (id) {

            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data.splice(i, 1);
                }
            }
        },
        editStudent: function (id, name, email) {

            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].id === id) {
                    this.data[i].name = name;
                    this.data[i].email = email;
                }
            }
        }
    };
    var listStudent = Student;

    // Event click on viewStudent button
    var btnListStudent = document.getElementById("view-student");
    btnListStudent.onclick = function () {
        listStudent.viewStudent();
    }

    // Event click on addStudent button
    var btnAddStudent = document.getElementById("add-student");
    btnAddStudent.onclick = function () {
        var mssvStudent = document.getElementById("mssv").value;
        var nameStudent = document.getElementById("name").value;
        var emailStudent = document.getElementById("email").value;

        listStudent.addStudent(mssvStudent, nameStudent, emailStudent);
        listStudent.viewStudent();
    }

}
    // document.write('<h4>Danh sách sinh viên ban đầu</h4>');


    // document.write('<h4>Danh sách sinh viên sau khi thêm hai sinh viên</h4>');
    // Student.addStudent("sv001", 'Nguyễn Văn Cường', "thehalfheart@gmail.com");
    // Student.addStudent("sv002", 'Vũ Thị Thu Tình', "freetuts.net@gmail.com");
    // Student.viewStudent();

    // document.write('<h4>Danh sách sinh viên sau khi xóa một sinh viên</h4>');
    // Student.removeStudent('sv001');
    // Student.viewStudent();

    // document.write('<h4>Danh sách sinh viên sau khi sửa thông tin</h4>');
    // Student.editStudent('sv002', "Tên Sinh Viên Mới", "mrcuong.winter@gmail.com");
    // Student.viewStudent();


