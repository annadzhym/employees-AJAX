'use strict';

(function ($) {
    $('.title').on('click', function () {
        $.ajax({
            url: '../data/employees.json',
        }).done(function (list) {
            var ul = $('<ul></ul>');
            ul.addClass('bulleted');

            list.forEach(function (employee) {
                var li = $('<li></li>').text(employee.name);
                li.addClass(employee.inoffice ? 'in' : 'out');
                ul.append(li);
            })

            $('#employeeList').append(ul);
        })
    });
    alert('If you want to see employee list and ' +
        'employee status click on title "Employee Office Status".');
})(jQuery);