var Formulaire = {
    'values': {
        'name': '',
        'email': '',
        'metier': 0
    },
    soumission: function (id) {
        var self = this;
       
        if (id == 'form1') {
            if ($('#name').val() == '' || $('#email').val() =='') //si l'un des champ est vide
            {
                alert("Un des champ est vide");
            }
            else {
                $('.active').removeClass('active');
                $('ul li:nth-child(2)').addClass('action');

                self.values.name = $('#name').val();
                self.values.email = $('#email').val();

                $.ajax({
                    url: 'ajax/form2.html',
                    type : 'POST',
                    data : '',
                    datatype : 'html',
                    success: function (results, status) {
                        $('#contentForm').html(results);
                    },
                    error: function (results, status, code) {
                        alert('destroyed');
                    },
                    complete: function (results, status) {

                    }
                })
            }
        }
        else {
            $('.active').removeClass('active');
            $('ul li:nth-child(3)').addClass('action');
            self.values.metier = $('#metier').val();
            $.ajax({
                url: 'ajax/final.html',
                type: 'POST',
                data: '',
                datatype: 'html',
                success: function (results, status) {
                    $('#contentForm').html(results);
                    $('#infoMessage').text('Vous vous appelez '+self.values.name+', votre adresse est '+self.values.email+' est votre metier est '+self.values.metier);
                },
                error: function (results, status, code) {
                    alert('destroyed 2');
                },
                complete: function (results, status) {

                }
            })
        }
    }
}


$('#contentForm').on('submit','form', function () {
    Formulaire.soumission(this.id);
    return false; //arrete l'action par default du formulaire ( recharger la page )
})
