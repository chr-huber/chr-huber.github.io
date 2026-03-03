(function () {
    'use strict';

    var PASSWORD = 'admin';
    var STORAGE_KEY = 'pres_auth_v1';

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function sortByDateDesc(entries) {
        return entries.slice().sort(function (a, b) {
            var aDate = new Date(a.date).getTime();
            var bDate = new Date(b.date).getTime();
            return bDate - aDate;
        });
    }

    function getYear(entry) {
        return String(new Date(entry.date).getFullYear());
    }

    function groupEntries(entries, mode) {
        var groups = [];
        var groupMap = {};
        var orderedEntries = mode === 'year' ? sortByDateDesc(entries) : entries.slice();

        orderedEntries.forEach(function (entry) {
            var key = mode === 'year' ? getYear(entry) : entry.topic;
            if (!groupMap[key]) {
                groupMap[key] = [];
                groups.push({ key: key, items: groupMap[key] });
            }
            groupMap[key].push(entry);
        });

        return groups;
    }

    function formatBadge(format) {
        var safeFormat = escapeHtml(format || 'HTML');
        var isPdf = safeFormat.toUpperCase() === 'PDF';
        var bg = isPdf ? '#8B4513' : '#2C3E50';
        return '<span style="background-color:' + bg + '; color:white; font-size:9px; padding:2px 5px; border-radius:2px; margin-left:6px;">' + safeFormat + '</span>';
    }

    function renderEntry(entry) {
        return [
            '<a href="', escapeHtml(entry.url), '" target="_blank">',
            '<div class="panel panel-default btn-default" style="margin-bottom:5px;">',
            '<div class="panel-body" style="padding:7px 12px;">',
            '<span style="font-size:13px;">', escapeHtml(entry.label), '</span>',
            formatBadge(entry.format),
            '</div>',
            '</div>',
            '</a>'
        ].join('');
    }

    function renderGroup(group, mode) {
        var heading = mode === 'year' ? group.key : '<em>' + escapeHtml(group.key) + '</em>';
        var itemsHtml = group.items.map(renderEntry).join('');

        return [
            '<div class="row presentations" style="margin-bottom: 10px;">',
            '<div class="col-sm-4" style="text-align:right; padding-top:6px;">',
            '<span class="roboto-slab-regular" style="font-size:13px; color:#2C3E50;">', heading, '</span>',
            '</div>',
            '<div class="col-sm-8">',
            itemsHtml,
            '</div>',
            '</div>'
        ].join('');
    }

    function renderPresentations(mode, selectedGroupKey) {
        var listEl = document.getElementById('presentations-list');
        if (!listEl || !window.PRESENTATIONS_DATA) return;

        var groups = groupEntries(window.PRESENTATIONS_DATA, mode || 'topic');
        if (selectedGroupKey && selectedGroupKey !== '__all__') {
            groups = groups.filter(function (group) {
                return group.key === selectedGroupKey;
            });
        }
        listEl.innerHTML = groups.map(function (group) {
            return renderGroup(group, mode || 'topic');
        }).join('');
    }

    function initGroupingUi() {
        var controls = document.querySelectorAll('input[name="group-by"]');
        var filterEl = document.getElementById('group-filter');
        var filterLabelEl = document.getElementById('group-filter-label');
        if (!controls || !controls.length) return;

        function currentMode() {
            var selected = document.querySelector('input[name="group-by"]:checked');
            return selected ? selected.value : 'topic';
        }

        function getAllLabel(mode) {
            return mode === 'year' ? 'All years' : 'All topics';
        }

        function getPickerLabel(mode) {
            return mode === 'year' ? 'Year:' : 'Topic:';
        }

        function rebuildFilterOptions(mode, preferredKey) {
            if (!filterEl) return '__all__';

            var groups = groupEntries(window.PRESENTATIONS_DATA || [], mode);
            var options = ['<option value="__all__">' + escapeHtml(getAllLabel(mode)) + '</option>'];
            groups.forEach(function (group) {
                options.push('<option value="' + escapeHtml(group.key) + '">' + escapeHtml(group.key) + '</option>');
            });

            filterEl.innerHTML = options.join('');

            var validPreferred = preferredKey && groups.some(function (group) {
                return group.key === preferredKey;
            });
            filterEl.value = validPreferred ? preferredKey : '__all__';

            if (filterLabelEl) {
                filterLabelEl.textContent = getPickerLabel(mode);
            }

            return filterEl.value;
        }

        controls.forEach(function (input) {
            input.addEventListener('change', function () {
                var mode = currentMode();
                var selected = rebuildFilterOptions(mode, '__all__');
                renderPresentations(mode, selected);
            });
        });

        if (filterEl) {
            filterEl.addEventListener('change', function () {
                renderPresentations(currentMode(), filterEl.value);
            });
        }

        var initialMode = currentMode();
        var initialSelected = rebuildFilterOptions(initialMode, '__all__');
        renderPresentations(initialMode, initialSelected);
    }

    function isAuthed() {
        return sessionStorage.getItem(STORAGE_KEY) === 'ok' ||
               localStorage.getItem(STORAGE_KEY) === 'ok';
    }

    document.addEventListener('DOMContentLoaded', function () {
        initGroupingUi();

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
