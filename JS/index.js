$(document).ready(() => {
    var i = 2;

    $('#btn2').click(() => {
        $("#myModal").modal();
    })

    function kiemTraMaSV() {
        const mauKT = /^[1-9]{1}[0-9]{9}$/;
        const chuoi = $('#txtMaSV').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập đúng');
            return true;
        } else {
            console.log('bạn nhập sai');
            return false
        }
        return true;
    }
    $('#txtMaSV').blur(kiemTraMaSV);

    function kiemTraHoTen() {
        const mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        const chuoi = $('#txtHT').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập đúng');
            return true;
        } else {
            console.log('bạn nhập sai');
            return false
        }

        return true;
    }
    $('#txtHT').blur(kiemTraHoTen);

    function kiemTraEmail() {
        const mauKT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        const chuoi = $('#txtEmail').val();
        if (mauKT.test(chuoi) == true) {
            console.log('bạn nhập đúng');
            return true;
        } else {
            console.log('bạn nhập sai');
            return false
        }

        return true;
    }
    $('#txtEmail').blur(kiemTraEmail);

    $('#btnSubDK').click(() => {
        if (kiemTraMaSV() == true && kiemTraHoTen() == true && kiemTraEmail() == true) {
            row = '<tr>';
            row += '<td>' + (i++) + '</td>';
            row += '<td>' + $('#txtMaSV').val() + '</td>';
            row += '<td>' + $('#txtHT').val() + '</td>';
            row += '<td>' + $('#txtEmail').val() + '</td>';
            $('tbody').append(row);
            $('#myModal').modal('hide');
        }
    })
})