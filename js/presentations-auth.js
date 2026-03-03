(function () {
    'use strict';

    var PASSWORD = 'admin';
    var STORAGE_KEY = 'pres_auth_v1';

    function isAuthed() {
        return sessionStorage.getItem(STORAGE_KEY) === 'ok' ||
               localStorage.getItem(STORAGE_KEY) === 'ok';
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (isAuthed()) {
            document.getElementById('password-gate').style.display = 'none';
            document.getElementById('pres-content').style.display = 'block';
            return;
        }

        function tryUnlock() {
            var pw = document.getElementById('pw-input').value;
            if (pw === PASSWORD) {
                if (document.getElementById('pw-remember').checked)
                    localStorage.setItem(STORAGE_KEY, 'ok');
                else
                    sessionStorage.setItem(STORAGE_KEY, 'ok');
                document.getElementById('password-gate').style.display = 'none';
                document.getElementById('pres-content').style.display = 'block';
            } else {
                document.getElementById('pw-error').style.display = 'block';
                document.getElementById('pw-input').value = '';
                document.getElementById('pw-input').focus();
            }
        }

        document.getElementById('pw-btn').addEventListener('click', tryUnlock);
        document.getElementById('pw-input').addEventListener('keydown', function (e) {
            if (e.key === 'Enter') tryUnlock();
        });
        document.getElementById('pw-lock').addEventListener('click', function (e) {
            e.preventDefault();
            sessionStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(STORAGE_KEY);
            document.getElementById('pres-content').style.display = 'none';
            document.getElementById('password-gate').style.display = 'block';
        });
    });
}());
