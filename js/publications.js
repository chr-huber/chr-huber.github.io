(function () {
    'use strict';

    function renderPubItem(pub) {
        var html = '<div class="row publication-item">';
        html += '<div class="col-xs-2 col-sm-1 publicationyear">' + (pub.year || '') + '</div>';
        html += '<div class="col-xs-10 col-sm-11">';

        if (pub.titleUrl) {
            html += '<a href="' + pub.titleUrl + '" target="_blank">' + pub.title + '</a>';
        } else {
            html += pub.title;
        }

        if (pub.authors) {
            html += '<div class="authors">' + pub.authors + '</div>';
        }

        if (pub.authorNotes && pub.authorNotes.length) {
            html += '<div class="authors" style="margin-top: 4px;"><ul>';
            pub.authorNotes.forEach(function (note) {
                html += '<li>' + note + '</li>';
            });
            html += '</ul></div>';
        }

        if (pub.journalInfo) {
            html += '<div class="journalinfo">' + pub.journalInfo + '</div>';
        }

        var hasAbstract = pub.abstract && pub.abstract.length > 0;
        var hasMedia = pub.media && pub.media.length > 0;
        var hasLinks = pub.links && pub.links.length > 0;

        if (hasAbstract || hasLinks || hasMedia) {
            html += '<div class="material">';
            if (hasAbstract) {
                html += '<a class="btn btn-default" data-toggle="collapse" data-target="#' + pub.id + '-abstract">abstract</a>';
            }
            if (hasLinks) {
                pub.links.forEach(function (link) {
                    html += '<a class="pub-tag" href="' + link.url + '" target="_blank">' + link.label + '</a>';
                });
            }
            if (hasMedia) {
                html += '<a class="btn btn-default" data-toggle="collapse" data-target="#' + pub.id + '-media">media</a>';
            }
            html += '</div>';
        }

        if (hasAbstract) {
            html += '<div class="collapse material" id="' + pub.id + '-abstract">';
            html += '<div class="well abstract">' + pub.abstract + '</div>';
            html += '</div>';
        }

        if (hasMedia) {
            html += '<div class="collapse material" id="' + pub.id + '-media">';
            html += '<div class="well abstract">';
            pub.media.forEach(function (item, i) {
                html += '<a href="' + item.url + '" target="_blank">' + item.text + '</a>';
                if (i < pub.media.length - 1) { html += '<br>'; }
            });
            html += '</div></div>';
        }

        html += '</div></div>';
        return html;
    }

    function renderSection(title, items, containerId) {
        if (!items || !items.length) return;
        var el = document.getElementById(containerId);
        if (!el) return;
        var html = '';
        if (title) {
            html += '<div class="publicationsheader">' + title + '</div>';
        }
        html += '<div class="container" style="width:100%; padding-left:0; padding-right:4;">';
        items.forEach(function (pub) {
            html += renderPubItem(pub);
        });
        html += '</div>';
        el.innerHTML = html;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var data = window.PUBLICATIONS_DATA;
        if (!data) return;
        renderSection('Journal Articles', data.journalArticles, 'pub-journal');
        renderSection('Book Chapters', data.bookChapters, 'pub-chapters');
        renderSection('Contributions to Crowd-Science Projects', data.crowdScience, 'pub-crowdscience');
        renderSection(null, data.workingPapers, 'pub-working');
        renderSection(null, data.workInProgress, 'pub-wip');
    });
}());
